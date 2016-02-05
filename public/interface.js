// TODO - document
// 
// TODO - handle web3.syncing problem ...
// TODO - how to ensure account unlocked?
//

var KingOfTheEtherDapp = (function () {

  var config = {};

  var templateContext = {
    good: false;
    statusText: 'Initialising ...',
    yourName: 'Your Name',
    currentClaimPrice: 'Unknown',
    monarchNumbers: ['Current'],
    selectedMonarchNumber: 'Current'
  };

  var throne = undefined;

  var initWeb3 = function () {
    if (typeof web3 === 'undefined') {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    } else {
      // use the existing web3
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
      try {
        web3.eth.defaultAccount = web3.eth.accounts[0];
      } catch (e) {
        templateContext.statusText = 'Error: ' + e.toString();
        templateContext.good = false;
      }
    }
  };

  var findContract = function () {
    var kingOfTheEtherThroneContract = web3.eth.contract(config.contractAbi);
    throne = kingOfTheEtherThroneContract.at(config.contractAddress);
  };

  var readContractData = function() {
    try {
      templateContext.currentClaimPrice = web3.fromWei(throne.currentClaimPrice(),'ether') + ' ether';
      var numberOfMonarchs = throne.numberOfMonarchs();
      var monarchNumbers = ['Current'];
      for (var i = numberOfMonarchs - 1; i > 0; i--) {
        monarchNumbers.push(i);
      }
      templateContext.monarchNumbers = monarchNumbers;
      templateContext.good = false;
    } catch (e) {
      templateContext.statusText = 'Error getting data from contract: ' + e;
      templateContext.currentClaimPrice = 'Unknown';
      templateContext.good = false;
    }
  };

  var renderUI = function() {
    var uiArea = document.getElementById('interfacePlaceholder');
    var interfaceHtml = nunjucks.render('templates/interface.nunjucks.html', templateContext);
    uiArea.innerHTML = interfaceHtml;
    attachEvents();
    if (templateContext.good) {
      uiArea.className = 'good';
    } else {
      uiArea.className = 'notWorking';
    }
  };

  var claimThrone = function() {
    try {
      var result = throne.claimThrone(
        templateContext.yourName,
        { value: throne.currentClaimPrice(), gas: 500000 }
      );
      templateContext.statusText = 'Hmm, not sure if it worked, got ' + result.toString();
      templateContext.good = true;
    } catch (e) {
      templateContext.statusText = 'Error claiming throne: ' + e.toString();
      templateContext.good = false;
    }
    renderUI();
  };

  var refreshInterface = function() {
    readContractData();
    renderUI();
  };

  var attachEvents = function() {
    // TODO - your name input
    // TODO - monarch select dropdown
    var refreshButton = document.getElementById('refreshInterfaceButton');
    refreshButton.onclick = refreshInterface;
    var claimThroneButton = document.getElementById('claimThroneButton');
    claimThroneButton.onclick = claimThrone;
  };

  var init = function (dappConfig) {
    config = dappConfig;
    renderUI();
    initWeb3();
    findContract();
    readContractData();
    renderUI();
  };

  return {
    init: init
  };

})();
