/* jslint node:true */
'use strict';

/*
 * Explicitly test for security problems that aren't covered by general logic tests.
*/

function TestThroneSecurity() {
}

TestThroneSecurity.prototype.addTests = function(runner, throneTestSupport) {

  runner.addTest({
    title: 'Non-wizards cannot take wizard comission',
    categories: ['security'],
    steps: [
      function(helper) {
        // given seperate accounts
        this.topWizardAccount = helper.account.createWith(helper.math.toWei('1', 'ether'));
        this.subWizardAccount = helper.account.createWith(helper.math.toWei('1', 'ether'));
        this.playerAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      },
      function(helper) {
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          topWizardAddress: this.topWizardAccount,
          subWizardAddress: this.subWizardAccount,
        });
      },
      function(helper) {
        // and given the player has paid the exact claim price (which should be 1 ether)
        var originalClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('1','ether'), originalClaimPrice, 'starting claim price');
        this.throne.claimThrone('player', {
          from: this.playerAccount,
          value: originalClaimPrice,
          gas: 500000
        });
      },
      function(helper) {
        // which should have given the wizards comission held in the throne (half the first claim price)
        this.topWizardThroneFundsBeforeSweep = throneTestSupport.getTopWizardBalance(this.throne);
        this.subWizardThroneFundsBeforeSweep = throneTestSupport.getSubWizardBalance(this.throne);
        helper.assert.equal(helper.math.toWei('0.5','ether'), this.topWizardThroneFundsBeforeSweep, 'subwizard should have commission of half claim price');
        helper.assert.equal(helper.math.toWei('0.5','ether'), this.subWizardThroneFundsBeforeSweep, 'topwizard should have commission of half claim price');
      },
      function(helper) {
        // when the topwizard tries to sweep the subwizard's comission too
        this.throne.withdrawFunds({ from: this.topWizardAccount });
        this.throne.withdrawFunds({ from: this.topWizardAccount });
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.subWizardThroneFundsBeforeSweep, throneTestSupport.getSubWizardBalance(this.throne), 'top wizard withdrawal should not influence subwizard balance');
      },
      function(helper) {
        // and when the player tries to sweep the wizard's comission
        this.throne.withdrawFunds({ from: this.playerAccount });
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.subWizardThroneFundsBeforeSweep, throneTestSupport.getSubWizardBalance(this.throne), 'player withdrawal should not influence subwizard balance');
      },
      function(helper) {
        // but just to make sure we are testing correctly (and that the funds are still there), the subwizard CAN withdraw it
        this.throne.withdrawFunds({ from: this.subWizardAccount });
      },
      function(helper) {
        this.subWizardThroneFundsAfterSweep = throneTestSupport.getSubWizardBalance(this.throne);
        helper.assert.equal(0, this.throne.subWizardThroneFundsAfterSweep, 'sweep should succeed');
      }
    ]
  });

  runner.addTest({
    title: 'Non-wizard cannot transfer wizard-ship',
    categories: ['security'],
    steps: [
      function(helper) {
        // given seperate topwizard, subwizards (old and new), and player accounts
        this.topWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.originalSubWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.newSubWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.thirdSubWizardAccount = helper.account.create();
        this.playerAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
      },
      function(helper) {
        // and a throne
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          topWizardAddress: this.topWizardAccount,
          subWizardAddress: this.originalSubWizardAccount
        });
      },
      function(helper) {
        // double-check pre-conditions first
        helper.assert.equal(this.originalSubWizardAccount, this.throne.subWizard(), 'subWizardAddress is what we expect');
      },
      function(helper) {
        // when the player tries to make someone else the sub wizard
        this.throne.replaceWizard(this.newSubWizardAccount, { from: this.playerAccount });
      },
      function(helper) {
        // then it doesn't work (or at least, config says it didn't)
        helper.assert.equal(this.originalSubWizardAccount, this.throne.subWizard(), 'subWizardAddress not affected by player');
      },
      function(helper) {
        // but when the subwizard does it
        this.throne.replaceWizard(this.newSubWizardAccount, { from: this.originalSubWizardAccount });
      },
      function(helper) {
        // then it DOES work
        helper.assert.equal(this.newSubWizardAccount, this.throne.subWizard(), 'subWizardAddress can be changed by subWizard');
      },
      function(helper) {
        // but in doing so they lose the right to change it again
        this.throne.replaceWizard(this.thirdSubWizardAccount, { from: this.originalSubWizardAccount });
      },
      function(helper) {
        // according to config
        helper.assert.equal(this.newSubWizardAccount, this.throne.subWizard(), 'subWizardAddress not affected by ex-wizard');
      },
      function(helper) {
        // oh, and the new wizard can change it
        this.throne.replaceWizard(this.thirdSubWizardAccount, { from: this.newSubWizardAccount });
      },
      function(helper) {
        // according to config
        helper.assert.equal(this.thirdSubWizardAccount, this.throne.subWizard(), 'subWizardAddress can be changed by new subWizard');
      }
    ]
  });

  runner.addTest({
    title: 'Recursive call attack (claim, compensate, withdraw)',
    categories: ['security'],
    steps: [
      function(helper) {
        this.originalSubWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.playerAccount = helper.account.createWith(helper.math.toWei('2.00', 'ether'));
        this.masterAccount = helper.account.createWith(helper.math.toWei('1.50', 'ether'));
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          subWizardAddress: this.originalSubWizardAccount
        });
      },
      function(helper) {
        // setup the attack contract with an interesting fallback fn
        this.attackContract = helper.txn.createContractInstance('RecursiveAttackerOne', [
          this.throne.address,
          this.masterAccount,
          helper.math.toWei('0.05', 'ether')
        ]);
      },
      function(helper) {
        // make the attack contract be the sub-wizard so that a withdraw funds call should succeed later
        // (were it not for our recursive protection)
        this.throne.replaceWizard(this.attackContract.address, { from: this.originalSubWizardAccount });
      },
      function(helper) {
        // send funds to the attackContract
        helper.txn.send({
          to: this.attackContract.address,
          value: helper.math.toWei('0.25', 'ether')
        });
      },
      function(helper) {
        // attackContract (who is also the subwizard!) claims the throne
        this.originalClaimPrice = this.throne.currentClaimPriceWei();
        this.attackContract.claim(this.originalClaimPrice, 250000, {
          value: this.throne.currentClaimPriceWei(),
          gas: 400000,
          from: this.masterAccount
        });
      },
      function(helper) {
        // make note of balance
        this.attackBalanceAfterHisClaim = helper.account.getBalance(this.attackContract.address);
        // check attackContract earned commission
        helper.assert.equal(this.originalClaimPrice.dividedBy(2), this.throne.fundsOf(this.attackContract.address),
          'attackContract has funds in throne due to subwizard commission');
        // player claims throne (will compensate attackContract and invoke withdrawFunds)
        this.playerClaimPrice = this.throne.currentClaimPriceWei();
        this.throne.claimThrone('player', {
          from: this.playerAccount,
          value: this.playerClaimPrice,
          gas: 400000
        });
      },
      function(helper) {
        // check withdraw failed
        var originalCommissionFromFirstClaim = this.originalClaimPrice.dividedBy(2);
        var grossCompensation = this.playerClaimPrice;
        var topWizardCommissionOnCompensation = this.playerClaimPrice.times('0.01');
        var expectedFunds = originalCommissionFromFirstClaim.plus(grossCompensation).minus(topWizardCommissionOnCompensation);
        helper.assert.equal(expectedFunds, this.throne.fundsOf(this.attackContract.address),
          'attackContract funds in throne are as expected without the withdrawal');
        helper.assert.equal(this.attackBalanceAfterHisClaim, helper.account.getBalance(this.attackContract.address),
          'attackContract balance did not change');
      },
    ]
  });

  runner.addTest({
    title: 'Recursive call attack (nested withdraw)',
    categories: ['security'],
    steps: [
      function(helper) {
        this.originalSubWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.playerAccount = helper.account.createWith(helper.math.toWei('1.25', 'ether'));
        this.masterAccount = helper.account.createWith(helper.math.toWei('1.50', 'ether'));
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          subWizardAddress: this.originalSubWizardAccount
        });
      },
      function(helper) {
        // setup the attack contract with an interesting fallback fn
        this.withdrawalAmount = helper.math.toWei('0.05', 'ether');
        this.attackContract = helper.txn.createContractInstance('RecursiveAttackerOne', [
          this.throne.address,
          this.masterAccount,
          this.withdrawalAmount
        ]);
      },
      function(helper) {
        // make the attack contract be the sub-wizard so that a withdraw funds call should succeed later
        // (were it not for our recursive protection)
        this.throne.replaceWizard(this.attackContract.address, { from: this.originalSubWizardAccount });
      },
      function(helper) {
        // player claims throne (this will yield commission for the attackContract as subWizard)
        this.originalClaimPrice = this.throne.currentClaimPriceWei();
        this.throne.claimThrone('player', {
          from: this.playerAccount,
          value: this.throne.currentClaimPriceWei(),
          gas: 250000
        });
      },
      function(helper) {
        // make note of balance
        this.attackBalanceAfterHisClaim = helper.account.getBalance(this.attackContract.address);
        // check attackContract earned commission
        helper.assert.equal(this.originalClaimPrice.dividedBy(2), this.throne.fundsOf(this.attackContract.address),
          'attackContract has funds in throne due to subwizard commission');
        // attackContract (who is also the subwizard!) withdraws commission, sending it
        // to itself which will call the armed fallback function which will withdraw again
        this.attackContract.withdrawToSelf(250000, true, {
          gas: 400000
        });
      },
      function(helper) {
        // check withdraw failed
        helper.assert.equal(this.originalClaimPrice.dividedBy(2), this.throne.fundsOf(this.attackContract.address),
          'attackContract funds in throne did not change');
        helper.assert.equal(this.attackBalanceAfterHisClaim, helper.account.getBalance(this.attackContract.address),
          'attackContract balance did not change');
      },
      function(helper) {
        // just to prove the test is valid, try disarming the fallback and doing it again
        this.attackContract.withdrawToSelf(250000, false, {
          gas: 400000
        });
      },
      function(helper) {
        // check withdraw succeeded this time
        helper.assert.equal(this.originalClaimPrice.dividedBy(2).minus(this.withdrawalAmount), this.throne.fundsOf(this.attackContract.address),
          'attackContract funds in throne did change after disarm');
        helper.assert.equal(this.attackBalanceAfterHisClaim.plus(this.withdrawalAmount), helper.account.getBalance(this.attackContract.address),
          'attackContract balance did change after disarm');
      }
    ]
  });


  runner.addTest({
    title: 'Cannot create a kingdom via the world without playing claim price',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // given a new world and a player
        this.creationPriceWei = helper.math.toWei('0.2','ether');
        this.world = throneTestSupport.createStandardWorldExcept(helper, this.kingdomFactory, {
          kingdomCreationFeeWei: this.creationPriceWei
        });
        // gonna need loadsa gas
        this.subWizardAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
        this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('0.25', 'ether'));
      },
      function(helper) {
        // when we create a kingdom
        this.throneName = 'myKingdom';
        this.startingClaimPriceWei = helper.math.toWei('0.25','ether');
        this.claimPriceAdjustPercent = 100;
        this.curseIncubationDurationSeconds = 86400;
        this.commissionPerThousand = 20;
        /*
        function createKingdom(
          string _kingdomName,
          uint _startingClaimPriceWei,
          uint _claimPriceAdjustPercent,
          uint _curseIncubationDurationSeconds,
          uint _commissionPerThousand
        )
        */
        this.world.createKingdom(
          this.throneName,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        helper.assert.equal(1, this.world.numberOfKingdoms(), 'one kingdom should have been created');
  	    helper.debug.log('throneName is ', this.throneName);
        // then we can find its entry in the world's list of kingdoms
        this.kingdomNumber = this.world.findKingdomCalled(this.throneName);
        this.kingdomEntry = throneTestSupport.getWorldKingdomEntry(this.world, helper.txn.rawWeb3, this.kingdomNumber);
  	    helper.debug.log('kingdomEntry is ', this.kingdomEntry);
        // and the entry matches what we expect
   	    helper.assert.equal(this.throneName, this.kingdomEntry.kingdomName, 'throne name');
   	    helper.math.assertRoughlyEqual(helper.txn.getLatestBlockTime(), this.kingdomEntry.creationTimestamp, 300, 'creationTimestamp');
        // and we can find the throne contract from the gazetteer entry
        this.myThroneAddress = this.kingdomEntry.kingdomContractAddress;
  	    helper.debug.log('myThroneAddress is ', this.myThroneAddress);
        this.myThrone = helper.txn.getRegisteredContractInstanceAt('Kingdom', this.myThroneAddress);
      },
      function(helper) {
        // and the throne we created has the expected properties
        helper.assert.equal(this.startingClaimPriceWei, this.myThrone.currentClaimPriceWei(),
          'expected claim price for newly created throne to match the starting claim price we specified');
        helper.assert.equal(this.world.address, this.myThrone.world(), 'world');
        helper.assert.equal(this.subWizardAccount, this.myThrone.subWizard(), 'subWizardAddress');
        helper.assert.equal(helper.account.master, this.myThrone.topWizard(), 'topWizardAddress');
        // including the rules
        var config = throneTestSupport.decodeThroneRules(this.myThrone, helper.txn.rawWeb3);
        helper.assert.equal(this.claimPriceAdjustPercent, config.claimPriceAdjustPercent, 'claimPriceAdjustPercent');
        helper.assert.equal(this.commissionPerThousand, config.commissionPerThousand, 'commissionPerThousand');
        helper.assert.equal(this.curseIncubationDurationSeconds, config.curseIncubationDurationSeconds, 'curseIncubationDurationSeconds');
      },
      function(helper) {
        // and when we claim the newly created throne
        this.myThrone.claimThrone('playerOne', {
          from: this.playerOneAccount,
          value: this.myThrone.currentClaimPriceWei(),
          gas: 500000
        });
      },
      function(helper) {
        // then it succeeds and the claim price increases as expected according to our custom rules
        var newClaimPrice = this.myThrone.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('0.5','ether'), newClaimPrice,
          'expected claim price to double from 0.25 to 0.5 since we specified _claimPriceAdjustPercent = 100');
      }
    ]
  });

  runner.addTest({
    title: 'Throne claim price is eventually capped',
    categories: ['security'],
    steps: [
      function(helper) {
        // given a new throne (with somewhat unrealistic settings) and two players
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          startingClaimPrice: helper.math.toWei('0.1', 'ether'),
          maximumClaimPrice: helper.math.toWei('0.5', 'ether'),
          claimPriceAdjustPercent: 200
        });
        this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      },
      function(helper) {
        this.throne.claimThrone('playerOne', {
          from: this.playerOneAccount,
          value: this.throne.currentClaimPriceWei(),
          gas: 250000
        });
      },
      function(helper) {
        helper.assert.equal(helper.math.toWei('0.3','ether'), this.throne.currentClaimPriceWei(), 'expected claim price to go up x3');
        this.throne.claimThrone('playerTwo', {
          from: this.playerOneAccount,
          value: this.throne.currentClaimPriceWei(),
          gas: 250000
        });
      },
      function(helper) {
        helper.assert.equal(helper.math.toWei('0.5','ether'), this.throne.currentClaimPriceWei(), 'expected claim price to get capped at 0.5');
        this.throne.claimThrone('playerOne', {
          from: this.playerOneAccount,
          value: this.throne.currentClaimPriceWei(),
          gas: 250000
        });
      },
      function(helper) {
        helper.assert.equal(helper.math.toWei('0.5','ether'), this.throne.currentClaimPriceWei(), 'expected claim price to stay capped at 0.5');
        helper.assert.equal(3, this.throne.numberOfMonarchs(), 'expected claiming to keep working');
      }
    ]
  });

};

exports = module.exports = TestThroneSecurity;
