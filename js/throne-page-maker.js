/* jslint node:true */
'use strict';

var fse = require('fs-extra');
var nunjucks = require('nunjucks');

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
}

ThronePageMaker.prototype.make = function() {

  console.log('Using template to generate throne page for kingdom #' + this.kingdomData.kingdomNumber + ' ...');

  var throneTemplateFilename = this.templatesDirname + '/throne.nunjucks.html';
  var throneTemplateSource = fse.readFileSync(throneTemplateFilename, 'utf8');
  var throneContext = {
    'ThroneName': this.kingdomData.kingdomName,
    'ExampleCurrentClaimPrice': '10 ETHER',
    'ExampleNextClaimPrice': '15 ETHER',
    'StartingClaimPrice': '500 FINNEY',
    'ClaimPriceAdjustPercent': '50%',
    'CurseIncubationDuration': '28 days',
    'IsLivingMonarch': true,
    'LastUpdated': '2016-09-06 22:08 UTC',
    'CurrentMonarch': {
      'Name': 'Fred'
    },
    'HallOfMonarchs': [
      {
        'Number': '2',
        'Name': 'Fred',
        'ClaimPricePaid': '1 ETHER'
      },
      {
        'Number': '1',
        'Name': 'Bob',
        'ClaimPricePaid': '500 FINNEY'
      }
    ],
    'ThroneContractAddress': 'TODO',
    'ThroneContractJsonInterface': 'TODO',
    'CommissionPercent': '2%',
    'ThroneCreationPrice': '1 ETHER'
  };
  var throneHtml = nunjucks.renderString(throneTemplateSource, throneContext);

  var kingdomDirname = this.kingdomsDirname + '/' + ThronePageMaker.makeSafeKingdomKey(this.kingdomData.kingdomName);
  console.log('Creating throne directory ' + kingdomDirname + ' ...');
  fse.mkdirSync(kingdomDirname);

  console.log('Writing throne index page ...');
  fse.writeFileSync(kingdomDirname + '/index.html', throneHtml, 'utf8');
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
