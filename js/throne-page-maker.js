/* jslint node:true */
'use strict';

var fse = require('fs-extra');
var nunjucks = require('nunjucks');
var HumanFormatter = require('./human-formatter.js');

/*
 * Turns kingdom data into a webpage.
*/

function ThronePageMaker(
  rootData,
  customisations,
  kingdomData,
  templatesDirname,
  kingdomsDirname,
  web3
) {
  this.rootData = rootData;
  this.customisations = customisations;
  this.kingdomData = kingdomData;
  this.templatesDirname = templatesDirname;
  this.kingdomsDirname = kingdomsDirname;
  this.web3 = web3;
  this.humanFormatter = new HumanFormatter(web3);
}

ThronePageMaker.prototype.make = function() {

  console.log('Using template to generate throne page for kingdom #' + this.kingdomData.kingdomNumber + ' ...');
  
  var throneTemplateFilename = this.templatesDirname + '/throne.nunjucks.html';
  var throneTemplateSource = fse.readFileSync(throneTemplateFilename, 'utf8');
  var monarchsData = this.kingdomData.monarchs;
  var exampleCurrentClaimPriceWei = this.web3.toBigNumber(this.web3.toWei('10', 'ether'));
  var exampleIncreaseFactor = this.web3.toBigNumber(this.kingdomData.rules.claimPriceAdjustPercent).plus('100').dividedBy('100');
  var exampleNextClaimPriceWei = exampleCurrentClaimPriceWei.times(exampleIncreaseFactor);
  var throneCustomisation = this._getThroneCustomisation();
  var throneContext = {
    'ThroneName': this.kingdomData.kingdomName,
    'MainBackgroundColor': throneCustomisation.mainBackgroundColor,
    'FullMonarchTitle': throneCustomisation.fullMonarchTitle,
    'ExampleCurrentClaimPrice': this.humanFormatter.formatAmountWei(exampleCurrentClaimPriceWei),
    'ExampleNextClaimPrice': this.humanFormatter.formatAmountWei(exampleNextClaimPriceWei),
    'StartingClaimPrice': this.humanFormatter.formatAmountWei(this.kingdomData.rules.startingClaimPriceWei),
    'MaximumClaimPrice': this.humanFormatter.formatAmountWei(this.kingdomData.rules.maximumClaimPriceWei),
    'ClaimPriceAdjustPercent': this.humanFormatter.formatPercent(this.kingdomData.rules.claimPriceAdjustPercent),
    'CurseIncubationDuration': this.humanFormatter.formatDurationSeconds(this.kingdomData.rules.curseIncubationDurationSeconds),
    'CommissionPercent': this.humanFormatter.formatPerThousand(this.kingdomData.rules.commissionPerThousand),
    'LastUpdated': this.humanFormatter.formatTimestamp(this.rootData.meta.blockTimestamp),
    'IsLivingMonarch': this.kingdomData.isLivingMonarch,
    'HasBeenAMonarch': (monarchsData.length > 0),
    'CurrentClaimPrice': this.humanFormatter.formatAmountWei(this.kingdomData.currentClaimPriceWei),
    'CurrentClaimPriceEther': this.web3.fromWei(this.kingdomData.currentClaimPriceWei, 'ether').toString(),
    'CurrentClaimPriceFinney': this.kingdomData.currentClaimPriceFinney,
    'CurrentMonarch': undefined,
    'HallOfMonarchs': [],
    'ThroneContractAddress': this.kingdomData.kingdomContract,
    'ThroneContractChainExplorerLink': 'https://etherscan.io/address/' + this.kingdomData.kingdomContract,
    'ThroneContractJsonInterface': this.kingdomData.kingdomContractAbi,
    'ThroneCreationPrice': this.humanFormatter.formatAmountWei(this.rootData.world.kingdomCreationFeeWei)
  };
  var numberOfMonarchs = monarchsData.length;
  if (numberOfMonarchs > 0) {
    throneContext.HallOfMonarchs = monarchsData.map(function (monarchData, monarchIndex, junk) {
      return this._makeMonarchContext(monarchData, monarchIndex);
    }, this).reverse();
    if (this.kingdomData.isLivingMonarch) {
      var currentMonarchIndex = numberOfMonarchs - 1;
      var currentMonarchData = monarchsData[currentMonarchIndex];
      throneContext.CurrentMonarch = this._makeMonarchContext(currentMonarchData, currentMonarchIndex);
    }
  }
  var throneHtml = nunjucks.renderString(throneTemplateSource, throneContext);

  var kingdomDirname = this.kingdomsDirname + '/' + ThronePageMaker.makeSafeKingdomKey(this.kingdomData.kingdomName);
  console.log('Creating throne directory ' + kingdomDirname + ' ...');
  fse.mkdirSync(kingdomDirname);

  console.log('Writing throne index page ...');
  fse.writeFileSync(kingdomDirname + '/index.html', throneHtml, 'utf8');
};

ThronePageMaker.prototype._getThroneCustomisation = function() {
  var safeKingdomKey = ThronePageMaker.makeSafeKingdomKey(this.kingdomData.kingdomName);
  var defaultCustomisation = this.customisations['_default_'];
  var throneCustomisation = this.customisations[safeKingdomKey];
  if (!throneCustomisation) {
    throneCustomisation = {};
  }
  for (var name in defaultCustomisation) {
    if (defaultCustomisation.hasOwnProperty(name) && !throneCustomisation.hasOwnProperty(name)) {
      throneCustomisation[name] = defaultCustomisation[name];
    }
  }
  return throneCustomisation;
};

ThronePageMaker.prototype._makeMonarchContext = function(monarchData, monarchIndex, junk) {
  return {
    'Number': monarchData.monarchNumber,
    'Name': monarchData.name,
    'CompensationAddress': monarchData.compensationAddress,
    // NB: strictly speaking they might have paid a tiny bit more:
    'ClaimPricePaid': this.humanFormatter.formatAmountWei(monarchData.claimPriceWei),
    'CoronationTime': this.humanFormatter.formatTimestamp(monarchData.coronationTimestamp),
    'ProfitMade': this._computeProfitMade(monarchData)
  };
};

ThronePageMaker.prototype._computeProfitMade = function(monarchData) {
  var compensationWei = this.web3.toBigNumber(monarchData.compensationWei);
  var claimPriceWei = this.web3.toBigNumber(monarchData.claimPriceWei);
  if (compensationWei.lessThanOrEqualTo(claimPriceWei)) {
    return '';
  }
  var profitWei = compensationWei.minus(claimPriceWei);
  return this.humanFormatter.formatAmountWei(profitWei);
};

// Assumes that the name follows the rules used in the
// NameableMixin contract - otherwise collisions are likely!
ThronePageMaker.makeSafeKingdomKey = function(kingdomName) {
  var key = '';
  for (var i = 0; i < kingdomName.length; i++) {
    var b = kingdomName.charCodeAt(i);
    if (b >= 48 && b <= 57) {
      // 0-9
      key += String.fromCharCode(b);
    } else if (b >= 65 && b <= 90) {
      // fold A-Z to a-z
      var lower = b + 32;
      key += String.fromCharCode(lower);
    } else if (b >= 97 && b <= 122) {
      // a-z
      key += String.fromCharCode(b);
    }
    // ignore others
  }
  return key;
};

exports = module.exports = ThronePageMaker;
