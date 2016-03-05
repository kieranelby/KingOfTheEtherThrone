/* jslint node:true, mocha:true */
'use strict';

/*
 * Perform on-block-chain tests of the King of the Ether Throne contracts & javascript interface.
 *
 * Intended to be run against the testnet via the web3 RPC API (it's a bit expensive on main net!).
 *
 * e.g. might start geth like:
 * geth --testnet --port 31313 --datadir e:/ethereum -rpc -rpcport 8646 -rpcapi "eth,web3,personal"
 *
 * Alternatively running against private testnet with low difficulty is much faster (but fiddly to setup).
 *
 * NB: I guess we could try breaking up the contract into smaller mini-contracts to make testing
 * easier but CALLCODE is quite expensive (and a bit confusing) ...
*/

var DAppTestRunner = require('./dapp-test-runner');
var tests = new DAppTestRunner('King of the Ether Throne Core');
// TODO - shouldn't really need this!
tests.setWeb3MasterAccount('0xb028d69032b7ca02056d684e6086030aecbf6eb0');

// Not sure it's really worth bringing in this dependency just to get
// nice colours and Unicode symbols in the output or not!
var mocha = require('mocha');
var reporter = new mocha.reporters.Spec(tests);

// TODO - perhaps I should install the solidity compiler to avoid all these bytes
var kingOfTheEtherThroneInterface = [{"constant":true,"inputs":[],"name":"deityBalance","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes"}],"name":"claimThrone","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"wizardBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"isLivingMonarch","outputs":[{"name":"alive","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"price","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"monarchNumber","type":"uint256"}],"name":"resendFailedPayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"config","outputs":[{"name":"wizardAddress","type":"address"},{"name":"deityAddress","type":"address"},{"name":"startingClaimPrice","type":"uint256"},{"name":"claimPriceAdjustPerMille","type":"uint256"},{"name":"commissionPerMille","type":"uint256"},{"name":"curseIncubationDuration","type":"uint256"},{"name":"failedPaymentRingfenceDuration","type":"uint256"},{"name":"throneMaker","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"monarchs","outputs":[{"name":"compensationAddress","type":"address"},{"name":"originAddress","type":"address"},{"name":"name","type":"bytes"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"},{"name":"compensationStatus","type":"uint8"},{"name":"compensationTimestamp","type":"uint256"},{"name":"compensationPaid","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"newDeity","type":"address"}],"name":"switchDeity","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepDeityCommission","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"numberOfMonarchs","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepWizardCommission","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes"},{"name":"compensationAddress","type":"address"}],"name":"claimThroneFor","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"monarchNumber","type":"uint256"}],"name":"voidFailedPayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ringfencedFailedPaymentsBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"newWizard","type":"address"}],"name":"switchWizard","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"lastClaimPrice","outputs":[{"name":"price","type":"uint256"}],"type":"function"},{"inputs":[{"name":"wizardAddress","type":"address"},{"name":"deityAddress","type":"address"},{"name":"startingClaimPrice","type":"uint256"},{"name":"claimPriceAdjustPerMille","type":"uint256"},{"name":"commissionPerMille","type":"uint256"},{"name":"curseIncubationDuration","type":"uint256"},{"name":"failedPaymentRingfenceDuration","type":"uint256"},{"name":"throneMaker","type":"address"}],"type":"constructor"}]
;
var kingOfTheEtherThroneBytecode = "606060405260405161010080611676833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919050505b6101006040519081016040528089815260200188815260200187815260200186815260200185815260200184815260200183815260200182815260200150600060005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060408201518160020160005055606082015181600301600050556080820151816004016000505560a0820151816005016000505560c0820151816006016000505560e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055509050505b50505050505050506114e4806101926000396000f3606060405236156100ed576000357c0100000000000000000000000000000000000000000000000000000000900480632d116186146101065780632ea459b814610129578063357ad17a1461017f5780635fbddcf3146101a257806364325ddb146101c5578063715ef4ff146101e857806379502c55146102005780638b252ab914610296578063a70a9ad7146103a1578063a819819b146103b9578063c8fdc891146103d1578063cb553ac9146103f4578063d6d902c41461040c578063e6e91cfc1461046b578063eb64f63a14610483578063edb27f4e146104a6578063fe757fb5146104be576100ed565b6101045b6101016100fc611194565b611432565b5b565b005b61011360048050506108ae565b6040518082815260200191505060405180910390f35b61017d6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050611432565b005b61018c6004805050610a44565b6040518082815260200191505060405180910390f35b6101af60048050506113aa565b6040518082815260200191505060405180910390f35b6101d260048050506111e6565b6040518082815260200191505060405180910390f35b6101fe60048080359060200190919050506104e1565b005b61020d60048050506108e0565b604051808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019850505050505050505060405180910390f35b6102ac6004808035906020019091905050610988565b604051808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018060200187815260200186815260200185815260200184815260200183815260200182810382528881815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561038b5780601f106103605761010080835404028352916020019161038b565b820191906000526020600020905b81548152906001019060200180831161036e57829003601f168201915b5050995050505050505050505060405180910390f35b6103b76004808035906020019091905050610ba0565b005b6103cf6004808035906020019091905050610a4d565b005b6103de6004805050610c32565b6040518082815260200191505060405180910390f35b61040a60048080359060200190919050506107dd565b005b6104696004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019091905050610c86565b005b610481600480803590602001909190505061060d565b005b6104906004805050610a3b565b6040518082815260200191505060405180910390f35b6104bc6004808035906020019091905050610b0e565b005b6104cb6004805050610c47565b6040518082815260200191505060405180910390f35b60006000600060006002600860005086815481101561000257906000526020600020906008020160005b5060050160009054906101000a900460ff1614151561052957610002565b600860005085815481101561000257906000526020600020906008020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169350600860005085815481101561000257906000526020600020906008020160005b506007016000505492506161a891506105aa848484611482565b90508015156105b857610002565b6001600860005086815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff021916908302179055508260096000828282505403925050819055505b5050505050565b60006000600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156106c95750600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b156106d357610002565b6002600860005084815481101561000257906000526020600020906008020160005b5060050160009054906101000a900460ff1614151561071357610002565b600860005083815481101561000257906000526020600020906008020160005b50600601600050544203915060006000506006016000505482101561075757610002565b600860005083815481101561000257906000526020600020906008020160005b5060070160005054905080600960008282825054039250508190555061079c816114cb565b6003600860005084815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff021916908302179055505b505050565b60006000600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156108a857600a6000505483111561084f57610002565b6161a89150610887600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484611482565b905080151561089557610002565b82600a6000828282505403925050819055505b5b505050565b6000600960005054600a60005054013073ffffffffffffffffffffffffffffffffffffffff16310390506108dd565b90565b60006000508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160005054908060030160005054908060040160005054908060050160005054908060060160005054908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905088565b600860005081815481101561000257906000526020600020906008020160005b915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201600050908060030160005054908060040160005054908060050160009054906101000a900460ff16908060060160005054908060070160005054905088565b60096000505481565b600a6000505481565b60006000600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b0857610ab56108ae565b831115610ac157610002565b6161a89150610af9600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484611482565b9050801515610b0757610002565b5b5b505050565b600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b9c5780600060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5b50565b600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610c2e5780600060005060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5b50565b60006008600050805490509050610c44565b90565b60006008600050600160086000508054905003815481101561000257906000526020600020906008020160005b50600301600050549050610c83565b90565b600060006000600060006000610c9b886114b8565b349550610ca66111e6565b945084861015610cb557610002565b84861115610cc257610002565b610cca6113aa565b1515610cde57610cd9856114cb565b610e7a565b6103e860006000506004016000505486020493508385039250610d00846114cb565b614e209150610d5f6008600050600160086000508054905003815481101561000257906000526020600020906008020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484611440565b90508015610db25760016008600050600160086000508054905003815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff02191690830217905550610e0b565b60026008600050600160086000508054905003815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff021916908302179055508260096000828282505401925050819055505b426008600050600160086000508054905003815481101561000257906000526020600020906008020160005b5060060160005081905550826008600050600160086000508054905003815481101561000257906000526020600020906008020160005b50600701600050819055505b60086000508054806001018281815481835581811511610fc357600802816008028360005260206000209182019101610fc29190610eb3565b80821115610fbe5760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600050805460018160011615610100020316600290046000825580601f10610f375750610f74565b601f016020900490600052602060002090810190610f739190610f55565b80821115610f6f5760008181506000905550600101610f55565b5090565b5b50600382016000506000905560048201600050600090556005820160006101000a81549060ff02191690556006820160005060009055600782016000506000905550600101610eb3565b5090565b5b5050509190906000526020600020906008020160005b610100604051908101604052808b81526020013281526020018c81526020018a815260200142815260200160008152602001600081526020016000815260200150909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506040820151816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106110d657805160ff1916838001178555611107565b82800160010185558215611107579182015b828111156111065782518260005055916020019190600101906110e8565b5b5090506111329190611114565b8082111561112e5760008181506000905550600101611114565b5090565b5050606082015181600301600050556080820151816004016000505560a08201518160050160006101000a81548160ff0219169083021790555060c0820151816006016000505560e082015181600701600050555050505b5050505050505050565b60206040519081016040528060008152602001506000368080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090506111e3565b90565b6000600060006111f46113aa565b15156112115760006000506002016000505492506113a5566113a4565b6008600050600160086000508054905003815481101561000257906000526020600020906008020160005b506003016000505491506103e86000600050600301600050546103e8018302049050662386f26fc10000811015611279578092506113a5566113a3565b67016345785d8a00008110156112a557655af3107a40008104655af3107a40000292506113a5566113a2565b670de0b6b3a76400008110156112d35766038d7ea4c68000810466038d7ea4c680000292506113a5566113a1565b678ac7230489e8000081101561130157662386f26fc100008104662386f26fc100000292506113a5566113a0565b68056bc75e2d631000008110156113325767016345785d8a0000810467016345785d8a00000292506113a55661139f565b683635c9adc5dea0000081101561136357670de0b6b3a76400008104670de0b6b3a76400000292506113a55661139e565b69021e19e0c9bab240000081101561139557678ac7230489e800008104678ac7230489e800000292506113a55661139d565b8092506113a5565b5b5b5b5b5b5b5b5b505090565b60006000600060006113ba610c32565b14156113c9576000925061142d565b6008600050600160086000508054905003815481101561000257906000526020600020906008020160005b506004016000505491508142039050600060005060050160005054811115611423576000925061142d5661142c565b6001925061142d565b5b505090565b61143c8133610c86565b5b50565b60008373ffffffffffffffffffffffffffffffffffffffff16838390604051809050600060405180830381858888f19350505050905061147b565b9392505050565b6000600060005a91508382101561149857610002565b83820390506114a8868683611440565b92506114af565b50509392505050565b601e815111156114c757610002565b5b50565b60028104600a6000828282505401925050819055505b5056";
tests.registerContract('KingOfTheEtherThrone', kingOfTheEtherThroneInterface, kingOfTheEtherThroneBytecode);

