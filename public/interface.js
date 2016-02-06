// This provides the DApp user interface to allow nicer interation with the contract.
// 
// TODO - add Mist menu entry?
// TODO - how to ensure account unlocked?
// TODO - it's pretty ugly both visually and behind the scenes ...
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
      flashCurrentClaimPrice(templateContext.currentClaimPrice);
    } catch (e) {
      templateContext.currentClaimPrice = 'Unknown';
      updateStatus('bad', 'Failed to read contract data due to ' + e.toString());
    }
  };

  var readNameInput = function() {
    var yourNameInput = document.getElementById('yourNameInput');
    if (yourNameInput) {
      templateContext.yourName = yourNameInput.value;
    }
  }

  var renderUI = function() {
    readNameInput();
    var uiArea = document.getElementById('interfacePlaceholder');
    var interfaceHtml = nunjucks.render('templates/interface.nunjucks.html', templateContext);
    uiArea.innerHTML = interfaceHtml;
  };

  var claimThrone = function(e) {
    updateStatus('busy', 'Trying to execute contract with payment ...');
    readNameInput();
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
      // TODO - need better error / status handling, it's surprisingly
      // hard when everything is very asynchronous ...
      updateStatus('good', 'Hmm, might have worked, check your wallet balance - got result of: ' + result.toString());
    } catch (ex) {
      updateStatus('bad', 'Failed to claim throne due to ' + ex.toString());
    }
    renderUI();
    return false;
  };

  var readSelectedMonarchInput = function() {
    var select = document.getElementById('monarchNumberSelect');
    var monarchNumber = select.selectedOptions[0].value;
    templateContext.selectedMonarchNumber = monarchNumber;
  }

  var selectedMonarchChanged = function(e) {
    readSelectedMonarchInput();
    templateContext.hallMonarchFate = 'NA';
    templateContext.hallMonarchName = 'NA';
    templateContext.hallMonarchAddress = 'NA';
    templateContext.hallMonarchClaimPrice = 'NA';
    if (templateContext.selectedMonarchNumber == 'NA') {
      return;
    }
    updateStatus('busy', 'Looking up selected monarch ...');
    try {
      assertNotSyncing();
      var rawMonarch;
      if (templateContext.selectedMonarchNumber == 'Current') {
        rawMonarch = throne.currentMonarch();
      } else {
        rawMonarch = throne.pastMonarchs(parseInt(templateContext.selectedMonarchNumber,10));
      }
      // TODO - one day we might introduce Died ...
      templateContext.hallMonarchFate = (templateContext.selectedMonarchNumber == 'Current') ? 'Alive' : 'Usurped';
      templateContext.hallMonarchName = rawMonarch[1];
      templateContext.hallMonarchAddress = rawMonarch[0];
      templateContext.hallMonarchClaimPrice = web3.fromWei(rawMonarch[2], 'ether') + ' ether';
      updateStatus('good', 'Found selected monarch data.');
    } catch (e) {
      updateStatus('bad', 'Failed to look-up selected monarch due to ' + e.toString());
    }
    renderUI();
    return;
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

  var flashCurrentClaimPrice = function(priceText) {
    if (typeof mist !== 'undefined') {
      try {
        mist.menu.setBadge('only ' + priceText);  
      } catch (e) {
        // oh well, nice to have
      }      
    }
  }

  var init = function (dappConfig) {
    config = dappConfig;
    renderUI();
    initWeb3();
    findContract();
    readContractData();
    selectedMonarchChanged();
    renderUI();
  };

  return {
    init: init,
    reloadClicked: refreshInterface,
    claimThroneClicked: claimThrone,
    selectedMonarchChanged: selectedMonarchChanged
  };

})();
