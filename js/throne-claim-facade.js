/* jslint node:true */
'use strict';

var EtherFormatter = require('ether-formatter.js');

// Returned from ThroneClaimFacade.prototype.makeClaimCost / getCurrentClaimCost
function ThroneClaimCost(etherFormatter, claimAmountWei, gasQuantity) {
  self.etherFormatter = etherFormatter;
  self.claimAmountWei = claimAmountWei;
  self.claimAmountHuman = etherFormatter.formatAmount(self.claimAmountWei);
  self.gasQuantity = gasQuantity;
}

// Returned from throneClaimFacade.claim(...).
// status can be:
// FAILED
// WAITING
// SUCCESS
// UNKNOWN
// ...
// ?
// user questions: is final? did it cost me anything?
function ThroneClaimAttempt(throneClaimFacade, name, proposedClaimCost, status, message) {
  this.throneClaimFacade = throneClaimFacade;
  this.name = name;
  this.proposedClaimCost = proposedClaimCost;
  this.status = status;
  this.message = message;
  this.txnHash = undefined;
  this.actualClaimCost = undefined;
}

ThroneClaimAttempt.prototype.isFinal() {
  if (this.status === 'WAITING') {
    return false;
  } else {
    return true;
  }
};

ThroneClaimAttempt.prototype._recordNotCharged() {
  this.actualClaimCost = this.throneClaimFacade.makeClaimCost(0, 0);
};

/*
 * TODO - document
*/

function ThroneClaimFacade(throne, web3) {
  this.throne = throne;
  this.web3 = web3;
  this.etherFormatter = new EtherFormatter(web3);
}

// TODO

ThroneClaimFacade.prototype.getCurrentClaimCost = function() {
  return this.makeClaimCost(this.throne.currentClaimPrice());
}

ThroneClaimFacade.prototype.makeClaimCost = function(claimAmountWei, optionalGasQuantity) {
  var gasQuantity;
  if (optionalGasQuantity) {
    gasQuantity = optionalGasQuantity;
  } else {
    gasQuantity = this.getRecommendedGasQuantity();
  }
  return new ThroneClaimCost(this.etherFormatter, this.web3.toBigNumber(claimAmountWei), gasQuantity);
}

// Use getCurrentClaimCost/makeClaimCost to get a proposedClaimCost ...
ThroneClaimFacade.prototype.validateProposedClaim = function(monarchName, proposedClaimCost) {

  var nameMessage = 'proposed name is not allowed; must be between one and thirty characters and contain only Roman letters, numbers, spaces and the symbols - . ! \' _'

  if (monarchName.length < 1) {
    throw new Error(nameMessage);
  }

  if (monarchName.length > 30) {
    throw new Error(nameMessage);
  }

  var validNameRe = /^[a-zA-Z0-9_!'.-]+$/;
  if (!monarchName.match(validNameRe)) {
    throw new Error(nameMessage);
  }
  
  if (!this.throne.validateName(this.web3.fromAscii(monarchName))) {
    throw new Error(nameMessage);
  }
  
  var currentClaimCost = this.getClaimCost();
  if (currentClaimCost.claimAmountWei.cmp(proposedClaimAmountWei) != 0) {
    throw new Error('proposed claim price is incorrect or out of date; should be ' + currentClaimCost.claimAmountHuman);
  }

  return true;
};

ThroneClaimFacade.prototype.getRecommendedGasQuantity = function() {
  return 250000;
}

// Use getCurrentClaimCost/makeClaimCost to get a proposedClaimCost ...
ThroneClaimFacade.prototype.claim = function(monarchName, proposedClaimCost) {
  var attempt = new ThroneClaimAttempt(this, monarchName, proposedClaimCost, 'UNKNOWN', 'an unexpected problem occurred');
  try {
    this.validateProposedClaim(monarchName, proposedClaimCost);
  } catch (e) {
    attempt.status = 'FAILED';
    attempt.message = e.message;
    attempt._recordNotCharged();
    return attempt;
  }
  try {
    var txnObj = {
      value: proposedClaimCost.claimAmountWei,
      gas: proposedClaimCost.gasQuantity
    };
    attempt.txnHash = this.throne.claim(this.web3.fromAscii(monarchName), txnObj);
  } catch (e) {
    attempt.status = 'FAILED';
    attempt.message = e.message;
    // I don't think we can have submitted a transaction if we got an exception ... right?
    attempt._recordNotCharged();
    return attempt;
  }
  if (!attempt.txnHash) {
    attempt.status = 'UNKNOWN';
    attempt.message = 'tried to call throne contract claim method via your client, but no transaction hash was returned';
  } else {
    attempt.status = 'WAITING';
    attempt.message = 'waiting for the throne contract claim transaction to reach other nodes and be mined';
  }
  return attempt;
};

exports = module.exports = ThroneClaimFacade;
