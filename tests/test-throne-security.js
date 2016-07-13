/* jslint node:true */
'use strict';

/*
 * TODO - document, port to new contract
*/

function TestThroneSecurity() {
}

// TODO - more re-use of steps across tests!
TestThroneSecurity.prototype.addTests = function(runner, throneTestSupport) {

  // TODO - call functions from address not meant to be allowed to
  // TODO - ask to sweep more comission than allowed
  // TODO - RECURSIVE CALL ATTACK
// voidFailedPayment
// switchDeity
// maker sweepDeityCommission
// maker switchDeity  

  runner.addTest({
    title: 'Non-wizards cannot take wizard comission',
    categories: ['security','safe'],
    steps: [
      function(helper) {
        // given seperate deity, wizard, player, and stranger accounts
        this.deityAccount = helper.account.createWith(helper.math.toWei('1', 'ether'));
        this.wizardAccount = helper.account.createWith(helper.math.toWei('1', 'ether'));
        this.playerAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.strangerAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      },
      function(helper) {
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          deityAddress: this.deityAccount,
          wizardAddress: this.wizardAccount
        });
      },
      function(helper) {
        // and given the player has paid the exact claim price (which should be 1 ether)
        var originalClaimPrice = this.throne.currentClaimPrice();
        helper.assert.equal(helper.math.toWei('1','ether'), originalClaimPrice, 'starting claim price');
        this.throne.claimThrone('player', {
          from: this.playerAccount,
          value: originalClaimPrice,
          gas: 500000
        });
      },
      function(helper) {
        // which should have given the wizard comission held in the throne (half the first claim price)
        this.wizardThroneBalanceBeforeSweep = this.throne.wizardBalance();
        helper.assert.equal(helper.math.toWei('0.5','ether'), this.wizardThroneBalanceBeforeSweep, 'wizard should have commission of half claim price');
      },
      function(helper) {
        // when the deity tries to sweep the wizard's comission
        this.throne.sweepWizardCommission(this.throne.wizardBalance(), { from: this.deityAccount } );
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.wizardThroneBalanceBeforeSweep, this.throne.wizardBalance(), 'sweep should fail');
      },
      function(helper) {
        // and when the player tries to sweep the wizard's comission
        this.throne.sweepWizardCommission(this.throne.wizardBalance(), { from: this.playerAccount });
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.wizardThroneBalanceBeforeSweep, this.throne.wizardBalance(), 'sweep should fail');
      },
      function(helper) {
        // and when a stranger tries to sweep the wizard's comission
        this.throne.sweepWizardCommission(this.throne.wizardBalance(), { from: this.strangerAccount });
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.wizardThroneBalanceBeforeSweep, this.throne.wizardBalance(), 'sweep should fail');
      },
      function(helper) {
        // but just to make sure we are testing correctly (and that the funds are still there), the wizard CAN sweep it
        this.throne.sweepWizardCommission(this.throne.wizardBalance(), { from: this.wizardAccount });
      },
      function(helper) {
        helper.assert.equal(0, this.throne.wizardBalance(), 'sweep should succeed');
      }
    ]
  });

  runner.addTest({
    title: 'Non-deity cannot take deity comission',
    categories: ['security','safe'],
    steps: [
      function(helper) {
        // given seperate deity, wizard, player, and stranger accounts
        this.deityAccount = helper.account.createWith(helper.math.toWei('1', 'ether'));
        this.wizardAccount = helper.account.createWith(helper.math.toWei('1', 'ether'));
        this.playerAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.strangerAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
      },
      function(helper) {
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          deityAddress: this.deityAccount,
          wizardAddress: this.wizardAccount
        });
      },
      function(helper) {
        // and given the player has paid the exact claim price (which should be 1 ether)
        var originalClaimPrice = this.throne.currentClaimPrice();
        helper.assert.equal(helper.math.toWei('1','ether'), originalClaimPrice, 'starting claim price');
        this.throne.claimThrone('player', {
          from: this.playerAccount,
          value: originalClaimPrice,
          gas: 500000
        });
      },
      function(helper) {
        // which should have given the deity comission held in the throne (half the first claim price)
        this.deityThroneBalanceBeforeSweep = this.throne.wizardBalance();
        helper.assert.equal(helper.math.toWei('0.5','ether'), this.deityThroneBalanceBeforeSweep, 'deity should have commission of half claim price');
      },
      function(helper) {
        // when the wizrd tries to sweep the deity's comission
        this.throne.sweepDeityCommission(this.throne.deityBalance(), { from: this.wizardAccount } );
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.deityThroneBalanceBeforeSweep, this.throne.deityBalance(), 'sweep should fail');
      },
      function(helper) {
        // and when the player tries to sweep the wizard's comission
        this.throne.sweepDeityCommission(this.throne.deityBalance(), { from: this.playerAccount });
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.deityThroneBalanceBeforeSweep, this.throne.deityBalance(), 'sweep should fail');
      },
      function(helper) {
        // and when a stranger tries to sweep the wizard's comission
        this.throne.sweepDeityCommission(this.throne.deityBalance(), { from: this.strangerAccount });
      },
      function(helper) {
        // then it doesn't work
        helper.assert.equal(this.deityThroneBalanceBeforeSweep, this.throne.deityBalance(), 'sweep should fail');
      },
      function(helper) {
        // but just to make sure we are testing correctly (and that the funds are still there), the deity CAN sweep it
        this.throne.sweepDeityCommission(this.throne.deityBalance(), { from: this.deityAccount });
      },
      function(helper) {
        helper.assert.equal(0, this.throne.deityBalance(), 'sweep should succeed');
      }
    ]
  });
  
  runner.addTest({
    title: 'Non-wizard cannot transfer wizard-ship',
    categories: ['security', 'safe'],
    steps: [
      function(helper) {
        // given seperate deity, wizard (old and new), and player accounts
        this.deityAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.originalWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.newWizardAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
        this.thirdWizardAccount = helper.account.create();
        this.playerAccount = helper.account.createWith(helper.math.toWei('0.25', 'ether'));
      },
      function(helper) {
        // and a throne
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          deityAddress: this.deityAccount,
          wizardAddress: this.originalWizardAccount
        });
      },
      function(helper) {
        // double-check pre-conditions first
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(this.originalWizardAccount, config.wizardAddress, 'wizardAddress is what we expect');
      },
      function(helper) {
        // when the deity tries to make someone else the wizard
        this.throne.switchWizard(this.newWizardAccount, { from: this.deityAccount });
      },
      function(helper) {
        // then it doesn't work (or at least, config says it didn't)
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(this.originalWizardAccount, config.wizardAddress, 'wizardAddress unchanged by deity');
      },
      function(helper) {
        // similarly, when a player tries to make someone else the wizard
        this.throne.switchWizard(this.newWizardAccount, { from: this.playerAccount });
      },
      function(helper) {
        // then it doesn't work (or at least, config says it didn't)
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(this.originalWizardAccount, config.wizardAddress, 'wizardAddress unchanged by player');
      },
      function(helper) {
        // but when the wizard does it
        this.throne.switchWizard(this.newWizardAccount, { from: this.originalWizardAccount });
      },
      function(helper) {
        // then it DOES work
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(this.newWizardAccount, config.wizardAddress, 'wizardAddress changed by wizard');
      },
      function(helper) {
        // but in doing so they lose the right to change it again
        this.throne.switchWizard(this.thirdWizardAccount, { from: this.originalWizardAccount });
      },
      function(helper) {
        // according to config
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(this.newWizardAccount, config.wizardAddress, 'wizardAddress not changed by ex-wizard');
      },
      function(helper) {
        // oh, and the new wizard can change it
        this.throne.switchWizard(this.thirdWizardAccount, { from: this.newWizardAccount });
      },
      function(helper) {
        // according to config
        var config = throneTestSupport.decodeThroneConfig(this.throne, helper.txn.rawWeb3);
        helper.assert.equal(this.thirdWizardAccount, config.wizardAddress, 'new wizrd can change wizardAddress');
      }
    ]
  });
  
};

exports = module.exports = TestThroneSecurity;
