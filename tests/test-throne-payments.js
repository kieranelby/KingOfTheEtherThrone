/* jslint node:true */
'use strict';

/*
 * Tests for payment-related throne functionality.
*/

function TestThronePayments() {
}

TestThronePayments.prototype.addTests = function(runner, throneTestSupport) {

  runner.addTest({
    title: 'Claim throne anonymously via fallback succeeds',
    categories: ['payments'],
    steps: [
      function(helper) {
        // given a new throne and a player:
        this.throne = throneTestSupport.createStandardTestThrone(helper);
        this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      },
      function(helper) {
        // given that the  player claimed the throne by sending the starting price according
        // to the contract to the contract address:
        var claimPrice = this.throne.currentClaimPriceWei();
        helper.txn.send({
          from: this.playerOneAccount,
          to: this.throne.address,
          value: claimPrice,
          gas: 500000
        });
      },
      function(helper) {
        // then the claim price increases
        var newClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('1.5','ether'), newClaimPrice, 'expected new claim price to increase by 50%');
      }
    ]
  });

  runner.addTest({
    title: 'Claim throne anonymously via fallback using wallet contract succeeds',
    categories: ['payments'],
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
        var claimPrice = this.throne.currentClaimPriceWei();
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
        var claimPrice = this.throne.currentClaimPriceWei();
        this.playerOneWallet.spendWithGas(this.throne.address, claimPrice, extraGasAmount, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function(helper) {
        // then the claim price increases
        var newClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('1500','finney'), newClaimPrice,
          'expected claim price to increase as normal when contract claims throne');
      }
    ]
  });

  runner.addTest({
    title: 'Compensation payment sent to king who claimed from cheap wallet contract',
    categories: ['payments'],
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
        var claimPrice = this.throne.currentClaimPriceWei();
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
        var claimPrice = this.throne.currentClaimPriceWei();
        this.playerOneWallet.spendWithGas(this.throne.address, claimPrice, extraGasAmount, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function(helper) {
        // then the claim price increases (and the player's wallet balance decreases)
        var newClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('1500','finney'), newClaimPrice,
          'expected claim price to increase as normal when contract claims throne');
        helper.assert.equal(0, helper.account.getBalance(this.playerOneWallet.address),
          'expected player one to spend all his money');
        // their non-wallet balance will have been charged for gas, make a note of it
        this.playerOneNonWalletBalanceAfterClaim = helper.account.getBalance(this.playerOneAccount);
        // and when the second player now claims the throne (not bothering with a wallet)
        this.throne.claimThrone('playerTwo', {
          from: this.playerTwoAccount,
          value: this.throne.currentClaimPriceWei(),
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
        var firstMonarch = throneTestSupport.getMonarch(this.throne, helper.txn.rawWeb3, 1);
        helper.assert.equal(this.playerOneWallet.address, firstMonarch.compensationAddress, 'compensationAddress');
        helper.assert.equal(helper.math.toWei('1.47','ether'), firstMonarch.compensationWei, 'compensationWei');
      }
    ]
  });


  var commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet = [
      function(helper) {
        // given a new throne (with separate subWizard) and two players
        this.subWizardAccount = helper.account.create();
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          subWizardAddress: this.subWizardAccount
        });
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
        var claimPrice = this.throne.currentClaimPriceWei();
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
        var claimPrice = this.throne.currentClaimPriceWei();
        this.playerOneWallet.spendWithGas(this.throne.address, claimPrice, extraGasAmount, {
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function(helper) {
        // then the claim price increases (and the player's wallet balance decreases)
        var newClaimPrice = this.throne.currentClaimPriceWei();
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
          value: this.throne.currentClaimPriceWei(),
          gas: 400000
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
        // when we look in the hall of monarchs we see how much they should have got
        var firstMonarch = throneTestSupport.getMonarch(this.throne, helper.txn.rawWeb3, 1);
        helper.assert.equal(this.playerOneWallet.address, firstMonarch.compensationAddress, 'compensationAddress');
        var expectedCompensationWei = helper.math.toWei('1.47','ether');
        helper.assert.equal(expectedCompensationWei, firstMonarch.compensationWei, 'compensationWei');
        // and we can see the funds have been held for them
        helper.assert.equal(expectedCompensationWei, this.throne.fundsOf(this.playerOneWallet.address), 'compensationWei');
        // and the wizards can't touch the money (well, provided ring-fencing works)
        helper.assert.equal(helper.math.toWei('0.515','ether'), throneTestSupport.getTopWizardBalance(this.throne), 'topWizardBalance');
        helper.assert.equal(helper.math.toWei('0.515','ether'), throneTestSupport.getSubWizardBalance(this.throne), 'subWizardBalance');
        // but the money is there
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance');
      }
  ];

  runner.addTest({
    title: 'Compensation payment failure detected when sending to a very expensive wallet contract',
    categories: ['payments'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet
  });

  runner.addTest({
    title: 'Successfully resend failed compensation payment',
    categories: ['payments'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // if the original player tells her wallet to ask the throne contract
        // for her payment to be resent (she'll have to pay for the gas)
        var spendDst = this.throne.address;
        var spendVal = 0;
        var spendExtraGasAmount = 250000;
        // This is a rather roundabout way of telling the wallet contract to call withdrawFundsAdvanced() on the throne ...
        var withdrawTo = this.playerOneWallet.address;
        var withdrawWei = this.throne.fundsOf(this.playerOneWallet.address);
        var withdrawExtraGas = 150000;
        var spendCallData = this.throne.withdrawFundsAdvanced.getData(withdrawTo, withdrawWei, withdrawExtraGas);
        this.playerOneWallet.spendWithGasAndData(spendDst, spendVal, spendExtraGasAmount, spendCallData, {
          from: this.playerOneAccount,
          gas: 400000
        });
      },
      function(helper) {
        // then her wallet does now receive the compensation payment
        helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to receive the compensation payment');
      }
    ])
  });

  runner.addTest({
    title: 'Failed resend of a failed compensation payment',
    categories: ['payments'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // if the original player tells his wallet to ask the throne contract
        // for his payment to be resent (but doesn't specify enough gas)
        var spendDst = this.throne.address;
        var spendVal = 0;
        var spendExtraGasAmount = 10000;
        // This is a rather roundabout way of telling the wallet contract to call withdrawFundsAdvanced() on the throne ...
        var withdrawTo = this.playerOneWallet.address;
        var withdrawWei = this.throne.fundsOf(this.playerOneWallet.address);
        var withdrawExtraGas = 5000;
        var spendCallData = this.throne.withdrawFundsAdvanced.getData(withdrawTo, withdrawWei, withdrawExtraGas);
        this.playerOneWallet.spendWithGasAndData(spendDst, spendVal, spendExtraGasAmount, spendCallData, {
          from: this.playerOneAccount,
          gas: 100000
        });
      },
      function(helper) {
        // then his wallet still does not receive the compensation payment
        helper.assert.equal(helper.math.toWei('0.0','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to not receive the compensation payment');
        // and the funds are still ring-fenced for them
        var expectedCompensationWei = helper.math.toWei('1.47','ether');
        helper.assert.equal(expectedCompensationWei, this.throne.fundsOf(this.playerOneWallet.address), 'funds still ring-fenced');
        // and we can see the contract balance still has enough money for them
        helper.assert.equal(helper.math.toWei('2.5','ether'), helper.account.getBalance(this.throne.address), 'throneBalance unchanged');
      }
    ])
  });
  
  runner.addTest({
    title: 'Cannot successfully withdraw failed compensation payment more than once',
    categories: ['payments'],
    steps: commonStepsToSetupFailedCompensationPaymentDueToExpensiveWallet.concat([
      function(helper) {
        // if the original player tells his wallet to ask the throne contract
        // for his payment to be resent (he'll have to pay for the gas)
        var spendDst = this.throne.address;
        var spendVal = 0;
        var spendExtraGasAmount = 250000;
        // This is a rather roundabout way of telling the wallet contract to call withdrawFundsAdvanced() on the throne ...
        var withdrawTo = this.playerOneWallet.address;
        var withdrawWei = this.throne.fundsOf(this.playerOneWallet.address);
        var withdrawExtraGas = 150000;
        var spendCallData = this.throne.withdrawFundsAdvanced.getData(withdrawTo, withdrawWei, withdrawExtraGas);
        this.playerOneWallet.spendWithGasAndData(spendDst, spendVal, spendExtraGasAmount, spendCallData, {
          from: this.playerOneAccount,
          gas: 400000
        });
      },
      function(helper) {
        // then his wallet does now receive the compensation payment
        helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to receive the compensation payment');
      },
      function(helper) {
        // but if he asks for some more afterwards
        var spendDst = this.throne.address;
        var spendVal = 0;
        var spendExtraGasAmount = 250000;
        // This is a rather roundabout way of telling the wallet contract to call withdrawFundsAdvanced() on the throne ...
        var withdrawTo = this.playerOneWallet.address;
        var withdrawWei = helper.math.toWei('0.1', 'ether');
        var withdrawExtraGas = 150000;
        var spendCallData = this.throne.withdrawFundsAdvanced.getData(withdrawTo, withdrawWei, withdrawExtraGas);
        this.playerOneWallet.spendWithGasAndData(spendDst, spendVal, spendExtraGasAmount, spendCallData, {
          from: this.playerOneAccount,
          gas: 400000
        });
      },
      function(helper) {
        // then his wallet does not receive any more
        helper.assert.equal(helper.math.toWei('1.47','ether'), helper.account.getBalance(this.playerOneWallet.address),
          'expected player one wallet to not receive any more');
      }
    ])
  });

  runner.addTest({
    title: 'Dead monarchs not compensated and cannot resend',
    categories: ['payments'],
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
          value: this.throne.currentClaimPriceWei(),
          gas: 500000
        });
      },
      function(helper) {
        // make a note of when player one claimed the throne and how much money they had left
        var claimedAt = helper.txn.getLatestBlockTime();
        var rules = throneTestSupport.decodeThroneRules(this.throne, helper.txn.rawWeb3);
        this.expectDieBy = helper.math.add(claimedAt, rules.curseIncubationDurationSeconds);
        this.contractBalanceAfterFirstClaim = helper.account.getBalance(this.throne.address);
        this.playerOneBalanceAfterTheyClaimed = helper.account.getBalance(this.playerOneAccount);
        // when we wait until the monarch should have died
        helper.nextStep.needsBlockTime(this.expectDieBy);
      },
      function(helper) {
        // and then let player 2 claim the throne
        this.throne.claimThrone('playerTwo', {
          from: this.playerTwoAccount,
          value: this.throne.currentClaimPriceWei(),
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
        // and the first monarch is not recorded as being owed any compensation
        this.deadMonarch = throneTestSupport.getMonarch(this.throne, helper.txn.rawWeb3, 1);
        helper.assert.equal(helper.math.toWei('0', 'ether'), this.deadMonarch.compensationWei, 'compensationWei should be zero');
      },
      function (helper) {
        // and trying to withdraw compensation
        this.throne.withdrawFunds({
          from: this.playerOneAccount,
          gas: 500000
        });
      },
      function (helper) {
        // does nothing to the throne balance
        var contractBalanceNow = helper.account.getBalance(this.throne.address);
        helper.assert.equal(this.contractBalanceAfterSecondClaim, contractBalanceNow, 'throne contract balance not changed');
      }
    ]
  });
    
};

exports = module.exports = TestThronePayments;
