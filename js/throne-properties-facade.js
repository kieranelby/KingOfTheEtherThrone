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
  // TODO
};

ThronePropertiesFacade.prototype.isLivingMonarch = function() {
  // TODO
};

ThronePropertiesFacade.prototype.getMostRecentMonarch = function() {
  // TODO
};

ThronePropertiesFacade.prototype.getMonarchs = function() {
  // TODO
};

// TODO - this is too low-level
ThronePropertiesFacade.prototype.decodeMonarchArray = function(monarchArray) {
  return {
    compensationAddress:        monarchArray[0],
    originAddress:              monarchArray[1],
    name:     this.web3.toAscii(monarchArray[2]),
    claimPrice:                 monarchArray[3],
    coronationTimestamp:        monarchArray[4],
    compensationStatus:         monarchArray[5],
    compensationTimestamp:      monarchArray[6],
    compensationPaid:           monarchArray[7] // TODO - rename to compensationAmount
  };
};

exports = module.exports = ThronePropertiesFacade;
