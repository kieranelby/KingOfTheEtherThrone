/* jslint node:true */
'use strict';

/*
 * dapp-test-runner is designed to run a suite of tests against an Etherum contract.
 * There are better general-purpose Javascript test runners out there (like mocha.js),
 * but dapp-test-runner helps you write tests that involve several Ethereum transactions
 * and so need to wait for one transaction to be mined before starting the next.
 * dapp-test-runner also helps with efficiently distributing ether to test accounts
 * (and sweeping it back at the end), as well as helping with checking wei amounts.
*/
function DAppTestRunner(suiteTitle) {
  this._ethApi = new EthApi();
  this._started = false;
  this._allTests = [];
  this._blockReadyToken = undefined;
  this._eventObserversFor = {};
  this._suite = new TestSuite(suiteTitle);
};

DAppTestRunner.prototype.add = function (test) {
  if (this._started) {
    throw new Error('too late');
  }
  this._allTests.push(new TestWrapper(test, this._emit.bind(this)));
};

DAppTestRunner.prototype.run = function () {
  if (this._started) {
    throw new Error('can only run once and you have already started it');
  }
  this._start();
  this._advance();
}

DAppTestRunner.prototype.setWeb3 = function (web3ObjectOrUrl) {
  if (this._started) {
    throw new Error('too late');
  }
  this.EthApi.setWeb3(web3ObjectOrUrl);
};

DAppTestRunner.prototype.setWeb3MasterAccount = function (accountAddress, optionalPassphrase) {
  if (this._started) {
    throw new Error('too late');
  }
  this._ethApi.masterAccount = accountAddress;
  this._ethApi.masterPassphrase = optionalPassphrase;
};

/*
 * Register an event listener - deliberately very similar to mocha runner
 * so we can make use of their reporters. Events are:
 *   - `start` execution started
 *   - `end`  execution complete
 *   - `suite` (suite) test suite execution started
 *   - `suite end` (suite) all tests in suite have finished
 *   - `cycle` starting a new cycle of step execution now that txns have been mined
 *   - `cycle end` finished cycle of step execution
 *   - `pass`  (test) test passed
 *   - `fail`  (test, err) test failed
 */
DAppTestRunner.prototype.on = function (eventName, eventFn) {
  var existingObservers = this._eventObserversFor[eventName];
  if (!existingObservers) {
    existingObservers = [];
    this._eventObserversFor[eventName] = existingObservers;
  }
  existingObservers.push(eventFn);
};


DAppTestRunner.prototype.registerContract = function (contractName, contractAbi, contractBytecode) {
  if (this._started) {
    throw new Error('too late');
  }
  this._ethApi.registeredContracts[contractName] = {
    contractAbi: contractAbi,
    contractBytecode: contractBytecode
  };
};

DAppTestRunner.prototype._getTestsReady = function () {
  var self = this;
  this._allTests.forEach(function (test) {
    test.getReady(self._ethApi);
  });
}

// TODO - consider conserving ether and generating less confusing
// blocks of txns by limiting max number of tests in progress at once?
DAppTestRunner.prototype._advance = function () {
  if (!this._ethApi.checkBlockReadyToken(this._blockReadyToken)) {
    setTimeout(this._advance.bind(this), 1000);
    return;
  }
  this._emit('cycle');
  var anyLeft = false;
  // TODO - if we were doing this in a browser to keep it responsive
  // we'd probably need to exit after each test back into event loop,
  // keeping track of our position.
  var self = this;
  this._allTests.forEach(function (test) {
    test.advance();
    if (!test.completed) {
      anyLeft = true;
    }
  });
  this._emit('cycle end');
  if (anyLeft) {
    this._blockReadyToken = this._ethApi.generateBlockReadyToken();
    // make sure we give control back to the js event loop or we
    // will "starve" web3 - this can lead to e.g. mined contracts
    // not getting addresses and other badness.
    setTimeout(this._advance.bind(this), 10);
  } else {
    this._end();
  }
}

// TODO - yeah there's probably some library to do this for us
DAppTestRunner.prototype._emit = function (eventName) {
  var observers = this._eventObserversFor[eventName];
  if (!observers) return;
  var args = Array.prototype.splice.call(arguments, 1);
  observers.forEach(function (observer) {
    observer.apply(null, args);
  });
};

DAppTestRunner.prototype._start = function () {
  this._started = true;
  this._ethApi.init();
  this._blockReadyToken = this._ethApi.generateBlockReadyToken();
  this._getTestsReady();
  this._emit('start');
  this._emit('suite', this._suite);
};

