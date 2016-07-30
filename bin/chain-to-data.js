// Script to generate world.json from the blockchain.
// TODO

var Web3 = require('web3');
var fse = require('fs-extra');
var minimist = require('minimist');

var WorldPropertiesFacade = require('../js/world-properties-facade.js');
var ThronePropertiesFacade = require('../js/throne-properties-facade.js');

function chainToData(web3ProviderUrl, worldAddress) {
  console.log('Connecting to ethereum node at ' + web3ProviderUrl + ' ...');
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider(web3ProviderUrl));
  if (web3.eth.syncing) {
    throw new Error('your ethereum node is syncing; try later?');
  }
  var worldAbiFilename = 'contracts/World.abi';
  console.log('Reading world abi ' + worldAbiFilename + ' ...');
  var worldAbiText = fse.readFileSync(worldAbiFilename, 'utf8');
  var worldAbi = JSON.parse(worldAbiText);
  var World = web3.eth.contract(worldAbi);
  // one day we might to support different versions ...
  var kingdomAbiFilename = 'contracts/Kingdom.abi';
  console.log('Reading kingdom abi ' + kingdomAbiFilename + ' ...');
  var kingdomAbiText = fse.readFileSync(kingdomAbiFilename, 'utf8');
  var kingdomAbi = JSON.parse(kingdomAbiText);
  var Kingdom = web3.eth.contract(kingdomAbi);
  console.log('Reading world contract at ' + worldAddress + ' ...');
  var world = World.at(worldAddress);
  var worldPropertiesFacade = new WorldPropertiesFacade(world, web3);
  var root = {};
  root.meta = {};
  var now = new Date();
  root.meta.generatedTimestamp =  Math.floor(now.getTime() / 1000);
  var latestBlock = web3.eth.getBlock('latest');
  root.meta.blockNumber = latestBlock.number;
  root.meta.blockTimestamp = latestBlock.timestamp;
  root.world = {};
  root.world.worldContract = worldAddress;
  root.world.worldContractAbi = worldAbiText;
  root.world.topWizard = world.topWizard();
  root.world.kingdomCreationFeeWei = world.kingdomCreationFeeWei();
  root.world.kingdomFactory = world.kingdomFactory();
  root.world.kingdoms = [];
  var numberOfKingdoms = world.numberOfKingdoms();
  for (var kingdomNumber = 1; kingdomNumber <= numberOfKingdoms; kingdomNumber++) {
    var kingdomData = {};
    var kingdomEntry = worldPropertiesFacade.getKingdomEntry(kingdomNumber);
    kingdomData.kingdomNumber = kingdomEntry.kingdomNumber;
    kingdomData.kingdomName = kingdomEntry.kingdomName;
    kingdomData.kingdomContract = kingdomEntry.kingdomContractAddress;
    kingdomData.kingdomCreator = kingdomEntry.creator;
    kingdomData.creationTimestamp = kingdomEntry.creationTimestamp;
    kingdomData.kingdomFactoryUsed = kingdomEntry.kingdomFactoryUsed;
    kingdomData.kingdomContractAbi = kingdomAbiText;
    console.log('Reading throne contract at ' + kingdomEntry.kingdomContractAddress + ' ...');
    var kingdom = Kingdom.at(kingdomEntry.kingdomContractAddress);
    var thronePropertiesFacade = new ThronePropertiesFacade(kingdom, web3);
    kingdomData.topWizard = kingdom.topWizard();
    kingdomData.subWizard = kingdom.subWizard();
    kingdomData.isLivingMonarch = kingdom.isLivingMonarch();
    kingdomData.currentClaimPriceWei = kingdom.currentClaimPriceWei().toString();
    kingdomData.currentClaimPriceFinney = kingdom.currentClaimPriceInFinney().toString();
    kingdomData.rules = thronePropertiesFacade.getRules();
    kingdomData.monarchs = thronePropertiesFacade.getMonarchs();
    root.world.kingdoms.push(kingdomData);
  }
  var outputFilename = 'world.json';
  console.log('Writing world data to ' + outputFilename + ' ...');
  fse.writeFileSync(outputFilename, JSON.stringify(root), 'utf8');
}

var argv = process.argv.slice(2);
if (argv.length != 2) {
  throw new Error('usage: chain-to-data web3Url worldContractAddress');
}
chainToData(argv[0], argv[1]);
