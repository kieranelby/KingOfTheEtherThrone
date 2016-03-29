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
var runner = new DAppTestRunner('King of the Ether Throne');

// Wrapper/helper functions for the throne contracts
var ThroneSupport = require('./throne-support.js');
var throneSupport = new ThroneSupport();

// uncomment to debug concurrency problems
//runner.disableParallelism();

// Register the contract we want to test.
var throneContractSource = fs.readFileSync('contracts/KingOfTheEtherThrone.sol', 'utf8');
runner.registerSolidityContracts(throneContractSource);


runner.addTest({
  title: 'Can inspect throne config',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = throneSupport.createStandardTestThrone(helper);
    },
    function(helper) {
      // when we ask how the throne is configured
      var configArray = this.throne.config();
      var config = throneSupport.decodeThroneConfig(configArray, helper.txn.rawWeb3);
      // then we get the properties we asked for in throneSupport.createStandardTestThrone
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
    },
    function(helper) {
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      var newMonarch = throneSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      var firstMonarch = throneSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
      helper.assert.equal(this.playerOneAccount, firstMonarch.compensationAddress, 'compensationAddress');
      helper.assert.equal(this.playerOneAccount, firstMonarch.originAddress, 'originAddress');
      helper.assert.equal('playerOne', firstMonarch.name, 'name');
      helper.assert.equal(this.firstClaimPrice, firstMonarch.claimPrice, 'claimPrice');
      var goodPaymentStatusCode = 1;
      helper.assert.equal(goodPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
      // should have got 1500 - 2% commission => 1470
      var expectedCompensation = helper.math.toWei('1470', 'finney');
      helper.assert.equal(expectedCompensation, firstMonarch.compensationPaid, 'compensationPaid');
      var secondMonarch = throneSupport.decodeMonarchArray(this.throne.monarchs(1), helper.txn.rawWeb3);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      var config = throneSupport.decodeThroneConfig(this.throne.config(), helper.txn.rawWeb3);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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
      var config = throneSupport.decodeThroneConfig(this.throne.config(), helper.txn.rawWeb3);
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
      this.throne = throneSupport.createStandardTestThrone(helper);
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

runner.addTest({
  title: 'Claim throne anonymously via fallback using wallet contract succeeds',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and a player
      this.throne = throneSupport.createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1.1', 'ether'));
    },
    function(helper) {
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

runner.addTest({
  title: 'Compensation payment sent to king who claimed from cheap wallet contract',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = throneSupport.createStandardTestThrone(helper);
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1.5', 'ether'));
    },
    function(helper) {
      // and given the first player has their own wallet contract
      this.playerOneWallet = helper.txn.createContractInstance('DTRExpensiveWallet', [0], {
        from: this.playerOneAccount
      });
    },
    function(helper) {
      // and given that the first player has sent just enough money to their wallet to cover the claim price:
      var claimPrice = this.throne.currentClaimPrice();
      helper.txn.send({
        from: this.playerOneAccount,
        to: this.playerOneWallet.address,
        value: claimPrice,
        gas: 100000
      });
    },
    function(helper) {
      // when the player instructs their wallet to send money to the throne,
      // specifying a decent wodge of gas:
      var extraGasAmount = 250000;
      var claimPrice = this.throne.currentClaimPrice();
      this.playerOneWallet.spendWithGas(this.throne.address, claimPrice, extraGasAmount, {
        from: this.playerOneAccount,
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price increases (and the player's wallet balance decreases)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('1500','finney'), newClaimPrice,
        'expected claim price to increase as normal when contract claims throne');
      helper.assert.equal(0, helper.account.getBalance(this.playerOneWallet.address),
        'expected player one to spend all his money');
      // their non-wallet balance will have been charged for gas, make a note of it
      this.playerOneNonWalletBalanceAfterClaim = helper.account.getBalance(this.playerOneAccount);
      // and when the second player now claims the throne (not bothering with a wallet)
      this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then playerOne's wallet receives 98% of the new claim price
      helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
        'expected player one wallet to receive compensation fee');
      // but their non-wallet account doesn't change
      helper.assert.equal(
        this.playerOneNonWalletBalanceAfterClaim,
        helper.account.getBalance(this.playerOneAccount),
        'only wallet balance should change');
      // and when we look in the hall of thrones then they are marked as compensated
      // note the origin vs the compensation address
      var firstMonarch = throneSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
      helper.assert.equal(this.playerOneWallet.address, firstMonarch.compensationAddress, 'compensationAddress');
      helper.assert.equal(this.playerOneAccount, firstMonarch.originAddress, 'originAddress');
      var goodPaymentStatusCode = 1;
      helper.assert.equal(goodPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
      helper.assert.equal(helper.math.toWei('1.47','ether'), firstMonarch.compensationPaid, 'compensationPaid');
    }
  ]
});

runner.addTest({
  title: 'Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne maker and a player
      this.creationPrice = helper.math.toWei('0.2','ether');
      this.throneMaker = helper.txn.createContractInstance('ThroneMaker', [this.creationPrice]);
      // gonna need loadsa gas
      this.wizardOneAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('0.25', 'ether'));
    },
    function(helper) {
      // when we create a throne
      this.throneName = 'myThrone';
      this.optionalWizardAddress = 0;
      this.startingClaimPrice = helper.math.toWei('0.25','ether');
      this.claimPriceAdjustPerMille = 1000;
      this.commissionPerMille = 20;
      this.curseIncubationDuration = 86400;
      this.throneMaker.createThrone(
        this.throneName,
        this.optionalWizardAddress,
        this.startingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardOneAccount,
          value: this.creationPrice,
          gas: 3100000
        }
      );
    },
    function(helper) {
      helper.assert.equal(1, this.throneMaker.numberOfThrones(), 'a throne should have been created');
	    helper.debug.log('throneName is ', this.throneName);
      // then we can find its gazetteer entry
      this.throneIndex = this.throneMaker.findThroneCalled(this.throneName);
	    helper.debug.log('throneIndex is ' + this.throneIndex);
	    this.rawGazetteerEntry = this.throneMaker.gazetteer(this.throneIndex);
	    helper.debug.log('rawGazetteerEntry is ', this.rawGazetteerEntry);
      this.gazetteerEntry = throneSupport.decodeGazetteerEntry(this.rawGazetteerEntry, helper.txn.rawWeb3);
	    helper.debug.log('gazetteerEntry is ', this.gazetteerEntry);
      // and the entry matches what we expect
 	    helper.assert.equal(this.throneName, this.gazetteerEntry.throneName, 'throne name');
 	    helper.assert.equal(this.creationPrice, this.gazetteerEntry.creationPricePaid, 'creationPricePaid');
 	    helper.math.assertRoughlyEqual(helper.txn.getLatestBlockTime(), this.gazetteerEntry.creationTimestamp, 300, 'creationTimestamp');
      // and we can find the throne contract from the gazetteer entry
      this.myThroneAddress = this.gazetteerEntry.throneContractAddress;
	    helper.debug.log('myThroneAddress is ', this.myThroneAddress);
      this.myThrone = helper.txn.getRegisteredContractInstanceAt('KingOfTheEtherThrone', this.myThroneAddress);
    },
    function(helper) {
      // and the throne we created has the expected properties
      helper.assert.equal(this.startingClaimPrice, this.myThrone.currentClaimPrice(),
        'expected claim price for newly created throne to match the starting claim price we specified');
      var configArray = this.myThrone.config();
      var config = throneSupport.decodeThroneConfig(configArray, helper.txn.rawWeb3);
      helper.assert.equal(this.wizardOneAccount, config.wizardAddress, 'wizardAddress');
      helper.assert.equal(helper.account.master, config.deityAddress, 'deityAddress');
      helper.assert.equal(this.claimPriceAdjustPerMille, config.claimPriceAdjustPerMille, 'claimPriceAdjustPerMille');
      helper.assert.equal(this.commissionPerMille, config.commissionPerMille, 'commissionPerMille');
      helper.assert.equal(this.curseIncubationDuration, config.curseIncubationDuration, 'curseIncubationDuration');
      var secondsInADay = 86400;
      helper.assert.equal(30 * secondsInADay, config.failedPaymentRingfenceDuration, 'failedPaymentRingfenceDuration');
      helper.assert.equal(this.throneMaker.address, config.throneMaker, 'throneMaker');
    },
    function(helper) {
      // and when we claim the newly create throne
      this.myThrone.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.myThrone.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price increases as expected
      var newClaimPrice = this.myThrone.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('0.5','ether'), newClaimPrice,
        'expected claim price to double from 0.25 to 0.5 since we specified claimPriceAdjustPerMille = 1000');
    }
  ]
});

