// TODO - document
// 
// TODO - handle web3.syncing problem ...
// TODO - how to ensure account unlocked?
//

var KingOfTheEtherDapp = (function () {

  var config = {};

  var templateContext = {
    mood: 'busy',
    statusText: 'Initialising ...',
    yourName: 'Your Name',
    currentClaimPrice: 'Unknown',
    monarchNumbers: ['Current'],
    selectedMonarchNumber: 'Current'
  };

  var throne = undefined;

  var updateStatus = function(mood, text) {
    templateContext.mood = mood;
    templateContext.statusText = text;
    if (console) {
      console.log(text);
    }
  };

  var initWeb3 = function () {
    updateStatus('busy', 'Connecting to node...');
    renderUI();
    if (typeof web3 === 'undefined') {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    } else {
      // use the existing web3
    }
    updateStatus('busy', 'Checking account usable...');
    if (typeof web3.eth.defaultAccount === 'undefined') {
      try {
        web3.eth.defaultAccount = web3.eth.accounts[0];
        updateStatus('good', 'Node connected and default account exists');
      } catch (e) {
        updateStatus('bad', 'Default account not usable due to: ' + e.toString());
      }
    }
  };

  var findContract = function () {
    var kingOfTheEtherThroneContract = web3.eth.contract(config.contractAbi);
    throne = kingOfTheEtherThroneContract.at(config.contractAddress);
  };

  var readContractData = function() {
    updateStatus('busy', 'Reading contract data...');
    try {
      templateContext.currentClaimPrice = web3.fromWei(throne.currentClaimPrice(),'ether') + ' ether';
      var numberOfMonarchs = throne.numberOfMonarchs();
      // don't read the monarchs themselves yet (some web3 problems with strings sometimes?)
      var monarchNumbers = ['Current'];
      for (var i = numberOfMonarchs - 1; i > 0; i--) {
        monarchNumbers.push(i);
      }
      templateContext.monarchNumbers = monarchNumbers;
      updateStatus('good', 'Read contract data.');
    } catch (e) {
      templateContext.currentClaimPrice = 'Unknown';
      updateStatus('bad', 'Failed to read contract data due to ' + e.toString());
    }
  };

  var renderUI = function() {
    var uiArea = document.getElementById('interfacePlaceholder');
    var interfaceHtml = nunjucks.render('templates/interface.nunjucks.html', templateContext);
    uiArea.innerHTML = interfaceHtml;
    attachEvents();
  };

  var claimThrone = function(e) {
    alert('hello');
    updateStatus('busy', 'Trying to execute contract with payment ...');
    try {
        var result = throne.claimThrone(
        templateContext.yourName,
        { from: web3.eth.defaultAccount,
          value: throne.currentClaimPrice(),
          gas: 500000 }
      );
      updateStatus('good', 'Hmm, not sure if it worked, got result of: ' + result.toString());
    } catch (ex) {
      updateStatus('bad', 'Failed to claim throne due to ' + ex.toString());
    }
    renderUI();
    return false;
  };

  var refreshInterface = function(e) {
    readContractData();
    renderUI();
    return false;
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
