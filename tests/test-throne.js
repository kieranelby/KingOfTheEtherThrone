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
 * or using the test.ether.camp test met:
 *
 * geth --datadir 'E:\Ethereum\camptest' --networkid 161  --nodiscover --port 32323 \
 *   --port 32323 -verbosity 3 -rpc -rpcport 8646 -rpcapi "eth,web3,personal" \
 *   --genesis E:/Ethereum/camptest/frontier-test.json -unlock 0  --verbosity 5 --gpomin "50000000000"
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
var throneContractSource = fs.readFileSync('contracts/KingOfTheEtherThrone.sol', 'utf8');
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
  categories: ['safe'],
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
  categories: ['safe'],
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
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
    },
    function(helper) {
      // when the player tries to claim the throne but with slightly too little ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1','ether'), this.originalClaimPrice, 'starting claim price');
      this.originalPlayerOneBalance = helper.account.getBalance(this.playerOneAccount);
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.math.subtract(this.originalClaimPrice, helper.math.toWei('20','finney')),
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(this.originalClaimPrice, newClaimPrice, 'expected claim price to stay the same');
      var newPlayerOneBalance = helper.account.getBalance(this.playerOneAccount);
      helper.math.assertLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.math.subtract(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.math.assertLessThanOrEqual(loss, helper.math.toWei('25', 'finney'),
        'expected player to only lose a little gas');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne above Starting Price should not Increase Claim Price but should refund',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1020', 'finney'));
    },
    function(helper) {
      // when the player tries to claim the throne but with slightly too much ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1','ether'), this.originalClaimPrice, 'starting claim price');
      this.originalPlayerOneBalance = helper.account.getBalance(this.playerOneAccount);
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.math.add(this.originalClaimPrice, helper.math.toWei('20','finney')),
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(this.originalClaimPrice, newClaimPrice, 'expected claim price to stay the same');
      var newPlayerOneBalance = helper.account.getBalance(this.playerOneAccount);
      helper.math.assertLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.math.subtract(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.math.assertLessThanOrEqual(loss, helper.math.toWei('25', 'finney'),
        'expected player to only lose a little gas');
    }
  ]
});

runner.addTest({
  title: 'Hall of Monarchs before Throne Ever Claimed',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne
      this.throne = createStandardTestThrone(helper);
    },
    function(helper) {
      console.log('! throne is at ', this.throne.address);
      // when we ask how many monarchs there have been
      // then the answer is none
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assert.equal(0, numMonarchs, 'have not been any monarchs');
      // and when we ask if there is a living monarch on the throne
      // then the answer is no
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assert.equal(false, isLivingMonarch, 'no monarchs so cannot be living monarch');
    }
  ]
});

runner.addTest({
  title: 'Hall of Monarchs after First Claim',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
    },
    function(helper) {
      // when the player correctly claims the throne
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1','ether'), this.originalClaimPrice, 'starting claim price');
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.originalClaimPrice,
        gas: 500000
      });
    },
    function(helper) {
      // when we ask how many monarchs there have been
      // then the answer is one
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assert.equal(1, numMonarchs, 'should be one monarch now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assert.equal(true, isLivingMonarch, 'but playerOne lives!');
      // and when we look in the monarchs array
      // then playerOne is there:
      // (let's not worry about the timestamps here, they're harder to test)
      var newMonarch = decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
      helper.assert.equal(this.playerOneAccount, newMonarch.compensationAddress, 'compensationAddress');
      helper.assert.equal(this.playerOneAccount, newMonarch.originAddress, 'originAddress');
      helper.assert.equal('playerOne', newMonarch.name, 'name');
      helper.assert.equal(this.originalClaimPrice, newMonarch.claimPrice, 'claimPrice');
      helper.assert.equal(0, newMonarch.compensationStatus, 'compensationStatus');
      helper.assert.equal(0, newMonarch.compensationPaid, 'compensationPaid');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne for Second Time should Increase Claim Price Again',
  categories: ['safe'],
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
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1000', 'finney'));
      this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1500', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      this.playerOneBalanceAfterPaying = helper.account.getBalance(this.playerOneAccount);
      // when the second player claims the throne at the new claim price according to the contract
      this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then player one's balance should have increased by the compensation payment
      // (which is calculated as 98% of the claim price paid by the second player)
      var playerOneBalanceAtEnd = helper.account.getBalance(this.playerOneAccount);
      var increase = helper.math.subtract(playerOneBalanceAtEnd, this.playerOneBalanceAfterPaying);
      // 2% of 1500 = 30
      helper.assert.equal(helper.math.toWei('1470','finney'), increase,
        'expected player to get compensation of 98% of claim price');
    }
  ]
});

