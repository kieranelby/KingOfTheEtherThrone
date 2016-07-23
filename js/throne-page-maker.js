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
  kingdomData,
  templatesDirname,
  kingdomsDirname,
  web3
) {
  this.rootData = rootData;
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
  var throneContext = {
    'ThroneName': this.kingdomData.kingdomName,
    'ExampleCurrentClaimPrice': '10 ETHER',
    'ExampleNextClaimPrice': '15 ETHER',
    'StartingClaimPrice': this.humanFormatter.formatAmountWei(this.kingdomData.rules.startingClaimPriceWei),
    'ClaimPriceAdjustPercent': this.humanFormatter.formatPercent(this.kingdomData.rules.claimPriceAdjustPercent),
    'CurseIncubationDuration': this.humanFormatter.formatDurationSeconds(this.kingdomData.rules.curseIncubationDurationSeconds),
    'CommissionPercent': this.humanFormatter.formatPerThousand(this.kingdomData.rules.commissionPerThousand),
    'LastUpdated': this.humanFormatter.formatTimestamp(this.rootData.meta.blockTimestamp),
    'IsLivingMonarch': this.kingdomData.isLivingMonarch,
    'HasBeenAMonarch': (monarchsData.length > 0),
    'CurrentClaimPrice': this.humanFormatter.formatAmountWei(this.kingdomData.currentClaimPriceWei),
    'CurrentMonarch': undefined,
    'HallOfMonarchs': [],
    'ThroneContractAddress': this.kingdomData.kingdomContract,
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

ThronePageMaker.prototype._makeMonarchContext = function(monarchData, monarchIndex, junk) {
  return {
    'Number': monarchData.monarchNumber,
    'Name': monarchData.name,
    'CompensationAddress': monarchData.compensationAddress,
    'ClaimPricePaid': this.humanFormatter.formatAmountWei(monarchData.claimPriceWei)
  };
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
