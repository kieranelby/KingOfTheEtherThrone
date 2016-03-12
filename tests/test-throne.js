/* jslint node:true, mocha:true */
'use strict';

/*
 * Perform on-block-chain tests of the King of the Ether Throne contracts & javascript interface.
 *
 * Intended to be run against the testnet via the web3 RPC API (it's a bit expensive on main net!).
 *
 * e.g. might start geth like:
 * cd Desktop
 * geth --testnet --port 31313 --datadir e:/ethereum -rpc -rpcport 8646 -rpcapi "eth,web3,personal" -unlock 0
 *
 * Alternatively running against private testnet with low difficulty is much faster (but fiddly to setup).
 *
 * NB: I guess we could try breaking up the contract into smaller mini-contracts to make testing
 * easier but CALLCODE is quite expensive (and a bit confusing) ...
*/

var fs = require('fs'); // needing for reading contracts and writing reports

var DAppTestRunner = require('dapp-test-runner');
var runner = new DAppTestRunner('King of the Ether Throne Core');

// uncomment to debug concurrency problems
//runner.disableParallelism();

// Register the contract we want to test.
var throneContractSource = fs.readFileSync('../contracts/KingOfTheEtherThrone.sol', 'utf8');
runner.registerSolidityContracts(throneContractSource);

// NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
function decodeMonarchArray(monarchArray, web3) {
  return {
    compensationAddress:   monarchArray[0],
    originAddress:         monarchArray[1],
    name:     web3.toAscii(monarchArray[2]),
    claimPrice:            monarchArray[3],
    coronationTimestamp:   monarchArray[4],
    compensationStatus:    monarchArray[5],
    compensationTimestamp: monarchArray[6],
    compensationPaid:      monarchArray[7]
  };
}

// NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
function decodeThroneConfig(configArray, web3) {
  return {
    wizardAddress:                  configArray[0],
    deityAddress:                   configArray[1],
    startingClaimPrice:             configArray[2],
    claimPriceAdjustPerMille:       configArray[3],
    commissionPerMille:             configArray[4],    
    curseIncubationDuration:        configArray[5],
    failedPaymentRingfenceDuration: configArray[6],
    throneMaker:                    configArray[7]
  };
}

function createStandardTestThrone(helper) {
  // wizardAddress,
  // deityAddress,
  // startingClaimPrice,
  // claimPriceAdjustPerMille,
  // commissionPerMille,
  // incubationDuration,
  // failedPaymentRingfenceDuration
  return helper.txn.createContractInstance('KingOfTheEtherThrone', [
    helper.account.master,
    helper.account.master,
    helper.math.toWei('1','ether'),
    '500',
    '20',
    '180',
    '240',
    0
  ]);
}

runner.addTest({
  title: 'Can inspect throne config',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
    },
    function(helper) {
      // when we ask how the throne is configured
      var configArray = this.throne.config();
      var config = decodeThroneConfig(configArray, helper.txn.rawWeb3);
      // then we get the properties we asked for in createStandardTestThrone
      helper.assert.equal(helper.account.master, config.wizardAddress, 'wizardAddress');
      helper.assert.equal(helper.account.master, config.deityAddress, 'deityAddress');
      helper.assert.equal(helper.math.toWei('1','ether'), config.startingClaimPrice, 'startingClaimPrice');
      helper.assert.equal(500, config.claimPriceAdjustPerMille, 'claimPriceAdjustPerMille');
      helper.assert.equal(20, config.commissionPerMille, 'commissionPerMille');
      helper.assert.equal(180, config.curseIncubationDuration, 'curseIncubationDuration');
      helper.assert.equal(240, config.failedPaymentRingfenceDuration,'failedPaymentRingfenceDuration');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne at Starting Price should Increase Claim Price',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
    },
    function(helper) {
      // when the player pays the exact claim price (which should be 1 ether)
      var originalClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1','ether'), originalClaimPrice, 'starting claim price');
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: originalClaimPrice,
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price increases
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1.5','ether'), newClaimPrice, 'expected new claim price to increase by 50%');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne below Starting Price should not Increase Claim Price but should refund',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player tries to claim the throne but with too little ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      this.originalPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.subtractNum(this.originalClaimPrice, helper.toWei('20','finney')),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, this.originalClaimPrice,
        'expected claim price to stay the same');
      var newPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      helper.assertNumLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.subtractNum(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.assertNumNotAbove(loss, helper.toWei('25', 'finney'), 'expected player to only lose a little gas');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne above Starting Price should not Increase Claim Price but should refund',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and one player with sufficient ether
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1060', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player tries to claim the throne but with too much ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      this.originalPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.addNum(this.originalClaimPrice, helper.toWei('20','finney')),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, this.originalClaimPrice,
        'expected claim price to stay the same');
      var newPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      helper.assertNumLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.subtractNum(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.assertNumNotAbove(loss, helper.toWei('25', 'finney'), 'expected player to only lose a little gas');
    }
  ]
});