runner.addTest({
  title: 'Claim Throne should pay Commission to the contract shared between wizard and deity',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1000', 'finney'));
      this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1500', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      this.contractBalanceAfterClaimOne = helper.account.getBalance(this.throne.address);
      // then all the payment goes to the contract the first time (no-one to compensate)
      helper.assert.equal(helper.math.toWei('1', 'ether'), this.contractBalanceAfterClaimOne,
        'first payment is held by contract');
      // split 50:50 between wizard and deity (we don't actually check ring-fencing here tho)
      helper.assert.equal(helper.math.toWei('500', 'finney'), this.throne.wizardBalance(), 'wizard gets half of first payment');
      helper.assert.equal(helper.math.toWei('500', 'finney'), this.throne.deityBalance(), 'deity gets half of first payment');
      // when the second player claims the throne at the new claim price according to the contract
      this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then this time the contract only gets 2% of the claim price (1500 finney) which is 30 finney.
      this.contractBalanceAfterClaimTwo = helper.account.getBalance(this.throne.address);
      helper.assert.equal(helper.math.toWei('1030', 'finney'), this.contractBalanceAfterClaimTwo, 'contract holds commission');
      // again split 50:50, giving an increase of 15 since last time (500)
      helper.assert.equal(helper.math.toWei('515', 'finney'), this.throne.wizardBalance(), 'wizard gets half of commission');
      helper.assert.equal(helper.math.toWei('515', 'finney'), this.throne.deityBalance(), 'deity gets half of commission');
    }
  ]
});

runner.addTest({
  title: 'Hall of Monarchs after Second Claim',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1000', 'finney'));
      this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1500', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price accordign to the contract
      this.firstClaimPrice = this.throne.currentClaimPrice();
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.firstClaimPrice,
        gas: 500000
      });
    },
    function(helper) {
      // given that the second player claimed the throne at the new claim price according to the contract
      this.secondClaimPrice = this.throne.currentClaimPrice();
      this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.secondClaimPrice,
        gas: 500000
      });
    },
    function(helper) {
      // when we ask how many monarchs there have been
      // then the answer is two
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assert.equal(2, numMonarchs, 'should be two monarchs now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assert.equal(true, isLivingMonarch, 'playerTwo lives!');
      // and when we look in the monarchs array
      // then playerOne and playerTwo are there with expected properties:
      // (TODO - let's not worry about the timestamps here, they're harder to test)
      var firstMonarch = decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
      helper.assert.equal(this.playerOneAccount, firstMonarch.compensationAddress, 'compensationAddress');
      helper.assert.equal(this.playerOneAccount, firstMonarch.originAddress, 'originAddress');
      helper.assert.equal('playerOne', firstMonarch.name, 'name');
      helper.assert.equal(this.firstClaimPrice, firstMonarch.claimPrice, 'claimPrice');
      var goodPaymentStatusCode = 1;
      helper.assert.equal(goodPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
      // should have got 1500 - 2% commission => 1470
      var expectedCompensation = helper.math.toWei('1470', 'finney');
      helper.assert.equal(expectedCompensation, firstMonarch.compensationPaid, 'compensationPaid');
      var secondMonarch = decodeMonarchArray(this.throne.monarchs(1), helper.txn.rawWeb3);
      helper.assert.equal(this.playerTwoAccount, secondMonarch.compensationAddress, 'compensationAddress');
      helper.assert.equal(this.playerTwoAccount, secondMonarch.originAddress, 'originAddress');
      helper.assert.equal('playerTwo', secondMonarch.name, 'name');
      helper.assert.equal(this.secondClaimPrice, secondMonarch.claimPrice, 'claimPrice');
      helper.assert.equal(0, secondMonarch.compensationStatus, 'compensationStatus');
      helper.assert.equal(0, secondMonarch.compensationPaid, 'compensationPaid');
    }
  ]
});