runner.addTest({
  title: 'Create second bespoke throne with exactly same name as first via ThroneMaker fails',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne maker and two wizards
      this.creationPrice = helper.math.toWei('0.2','ether');
      this.throneMaker = helper.txn.createContractInstance('ThroneMaker', [this.creationPrice]);
      // gonna need loadsa gas
      this.wizardOneAccount = helper.account.createWith(helper.math.toWei('0.5', 'ether'));
      this.wizardTwoAccount = helper.account.createWith(helper.math.toWei('0.5', 'ether'));
    },
    function(helper) {
      // when wizard one creates a throne
      this.throneName = 'myThrone';
      this.optionalWizardAddress = 0;
      this.startingClaimPrice = helper.math.toWei('0.25','ether');
      this.claimPriceAdjustPerMille = 1000;
      this.commissionPerMille = 20;
      this.curseIncubationDuration = 86400;
      this.throneMaker.createThrone(
        this.throneName,
        this.optionalWizardAddress,
        this.startingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardOneAccount,
          value: this.creationPrice,
          gas: 2500000
        }
      );
    },
    function(helper) {
      // (and check it worked by finding its gazetteer entry)
      this.firstThroneIndex = this.throneMaker.findThroneCalled(this.throneName);
      this.numberOfThronesAfterFirstCreated = this.throneMaker.numberOfThrones();
    },
    function(helper) {
      // and when wizard two then creates another throne with the same name
      // then it should fail (we won't see that straight away, but
      // we will observe the number of thrones doesn't increase and
      // they should get their creation fee back).
      this.wizardTwoBalanceBefore = helper.account.getBalance(this.wizardTwoAccount);
      this.throneMaker.createThrone(
        this.throneName,
        this.optionalWizardAddress,
        this.startingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardTwoAccount,
          value: this.creationPrice,
          gas: 2500000
        }
      );
    },
    function(helper) {
      helper.assert.equal(this.numberOfThronesAfterFirstCreated, this.throneMaker.numberOfThrones(),
        'no new throne should have been created');
      helper.assert.equal(this.firstThroneIndex, this.throneMaker.findThroneCalled(this.throneName),
        'finding throne by name should still return the first one');
      this.wizardTwoBalanceAfter = helper.account.getBalance(this.wizardTwoAccount);
      // nb: actually it could be worse depending on the gasprice ... perhaps we need to do something about
      // the insanely high gas cost ... e.g. libraries / CALLCODE / DELEGATECALL ?
      helper.math.assertRoughlyEqual(this.wizardTwoBalanceBefore, this.wizardTwoBalanceAfter, helper.math.toWei('70','finney'),
        'should only cost a little gas to fail to create a throne due to assertion failure on name');
    }
  ]
});

