/* jslint node:true */
'use strict';

var ThronePropertiesFacade = require('../js/throne-properties-facade.js');

/*
 * Provides some handy function for setting up test conditions
 * and performing assertions (it also indirectly tests some of
 * our interface code like ThronePropertiesFacade ...).
*/

function ThroneTestSupport() {
}

  /*
    struct Monarch {
        // where to send their compensation
        address compensationAddress;
        // their name
        string name;
        // when they became our ruler
        uint coronationTimestamp;
        // the claim price paid (excluding any over-payment)
        uint claimPriceWei;
        // the compensation sent to or held for them so far
        uint compensationWei;
    }
  */  
ThroneTestSupport.prototype.getMonarch = function(throne, web3, monarchNumber) {
  var thronePropertiesFacade = new ThronePropertiesFacade(throne, web3);
  return thronePropertiesFacade.getMonarch(monarchNumber);
};

ThroneTestSupport.prototype.decodeThroneRules = function(throne, web3) {
  var thronePropertiesFacade = new ThronePropertiesFacade(throne, web3);
  return thronePropertiesFacade.getRules();
};

ThroneTestSupport.prototype.getTopWizardBalance = function(throne) {
  return throne.fundsOf(throne.topWizard());
};

ThroneTestSupport.prototype.getSubWizardBalance = function(throne) {
  return throne.fundsOf(throne.subWizard());
};

ThroneTestSupport.prototype._createThrone = function(helper, configObj) {
  
  /*
      function Kingdom(
        string _kingdomName,
        address _world,
        address _topWizard,
        address _subWizard,
        uint _startingClaimPriceWei,
        uint _maximumClaimPriceWei,
        uint _claimPriceAdjustPercent,
        uint _curseIncubationDurationSeconds,
        uint _commissionPerThousand
    ) {
  */
  return helper.txn.createContractInstance('Kingdom', [
    "test",
    configObj.worldAddress,
    configObj.topWizardAddress,
    configObj.subWizardAddress,
    configObj.startingClaimPrice,
    configObj.maximumClaimPrice,
    configObj.claimPriceAdjustPercent,
    configObj.curseIncubationDurationSeconds,
    configObj.commissionPerThousand
  ]);
};

ThroneTestSupport.prototype.createStandardTestThrone = function(helper) {
  return this.createStandardTestThroneExcept(helper, {});
};

ThroneTestSupport.prototype.createStandardTestThroneExcept = function(helper, nonStandardConfig) {
  var config = {
    worldAddress: 0,
    topWizardAddress: helper.account.master,
    subWizardAddress: helper.account.master,
    startingClaimPrice: helper.math.toWei('1','ether'),
    maximumClaimPrice: helper.math.toWei('1000','ether'),
    claimPriceAdjustPercent: '50',
    commissionPerThousand: '20',
    curseIncubationDurationSeconds: '180'
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
