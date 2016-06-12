/* jslint node:true */
'use strict';

/*
 * TODO - document
*/

function ThronePropertiesFacade(throne, web3) {
  this.throne = throne;
  this.web3 = web3;
}

ThronePropertiesFacade.prototype.getConfig = function() {
  var configArray = this.throne.config();
  return {
    wizardAddress:                  configArray[0],
    deityAddress:                   configArray[1],
    startingClaimPrice:             configArray[2],
    claimPriceAdjustPerMille:       configArray[3],
    commissionPerMille:             configArray[4],    
    curseIncubationDuration:        configArray[5],
    failedPaymentRingfenceDuration: configArray[6],
    throneMaker:                    configArray[7]
  };
};

ThronePropertiesFacade.prototype.getCurrentClaimPrice = function() {
  return this.throne.currentClaimPrice();
};

ThronePropertiesFacade.prototype.isLivingMonarch = function() {
  return this.throne.isLivingMonarch();
};

ThronePropertiesFacade.prototype.getMostRecentMonarch = function() {
  var numMonarchs = this.getNumberOfMonarchs();
  if (numMonarchs == 0) {
    return null;
  } else {
    return this.getMonarch(numMonarchs - 1);
  }
};

ThronePropertiesFacade.prototype.getNumberOfMonarchs = function() {
  return this.throne.numberOfMonarchs();
};

ThronePropertiesFacade.prototype.getMonarchs = function() {
  var monarchs = [];
  for (var i = 0; i < this.getNumberOfMonarchs(); i++) {
    monarchs.push(this.getMonarch(i));
  }
  return monarchs;
};

ThronePropertiesFacade.prototype.getMonarch = function(monarchIndex) {
  return this._decodeMonarchArray(this.throne.monarchs(monarchIndex));
};

// TODO - this is too low-level
ThronePropertiesFacade.prototype._decodeMonarchArray = function(monarchArray) {
  return {
    compensationAddress:        monarchArray[0],
    originAddress:              monarchArray[1],
    name:     this.web3.toAscii(monarchArray[2]),
    claimPrice:                 monarchArray[3],
    coronationTimestamp:        monarchArray[4],
    compensationStatus:         monarchArray[5],
    compensationTimestamp:      monarchArray[6],
    compensationAmount:         monarchArray[7]
  };
};

exports = module.exports = ThronePropertiesFacade;