runner.addTest({
  title: 'Create second bespoke throne with too-similar name to the first via ThroneMaker fails',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne maker and two wizards
      this.creationPrice = helper.math.toWei('0.2','ether');
      this.throneMaker = helper.txn.createContractInstance('ThroneMaker', [this.creationPrice]);
      // gonna need loadsa gas
      this.wizardOneAccount = helper.account.createWith(helper.math.toWei('0.5', 'ether'));
      this.wizardTwoAccount = helper.account.createWith(helper.math.toWei('0.5', 'ether'));
    },
    function(helper) {
      // when wizard one creates a throne
      this.throneName = 'myThrone';
      this.optionalWizardAddress = 0;
      this.startingClaimPrice = helper.math.toWei('0.25','ether');
      this.claimPriceAdjustPerMille = 1000;
      this.commissionPerMille = 20;
      this.curseIncubationDuration = 86400;
      this.throneMaker.createThrone(
        this.throneName,
        this.optionalWizardAddress,
        this.startingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardOneAccount,
          value: this.creationPrice,
          gas: 2500000
        }
      );
    },
    function(helper) {
      // (and check it worked by finding its gazetteer entry)
      this.firstThroneIndex = this.throneMaker.findThroneCalled(this.throneName);
      this.numberOfThronesAfterFirstCreated = this.throneMaker.numberOfThrones();
    },
    function(helper) {
      // and when wizard two then creates another throne with the same name
      // then it should fail (we won't see that straight away, but
      // we will observe the number of thrones doesn't increase and
      // they should get their creation fee back).
      this.wizardTwoBalanceBefore = helper.account.getBalance(this.wizardTwoAccount);
      this.secondThroneName = '- My Throne -';
      this.throneMaker.createThrone(
        this.secondThroneName,
        this.optionalWizardAddress,
        this.startingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardTwoAccount,
          value: this.creationPrice,
          gas: 2500000
        }
      );
    },
    function(helper) {
      helper.assert.equal(this.numberOfThronesAfterFirstCreated, this.throneMaker.numberOfThrones(),
        'no new throne should have been created');
      helper.assert.equal(this.firstThroneIndex, this.throneMaker.findThroneCalled(this.throneName),
        'finding throne by name should still return the first one');
      this.wizardTwoBalanceAfter = helper.account.getBalance(this.wizardTwoAccount);
      // nb: actually it could be worse depending on the gasprice ... perhaps we need to do something about
      // the insanely high gas cost ... e.g. libraries / CALLCODE / DELEGATECALL ?
      helper.math.assertRoughlyEqual(this.wizardTwoBalanceBefore, this.wizardTwoBalanceAfter, helper.math.toWei('70','finney'),
        'should only cost a little gas to fail to create a throne due to assertion failure on name');
    }
  ]
});