// TODO - register other useful contracts for testing:
// - GasEater
// - Rejector
// - Forwarder
// - Mist Wallet Contract

// NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
function decodeMonarchArray(monarchArray, web3) {
  return {
    compensationAddress:   monarchArray[0],
    originAddress:         monarchArray[1],
    name:     web3.toAscii(monarchArray[2]),
    claimPrice:            monarchArray[3],
    coronationTimestamp:   monarchArray[4],
    compensationStatus:    monarchArray[5],
    compensationTimestamp: monarchArray[6],
    compensationPaid:      monarchArray[7]
  };
}

// NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
function decodeThroneConfig(configArray, web3) {
  return {
    wizardAddress:                  configArray[0],
    deityAddress:                   configArray[1],
    startingClaimPrice:             configArray[2],
    claimPriceAdjustPerMille:       configArray[3],
    commissionPerMille:             configArray[4],    
    curseIncubationDuration:        configArray[5],
    failedPaymentRingfenceDuration: configArray[6],
    throneMaker:                    configArray[7]
  };
}

function createStandardTestThrone(helper) {
  // wizardAddress,
  // deityAddress,
  // startingClaimPrice,
  // claimPriceAdjustPerMille,
  // commissionPerMille,
  // incubationDuration,
  // failedPaymentRingfenceDuration
  return helper.createContractInstance('KingOfTheEtherThrone', [
    helper.web3.eth.defaultAccount,
    helper.web3.eth.defaultAccount,
    helper.toWei('1','ether'),
    '500',
    '20',
    '180',
    '240',
    0
  ]);
}