DAppTestRunner.prototype._end = function () {
  this._emit('suite end', this._suite);
  this._emit('end');
};

/*
 * Holds bits and pieces related to talking to eth/geth.
 * Not exposed to clients.
*/
function EthApi() {
  this.web3 = undefined;
  this.web3Url = undefined;
  this.masterAccount = undefined;
  this.masterPassphrase = undefined;
  this.testPassphrase = 'password';
  this.internalTestAccount = undefined;
  this.registeredContracts = {};
}

EthApi.prototype.setWeb3 = function(web3ObjectOrUrl) {
  if (web3ObjectOrUrl.fromWei) {
    this.web3 = web3ObjectOrUrl;
  } else {
    var Web3 = require('web3');
    this.web3 = new Web3();
    this.web3.setProvider(new this.web3.providers.HttpProvider(web3ObjectOrUrl));
  }
}

EthApi.prototype.init = function () {

  // Normally 8545 but I've been using 8646 for testnet to avoid confusion between live/test.
  var defaultWeb3Url = 'http://localhost:8646'

  if (!this.web3) {
    this.setWeb3(defaultWeb3Url);
  } else if (!this.web3.currentProvider) {
    this.web3.setProvider(new web3.providers.HttpProvider(defaultWeb3Url));
  }

  // Not available by default, needs special -rpcapi "eth,web3,personal" option to geth.
  if (!this.web3.personal) {
    this._extendWeb3(this.web3);
  }

  // TODO - perhaps check everything seems working and give useful errors
  // if e.g. the extended apis are not available / account not unlocked?

  if (!this.masterAccount) {
    if (this.web3.eth.defaultAccount) {
      this.masterAccount = this.web3.eth.defaultAccount;
    } else {
      this.masterAccount = this.web3.eth.accounts[0];
    }
  }
  console.log('~~ using ' + this.masterAccount + ' as master account ...');
  this.web3.eth.defaultAccount = this.masterAccount;

  if (this.masterPassphrase) {
    console.log('~~ unlocking master account ...');
    var unlockDuration = 3600;
    this.web3.personal.unlockAccount(this.web3.eth.defaultAccount, this.masterPassphrase, unlockDuration);
  }

  console.log('~~ creating internal test account ...');
  this.internalTestAccount = this.createAccount();
}

EthApi.prototype.createAccount = function() {
  console.log('~~ creating new test account ...');
  var account = this.web3.personal.newAccount(this.testPassphrase);
  console.log('~~ created new test account ' + account);
  this.web3.personal.unlockAccount(account, this.testPassphrase, 86400);
  return account;
}

EthApi.prototype.isAvailable = function () {
  return !this.eth.web3.syncing;
}

EthApi.prototype.generateBlockReadyToken = function () {
  //console.log('~~ generating block ready token by sending tiny payment ...');
  var hash = this.web3.eth.sendTransaction({
    from: this.masterAccount,
    to: this.internalTestAccount,
    value: 123
  });
  console.log('~~ generated block ready token ' + hash);
  return hash;
}

EthApi.prototype.checkBlockReadyToken = function (blockToken) {
  console.log('~~ checking block ready token ' + blockToken + ' ... ');
  var receipt = this.web3.eth.getTransactionReceipt(blockToken);
  return (receipt != null);
}

EthApi.prototype.reset = function () {
  this.web3.eth.defaultAccount = this.masterAccount;
}

EthApi.prototype._extendWeb3 = function (web3) {

  function toStringVal(val) {
    return String(val);
  }

  function toBoolVal(val) {
    console.log(val);
    if (String(val) == 'true') {
      return true;
    } else {
      return false;
    }
  }

  function toIntVal(val) {
    return parseInt(val);
  }

  function toJSONObject(val) {
    try {
      return JSON.parse(val);
    } catch (e){
      return String(val);
    }
  }

  web3._extend({
    property: 'personal',
    methods: [new web3._extend.Method({
         name: 'unlockAccount',
         call: 'personal_unlockAccount',
         params: 3,
         inputFormatter: [web3._extend.utils.toAddress, toStringVal, toIntVal],
         outputFormatter: toBoolVal
    })]
  });

  web3._extend({
    property: 'personal',
    methods: [new web3._extend.Method({
         name: 'newAccount',
         call: 'personal_newAccount',
         params: 1,
         inputFormatter: [toStringVal],
         outputFormatter: toStringVal
    })]
  });

  web3._extend({
    property: 'personal',
    methods: [new web3._extend.Method({
         name: 'listAccounts',
         call: 'personal_listAccounts',
         params: 0,
         outputFormatter: toJSONObject
    })]
  });

  web3._extend({
    property: 'personal',
    methods: [new web3._extend.Method({
         name: 'deleteAccount',
         call: 'personal_deleteAccount',
         params: 2,
         inputFormatter: [web3._extend.utils.toAddress, toStringVal],
         outputFormatter: toBoolVal
    })]
  });

};

