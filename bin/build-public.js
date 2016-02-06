// Script to rebuild the public static content on github/website.

var fs = require('fs');
var nunjucks = require('nunjucks');
var marked = require('marked');
var cp = require('cp');
var Web3 = require('web3');
var child_process = require('child_process');

var publishEnabled = true;

console.log("Building public content ...");

var contractAddress = "0xb336a86e2feb1e87a328fcb7dd4d04de3df254d0";
var contractAbiJson =
  '[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepCommission","outputs":[],"type":"function"},'+
  '{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},'+
  '{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pastMonarchs","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},'+
  '{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"claimThrone","outputs":[],"type":"function"},'+
  '{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"n","type":"uint256"}],"type":"function"},'+
  '{"constant":true,"inputs":[],"name":"currentMonarch","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},'+
  '{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"type":"function"},'+
  '{"inputs":[],"type":"constructor"},'+
  '{"anonymous":false,"inputs":[{"indexed":false,"name":"usurperEtherAddress","type":"address"},{"indexed":false,"name":"usurperName","type":"string"},{"indexed":false,"name":"newClaimPrice","type":"uint256"}],"name":"ThroneClaimed","type":"event"}]'
var contractAbi = JSON.parse(contractAbiJson);

var buildTimeWeb3Provider = 'http://localhost:8545';
var clientSideWeb3Provider = 'http://localhost:8545';

console.log("Making sure public dir exists ...");

fs.statSync("public");

console.log("Talking to local Ethereum node to get latest monarchy data ...");

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(buildTimeWeb3Provider));

if (web3.eth.syncing) {
  throw new Error('your ethereum node is syncing; try later?');
}

var kingOfTheEtherThroneContract = web3.eth.contract(contractAbi);
var kingOfTheEtherThrone = kingOfTheEtherThroneContract.at(contractAddress);

function makeUnixTimestampReadable(timestamp) {
  return (new Date(1000 * timestamp)).toISOString();
}

function decorateRawMonarch(rawMonarch, number) {
  var monarch = {
    etherAddress : rawMonarch[0],
    name : rawMonarch[1],
    claimPricePaid : web3.fromWei(rawMonarch[2], 'ether') + ' ether',
    coronationTimestamp : rawMonarch[3],
    number: (number == 0 ? '' : number)
  };
  monarch.coronationTimestampReadable = makeUnixTimestampReadable(monarch.coronationTimestamp);
  if (monarch.name == '') {
    monarch.displayName = etherAddress;
  } else if (monarch.name == '[Vacant]') {
    monarch.displayName = '[Vacant]';
    monarch.etherAddress = '';
  } else {
    monarch.displayName = monarch.name + ' (' + monarch.etherAddress + ')';
  }
  return monarch;
}

var startingClaimPrice = '0.1 ether';

var lastUpdatedBlockTimestamp = web3.eth.getBlock("latest").timestamp;
var lastUpdatedBlockTimestampReadable = makeUnixTimestampReadable(lastUpdatedBlockTimestamp);
var currentClaimPrice = web3.fromWei(kingOfTheEtherThrone.currentClaimPrice(),'ether') + ' ether';

var numberOfMonarchs = kingOfTheEtherThrone.numberOfMonarchs();

var currentMonarchRaw = kingOfTheEtherThrone.currentMonarch();
var currentMonarch = decorateRawMonarch(currentMonarchRaw, numberOfMonarchs);

var pastMonarchs = [];
for (var i = numberOfMonarchs - 1; i >=0 ; i--) {
  try {
    var pastMonarchRaw = kingOfTheEtherThrone.pastMonarchs(i);
    var pastMonarch = decorateRawMonarch(pastMonarchRaw, i);
  } catch (e) {
    // sometimes web3 blows up with bignumber problems on long strings - but not always!?
    var pastMonarchRaw = {
      etherAddress : 'unknown',
      name : 'unknown',
      claimPricePaid : 'unknown',
      coronationTimestamp : 'unknown',
      coronationTimestampReadable : 'unknown',
      displayName : 'unknown'
    };
  }
  pastMonarchs.push(pastMonarch);
}

console.log("got currentMonarch " + currentMonarch);
console.log("got lastUpdatedBlockTimestamp of " + lastUpdatedBlockTimestamp);

console.log("Using template to generate README markdown for git and for the website ...");

var readmeTemplateSource = fs.readFileSync('templates/README.nunjucks.md', 'utf8');
var readmeContext = {
  targetIsGit: false,
  targetIsWeb: false,
  contractAddress: contractAddress,
  contractAbi: contractAbi,
  contractAbiJson: contractAbiJson,
  startingClaimPrice: startingClaimPrice,
  currentClaimPrice: currentClaimPrice,
  currentMonarch: currentMonarch,
  pastMonarchs: pastMonarchs,
  lastUpdatedBlockTimestampReadable: lastUpdatedBlockTimestampReadable,
};
readmeContext.targetIsGit = true;
readmeContext.targetIsWeb = false;
var gitReadMeMarkdown = nunjucks.renderString(readmeTemplateSource, readmeContext);
readmeContext.targetIsGit = false;
readmeContext.targetIsWeb = true;
var webReadMeMarkdown = nunjucks.renderString(readmeTemplateSource, readmeContext);

console.log("Writing git README.md");
fs.writeFileSync('README.md', gitReadMeMarkdown, 'utf8');

console.log("Generating home-page html for website from README markdown ...");

var readmeHtml = marked(webReadMeMarkdown);

console.log("Using template to write home-page html ...");

var indexTemplateSource = fs.readFileSync('templates/index.nunjucks.html', 'utf8');
var indexContext = {
  readmeHtml: readmeHtml,
  contractAddress: contractAddress,
  contractAbiJson: contractAbiJson,
  cacheBuster: (new Date()).getTime()
};
var indexHtml = nunjucks.renderString(indexTemplateSource, indexContext);
fs.writeFileSync('public/index.html', indexHtml, 'utf8');

console.log("Pre-compiling templates needed by public web content at run-time");

var precompileOpts = {};
var precompiledTemplatesJs = nunjucks.precompile("templates/interface.nunjucks.html", precompileOpts);
fs.writeFileSync('public/templates.js', precompiledTemplatesJs, 'utf8');

console.log("Copying files needed by public web content at run-time");

var minStr = "";
cp.sync("node_modules/web3/dist/web3" + minStr + ".js", "public/web3.js");
cp.sync("node_modules/nunjucks/browser/nunjucks-slim" + minStr + ".js", "public/nunjucks-slim.js");


if (publishEnabled) {

  console.log("Comitting to git and pushing");

  child_process.exec("git commit -a -m 'Autogenerated from build-public'", {timeout: 60000});
  child_process.exec("git push origin master", {timeout: 120000});

  console.log("Copying to webserver");

  child_process.exec("rsync -r -t -z -e ssh public/ obpapp@newvm.el.by:/usr/share/nginx/html", {timeout:60000});

}
