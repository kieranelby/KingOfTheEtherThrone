/* jslint node:true */
'use strict';

/*
 * Wraps the Kingdom contract to make reading rules and monarch info easier.
*/

function ThronePropertiesFacade(throne, web3) {
  this.throne = throne;
  this.web3 = web3;
}

ThronePropertiesFacade.prototype.getRules = function() {
  var rulesArray = this.throne.rules();
  /*
      struct ThroneRules {
        uint startingClaimPriceWei;
        uint maximumClaimPriceWei;
        uint claimPriceAdjustPercent;
        uint curseIncubationDurationSeconds;
        uint commissionPerThousand;
    }
  */
  return {
    startingClaimPrice:             rulesArray[0],
    maximumClaimPriceWei:           rulesArray[1],
    claimPriceAdjustPercent:        rulesArray[2],    
    curseIncubationDurationSeconds: rulesArray[3],
    commissionPerThousand:          rulesArray[4]
  };
};

ThronePropertiesFacade.prototype.getMonarchs = function() {
  var monarchs = [];
  for (var i = 1; i <= this.getNumberOfMonarchs(); i++) {
    monarchs.push(this.getMonarch(i));
  }
  return monarchs;
};

ThronePropertiesFacade.prototype.getMonarch = function(monarchNumber) {
  return this._decodeMonarchArray(this.throne.monarchsByNumber(monarchNumber));
};

ThronePropertiesFacade.prototype._decodeMonarchArray = function(monarchArray, monarchNumber) {
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
  return {
    monarchNumber:              monarchNumber,
    compensationAddress:        monarchArray[0],
    name:                       monarchArray[1],
    coronationTimestamp:        monarchArray[2],
    claimPriceWei:              monarchArray[3],
    compensationWei:            monarchArray[4]
  };
};

exports = module.exports = ThronePropertiesFacade;
