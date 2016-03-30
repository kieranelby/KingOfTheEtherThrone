/* jslint node:true */
'use strict';

/*
 * TODO - document
*/

function TestThroneMaker() {
};

TestThroneMaker.prototype.addTests = function(runner, throneSupport) {

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
  
};

exports = module.exports = TestThroneMaker;
