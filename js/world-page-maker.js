/* jslint node:true */
'use strict';

var fse = require('fs-extra');
var nunjucks = require('nunjucks');
var HumanFormatter = require('./human-formatter.js');
var ThronePageMaker = require('./throne-page-maker.js');

/*
 * Creates webpage listing all the kingdoms.
*/

function WorldPageMaker(
  rootData,
  templatesDirname,
  worldDirname,
  web3
) {
  this.rootData = rootData;
  this.templatesDirname = templatesDirname;
  this.worldDirname = worldDirname;
  this.web3 = web3;
  this.humanFormatter = new HumanFormatter(web3);
}

WorldPageMaker.prototype.make = function() {

  console.log('Using template to generate world page ...');

  var worldData = this.rootData.world;
  var worldTemplateFilename = this.templatesDirname + '/world.nunjucks.html';
  var worldTemplateSource = fse.readFileSync(worldTemplateFilename, 'utf8');
  var worldContext = {
    LastUpdated: this.humanFormatter.formatTimestamp(this.rootData.meta.blockTimestamp),
    KingdomCreationFee: this.humanFormatter.formatAmountWei(worldData.kingdomCreationFeeWei),
    WorldContract: worldData.worldContract,
    WorldContractJsonInterface: worldData.worldContractAbi,
    TheKingdoms: worldData.kingdoms.map(this._makeKingdomContext, this)
  };
  var worldHtml = nunjucks.renderString(worldTemplateSource, worldContext);

  console.log('Writing world page ...');
  fse.writeFileSync(this.worldDirname + '/world.html', worldHtml, 'utf8');
};

WorldPageMaker.prototype._makeKingdomContext = function(kingdomData) {
  return {
    Number: kingdomData.kingdomNumber,
    Name: kingdomData.kingdomName,
    RelativeUrl: '/thrones/' + ThronePageMaker.makeSafeKingdomKey(kingdomData.kingdomName) + '/',
    CurrentClaimPrice: this.humanFormatter.formatAmountWei(kingdomData.currentClaimPriceWei)
  };
};

exports = module.exports = WorldPageMaker;
