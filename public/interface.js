// This provides the DApp user interface to allow nicer interation with the contract.
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
    try {
      assertNotSyncing();
      var balance = web3.eth.getBalance(web3.eth.accounts[0]);
      updateStatus('good', 'Node connected and account seems usable');  
    } catch (e) {
      updateStatus('bad', 'Account not usable due to: ' + e.toString());
    }
  };

  var findContract = function () {
    var kingOfTheEtherThroneContract = web3.eth.contract(config.contractAbi);
    throne = kingOfTheEtherThroneContract.at(config.contractAddress);
  };

  var readContractData = function() {
    updateStatus('busy', 'Reading contract data...');
    try {
      assertNotSyncing();
      templateContext.currentClaimPrice = web3.fromWei(throne.currentClaimPrice(),'ether') + ' ether';
      var numberOfMonarchs = throne.numberOfMonarchs();
      // don't read the monarchs themselves yet (some web3 problems with strings sometimes?)
      var monarchNumbers = ['Current'];
      for (var i = numberOfMonarchs - 1; i > 0; i--) {
        monarchNumbers.push(i);
      }
      templateContext.monarchNumbers = monarchNumbers;
      updateStatus('good', 'Successfully read monarchy data from contract.');
    } catch (e) {
      templateContext.currentClaimPrice = 'Unknown';
      updateStatus('bad', 'Failed to read contract data due to ' + e.toString());
    }
  };

  var updateName = function() {
    var yourNameInput = document.getElementById('yourNameInput');
    if (yourNameInput) {
      templateContext.yourName = yourNameInput.value;
    }
  }

  var renderUI = function() {
    updateName();
    var uiArea = document.getElementById('interfacePlaceholder');
    var interfaceHtml = nunjucks.render('templates/interface.nunjucks.html', templateContext);
    uiArea.innerHTML = interfaceHtml;
  };

  var claimThrone = function(e) {
    updateStatus('busy', 'Trying to execute contract with payment ...');
    updateName();
    try {
      assertNotSyncing();
      var regalName = templateContext.yourName.substring(0,24);
      // web3.eth.accounts[0] is ugly but nothing else seems to work properly?
      var result = throne.claimThrone(
        regalName, {
          from: web3.eth.accounts[0],
          value: throne.currentClaimPrice(),
          gas: 500000
        });
      updateStatus('good', 'Hmm, might have worked, check your wallet balance - got result of: ' + result.toString());
    } catch (ex) {
      updateStatus('bad', 'Failed to claim throne due to ' + ex.toString());
    }
    renderUI();
    return false;
  };

  var selectedMonarchChanged = function(e) {
    updateStatus('busy', 'Looking up monarch ...');
    try {
      assertNotSyncing();
      var select = document.getElementById('monarchNumberSelect');
      var monarchNumber = select.selectedValue;
      var rawMonarch;
      if (monarchNumber == 'Current') {
        rawMonarch = throne.currentMonarch();
      } else {
        rawMonarch = throne.pastMonarch(monarchNumber);
      }
      templateContext.selectedMonarchNumber = monarchNumber;
      templateContext.hallMonarchFate = (monarchNumber == 'Current') ? 'Alive' : 'Usurped';
      templateContext.hallMonarchName = rawMonarch[1];
      templateContext.hallMonarchAddress = rawMonarch[0];
      templateContext.hallMonarchClaimPrice = web3.fromWei(rawMonarch[2], 'ether') + ' ether';
      updateStatus('good', 'Found monarch data.');
    } catch (e) {
      updateStatus('bad', 'Failed to lookup monarch due to ' + ex.toString());
    }
    renderUI();
  }

  var assertNotSyncing = function() {
    if (web3.eth.syncing) throw new Error("your node is syncing");
  }

  var makeUnixTimestampReadable = function (timestamp) {
    return (new Date(1000 * timestamp)).toLocaleString();
  }

  var refreshInterface = function(e) {
    readContractData();
    renderUI();
    return false;
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
    init: init,
    reloadClicked: refreshInterface,
    claimThroneClicked: claimThrone,
    selectedMonarchChanged: selectedMonarchChanged
  };

})();