tests.add({
  title: 'Can inspect throne config',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when we ask how the throne is configured
      var configArray = this.throne.config();
      var config = decodeThroneConfig(configArray, helper.web3);
      // then we get the properties we asked for in createStandardTestThrone
      helper.assertStrictEqual(config.wizardAddress, helper.web3.eth.defaultAccount, 'wizardAddress');
      helper.assertStrictEqual(config.deityAddress, helper.web3.eth.defaultAccount, 'deityAddress');
      helper.assertNumEqual(config.startingClaimPrice, helper.toWei('1','ether'), 'startingClaimPrice');
      helper.assertNumEqual(config.claimPriceAdjustPerMille, '500', 'claimPriceAdjustPerMille');
      helper.assertNumEqual(config.commissionPerMille, '20', 'commissionPerMille');
      helper.assertNumEqual(config.curseIncubationDuration, '180', 'curseIncubationDuration');
      helper.assertNumEqual(config.failedPaymentRingfenceDuration, '240', 'failedPaymentRingfenceDuration');
    }
  ]
});

tests.add({
  title: 'Claim Throne at Starting Price should Increase Claim Price',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player pays the exact claim price (which should be 1 ether)
      var originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: originalClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price increases
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, helper.toWei('1.5','ether'),
        'expected new claim price to increase by 50%');
    }
  ]
});