runner.addTest({
  title: 'Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed',
  categories: ['safe'],
  steps: [
    function(helper) {
      // given a new throne maker, two wizards, and a player
      this.creationPrice = helper.math.toWei('0.2','ether');
      this.throneMaker = helper.txn.createContractInstance('ThroneMaker', [this.creationPrice]);
      // gonna need loadsa gas
      this.wizardOneAccount = helper.account.createWith(helper.math.toWei('0.3', 'ether'));
      this.wizardTwoAccount = helper.account.createWith(helper.math.toWei('0.3', 'ether'));
      this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('0.1', 'ether'));
    },
    function(helper) {
      // when wizard one creates a throne
      this.throneOneName = 'Throne One';
      this.optionalWizardAddress = 0;
      this.throneOneStartingClaimPrice = helper.math.toWei('0.25','ether');
      this.claimPriceAdjustPerMille = 1000;
      this.commissionPerMille = 20;
      this.curseIncubationDuration = 86400;
      this.throneMaker.createThrone(
        this.throneOneName,
        this.optionalWizardAddress,
        this.throneOneStartingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardOneAccount,
          value: this.creationPrice,
          gas: 2500000
        }
      );
    },
    function(helper) {
      // then we can find its gazetteer entry
      this.throneOneIndex = this.throneMaker.findThroneCalled(this.throneOneName);
      this.throneOneGazetteerEntry = throneSupport.decodeGazetteerEntry(this.throneMaker.gazetteer(this.throneOneIndex), helper.txn.rawWeb3);
      // and we can find the throne contract from the gazetteer entry
      this.throneOneAddress = this.throneOneGazetteerEntry.throneContractAddress;
      this.throneOne = helper.txn.getRegisteredContractInstanceAt('KingOfTheEtherThrone', this.throneOneAddress);
    },
    function(helper) {
      // and when the other wizard creates a different throne
      this.throneTwoName = 'Throne Two';
      this.throneTwoStartingClaimPrice = helper.math.toWei('0.1','ether');
      this.throneMaker.createThrone(
        this.throneTwoName,
        this.optionalWizardAddress,
        this.throneTwoStartingClaimPrice,
        this.claimPriceAdjustPerMille,
        this.commissionPerMille,
        this.curseIncubationDuration,
        {
          from: this.wizardTwoAccount,
          value: this.creationPrice,
          gas: 2500000
        }
      );
    },
    function(helper) {
      // then we can find its gazetteer entry
      this.throneTwoIndex = this.throneMaker.findThroneCalled(this.throneTwoName);
      this.throneTwoGazetteerEntry = throneSupport.decodeGazetteerEntry(this.throneMaker.gazetteer(this.throneTwoIndex), helper.txn.rawWeb3);
      helper.assert.notEqual(this.throneOneIndex, this.throneTwoIndex, 'not same as throne one');
      // and we can find the throne contract from the gazetteer entry
      this.throneTwoAddress = this.throneTwoGazetteerEntry.throneContractAddress;
      this.throneTwo = helper.txn.getRegisteredContractInstanceAt('KingOfTheEtherThrone', this.throneTwoAddress);
      // and it has expected properties
      helper.assert.equal(this.throneTwoStartingClaimPrice, this.throneTwo.currentClaimPrice(), 'throne 2 should have customised starting price');
    },
    function(helper) {
      // and when we claim the newly create throne
      this.throneTwo.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throneTwo.currentClaimPrice(),
        gas: 500000
      });
    },
    function(helper) {
      // then the claim price of throne two increases as expected
      var newClaimPrice = this.throneTwo.currentClaimPrice();
      helper.assert.equal(helper.math.toWei('0.2','ether'), newClaimPrice,
        'expected claim price to double from 0.1 to 0.2 since we specified start at 0.1 for throne two');
    }
  ]
});

