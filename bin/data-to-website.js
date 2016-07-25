// Script to rebuild the public static website content from world.json.

var fse = require('fs-extra');
var Web3 = require('web3');

var ThronePageMaker = require('../js/throne-page-maker.js');
var WorldPageMaker = require('../js/world-page-maker.js');

// only needed to help with formatting
var web3 = new Web3();

var worldDataFilename = 'tests/sample-data/world.json';

console.log('Reading world data file ' + worldDataFilename + '...');
var rootData = JSON.parse(fse.readFileSync(worldDataFilename, 'utf8'));

var generatedDirname = 'generated';
console.log('Creating/wiping generated directory ' + generatedDirname + ' ...');
fse.emptyDirSync(generatedDirname);

console.log('Copying public content to generated directory ...');
fse.copySync('public', generatedDirname, {preserveTimestamps:true, clobber:false});

var kingdomsDirname = generatedDirname + '/thrones';
console.log('Creating kingdoms directory ' + kingdomsDirname + ' ...');
fse.mkdirSync(kingdomsDirname);
// TODO - do we want an index page here?

var templatesDirname = 'templates';

rootData.world.kingdoms.forEach(function (kingdomData) {

  var thronePageMaker = new ThronePageMaker(
    rootData,
    kingdomData,
    templatesDirname,
    kingdomsDirname,
    web3
  );
  thronePageMaker.make();

});

var worldDirname = generatedDirname;
var worldPageMaker = new WorldPageMaker(
  rootData,
  templatesDirname,
  worldDirname,
  web3
);
worldPageMaker.make();