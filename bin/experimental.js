// Script to rebuild the public static content on github/website.

var fse = require('fs-extra');
var nunjucks = require('nunjucks');
var Web3 = require('web3');


var throneMakerContractAddress = '0x18e1b4a3eb07945aD8980662387D589e842C3700';
var throneMakerContractAbi = '[{\"constant\":true,\"inputs\":[{\"name\":\"startingClaimPrice\",\"type\":\"uint256\"},{\"name\":\"claimPriceAdjustPerMille\",\"type\":\"uint256\"},{\"name\":\"commissionPerMille\",\"type\":\"uint256\"},{\"name\":\"curseIncubationDuration\",\"type\":\"uint256\"}],\"name\":\"validateProposedThroneConfig\",\"outputs\":[{\"name\":\"good\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"throneName\",\"type\":\"bytes\"}],\"name\":\"findThroneCalled\",\"outputs\":[{\"name\":\"throneIndex\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"gazetteer\",\"outputs\":[{\"name\":\"throneName\",\"type\":\"bytes\"},{\"name\":\"throneContractAddress\",\"type\":\"address\"},{\"name\":\"creationPricePaid\",\"type\":\"uint256\"},{\"name\":\"creationTimestamp\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"numberOfThrones\",\"outputs\":[{\"name\":\"numberOfThrones\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"throneName\",\"type\":\"bytes\"},{\"name\":\"throneContractAddress\",\"type\":\"address\"},{\"name\":\"creationPricePaid\",\"type\":\"uint256\"},{\"name\":\"creationTimestamp\",\"type\":\"uint256\"}],\"name\":\"registerExistingThrone\",\"outputs\":[{\"name\":\"throneIndex\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"throneName\",\"type\":\"bytes\"},{\"name\":\"startingClaimPrice\",\"type\":\"uint256\"},{\"name\":\"claimPriceAdjustPerMille\",\"type\":\"uint256\"},{\"name\":\"commissionPerMille\",\"type\":\"uint256\"},{\"name\":\"curseIncubationDuration\",\"type\":\"uint256\"}],\"name\":\"createThrone\",\"outputs\":[{\"name\":\"throneIndex\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newThroneCreationPrice\",\"type\":\"uint256\"}],\"name\":\"setThroneCreationPrice\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"throneName\",\"type\":\"bytes\"}],\"name\":\"validateProposedThroneName\",\"outputs\":[{\"name\":\"good\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newDeity\",\"type\":\"address\"}],\"name\":\"switchDeity\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sweepDeityCommission\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"throneCreationPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"throneCreationPrice_\",\"type\":\"uint256\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"throneIndex\",\"type\":\"uint256\"}],\"name\":\"ThroneCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newThroneCreationPrice\",\"type\":\"uint256\"}],\"name\":\"ThroneCreationPriceSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"toDeityAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"DeityCommissionSwept\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newDeityAddress\",\"type\":\"address\"}],\"name\":\"DeitySwitched\",\"type\":\"event\"}]\n"';


if (false) {
console.log("Talking to local Ethereum node ...");
var web3Provider = 'http://calbo:8545';
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(web3Provider));

if (web3.eth.syncing) {
  throw new Error('your ethereum node is syncing; try later?');
}
}

console.log("Creating fresh generated directory ...");
fse.emptyDirSync('generated');

console.log("Copying public content to generated directory ...");
fse.copySync('public', 'generated', {preserveTimestamps:true, clobber:false});

console.log("Creating thrones directory ...");
fse.mkdirSync('generated/thrones');
# TODO - do we want an index page here?

console.log("Using template to generate throne page ...");

var throneTemplateSource = fse.readFileSync('templates/throne.nunjucks.html', 'utf8');
var throneContext = {
  'ThroneName': 'King of the Ether Throne',
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

console.log("Creating throne directory ...");
fse.mkdirSync('generated/thrones/kingoftheether');

console.log("Writing throne page ...");
fse.writeFileSync('generated/thrones/kingoftheether/throne.html', throneHtml, 'utf8');
