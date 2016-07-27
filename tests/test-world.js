/* jslint node:true */
'use strict';

/*
 * TODO - document, bring up-to-date
*/

function TestWorld() {
}

TestWorld.prototype.addTests = function(runner, throneTestSupport) {

  runner.addTest({
    title: 'Create bespoke throne via World has expected properties, appears in list of kingdoms and can be claimed',
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
    title: 'Create second bespoke throne with exactly same name as first via World fails',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // given a new world and two wizards
        this.creationPriceWei = helper.math.toWei('0.2','ether');
        this.world = throneTestSupport.createStandardWorldExcept(helper, this.kingdomFactory, {
          kingdomCreationFeeWei: this.creationPriceWei
        });
        // gonna need loadsa gas
        this.subWizardOneAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
        this.subWizardTwoAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
      },
      function(helper) {
        // when wizardOne creates a kingdom
        this.throneName = 'myKingdom';
        this.startingClaimPriceWei = helper.math.toWei('0.25','ether');
        this.claimPriceAdjustPercent = 100;
        this.curseIncubationDurationSeconds = 86400;
        this.commissionPerThousand = 20;
        this.world.createKingdom(
          this.throneName,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardOneAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        // check details of the first throne
        this.numberOfThronesAfterFirstCreated = this.world.numberOfKingdoms();
        this.firstThroneNumber = this.world.findKingdomCalled(this.throneName);
        helper.assert.equal(1, this.numberOfThronesAfterFirstCreated,
          'first throne should have been created');
      },
      function(helper) {
        // and when wizard two then creates another throne with the same name
        // then it should fail (we won't see that straight away, but
        // we will observe the number of thrones doesn't increase and
        // they should get their creation fee back).
        this.wizardTwoBalanceBefore = helper.account.getBalance(this.subWizardTwoAccount);
        this.world.createKingdom(
          this.throneName,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardTwoAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        helper.assert.equal(this.numberOfThronesAfterFirstCreated, this.world.numberOfKingdoms(),
          'no new throne should have been created');
        helper.assert.equal(this.firstThroneNumber, this.world.findKingdomCalled(this.throneName),
          'finding throne by name should still return the first one');
        this.wizardTwoBalanceAfter = helper.account.getBalance(this.subWizardTwoAccount);
        // nb: actually it could be worse depending on the gasprice ... perhaps we need to do something about
        // the insanely high gas cost ... e.g. libraries / CALLCODE / DELEGATECALL ?
        helper.math.assertRoughlyEqual(this.wizardTwoBalanceBefore, this.wizardTwoBalanceAfter, helper.math.toWei('70','finney'),
          'should only cost gas to fail to create a throne due to assertion failure on name');
      }
    ]
  });

  runner.addTest({
    title: 'Create second bespoke throne with too-similar name to the first via World fails',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // given a new world and two wizards
        this.creationPriceWei = helper.math.toWei('0.2','ether');
        this.world = throneTestSupport.createStandardWorldExcept(helper, this.kingdomFactory, {
          kingdomCreationFeeWei: this.creationPriceWei
        });
        // gonna need loadsa gas
        this.subWizardOneAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
        this.subWizardTwoAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
      },
      function(helper) {
        // when wizardOne creates a kingdom
        this.throneName = 'myKingdom';
        this.startingClaimPriceWei = helper.math.toWei('0.25','ether');
        this.claimPriceAdjustPercent = 100;
        this.curseIncubationDurationSeconds = 86400;
        this.commissionPerThousand = 20;
        this.world.createKingdom(
          this.throneName,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardOneAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        // check details of the first throne
        this.numberOfThronesAfterFirstCreated = this.world.numberOfKingdoms();
        this.firstThroneNumber = this.world.findKingdomCalled(this.throneName);
        helper.assert.equal(1, this.numberOfThronesAfterFirstCreated,
          'first throne should have been created');
      },
      function(helper) {
        // and when wizard two then creates another throne with a too similar name
        // then it should fail (we won't see that straight away, but
        // we will observe the number of thrones doesn't increase and
        // they should get their creation fee back).
        this.wizardTwoBalanceBefore = helper.account.getBalance(this.subWizardTwoAccount);
        this.secondThroneName = 'MY KINGDOM!';
        this.world.createKingdom(
          this.secondThroneName,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardTwoAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        helper.assert.equal(this.numberOfThronesAfterFirstCreated, this.world.numberOfKingdoms(),
          'no new throne should have been created');
        helper.assert.equal(this.firstThroneNumber, this.world.findKingdomCalled(this.throneName),
          'finding throne by name should still return the first one');
        this.wizardTwoBalanceAfter = helper.account.getBalance(this.subWizardTwoAccount);
        // nb: actually it could be worse depending on the gasprice ... perhaps we need to do something about
        // the insanely high gas cost ... e.g. libraries / CALLCODE / DELEGATECALL ?
        helper.math.assertRoughlyEqual(this.wizardTwoBalanceBefore, this.wizardTwoBalanceAfter, helper.math.toWei('70','finney'),
          'should only cost gas to fail to create a throne due to assertion failure on name');
      }
    ]
  });

  runner.addTest({
    title: 'Create second bespoke throne via World with different name has expected properties, appears in gazetteer and can be claimed',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // given a new world and two wizards and a player
        this.creationPriceWei = helper.math.toWei('0.2','ether');
        this.world = throneTestSupport.createStandardWorldExcept(helper, this.kingdomFactory, {
          kingdomCreationFeeWei: this.creationPriceWei
        });
        // gonna need loadsa gas
        this.subWizardOneAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
        this.subWizardTwoAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
        this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('0.25', 'ether'));
      },
      function(helper) {
        // when wizardOne creates a kingdom
        this.throneName = 'myKingdom';
        this.startingClaimPriceWei = helper.math.toWei('0.25','ether');
        this.claimPriceAdjustPercent = 100;
        this.curseIncubationDurationSeconds = 86400;
        this.commissionPerThousand = 20;
        this.world.createKingdom(
          this.throneName,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardOneAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        // check details of the first throne
        this.numberOfThronesAfterFirstCreated = this.world.numberOfKingdoms();
        this.firstThroneNumber = this.world.findKingdomCalled(this.throneName);
        helper.assert.equal(1, this.numberOfThronesAfterFirstCreated,
          'first throne should have been created');
      },
      function(helper) {
        // and when wizard two then creates another throne with a different name and slightly different setup
        this.wizardTwoBalanceBefore = helper.account.getBalance(this.subWizardTwoAccount);
        this.secondThroneName = 'SecondComing';
        this.secondStartingClaimPriceWei = helper.math.toWei('0.333','ether');
        this.secondClaimPriceAdjustPercent = 200;
        this.world.createKingdom(
          this.secondThroneName,
          this.secondStartingClaimPriceWei,
          this.secondClaimPriceAdjustPercent,
          this.curseIncubationDurationSeconds,
          this.commissionPerThousand,
          {
            from: this.subWizardTwoAccount,
            value: this.creationPriceWei,
            gas: 3100000
          }
        );
      },
      function(helper) {
        this.secondKingdomEntry = throneTestSupport.getWorldKingdomEntry(this.world, helper.txn.rawWeb3, 2);
        this.secondThroneAddress = this.secondKingdomEntry.kingdomContractAddress;
        this.secondThrone = helper.txn.getRegisteredContractInstanceAt('Kingdom', this.secondThroneAddress);
        // and when we claim the second throne
        this.secondThrone.claimThrone('playerOne', {
          from: this.playerOneAccount,
          value: this.myThrone.currentClaimPriceWei(),
          gas: 500000
        });
      },
      function(helper) {
        // then it succeeds and the claim price increases as expected according to our custom rules
        var newClaimPrice = this.secondThrone.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('0.999','ether'), newClaimPrice,
          'expected claim price to triple from 0.333 to 0.999 based on our rules');
      }
    ]
  });

  runner.addTest({
    title: 'Top Wizard can change throne creation price',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // given a new world and a wizard
        this.originalCreationPriceWei = helper.math.toWei('0.15','ether');
        this.world = throneTestSupport.createStandardWorldExcept(helper, this.kingdomFactory, {
          kingdomCreationFeeWei: this.originalCreationPriceWei
        });
        // gonna need loadsa gas
        this.subWizardAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
      },
      function(helper) {
        // when we (the creator of the world) change the throne creation price
        this.updatedCreationPriceWei = helper.math.toWei('0.25','ether');
        this.world.setKingdomCreationFeeWei(this.updatedCreationPriceWei);
      },
      function(helper) {
        // then we can read back the updated price
        helper.assert.equal(this.updatedCreationPriceWei, this.world.kingdomCreationFeeWei(),
          'expected to read back new creation price');
        helper.assert.equal('250', this.world.kingdomCreationFeeFinney(),
          'expected to read back new creation price in finney');
        // and we can create a throne using the updated price
        this.throneName = 'myKingdom';
        this.claimPriceAdjustPercent = 100;
        this.curseIncubationDurationSeconds = 86400;
        this.commissionPerThousand = 20;
        this.world.createKingdom(
          this.throneName,
          this.updatedCreationPriceWei,
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
        helper.assert.equal(1, this.world.numberOfKingdoms(), 'a throne should have been created');
      }
    ]
  });

  runner.addTest({
    title: 'Top Wizard can sweep throne creation fees',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // don't use the default account as the top wizard because we need to do balance checks
        // (which aren't allowed on the default account 'cos concurrency)
        this.topWizardAccount = helper.account.createWith(helper.math.toWei('0.20', 'ether'));
        // gonna need loadsa gas
        this.subWizardAccount = helper.account.createWith(helper.math.toWei('0.35', 'ether'));
      },
      function(helper) {
        // given a new world (with our special top wizard)
        this.kingdomCreationFeeWei = helper.math.toWei('200','finney');
        this.world = throneTestSupport.createStandardWorldExcept(helper, this.kingdomFactory, {
          topWizard: this.topWizardAccount,
          kingdomCreationFeeWei: this.kingdomCreationFeeWei
        });
      },
      function(helper) {
        // when the subwizard asks to create a throne
        this.throneName = 'myKingdom';
        this.claimPriceAdjustPercent = 100;
        this.curseIncubationDurationSeconds = 86400;
        this.commissionPerThousand = 20;
        this.world.createKingdom(
          this.throneName,
          this.updatedCreationPriceWei,
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
        // then the throne is created
        helper.assert.equal(1, this.world.numberOfKingdoms(), 'a throne should have been created');
        // and the top wizard can ask to collect the fee
        this.topWizardBalanceBeforeSweep = helper.account.getBalance(this.topWizardAccount);
        this.world.withdrawFunds({from: this.topWizardAccount});
      },
      function(helper) {
        // and the topwizard should receive it
        this.topWizardBalanceAfterSweep = helper.account.getBalance(this.topWizardAccount);
        this.balanceChange = helper.math.subtract(this.topWizardBalanceAfterSweep, this.topWizardBalanceBeforeSweep);
        helper.math.assertRoughlyEqual(this.kingdomCreationFeeWei, this.balanceChange, helper.math.toWei('5', 'finney'),
          'top wizard balance should go up by creation price (less gas used to withdraw)');
      }
    ]
  });

  runner.addTest({
    title: 'Can validate proposed throne before creating it',
    categories: ['world'],
    steps: [
      function(helper) {
        // awkwardly we need to create the KingdomFactory first
        this.kingdomFactory = throneTestSupport.createKingdomFactory(helper);
      },
      function(helper) {
        // given a new world
        this.world = throneTestSupport.createStandardWorld(helper, this.kingdomFactory);
      },
      function(helper) {
        // then we can validate stuff
        helper.assert.equal(true, this.world.validateProposedKingdomName('bob'), 'short but sweet');
        helper.assert.equal(false, this.world.validateProposedKingdomName(''), 'cannot have empty name');
        helper.assert.equal(false, this.world.validateProposedKingdomName('!"$%^&*'), 'cannot have name with unusual chars');
        // startingClaimPrice, claimPriceAdjustPerMille, commissionPerMille, curseIncubationDuration
        /*
          function validateProposedThroneRules(
              uint _startingClaimPriceWei,
              uint _claimPriceAdjustPercent,
              uint _curseIncubationDurationSeconds,
              uint _commissionPerThousand
          ) constant returns (bool allowed) { .. }
        */
        helper.assert.equal(true, this.world.validateProposedThroneRules(
          helper.math.toWei('0.2','ether'),
          500,
          7*24*60*60,
          20
        ), 'reasonable config');
        helper.assert.equal(false, this.world.validateProposedThroneRules(
          helper.math.toWei('100','wei'),
          500,
          7*24*60*60,
          20
        ), 'starting price unreasonably low');
        helper.assert.equal(false, this.world.validateProposedThroneRules(
          helper.math.toWei('0.2','ether'),
          500,
          7*24*60*60,
          500
        ), 'comission unreasonably high');
        helper.assert.equal(false, this.world.validateProposedThroneRules(
          helper.math.toWei('0.2','ether'),
          500,
          60,
          200
        ), 'incubation duration too short');
      }
    ]
  });
  
};

exports = module.exports = TestWorld;
