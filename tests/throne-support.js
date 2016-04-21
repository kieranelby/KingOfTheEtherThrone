/* jslint node:true */
'use strict';

function ThroneSupport() {
}

  // NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
ThroneSupport.prototype.decodeMonarchArray = function(monarchArray, web3) {
  return {
    compensationAddress:   monarchArray[0],
    originAddress:         monarchArray[1],
    name:     web3.toAscii(monarchArray[2]),
    claimPrice:            monarchArray[3],
    coronationTimestamp:   monarchArray[4],
    compensationStatus:    monarchArray[5],
    compensationTimestamp: monarchArray[6],
    compensationPaid:      monarchArray[7] // TODO - rename to compensationAmount
  };
};

  // NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
ThroneSupport.prototype.decodeThroneConfig = function(configArray, web3) {
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

  // NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
ThroneSupport.prototype.decodeGazetteerEntry = function(gazetteerEntryArray, web3) {
  return {
    throneName: web3.toAscii(gazetteerEntryArray[0]),
    throneContractAddress:   gazetteerEntryArray[1],
    creationPricePaid:       gazetteerEntryArray[2],
    creationTimestamp:       gazetteerEntryArray[3]
  };
};

ThroneSupport.prototype._createThrone = function(helper, configObj) {
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

ThroneSupport.prototype.createStandardTestThrone = function(helper) {
  return this.createStandardTestThroneExcept(helper, {});
};

ThroneSupport.prototype.createStandardTestThroneExcept = function(helper, nonStandardConfig) {
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

exports = module.exports = ThroneSupport;