runner.addTest({
  title: 'Name Hashing',
  steps: [
    function(helper) {
      this.throneInternals = helper.txn.createContractInstance('ThroneInternalsForTesting', []);
    },
    function(helper) {
      helper.assert.notEqual(this.throneInternals.computeNameHashExt('a'),
                             this.throneInternals.computeNameHashExt('b'),
                             'expect different names to have different hashes - single char');
      helper.assert.notEqual(this.throneInternals.computeNameHashExt('ai'),
                             this.throneInternals.computeNameHashExt('bi'),
                             'expect different names to have different hashes - two chars');
      helper.assert.notEqual(this.throneInternals.computeNameHashExt('apple'),
                             this.throneInternals.computeNameHashExt('banana'),
                             'expect different names to have different hashes - different lengths and prefix');
      helper.assert.notEqual(this.throneInternals.computeNameHashExt('ab'),
                             this.throneInternals.computeNameHashExt('abacus'),
                             'expect different names to have different hashes - different lengths same prefix');
      helper.assert.equal(this.throneInternals.computeNameHashExt('a'),
                          this.throneInternals.computeNameHashExt('a'),
                          'expect identical names to have identical hashes - single char');
      helper.assert.equal(this.throneInternals.computeNameHashExt('apple BANANA 123 Zygote'),
                          this.throneInternals.computeNameHashExt('apple BANANA 123 Zygote'),
                          'expect identical names to have identical hashes - multiple varied chars');
      helper.assert.equal(this.throneInternals.computeNameHashExt('hello'),
                          this.throneInternals.computeNameHashExt('hello  '),
                          'expect similar names to have identical hashes - trailing space example');
      helper.assert.equal(this.throneInternals.computeNameHashExt('hello'),
                          this.throneInternals.computeNameHashExt('  hello'),
                          'expect similar names to have identical hashes - leading space example');
      helper.assert.equal(this.throneInternals.computeNameHashExt('heLLo'),
                          this.throneInternals.computeNameHashExt('HellO'),
                          'expect similar names to have identical hashes - case example');
      helper.assert.equal(this.throneInternals.computeNameHashExt('twenty-four hour shifts'),
                          this.throneInternals.computeNameHashExt('twenty four-hour shifts'),
                          'expect similar names to have identical hashes - dashes example');
      helper.assert.equal(this.throneInternals.computeNameHashExt('HELLO'),
                          this.throneInternals.computeNameHashExt(' -- h e l l o -- '),
                          'expect similar names to have identical hashes - complex example');
    }
  ]
});

