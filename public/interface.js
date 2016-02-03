// TODO - something like
// 
// 
//
// Current Monarch: blah (0x8348834873)
// Current Claim Price: 2.2 ether
// 
// [CLAIM THRONE (2.2 ether)]
//

function getContract(config) {
  //return getLiveContract();
  return getFakeContract();
}

function getFakeContract(config) {
  var kingOfTheEtherThrone = {};
  kingOfTheEtherThrone.currentClaimPrice = function() { return '125000000000'; };
  return kingOfTheEtherThrone;
}

function getLiveContract(config) {
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  var kingOfTheEtherThroneContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"currentMonarch","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"claimThrone","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"n","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pastMonarchs","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"sweepCommission","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"usurperEtherAddress","type":"address"},{"indexed":false,"name":"usurperName","type":"string"},{"indexed":false,"name":"newClaimPrice","type":"uint256"}],"name":"ThroneClaimed","type":"event"},{"inputs":[],"type":"constructor"}]);
  var kingOfTheEtherThrone = kingOfTheEtherThroneContract.at('0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e');
  return kingOfTheEtherThrone;
}

function renderDataFromContract(config, web3, kingOfTheEtherThrone) {
  var uiArea = document.getElementById("interfacePlaceholder");
  var currentClaimPrice = web3.fromWei(kingOfTheEtherThrone.currentClaimPrice(),'ether');
  var templateContext = {
  };
  var interfaceHtml = nunjucks.render('templates/interface.nunjucks.html', templateContext);
  uiArea.innerHtml = interfaceHtml;
}

function createInterface(config) {
  web3 = new Web3();
  renderDataFromContract(config, web3, contract);
}