runner.addTest({
  title: 'First monarch appears to die after standard test curse incubation period',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1000', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // when we wait until the monarch should have died
      var claimedAt = helper.txn.getLatestBlockTime();
      var config = decodeThroneConfig(this.throne.config(), helper.txn.rawWeb3);
      this.expectDieBy = helper.math.add(claimedAt, config.curseIncubationDuration);
      helper.nextStep.needsBlockTime(this.expectDieBy);
    },
    function(helper) {
      // then he seems to be dead and the claim price is reset
      helper.assert.equal(false, this.throne.isLivingMonarch(), 'isLivingMonarch');
      helper.assert.equal(helper.math.toWei('1','ether'), this.throne.currentClaimPrice(), 'currentClaimPrice');
    }
  ]
});


runner.addTest({
  title: 'Claim throne from dead first monarch does not pay compensation',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and two players (this time player two only needs 1 eth)
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // make a note of when player one claimed the throne and how much money they had left
      var claimedAt = helper.txn.getLatestBlockTime();
      var config = decodeThroneConfig(this.throne.config(), helper.txn.rawWeb3);
      this.expectDieBy = helper.math.add(claimedAt, config.curseIncubationDuration);
      this.contractBalanceAfterFirstClaim = helper.account.getBalance(this.throne.address);
      this.playerOneBalanceAfterTheyClaimed = helper.account.getBalance(this.playerOneAccount);
      // when we wait until the monarch should have died
      helper.nextStep.needsBlockTime(this.expectDieBy);
    },
    function(helper) {
      // and then let player 2 claim the throne
      this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then player one's balance does not change
      var playerOneBalanceNow = helper.account.getBalance(this.playerOneAccount);
      helper.assert.equal(this.playerOneBalanceAfterTheyClaimed, playerOneBalanceNow, 'playerOne balance');
      // but the balance of the contract itself goes up by the whole claim amount (1 eth)
      var contractBalanceNow = helper.account.getBalance(this.throne.address);
      var expectedContractBalance = helper.math.add(helper.math.toWei('1', 'ether'), this.contractBalanceAfterFirstClaim);
      helper.assert.equal(expectedContractBalance, contractBalanceNow, 'contract balance');
    }
  ]
});

runner.addTest({
  title: 'Claim throne anonymously via fallback succeeds',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and a player:
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
    },
    function(helper) {
      // given that the  player claimed the throne by sending the starting price according
      // to the contract to the contract address:
      var claimPrice = this.throne.currentClaimPrice();
      helper.txn.send({
        from: this.playerOneAccount,
        to: this.throne.address,
        value: claimPrice,
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

// TODO - fixme
// TODO - cleanup
runner.addTest({
  title: 'Claim throne anonymously via fallback using wallet contract succeeds',
  steps: [
    function(helper) {
      // given a new throne and a player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1.1', 'ether'));
    },
    function(helper) {
	    helper.debug.log('i think i am creating the wallet from', this.playerOneAccount);
	    helper.txn.rawWeb3.eth.defaultAccount = this.playerOneAccount;
      // and given the player has their own wallet contract
      this.playerOneWallet = helper.txn.createContractInstance('DTRExpensiveWallet', [0], {
        from: this.playerOneAccount
      });
    },
    function(helper) {
      // and given that the player has sent money to their wallet:
      var claimPrice = this.throne.currentClaimPrice();
      helper.txn.send({
        from: this.playerOneAccount,
        to: this.playerOneWallet.address,
        value: claimPrice,
        gas: 500000
      });
    },
    function(helper) {
      // when the player instructs their wallet to send money to the throne,
      // specifying a decent wodge of gas:
      var extraGasAmount = 250000;
      var claimPrice = this.throne.currentClaimPrice();
	    helper.debug.log('i think i am telling the wallet to spend from', this.playerOneAccount);
	    helper.txn.rawWeb3.eth.defaultAccount = this.playerOneAccount;
      this.playerOneWallet.spendWithGas(this.throne.address, claimPrice, extraGasAmount, {
        from: this.playerOneAccount,
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price increases
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1500','finney'), newClaimPrice,
        'expected claim price to increase as normal when contract claims throne');
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

//runner.excludeCategory('safe');

// Run the tests.
runner.run(function (results) {
  fs.writeFileSync('tests/test-throne-report.md', results.getMarkdownReport(), 'utf-8');
});
