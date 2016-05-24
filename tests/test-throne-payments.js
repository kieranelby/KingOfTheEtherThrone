/* jslint node:true */
'use strict';

/*
 * TODO - document
*/

function TestThronePayments() {
};

// TODO - more re-use of steps across tests!
TestThronePayments.prototype.addTests = function(runner, throneTestSupport) {

  runner.addTest({
    title: 'Claim throne anonymously via fallback succeeds',
    categories: ['safe'],
    steps: [
      function(helper) {
        // given a new throne and a player:
        this.throne = throneTestSupport.createStandardTestThrone(helper);
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
        this.throne = throneTestSupport.createStandardTestThrone(helper);
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
        this.throne = throneTestSupport.createStandardTestThrone(helper);
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
        var firstMonarch = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        helper.assert.equal(this.playerOneWallet.address, firstMonarch.compensationAddress, 'compensationAddress');
        helper.assert.equal(this.playerOneAccount, firstMonarch.originAddress, 'originAddress');
        var goodPaymentStatusCode = 1;
        helper.assert.equal(goodPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
        helper.assert.equal(helper.math.toWei('1.47','ether'), firstMonarch.compensationPaid, 'compensationPaid');
      }
    ]
  });


  var commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet = [
      function(helper) {
        // given a new throne and two players
        this.throne = throneTestSupport.createStandardTestThrone(helper);
        this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('2', 'ether'));
        this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1.5', 'ether'));
      },
      function(helper) {
        // and given the first player has their own wallet contract which eats
        // rather a lot of gas when its fallback function is called
        this.eatGasAmount = 100000;
        this.playerOneWallet = helper.txn.createContractInstance('DTRExpensiveWallet', [this.eatGasAmount], {
          from: this.playerOneAccount
        });
      },
      function(helper) {
        // and given that the first player has sent just enough money to their wallet to cover the claim price:
        // (not forgetting to include plenty of gas!)
        var claimPrice = this.throne.currentClaimPrice();
        helper.txn.send({
          from: this.playerOneAccount,
          to: this.playerOneWallet.address,
          value: claimPrice,
          gas: 200000
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
        this.playerTwoClaimTime = helper.txn.getLatestBlockTime();
        this.throne.claimThrone('playerTwo', {
          from: this.playerTwoAccount,
          value: this.throne.currentClaimPrice(),
          gas: 500000
        });
      },
      function(helper) {
        // then playerOne's wallet does not receive the payment
        helper.assert.equal(helper.math.toWei('0.0','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to be empty');
        // and nor does their non-wallet account
        helper.assert.equal(
          this.playerOneNonWalletBalanceAfterClaim,
          helper.account.getBalance(this.playerOneAccount),
          'non-wallet balance should not change either');
        // and when we look in the hall of thrones then they are marked as not compensated
        // note the origin vs the compensation address
        var firstMonarch = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        helper.assert.equal(this.playerOneWallet.address, firstMonarch.compensationAddress, 'compensationAddress');
        helper.assert.equal(this.playerOneAccount, firstMonarch.originAddress, 'originAddress');
        var failedPaymentStatusCode = 2;
        helper.assert.equal(failedPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
        // this is rather misleading, it's really compensation that should have been paid:
        helper.assert.equal(helper.math.toWei('1.47','ether'), firstMonarch.compensationPaid, 'compensationPaid');
        // and the wizard/deity can't touch the money
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.wizardBalance(), 'wizardBalance');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.deityBalance(), 'deityBalance');
        // but the money is there
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance');
        // and we have a record of when this happened
        this.originalCompensationTimestamp = firstMonarch.compensationTimestamp;
        helper.math.assertLessThanOrEqual(this.originalCompensationTimestamp, helper.txn.getLatestBlockTime(), 'compensationTimestamp not too late');
        helper.math.assertGreaterThanOrEqual(this.originalCompensationTimestamp, this.playerTwoClaimTime, 'compensationTimestamp not too early');
      }
  ];

  runner.addTest({
    title: 'Compensation payment failure detected when sending to a very expensive wallet contract',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet
  });

  runner.addTest({
    title: 'Successfully resend failed compensation payment',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // if the original player asks for his payment to be resent (he'll have to pay for the gas)
        var monarchNumber = 0;
        this.throne.resendFailedPayment(monarchNumber, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function(helper) {
        // then his wallet does now receive the compensation payment
        helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to receive the compensation payment');
        // and when we look in the hall of thrones then they are marked as compensated
        var firstMonarch = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var goodPaymentStatusCode = 1;
        helper.assert.equal(goodPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
      }
    ])
  });

  runner.addTest({
    title: 'Failed resend of a failed compensation payment',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // if the original player asks for his payment to be resent (but doesn't include enough gas)
        var monarchNumber = 0;
        this.throne.resendFailedPayment(monarchNumber, {
          from: this.playerOneAccount,
          gas: this.eatGasAmount
        });
      },
      function(helper) {
        // then his wallet still does not receive the compensation payment
        helper.assert.equal(helper.math.toWei('0.0','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to receive the compensation payment');
        // and when we look in the hall of thrones then they are still marked as not compensated
        var firstMonarch = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var failedPaymentStatusCode = 2;
        helper.assert.equal(failedPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
        // and the failed-payment is still ring-fenced
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.wizardBalance(), 'wizardBalance unchanged');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.deityBalance(), 'deityBalance unchanged');
        // but the money is there
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance unchanged');
        // and the compensationTimestamp does not change (otherwise could potentially never void if someone keeps re-sending)
        helper.assert.equal(this.originalCompensationTimestamp, firstMonarch.compensationTimestamp, 'compensationTimestamp unchanged by failed re-send');
      }
    ])
  });
  
  runner.addTest({
    title: 'Cannot successfully resend failed compensation payment more than once',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // if the original player asks for his payment to be resent (he'll have to pay for the gas)
        var monarchNumber = 0;
        this.throne.resendFailedPayment(monarchNumber, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function(helper) {
        // then his wallet does now receive the compensation payment
        helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to receive the compensation payment');
        // and when we look in the hall of thrones then they are marked as compensated
        // note the origin vs the compensation address
        var firstMonarch = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var goodPaymentStatusCode = 1;
        helper.assert.equal(goodPaymentStatusCode, firstMonarch.compensationStatus, 'compensationStatus');
      },
      function(helper) {
        // but if he asks for his payment to be resent again though
        var monarchNumber = 0;
        this.throne.resendFailedPayment(monarchNumber, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function(helper) {
        // then he does not receive any more money
        helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to not receive any more payments');
      }
    ])
  });

  runner.addTest({
    title: 'Cannot void failed compensation payment before failedPaymentRingfenceDuration elapsed',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // check pre-conditions
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.wizardBalance(), 'wizardBalance pre-condition');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.deityBalance(), 'deityBalance pre-condition');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance pre-condition');
        // if the wizard asks for the failed payment to be voided immediately
        this.throneConfig = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        this.firstMonarchBeforeVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var monarchNumber = 0;
        this.throne.voidFailedPayment(monarchNumber, {
          from: this.throneConfig.wizardAddress,
          gas: 500000
        });
      },
      function(helper) {
        // then nothing happens
        this.firstMonarchAfterVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        helper.assert.equal(this.firstMonarchBeforeVoidAttempt.compensationStatus, this.firstMonarchAfterVoidAttempt.compensationStatus, 'compensationStatus');
        helper.assert.equal(this.firstMonarchBeforeVoidAttempt.compensationTimestamp, this.firstMonarchAfterVoidAttempt.compensationTimestamp, 'compensationTimestamp');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.wizardBalance(), 'wizardBalance unchanged');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.deityBalance(), 'deityBalance unchanged');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance unchanged');
      }
    ])
  });

  runner.addTest({
    title: 'Can void failed compensation payment after failedPaymentRingfenceDuration elapsed',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // check pre-conditions
        this.throneConfig = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.wizardBalance(), 'wizardBalance pre-condition');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.deityBalance(), 'deityBalance pre-condition');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance pre-condition');
        // wait until the ring-fence duration has passed
        helper.nextStep.needsBlockTime(helper.math.add(helper.math.add(helper.txn.getLatestBlockTime(), this.throneConfig.failedPaymentRingfenceDuration),1));
      },
      function(helper) {
        // if the wizard now asks for the failed payment to be voided
        this.firstMonarchBeforeVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var monarchNumber = 0;
        this.throne.voidFailedPayment(monarchNumber, {
          from: this.throneConfig.wizardAddress,
          gas: 500000
        });
      },
      function(helper) {
        // then this is recorded and the money is made available to the wizard and the deity
        this.firstMonarchAfterVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var voidedPaymentStatusCode = 3;
        helper.assert.equal(voidedPaymentStatusCode, this.firstMonarchAfterVoidAttempt.compensationStatus, 'compensationStatus');
        helper.assert.equal(this.firstMonarchBeforeVoidAttempt.compensationTimestamp, this.firstMonarchAfterVoidAttempt.compensationTimestamp, 'compensationTimestamp remains as time of first attempt');
        helper.assert.equal(helper.math.toWei('1.25','ether'), this.throne.wizardBalance(), 'wizardBalance increased');
        helper.assert.equal(helper.math.toWei('1.25','ether'), this.throne.deityBalance(), 'deityBalance increased');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance unchanged');
      }
    ])
  });

  runner.addTest({
    title: 'Cannot void a failed compensation payment twice',
    categories: ['safe'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // check pre-conditions
        this.throneConfig = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.wizardBalance(), 'wizardBalance pre-condition');
        helper.assert.equal(helper.math.toWei('0.515','ether'), this.throne.deityBalance(), 'deityBalance pre-condition');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance pre-condition');
        // wait until the ring-fence duration has passed
        helper.nextStep.needsBlockTime(helper.math.add(helper.math.add(helper.txn.getLatestBlockTime(), this.throneConfig.failedPaymentRingfenceDuration),1));
      },
      function(helper) {
        // if the wizard now asks for the failed payment to be voided
        this.firstMonarchBeforeVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var monarchNumber = 0;
        this.throne.voidFailedPayment(monarchNumber, {
          from: this.throneConfig.wizardAddress,
          gas: 500000
        });
      },
      function(helper) {
        // then this is recorded and the money is made available to the wizard and the deity
        this.firstMonarchAfterVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var voidedPaymentStatusCode = 3;
        helper.assert.equal(voidedPaymentStatusCode, this.firstMonarchAfterVoidAttempt.compensationStatus, 'compensationStatus');
        helper.assert.equal(this.firstMonarchBeforeVoidAttempt.compensationTimestamp, this.firstMonarchAfterVoidAttempt.compensationTimestamp, 'compensationTimestamp remains as time of first attempt');
        helper.assert.equal(helper.math.toWei('1.25','ether'), this.throne.wizardBalance(), 'wizardBalance increased');
        helper.assert.equal(helper.math.toWei('1.25','ether'), this.throne.deityBalance(), 'deityBalance increased');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance unchanged');
      },
      function(helper) {
        // but if the wizard now asks for the failed payment to be voided again
        this.firstMonarchBeforeVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var monarchNumber = 0;
        this.throne.voidFailedPayment(monarchNumber, {
          from: this.throneConfig.wizardAddress,
          gas: 500000
        });
      },
      function(helper) {
        // then that doesn't work, though it does stay voided
        this.firstMonarchAfterSecondVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var voidedPaymentStatusCode = 3;
        helper.assert.equal(voidedPaymentStatusCode, this.firstMonarchAfterSecondVoidAttempt.compensationStatus, 'compensationStatus');
        helper.assert.equal(this.firstMonarchBeforeVoidAttempt.compensationTimestamp, this.firstMonarchAfterSecondVoidAttempt.compensationTimestamp, 'compensationTimestamp still unchanged');
        helper.assert.equal(helper.math.toWei('1.25','ether'), this.throne.wizardBalance(), 'wizardBalance not changed by 2nd attempt');
        helper.assert.equal(helper.math.toWei('1.25','ether'), this.throne.deityBalance(), 'deityBalance not changed by 2nd attempt');
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance not changed by 2nd attempt either');
      }
    ])
  });

  runner.addTest({
    title: 'Dead monarchs not compensated and cannot resend',
    categories: ['payments','safe'],
    steps: [
      function(helper) {
        // given a new throne and two players
        this.throne = throneTestSupport.createStandardTestThrone(helper);
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
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
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
        this.contractBalanceAfterSecondClaim = contractBalanceNow;
        // and the compensation status is "n/a"
        var notApplicablePaymentStatusCode = 0;
        this.deadMonarch = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        helper.assert.equal(notApplicablePaymentStatusCode, this.deadMonarch.compensationStatus, 'compensationStatus');
      },
      function (helper) {
        // and resending the never sent payment
        this.firstMonarchBeforeVoidAttempt = throneTestSupport.decodeMonarchArray(this.throne.monarchs(0), helper.txn.rawWeb3);
        var monarchNumber = 0;
        this.throne.resendFailedPayment(monarchNumber, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function (helper) {
        // does nothing
        var contractBalanceNow = helper.account.getBalance(this.throne.address);
        helper.assert.equal(this.contractBalanceAfterSecondClaim, contractBalanceNow, 'contract balance not changed');
      }
    ]
  });
  
  // TODO - scenario where re-send is not monacrhNumber zero?
    
};

exports = module.exports = TestThronePayments;