tests.add({
  title: 'Claim Throne at Starting Price should Increase Claim Price',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player pays the exact claim price
      var originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: originalClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price increases
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, helper.toWei('1.5','ether'),
        'expected new claim price to increase by 50%');
    }
  ]
});

tests.add({
  title: 'Claim Throne below Starting Price should not Increase Claim Price but should refund',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player tries to claim the throne but with too little ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      this.originalPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.subtractNum(this.originalClaimPrice, helper.toWei('20','finney')),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, this.originalClaimPrice,
        'expected claim price to stay the same');
      var newPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      helper.assertNumLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.subtractNum(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.assertNumNotAbove(loss, helper.toWei('25', 'finney'), 'expected player to only lose a little gas');
    }
  ]
});

tests.add({
  title: 'Claim Throne above Starting Price should not Increase Claim Price but should refund',
  steps: [
    function(helper) {
      // given a new throne and one player with sufficient ether
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1060', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player tries to claim the throne but with too much ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      this.originalPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.addNum(this.originalClaimPrice, helper.toWei('20','finney')),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, this.originalClaimPrice,
        'expected claim price to stay the same');
      var newPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      helper.assertNumLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.subtractNum(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.assertNumNotAbove(loss, helper.toWei('25', 'finney'), 'expected player to only lose a little gas');
    }
  ]
});

tests.add({
  title: 'Hall of Monarchs before Throne Ever Claimed',
  steps: [
    function(helper) {
      // given a new throne
      this.throne = createStandardTestThrone(helper);
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when we ask how many monarchs there have been
      // then the answer is none
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertNumEqual(numMonarchs, 0, 'have not been any monarchs');
      // and when we ask if there is a living monarch on the throne
      // then the answer is no
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, false, 'no monarchs so cannot be living monarch');
    }
  ]
});

