/* jslint node:true, mocha:true */
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
    compensationPaid:      monarchArray[7]
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
ThroneSupport.prototype.decodeGazetteerEntry = function decodeGazetteerEntry(gazetteerEntryArray, web3) {
  return {
    throneName: web3.toAscii(gazetteerEntryArray[0]),
    throneContractAddress:   gazetteerEntryArray[1],
    creationPricePaid:       gazetteerEntryArray[2],
    creationTimestamp:       gazetteerEntryArray[3]
  };
};

ThroneSupport.prototype.createStandardTestThrone = function createStandardTestThrone(helper) {
  // wizardAddress,
  // deityAddress,
  // startingClaimPrice,
  // claimPriceAdjustPerMille,
  // commissionPerMille,
  // incubationDuration,
  // failedPaymentRingfenceDuration
  return helper.txn.createContractInstance('KingOfTheEtherThrone', [
    helper.account.master,
    helper.account.master,
    helper.math.toWei('1','ether'),
    '500',
    '20',
    '180',
    '240',
    0
  ]);
};

exports = module.exports = ThroneSupport;
