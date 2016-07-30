/* jslint node:true */
'use strict';

var Random = require('random-js');
var Simulation = require('./simulation.js');

/*
 * TODO - document
*/

function TestThroneFuzz() {
}

TestThroneFuzz.prototype.addTests = function(runner, throneTestSupport) {

  var setUpSteps = [
      function(helper) {
        this.topWizard = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.subWizard = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.startingClaimPriceWei = helper.math.toWei('0.1', 'ether');
        this.claimPriceAdjustPercent = 10;
        this.throne = throneTestSupport.createStandardTestThroneExcept(helper, {
          topWizardAddress: this.topWizard,
          subWizardAddress: this.subWizard,
          startingClaimPrice: this.startingClaimPriceWei,
          claimPriceAdjustPercent: this.claimPriceAdjustPercent
        });
        this.players = [
          helper.account.createWithJustOver(helper.math.toWei('1', 'ether')),
          helper.account.createWithJustOver(helper.math.toWei('1', 'ether')),
          helper.account.createWithJustOver(helper.math.toWei('1', 'ether')),
        ];
        this.gasPrice = helper.txn.rawWeb3.eth.gasPrice;
      },
      function(helper) {
        this.simulation = new Simulation(
          this.throne,
          this.topWizard,
          this.subWizard,
          this.players,
          this.startingClaimPriceWei,
          this.claimPriceAdjustPercent,
          this.gasPrice
        );
        this.simulation.readStartingBalances(helper);
        // TODO - move these functions somewhere more sane
        var self = this;
        this.claimThrones = function(_helper, name, address, value) {
          var gas = 300000;
          self.throne.claimThrone(name, {
            from: address,
            value: value,
            gas: gas
          });
          self.simulation.claimThrone(_helper, name, address, value, gas);
        };
        this.crossCheck = function(_helper) {
          self.simulation.crossCheck(_helper);
        };
      }
  ];

  var seed = 12345;
  var numSteps = 12;
  var fuzzSteps = this._generateFuzzSteps(runner, throneTestSupport, seed, numSteps);

  runner.addTest({
    title: 'Fuzz test #' + seed + ' for ' + numSteps,
    categories: ['fuzz', 'inprogress'],
    steps: setUpSteps.concat(fuzzSteps)
  });

};

TestThroneFuzz.prototype._generateFuzzSteps = function(runner, throneTestSupport, seed, numSteps) {
  // TODO - generate steps that run through a long semi-random scenario and check no eth gets lost/stuck,
  // using an independent JS implementation of the desired contract logic for comparison ...
  var steps = [];
  var rngEngine = Random.engines.mt19937();
  rngEngine.seed(seed);
  for (var i = 0; i < numSteps; i++) {
    var step = this._generateFuzzStep(runner, throneTestSupport, rngEngine);
    steps.push(step);
  }
  return steps;
};

TestThroneFuzz.prototype._generateFuzzStep = function(runner, throneTestSupport, rngEngine) {

  var playerNum = Random.integer(0, 2)(rngEngine);
  var randomAction = function(helper) {
    this.claimThrones(helper, 'player' + playerNum, this.players[playerNum], this.throne.currentClaimPriceWei());
  };
  var step = function(helper) {
    this.crossCheck(helper);
    randomAction.call(this, helper);
  };
  return step;
};

exports = module.exports = TestThroneFuzz;