/*
 * Mostly for the benefit of mocha-style reporters.
*/
function TestSuite(suiteTitle) {
  this.title = suiteTitle;
}

TestSuite.prototype.fullTitle = function () {
  return this.title;
}

/*
 * Wraps each client-supplied test to add extra functionality.
 * Not exposed to clients, though it is passed to the reporter.
*/
function TestWrapper(test, emitFn) {

  if (!test.title) {
    throw new Error('All tests must have a title');
  }
  if (!test.steps) {
    throw new Error('All tests must have an array of steps');
  }

  this._underlyingTest = test;
  this._emitFn = emitFn;

  this._helper = undefined;

  this.completed = false;
  this.failed = false;
  this.err = undefined;

  this._nextStepIdx = 0;

  // this is mostly for the benefit of mocha-style reporters
  this.title = this._underlyingTest.title;
}

TestWrapper.prototype.fullTitle = function() {
  return this.title;
}

// make something up for compat with mocha-style reporters
TestWrapper.prototype.slow = function() {
  return 100000;
}

TestWrapper.prototype.getReady = function(ethApi) {
  this._helper = new TestHelper(this, ethApi);
}

// run the next step
TestWrapper.prototype.advance = function() {
  if (this.completed) {
    return;
  }
  if (!this._helper._checkWaitingTxnsAppeared()) {
    return;
  }
  if (this.failed) {
    this.cleanup();
  } else if (this._nextStepIdx == this._underlyingTest.steps.length) {
    this._pass();
    this.cleanup();
  } else {
    console.log('~~ running test "' + this.title + '" step ' + this._nextStepIdx + ' ...');
    var stepFn = this._underlyingTest.steps[this._nextStepIdx];
    this._helper._preTest();
    try {
      stepFn.apply(this._underlyingTest, [this._helper]);
      this._nextStepIdx++;
    } catch (err) {
      if (err instanceof WaitMoreError) {
        // that's ok, just need to wait for next cycle
      } else {
        console.log('~~ failing test "' + this.title + '" step ' + this._nextStepIdx + ' due to ' + err);
        this._fail(err);
      }
    }
  }
}

TestWrapper.prototype._pass = function() {
  this._emitFn('pass', this);
  this.cleanup();
}

TestWrapper.prototype._fail = function(err) {
  this.failed = true;
  this.err = err;
  this._emitFn('fail', this, err);
}

TestWrapper.prototype.cleanup = function() {
  console.log('~~ cleaning-up test "' + this.title + '" ...');
  // TODO - allow underlying tests to provide their own cleanup fn to call before ours
  this._sweepBack();
  this.completed = true;
}

TestWrapper.prototype._sweepBack = function() {
  // TODO - sweep back ether into master account.
}

/*
 * Each client-supplied test gets one of these to help it carry out
 * common tasks the way we want.
*/
function TestHelper(wrapper, ethApi) {
  this._wrapper = wrapper;
  this._ethApi = ethApi;
  // we don't really encourage people to use web3 directly but at
  // the same time we don't want to have to wrap the whole api ..
  this.web3 = ethApi.web3;
  // these need nice short paths
  this.toBigNumber = this.web3.toBigNumber.bind(this.web3);
  this.fromWei = this.web3.fromWei.bind(this.web3);
  this.toWei = this.web3.toWei.bind(this.web3);
  //
  this._waitingForTxns = [];
}

// TODO - might need to provide some help with balance assertions?
TestHelper.prototype.toBigNumber = function(numberOrString) {
  return this.web3.toBigNumber(numberOrString);
}

TestHelper.prototype.cmpWei = function(numberOrStringOrBigNumA, numberOrStringOrBigNumB) {
  var bigA = this.toBigNumber(numberOrStringOrBigNumA);
  var bigB = this.toBigNumber(numberOrStringOrBigNumB);
  return bigA.cmp(bigB);
}

