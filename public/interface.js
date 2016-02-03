// TODO - something like
// 
// 
//
// Current Monarch: blah (0x8348834873)
// Current Claim Price: 2.2 ether
// 
// [CLAIM THRONE (2.2 ether)]
//

function getContract(config, web3) {
  return getLiveContract(config, web3);
  //return getFakeContract(config, web3);
}

function getFakeContract(config, web3) {
  var kingOfTheEtherThrone = {};
  kingOfTheEtherThrone.currentClaimPrice = function() { return '125000000000000'; };
  kingOfTheEtherThrone.numberOfMonarchs = function() { return 3; };
  return kingOfTheEtherThrone;
}

function getLiveContract(config, web3) {
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  var kingOfTheEtherThroneContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"currentMonarch","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"claimThrone","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"n","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pastMonarchs","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"sweepCommission","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"usurperEtherAddress","type":"address"},{"indexed":false,"name":"usurperName","type":"string"},{"indexed":false,"name":"newClaimPrice","type":"uint256"}],"name":"ThroneClaimed","type":"event"},{"inputs":[],"type":"constructor"}]);
  var kingOfTheEtherThrone = kingOfTheEtherThroneContract.at('0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e');
  return kingOfTheEtherThrone;
}

function renderDataFromContract(config, web3, kingOfTheEtherThrone) {
  var uiArea = document.getElementById('interfacePlaceholder');
  var currentClaimPrice = web3.fromWei(kingOfTheEtherThrone.currentClaimPrice(),'ether') + ' ether';
  var numberOfMonarchs = kingOfTheEtherThrone.numberOfMonarchs();
  var monarchNumbers = ['Current'];
  for (var i = numberOfMonarchs - 1; i > 0; i--) {
    monarchNumbers.push(i);
  }
  var templateContext = {
    currentClaimPrice: currentClaimPrice,
    monarchNumbers: monarchNumbers,
    selectedMonarchNumber: monarchNumbers[0]
  };
  var interfaceHtml = nunjucks.render('templates/interface.nunjucks.html', templateContext);
  uiArea.innerHTML = interfaceHtml;
  attachEvents(web3, kingOfTheEtherThrone);
  uiArea.className = 'good';
}

function attachEvents(web3, kingOfTheEtherThrone) {
  var claimThroneButton = document.getElementById('claimThroneButton');
  // TODO - error handling !!!
  claimThroneButton.onclick = function() {
    var result = kingOfTheEtherThrone.claimThrone(
      document.getElementById('yourNameInput').value,
      { from: web3.eth.accounts[0],
        value: kingOfTheEtherThrone.currentClaimPrice(),
        gas: 500000 } );
    alert("result = " + result);
  };
  var monarchNumberSelect = document.getElementById('monarchNumberSelect');
}

function createInterface(config) {
  web3 = new Web3();
  var contract = getContract(config, web3);
  renderDataFromContract(config, web3, contract);
}