runner.addTest({
  title: 'Name Validation',
  steps: [
    function(helper) {
      this.throneInternals = helper.txn.createContractInstance('ThroneInternalsForTesting', []);
    },
    function(helper) {
      var expectGood = [
        'a', 'single-char ok',
        '-', 'dash ok',
        ' ', 'space ok',
        '1', 'number ok',
        'Z', 'upper-case ok',
        ' abc ', 'padding ok',
        'abcdefghijklmnopqrstuvwxyz1234', '30 chars just ok',
        'My Amazing Throne', 'typical name 1',
        'The Awesome Queen of Goats', 'typical name 2'
      ];
      for (var i = 0; i < expectGood.length; i += 2) {
        var str = expectGood[i];
        var reason = expectGood[i+1];
        helper.assert.equal(true, this.throneInternals.validateNameExt(helper.txn.rawWeb3.fromAscii(str)), reason);
      }
    },
    function(helper) {
      var expectBad = [
        '', 'empty',
        'B@D', 'at symbol not strictly alphanumeric',
        'B@@D', 'two wrongs do not make a right',
        'BAD!', 'exclamation mark not strictly alphanumeric',
        'BAD?', 'question mark not strictly alphanumeric',
        'a\tb', 'tab not allowed',
        'a\nb', 'newline not allowed',
        '\u00C1', 'non-ASCII (iso8859-1) not allowed',
        '\u570B', 'non-ASCII (chinese) not allowed',
        '-------------------------------', 'more than 30 chars not allowed',
        '                               ', 'more than 30 chars not allowed (even if all spaces)'
      ];
      for (var i = 0; i < expectBad.length; i += 2) {
        var str = expectBad[i];
        var reason = expectBad[i+1];
        helper.assert.equal(false, this.throneInternals.validateNameExt(helper.txn.rawWeb3.fromAscii(str)), reason);
      }
    }
  ]
});

// TODO - crikey, there's at least 100 more tests we could write ...
// more contract balance changes from comission
// claim throne as wizard / deity / same player as current monarch
// claim for different addr
// rounding
// wizard balance
// deity funds avail
// failed payments
// ring-fencing of failed payments
// ring-fencing between wizard + deity
// king with no name / long name / invalid name
// ownership transfer:
// - deity of throne
// - wizard of throne
// - deity of throne maker 
// creation of alt-thrones:
// - correct fee (even when fee changed)
// - exactly same name
// - very similar names
// - bogus properties
// - resulting thrones behave ok
// - sweeping of comission
// - deity and wizard ownership assigned correctly

//runner.excludeCategory('safe');
//runner.excludeCategory('broken');

// Run the tests.
runner.run(function (results) {
  fs.writeFileSync('tests/test-throne-report.md', results.getMarkdownReport(), 'utf-8');
});