tests.add({
  title: 'Hall of Monarchs after First Claim',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player correctly claims the throne
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.originalClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // when we ask how many monarchs there have been
      // then the answer is one
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertNumEqual(numMonarchs, 1, 'should be one monarch now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, true, 'playerOne lives!');
      // and when we look in the monarchs array
      // then playerOne is there:
      // (let's not worry about the timestamps here, they're harder to test)
      var newMonarch = decodeMonarchArray(this.throne.monarchs(0), helper.web3);
      helper.assertStrictEqual(newMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(newMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(newMonarch.name, 'playerOne', 'name');
      helper.assertNumEqual(newMonarch.claimPrice, this.originalClaimPrice, 'claimPrice');
      helper.assertNumEqual(newMonarch.compensationStatus, '0', 'compensationStatus');
      helper.assertNumEqual(newMonarch.compensationPaid, '0', 'compensationPaid');
    }
  ]
});

tests.add({
  title: 'Claim Throne for Second Time should Increase Claim Price Again',
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price accordign to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // given that the second player claimed the throne at the new claim price according to the contract
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price increases
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertNumEqual(newClaimPrice, helper.toWei('2250','finney'),
        'expected new claim price to increase again by 50%');
    }
  ]
});

tests.add({
  title: 'Claim Throne for Second Time should pay Compensation to First Player',
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      this.playerOneBalanceAfterPaying = helper.web3.eth.getBalance(this.playerOneAccount);
      // when the second player claims the throne at the new claim price according to the contract
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then player one's balance should have increased by the compensation payment
      // (which is calculated as 98% of the claim price paid by the second player)
      var playerOneBalanceAtEnd = helper.web3.eth.getBalance(this.playerOneAccount);
      var increase = helper.subtractNum(playerOneBalanceAtEnd, this.playerOneBalanceAfterPaying);
      helper.assertNumEqual(increase, helper.toWei('1470','finney'),
        'expected player to get compensation of 98% of claim price');
    }
  ]
});

tests.add({
  title: 'Claim Throne should pay Commission to the contract shared between wizard and deity',
  steps: [
    function(helper) {
      // given a new throne and two players
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      this.contractBalanceAfterClaimOne = helper.web3.eth.getBalance(this.throne.address);
      // then all the payment goes to the contract the first time (no-one to compensate)
      helper.assertNumEqual(this.contractBalanceAfterClaimOne, helper.toWei('1', 'ether'));
      // split 50:50 between wizard and deity (we don't actually check ring-fencing here tho)
      helper.assertNumEqual(this.throne.wizardBalance(), helper.toWei('500', 'finney'));
      helper.assertNumEqual(this.throne.deityBalance(), helper.toWei('500', 'finney'));
      // when the second player claims the throne at the new claim price according to the contract
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then this time the contract only gets 2% of the claim price (1500 finney) which is 30 finney.
      this.contractBalanceAfterClaimTwo = helper.web3.eth.getBalance(this.throne.address);
      helper.assertNumEqual(this.contractBalanceAfterClaimTwo, helper.toWei('1030', 'finney'));
      // again split 50:50
      helper.assertNumEqual(this.throne.wizardBalance(), helper.toWei('515', 'finney'));
      helper.assertNumEqual(this.throne.deityBalance(), helper.toWei('515', 'finney'));
    }
  ]
});