// Yes, this is the other way round to lots of other libraries. Sorry.
TestHelper.prototype.assertWeiEqual = function(amount, expected, message) {
  var result = this.cmpWei(amount, expected);
  if (result != 0) {
    this.fail(amount + ' vs ' + expected + '; ' + message);
  }
}

TestHelper.prototype.assertWeiLessThan = function(amount, comparedTo, message) {
  var result = this.cmpWei(amount, comparedTo);
  if (result >= 0) {
    this.fail(amount + ' vs ' + comparedTo + '; ' + message);
  }
}

TestHelper.prototype.assertWeiNotBelow = function(amount, comparedTo, message) {
  var result = this.cmpWei(amount, comparedTo);
  if (result > 0) {
    this.fail(amount + ' vs ' + comparedTo + '; ' + message);
  }
}

TestHelper.prototype.assertWeiMoreThan = function(amount, comparedTo, message) {
  var result = this.cmpWei(amount, comparedTo);
  if (result <= 0) {
    this.fail(amount + ' vs ' + comparedTo + '; ' + message);
  }
}

TestHelper.prototype.assertWeiNotAbove = function(amount, comparedTo, message) {
  var result = this.cmpWei(amount, comparedTo);
  if (result < 0) {
    this.fail(amount + ' vs ' + comparedTo + '; ' + message);
  }
}

TestHelper.prototype.assertWeiRoughlyEqual = function(amount, expected, epsilon, message) {
  var bigA = this.toBigNumber(amount);
  var bigB = this.toBigNumber(expected);
  var diff = bigA.minus(bigB).abs();
  var result = this.cmpWei(diff, epsilon);
  if (result > 0) {
    this.fail(amount + ' vs ' + expected + '; ' + message);
  }
}

TestHelper.prototype.createAccountWith = function(balance) {
  var account = this._ethApi.createAccount();
  var balance = this.toBigNumber(balance);
  if (!balance.isZero()) {
    this.sendTransaction({
      from: this.masterAccount,
      to: account,
      value: balance
    });
  }
  return account;
}

TestHelper.prototype.createContractInstance = function(registeredContractName, constructorArgsArray, txnObj) {
  console.log('~~ creating instance of contract ' + registeredContractName);
  var contractDetails = this._ethApi.registeredContracts[registeredContractName];
  var contract = this.web3.eth.contract(contractDetails.contractAbi);
  if (!constructorArgsArray) {
    constructorArgsArray = [];
  }
  if (!txnObj) {
    txnObj = {};
  }
  if (!txnObj.gas) {
    txnObj.gas = 3000000;
  }
  if (!txnObj.from) {
    txnObj.from = this._ethApi.masterAccount;
  }
  txnObj.data = contractDetails.contractBytecode;
  var callArgs = constructorArgsArray.splice();
  callArgs.push(txnObj);
  var contractInstance = contract.new.apply(contract, callArgs);
  this._waitingForTxns.push(contractInstance.transactionHash);
  // won't be usable until next cycle!
  // there is a bit of a risk that this won't be mined but our
  // end-of-cycle test transaction will be mined ... suppose should
  // track them really?
  return contractInstance;
}

TestHelper.prototype.sendTransaction = function(txnObj) {
  if (!txnObj.from) {
    txnObj.from = this._ethApi.masterAccount;
  }
  var txnHash = this.web3.eth.sendTransaction(txnObj);
  this.waitForTxn(txnHash);
  return txnHash;
}

TestHelper.prototype.fail = function(reason) {
  throw new Error(reason);
}

TestHelper.prototype.waitForTxn = function(txnHash) {
  this._waitingForTxns.push(txnHash);
}

TestHelper.prototype.waitMore = function() {
  throw new WaitMoreError();
}

TestHelper.prototype._preTest = function() {
  this._ethApi.reset();
}

TestHelper.prototype._checkWaitingTxnsAppeared = function() {
  console.log('~~ checking waiting txns');
  if (this._waitingForTxns.length > 0) {
    var self = this;
    // TODO isn't there a danger we will get stuck on some tests ...!
    this._waitingForTxns.forEach(function (txnHash) {
      var receipt = self.web3.eth.getTransactionReceipt(txnHash);
      console.log('~~ got receipt ', receipt);
      if (!receipt) {
        console.log('~~ still need to wait for ' + txnHash);
        return false;
      }
    });
    this._waitingForTxns = [];
  }
  return true;
}

// bit of a hack
function WaitMoreError() {
}

/*
 * Just expose the constuctor.
*/
module.exports = DAppTestRunner;
