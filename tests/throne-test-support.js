/* jslint node:true */
'use strict';

var ThronePropertiesFacade = require('../js/throne-properties-facade.js');

/*
 * TODO - document
*/

function ThroneTestSupport() {
}

// TODO - too low level, should just be getMonarch(throne, web3, monarchNumber) or similar
ThroneTestSupport.prototype.decodeMonarchArray = function(monarchArray, web3) {
  var thronePropertiesFacade = new ThronePropertiesFacade(null, web3);
  return thronePropertiesFacade.decodeMonarchArray(monarchArray);
};

// TODO - rename to getThroneConfig
ThroneTestSupport.prototype.decodeThroneConfig = function(throne, web3) {
  var thronePropertiesFacade = new ThronePropertiesFacade(throne, web3);
  return thronePropertiesFacade.getConfig();
};

// NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
ThroneTestSupport.prototype.decodeGazetteerEntry = function(gazetteerEntryArray, web3) {
  return {
    throneName: web3.toAscii(gazetteerEntryArray[0]),
    throneContractAddress:   gazetteerEntryArray[1],
    creationPricePaid:       gazetteerEntryArray[2],
    creationTimestamp:       gazetteerEntryArray[3]
  };
};

ThroneTestSupport.prototype._createThrone = function(helper, configObj) {
  return helper.txn.createContractInstance('KingOfTheEtherThrone', [
    configObj.wizardAddress,
    configObj.deityAddress,
    configObj.startingClaimPrice,
    configObj.claimPriceAdjustPerMille,
    configObj.commissionPerMille,
    configObj.incubationDuration,
    configObj.failedPaymentRingfenceDuration,
    configObj.throneMakerAddress
  ]);
};

ThroneTestSupport.prototype.createStandardTestThrone = function(helper) {
  return this.createStandardTestThroneExcept(helper, {});
};

ThroneTestSupport.prototype.createStandardTestThroneExcept = function(helper, nonStandardConfig) {
  var config = {
    wizardAddress: helper.account.master,
    deityAddress: helper.account.master,
    startingClaimPrice: helper.math.toWei('1','ether'),
    claimPriceAdjustPerMille: '500',
    commissionPerMille: '20',
    incubationDuration: '180',
    failedPaymentRingfenceDuration: '240',
    throneMakerAddress: 0
  };
  for (var name in nonStandardConfig) {
    if (nonStandardConfig.hasOwnProperty(name)) {
      var value = nonStandardConfig[name];
      config[name] = value;
    }
  }
  return this._createThrone(helper, config);
};

exports = module.exports = ThroneTestSupport;