tests.add({
  title: 'Hall of Monarchs after Second Claim',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1540', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price accordign to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      this.firstClaimPrice = this.throne.currentClaimPrice();
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.firstClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // given that the second player claimed the throne at the new claim price according to the contract
      this.secondClaimPrice = this.throne.currentClaimPrice();
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.secondClaimPrice,
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // when we ask how many monarchs there have been
      // then the answer is two
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertNumEqual(numMonarchs, 2, 'should be two monarchs now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, true, 'playerTwo lives!');
      // and when we look in the monarchs array
      // then playerOne and playerTwo are there with expected properties:
      // (TODO - let's not worry about the timestamps here, they're harder to test)
      var firstMonarch = decodeMonarchArray(this.throne.monarchs(0), helper.web3);
      helper.assertStrictEqual(firstMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(firstMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(firstMonarch.name, 'playerOne', 'name');
      helper.assertNumEqual(firstMonarch.claimPrice, this.firstClaimPrice, 'claimPrice');
      var goodPaymentStatusCode = 1;
      helper.assertNumEqual(firstMonarch.compensationStatus, goodPaymentStatusCode, 'compensationStatus');
      var expectedCompensation = helper.toWei('1470', 'finney');
      helper.assertNumEqual(firstMonarch.compensationPaid, expectedCompensation, 'compensationPaid');
      var secondMonarch = decodeMonarchArray(this.throne.monarchs(1), helper.web3);
      helper.assertStrictEqual(secondMonarch.compensationAddress, this.playerTwoAccount, 'compensationAddress');
      helper.assertStrictEqual(secondMonarch.originAddress, this.playerTwoAccount, 'originAddress');
      helper.assertStrictEqual(secondMonarch.name, 'playerTwo', 'name');
      helper.assertNumEqual(secondMonarch.claimPrice, this.secondClaimPrice, 'claimPrice');
      helper.assertNumEqual(secondMonarch.compensationStatus, '0', 'compensationStatus');
      helper.assertNumEqual(secondMonarch.compensationPaid, '0', 'compensationPaid');
    }
  ]
});

tests.add({
  title: 'First monarch appears to die after standard test curse incubation period',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      var claimedAt = helper.getLatestBlockTime();
      var config = decodeThroneConfig(this.throne.config());
      this.expectDieBy = helper.addNum(claimedAt, config.curseIncubationDuration);
    },
    function(helper) {
      // when we wait until the monarch should have died
      helper.retryUntilTime(this.expectDieBy);
      // then he seems to be dead and the claim price is reset
      helper.assertEqual(this.throne.isLivingMonarch(), false, "isLivingMonarch");
      helper.assertNumEqual(this.throne.currentClaimPrice(), helper.toWei('1','ether'), "currentClaimPrice");
    }
  ]
});


tests.add({
  title: 'Claim throne from dead first monarch does not pay compensation',
  steps: [
    function(helper) {
      // given a new throne and two players (this time player two doesn't need so much ETH)
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
      this.playerTwoAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      // given that the first player claimed the throne at starting price according to the contract
      if (!this.throne.address) helper.backOff(); // TODO - fix so don't need this
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // make a note of when player one claimed the throne and how much money they had left
      var claimedAt = helper.getLatestBlockTime();
      var config = decodeThroneConfig(this.throne.config());
      this.expectDieBy = helper.addNum(claimedAt, config.curseIncubationDuration);
      this.contractBalanceAfterFirstClaim = helper.web3.eth.getBalance(this.throne.address);
      this.playerOneBalanceAfterTheyClaimed = helper.web3.eth.getBalance(this.playerOneAccount);
    },
    function(helper) {
      // when we wait until the monarch should have died
      helper.retryUntilTime(this.expectDieBy);
      // and then let player 2 claim the throne
      var txnHash = this.throne.claimThrone('playerTwo', {
        from: this.playerTwoAccount,
        value: this.throne.currentClaimPrice(),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then player one's balance does not change
      var playerOneBalanceNow = helper.web3.eth.getBalance(this.playerOneAccount);
      this.helper.assertNumEqual(playerOneBalanceNow, this.playerOneBalanceAfterTheyClaimed, 'playerOne balance');
      // but the balance of the contract itself goes up by the whole claim amount (1 eth)
      var contractBalanceNow = helper.web3.eth.getBalance(this.throne.address);
      var expectedContractBalance = helper.addNum(this.contractBalanceAfterFirstClaim, helper.toWei('1', 'ether'));
      this.helper.assertNumEqual(contractBalanceNow, expectedContractBalance, 'contract balance');
    }
  ]
});

// TODO - crikey, there's at least 100 more tests we could write ...
// more contract balance change from comission
// claim using fallback fn
// claim throne as wizard / deity / same player as current monarch
// claim from contract
// claim for different addr
// rounding
// wizard balance
// deity funds avail
// failed payments
// ring-fencing of failed payments
// ring-fencing between wizard + deity
// no name / long name / invalid name
// ownership transfer
// creation of alt-thrones

tests.run();
