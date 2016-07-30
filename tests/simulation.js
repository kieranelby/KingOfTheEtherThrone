/* jslint node:true */
'use strict';

/*
 * A (cut-down) reference javascript implementation of the throne
*/
function Simulation(_realThrone, _topWizard, _subWizard, _players, _startingClaimPriceWei, _claimPriceAdjustPercent, _gasPrice) {
  this.realThrone = _realThrone;
  this.throneAddress = _realThrone.address;
  this.topWizard = _topWizard;
  this.subWizard = _subWizard;
  this.players = _players;
  this.startingClaimPriceWei = _startingClaimPriceWei;
  this.claimPriceAdjustPercent = _claimPriceAdjustPercent;
  this.commissionPerThousand = 20;
  this.gasPrice = _gasPrice;
  this.participants = [ this.realThrone.address, this.topWizard, this.subWizard ].concat(this.players);
  this.ethBalanceMap = {};
  this.ethBalanceUncertaintyMap = {};
  this.heldFundsMap = {};
  this.monarchs = [];
}

Simulation.prototype.readStartingBalances = function(helper) {
  var self = this;
  this.participants.forEach(function (addr) {
    self.ethBalanceMap[addr] = helper.account.getBalance(addr);
    self.ethBalanceUncertaintyMap[addr] = helper.math.toNumber('0');
    self.heldFundsMap[addr] = helper.math.toNumber('0');
  });
};

Simulation.prototype.isLivingMonarch = function(helper) {
  if (this.monarchs.length === 0) {
    return false;
  }
  // TODO - check time!
  return true;
};

Simulation.prototype.lastMonarch = function() {
  return this.monarchs[this.monarchs.length - 1];
};

Simulation.prototype.claimThrone = function(helper, name, forAddress, value, maxGas) {
  var commission;
  var compensation;
  if (!this.isLivingMonarch(helper)) {
    commission = value;
    compensation = helper.math.toNumber('0');
  } else {
    commission = value.times(this.commissionPerThousand).dividedBy('1000');
    compensation = value.minus(commission);
    this._creditEther(this.lastMonarch().compensationAddress, compensation);
  }
  this._creditEther(this.throneAddress, commission);
  this._creditHeldFunds(this.topWizard, commission.dividedBy(2));
  this._creditHeldFunds(this.subWizard, commission.dividedBy(2));
  this._debitEtherWithEstimatedGas(forAddress, value, 200000);
  this.monarchs.push({
    compensationAddress: forAddress
  });
};

Simulation.prototype._creditEther = function(address, value) {
  this.ethBalanceMap[address] = this.ethBalanceMap[address].plus(value);
};

Simulation.prototype._debitEtherWithEstimatedGas = function(address, value, estimatedGas) {
  var gasCost = this.gasPrice.times(estimatedGas);
  this.ethBalanceMap[address] = this.ethBalanceMap[address].minus(value).minus(gasCost);
  this.ethBalanceUncertaintyMap[address] = this.ethBalanceUncertaintyMap[address].plus(gasCost.times('0.2'));
};

Simulation.prototype._creditHeldFunds = function(address, value) {
  this.heldFundsMap[address] = this.heldFundsMap[address].plus(value);
};

Simulation.prototype._debitHeldFunds = function(address, value) {
  this.heldFundsMap[address] = this.heldFundsMap[address].minus(value);
};

Simulation.prototype._nameOf = function(address) {
  if (address === this.throneAddress) {
    return 'the throne';
  }
  if (address === this.topWizard) {
    return 'the topWizard';
  }
  if (address === this.subWizard) {
    return 'the subWizard';
  }
  for (var i = 0; i < this.players.length; i++) {
    if (address === this.players[i]) {
      return 'player ' + i;
    }
  }
  return address;
};

Simulation.prototype.crossCheck = function(helper) {
  var self = this;
  this.participants.forEach(function (addr) {
    var actualBalance = helper.account.getBalance(addr);
    helper.math.assertRoughlyEqual(
      self.ethBalanceMap[addr],
      actualBalance,
      self.ethBalanceUncertaintyMap[addr],
      'balance divergence for ' + self._nameOf(addr)
    );
    var actualFundsHeld = self.realThrone.fundsOf(addr);
    helper.math.assertEqual(
      self.heldFundsMap[addr],
      actualFundsHeld,
      'held funds divergence for ' + self._nameOf(addr)
    );
  });
};

exports = module.exports = Simulation;