runner.addTest({
  title: 'Hall of Monarchs before Throne Ever Claimed',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne
      this.throne = createStandardTestThrone(helper);
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when we ask how many monarchs there have been
      // then the answer is none
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertNumEqual(numMonarchs, 0, 'have not been any monarchs');
      // and when we ask if there is a living monarch on the throne
      // then the answer is no
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, false, 'no monarchs so cannot be living monarch');
    }
  ]
});

runner.addTest({
  title: 'Hall of Monarchs after First Claim',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player correctly claims the throne
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.originalClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // when we ask how many monarchs there have been
      // then the answer is one
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertNumEqual(numMonarchs, 1, 'should be one monarch now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, true, 'playerOne lives!');
      // and when we look in the monarchs array
      // then playerOne is there:
      // (let's not worry about the timestamps here, they're harder to test)
      var newMonarch = decodeMonarchArray(this.throne.monarchs(0), helper.web3);
      helper.assertStrictEqual(newMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(newMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(newMonarch.name, 'playerOne', 'name');
      helper.assertNumEqual(newMonarch.claimPrice, this.originalClaimPrice, 'claimPrice');
      helper.assertNumEqual(newMonarch.compensationStatus, '0', 'compensationStatus');
      helper.assertNumEqual(newMonarch.compensationPaid, '0', 'compensationPaid');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne for Second Time should Increase Claim Price Again',
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1000', 'finney'));
      this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1500', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at the claim price the contract says
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // and given that the second player claimed the throne at the claim price the contract says
      this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price increases
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('2250','finney'), newClaimPrice,
        'expected new claim price to increase again by 50%');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne for Second Time should pay Compensation to First Player',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      this.playerOneBalanceAfterPaying = helper.web3.eth.getBalance(this.playerOneAccount);
      // when the second player claims the throne at the new claim price according to the contract
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then player one's balance should have increased by the compensation payment
      // (which is calculated as 98% of the claim price paid by the second player)
      var playerOneBalanceAtEnd = helper.web3.eth.getBalance(this.playerOneAccount);
      var increase = helper.subtractNum(playerOneBalanceAtEnd, this.playerOneBalanceAfterPaying);
      helper.assertNumEqual(increase, helper.toWei('1470','finney'),
        'expected player to get compensation of 98% of claim price');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne should pay Commission to the contract shared between wizard and deity',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      this.contractBalanceAfterClaimOne = helper.web3.eth.getBalance(this.throne.address);
      // then all the payment goes to the contract the first time (no-one to compensate)
      helper.assertNumEqual(this.contractBalanceAfterClaimOne, helper.toWei('1', 'ether'));
      // split 50:50 between wizard and deity (we don't actually check ring-fencing here tho)
      helper.assertNumEqual(this.throne.wizardBalance(), helper.toWei('500', 'finney'));
      helper.assertNumEqual(this.throne.deityBalance(), helper.toWei('500', 'finney'));
      // when the second player claims the throne at the new claim price according to the contract
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then this time the contract only gets 2% of the claim price (1500 finney) which is 30 finney.
      this.contractBalanceAfterClaimTwo = helper.web3.eth.getBalance(this.throne.address);
      helper.assertNumEqual(this.contractBalanceAfterClaimTwo, helper.toWei('1030', 'finney'));
      // again split 50:50
      helper.assertNumEqual(this.throne.wizardBalance(), helper.toWei('515', 'finney'));
      helper.assertNumEqual(this.throne.deityBalance(), helper.toWei('515', 'finney'));
    }
  ]
});

runner.addTest({
  title: 'Hall of Monarchs after Second Claim',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price accordign to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      this.firstClaimPrice = this.throne.currentClaimPrice();
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.firstClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // given that the second player claimed the throne at the new claim price according to the contract
      this.secondClaimPrice = this.throne.currentClaimPrice();
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.secondClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // when we ask how many monarchs there have been
      // then the answer is two
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertNumEqual(numMonarchs, 2, 'should be two monarchs now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, true, 'playerTwo lives!');
      // and when we look in the monarchs array
      // then playerOne and playerTwo are there with expected properties:
      // (TODO - let's not worry about the timestamps here, they're harder to test)
      var firstMonarch = decodeMonarchArray(this.throne.monarchs(0), helper.web3);
      helper.assertStrictEqual(firstMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(firstMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(firstMonarch.name, 'playerOne', 'name');
      helper.assertNumEqual(firstMonarch.claimPrice, this.firstClaimPrice, 'claimPrice');
      var goodPaymentStatusCode = 1;
      helper.assertNumEqual(firstMonarch.compensationStatus, goodPaymentStatusCode, 'compensationStatus');
      var expectedCompensation = helper.toWei('1470', 'finney');
      helper.assertNumEqual(firstMonarch.compensationPaid, expectedCompensation, 'compensationPaid');
      var secondMonarch = decodeMonarchArray(this.throne.monarchs(1), helper.web3);
      helper.assertStrictEqual(secondMonarch.compensationAddress, this.playerTwoAccount, 'compensationAddress');
      helper.assertStrictEqual(secondMonarch.originAddress, this.playerTwoAccount, 'originAddress');
      helper.assertStrictEqual(secondMonarch.name, 'playerTwo', 'name');
      helper.assertNumEqual(secondMonarch.claimPrice, this.secondClaimPrice, 'claimPrice');
      helper.assertNumEqual(secondMonarch.compensationStatus, '0', 'compensationStatus');
      helper.assertNumEqual(secondMonarch.compensationPaid, '0', 'compensationPaid');
    }
  ]
});

runner.addTest({
  title: 'First monarch appears to die after standard test curse incubation period',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      var claimedAt = helper.getLatestBlockTime();
      var config = decodeThroneConfig(this.throne.config());
      this.expectDieBy = helper.addNum(claimedAt, config.curseIncubationDuration);
    },
    function(helper) {
      // when we wait until the monarch should have died
      helper.retryUntilTime(this.expectDieBy);
      // then he seems to be dead and the claim price is reset
      helper.assertEqual(this.throne.isLivingMonarch(), false, "isLivingMonarch");
      helper.assertNumEqual(this.throne.currentClaimPrice(), helper.toWei('1','ether'), "currentClaimPrice");
    }
  ]
});


runner.addTest({
  title: 'Claim throne from dead first monarch does not pay compensation',
  ignore: true,
  steps: [
    function(helper) {
      // given a new throne and two players (this time player two doesn't need so much ETH)
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // make a note of when player one claimed the throne and how much money they had left
      var claimedAt = helper.getLatestBlockTime();
      var config = decodeThroneConfig(this.throne.config());
      this.expectDieBy = helper.addNum(claimedAt, config.curseIncubationDuration);
      this.contractBalanceAfterFirstClaim = helper.web3.eth.getBalance(this.throne.address);
      this.playerOneBalanceAfterTheyClaimed = helper.web3.eth.getBalance(this.playerOneAccount);
    },
    function(helper) {
      // when we wait until the monarch should have died
      helper.retryUntilTime(this.expectDieBy);
      // and then let player 2 claim the throne
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then player one's balance does not change
      var playerOneBalanceNow = helper.web3.eth.getBalance(this.playerOneAccount);
      this.helper.assertNumEqual(playerOneBalanceNow, this.playerOneBalanceAfterTheyClaimed, 'playerOne balance');
      // but the balance of the contract itself goes up by the whole claim amount (1 eth)
      var contractBalanceNow = helper.web3.eth.getBalance(this.throne.address);
      var expectedContractBalance = helper.addNum(this.contractBalanceAfterFirstClaim, helper.toWei('1', 'ether'));
      this.helper.assertNumEqual(contractBalanceNow, expectedContractBalance, 'contract balance');
    }
  ]
});

// TODO - crikey, there's at least 100 more tests we could write ...
// more contract balance change from comission
// claim using fallback fn
// claim throne as wizard / deity / same player as current monarch
// claim from contract
// claim for different addr
// rounding
// wizard balance
// deity funds avail
// failed payments
// ring-fencing of failed payments
// ring-fencing between wizard + deity
// no name / long name / invalid name
// ownership transfer
// creation of alt-thrones

// Run the tests.
runner.run(function (results) {
  fs.writeFileSync('test-throne-report.md', results.getMarkdownReport(), 'utf-8');
});
