/* jslint node:true, mocha:true */
'use strict';

/*
 * Intended to be run against the testnet via the web3 RPC API.
 * e.g. might start geth like:
 * geth --testnet --port 31313 --datadir e:/ethereum -rpc -rpcport 8646 -rpcapi "eth,web3,personal"
 * (hint: running against private testnet with low difficulty is faster)
*/

var DAppTestRunner = require('./dapp-test-runner');
var tests = new DAppTestRunner('King of the Ether Throne Core');
tests.setWeb3MasterAccount('0xb028d69032b7ca02056d684e6086030aecbf6eb0');

// Not sure it's really worth bringing in this dependency just to get
// nice colours and Unicode symbols in the output or not!
var mocha = require('mocha');
var reporter = new mocha.reporters.Spec(tests);

// TODO - perhaps I should install the solidity compiler to avoid this
var kingOfTheEtherThroneInterface = [{"constant":false,"inputs":[{"name":"name","type":"bytes"}],"name":"claimThrone","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"isLivingMonarch","outputs":[{"name":"alive","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"price","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"monarchNumber","type":"uint256"}],"name":"resendFailedPayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"config","outputs":[{"name":"wizardAddress","type":"address"},{"name":"deityAddress","type":"address"},{"name":"startingClaimPrice","type":"uint256"},{"name":"claimPriceAdjustPerMille","type":"uint256"},{"name":"commissionPerMille","type":"uint256"},{"name":"incubationDuration","type":"uint256"},{"name":"failedPaymentRingfenceDuration","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"monarchs","outputs":[{"name":"compensationAddress","type":"address"},{"name":"originAddress","type":"address"},{"name":"name","type":"bytes"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"},{"name":"compensationStatus","type":"uint8"},{"name":"compensationTimestamp","type":"uint256"},{"name":"compensationPaid","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"newDeity","type":"address"}],"name":"switchDeity","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepDeityCommission","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"numberOfMonarchs","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepWizardCommission","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes"},{"name":"compensationAddress","type":"address"}],"name":"claimThroneFor","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"monarchNumber","type":"uint256"}],"name":"voidFailedPayment","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"newWizard","type":"address"}],"name":"switchWizard","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"lastClaimPrice","outputs":[{"name":"price","type":"uint256"}],"type":"function"},{"inputs":[{"name":"wizardAddress","type":"address"},{"name":"deityAddress","type":"address"},{"name":"startingClaimPrice","type":"uint256"},{"name":"claimPriceAdjustPerMille","type":"uint256"},{"name":"commissionPerMille","type":"uint256"},{"name":"incubationDuration","type":"uint256"},{"name":"failedPaymentRingfenceDuration","type":"uint256"}],"type":"constructor"}];
var kingOfTheEtherThroneBytecode = "606060405260405160e0806113d7833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919050505b60e06040519081016040528088815260200187815260200186815260200185815260200184815260200183815260200182815260200150600060005060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060408201518160020160005055606082015181600301600050556080820151816004016000505560a0820151816005016000505560c082015181600601600050559050505b505050505050506112888061014f6000396000f3606060405236156100cc576000357c0100000000000000000000000000000000000000000000000000000000900480632ea459b8146100e55780635fbddcf31461013b57806364325ddb1461015e578063715ef4ff1461018157806379502c55146101995780638b252ab914610212578063a70a9ad71461031d578063a819819b14610335578063c8fdc8911461034d578063cb553ac914610370578063d6d902c414610388578063e6e91cfc146103e7578063edb27f4e146103ff578063fe757fb514610417576100cc565b6100e35b6100e06100db610cca565b6107ae565b5b565b005b6101396004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506107ae565b005b6101486004805050610787565b6040518082815260200191505060405180910390f35b61016b60048050506105c3565b6040518082815260200191505060405180910390f35b6101976004808035906020019091905050610d1c565b005b6101a6600480505061043a565b604051808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815260200182815260200197505050505050505060405180910390f35b61022860048080359060200190919050506104bc565b604051808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff168152602001806020018781526020018681526020018581526020018481526020018381526020018281038252888181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103075780601f106102dc57610100808354040283529160200191610307565b820191906000526020600020905b8154815290600101906020018083116102ea57829003601f168201915b5050995050505050505050505060405180910390f35b6103336004808035906020019091905050611151565b005b61034b6004808035906020019091905050610fe0565b005b61035a600480505061056f565b6040518082815260200191505060405180910390f35b6103866004808035906020019091905050610f0f565b005b6103e56004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919080359060200190919050506107bc565b005b6103fd6004808035906020019091905050610e48565b005b61041560048080359060200190919050506110bf565b005b6104246004805050610584565b6040518082815260200191505060405180910390f35b60006000508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160005054908060030160005054908060040160005054908060050160005054908060060160005054905087565b600760005081815481101561000257906000526020600020906008020160005b915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201600050908060030160005054908060040160005054908060050160009054906101000a900460ff16908060060160005054908060070160005054905088565b60006007600050805490509050610581565b90565b60006007600050600160076000508054905003815481101561000257906000526020600020906008020160005b506003016000505490506105c0565b90565b6000600060006105d1610787565b15156105ee57600060005060020160005054925061078256610781565b6007600050600160076000508054905003815481101561000257906000526020600020906008020160005b506003016000505491506103e86000600050600301600050546103e8018302049050662386f26fc100008110156106565780925061078256610780565b67016345785d8a000081101561068257655af3107a40008104655af3107a40000292506107825661077f565b670de0b6b3a76400008110156106b05766038d7ea4c68000810466038d7ea4c680000292506107825661077e565b678ac7230489e800008110156106de57662386f26fc100008104662386f26fc100000292506107825661077d565b68056bc75e2d6310000081101561070f5767016345785d8a0000810467016345785d8a00000292506107825661077c565b683635c9adc5dea0000081101561074057670de0b6b3a76400008104670de0b6b3a76400000292506107825661077b565b69021e19e0c9bab240000081101561077257678ac7230489e800008104678ac7230489e800000292506107825661077a565b809250610782565b5b5b5b5b5b5b5b5b505090565b6000600061079361056f565b14156107a257600090506107ab565b600190506107ab565b90565b6107b881336107bc565b5b50565b6000600060006000600060006107d1886111e3565b3495506107dc6105c3565b9450848610156107eb57610002565b848611156107f857610002565b610800610787565b15156108145761080f856111f7565b6109b0565b6103e860006000506004016000505486020493508385039250610836846111f7565b614e2091506108956007600050600160076000508054905003815481101561000257906000526020600020906008020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484611210565b905080156108e85760016007600050600160076000508054905003815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff02191690830217905550610941565b60026007600050600160076000508054905003815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff021916908302179055508260086000828282505401925050819055505b426007600050600160076000508054905003815481101561000257906000526020600020906008020160005b5060060160005081905550826007600050600160076000508054905003815481101561000257906000526020600020906008020160005b50600701600050819055505b60076000508054806001018281815481835581811511610af957600802816008028360005260206000209182019101610af891906109e9565b80821115610af45760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600050805460018160011615610100020316600290046000825580601f10610a6d5750610aaa565b601f016020900490600052602060002090810190610aa99190610a8b565b80821115610aa55760008181506000905550600101610a8b565b5090565b5b50600382016000506000905560048201600050600090556005820160006101000a81549060ff021916905560068201600050600090556007820160005060009055506001016109e9565b5090565b5b5050509190906000526020600020906008020160005b610100604051908101604052808b81526020013281526020018c81526020018a815260200142815260200160008152602001600081526020016000815260200150909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506040820151816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0c57805160ff1916838001178555610c3d565b82800160010185558215610c3d579182015b82811115610c3c578251826000505591602001919060010190610c1e565b5b509050610c689190610c4a565b80821115610c645760008181506000905550600101610c4a565b5090565b5050606082015181600301600050556080820151816004016000505560a08201518160050160006101000a81548160ff0219169083021790555060c0820151816006016000505560e082015181600701600050555050505b5050505050505050565b60206040519081016040528060008152602001506000368080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509050610d19565b90565b60006000600060006002600760005086815481101561000257906000526020600020906008020160005b5060050160009054906101000a900460ff16141515610d6457610002565b600760005085815481101561000257906000526020600020906008020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169350600760005085815481101561000257906000526020600020906008020160005b506007016000505492506161a89150610de5848484611252565b9050801515610df357610002565b6001600760005086815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff021916908302179055508260086000828282505403925050819055505b5050505050565b60006002600760005083815481101561000257906000526020600020906008020160005b5060050160009054906101000a900460ff16141515610e8a57610002565b600760005082815481101561000257906000526020600020906008020160005b50600701600050549050806008600082828250540392505081905550610ecf816111f7565b6003600760005083815481101561000257906000526020600020906008020160005b5060050160006101000a81548160ff021916908302179055505b5050565b60006000600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fda57600960005054831115610f8157610002565b6161a89150610fb9600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484611252565b9050801515610fc757610002565b8260096000828282505403925050819055505b5b505050565b60006000600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156110b9573073ffffffffffffffffffffffffffffffffffffffff1631600860005054600960005054850101111561107257610002565b6161a891506110aa600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484611252565b90508015156110b857610002565b5b5b505050565b600060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561114d5780600060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5b50565b600060005060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156111df5780600060005060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5b50565b601e81511015156111f357610002565b5b50565b6002810460096000828282505401925050819055505b50565b60008373ffffffffffffffffffffffffffffffffffffffff16838390604051809050600060405180830381858888f19350505050905061124b565b9392505050565b6000600060005a91508382101561126857610002565b8382039050611278868683611210565b925061127f565b5050939250505056";
tests.registerContract('KingOfTheEtherThrone', kingOfTheEtherThroneInterface, kingOfTheEtherThroneBytecode);

// TODO - register other useful contracts for testing:
// - GasEater
// - Rejector
// - Forwarder
// - Mist Wallet Contract

// NB: why doesn't web3 do this for us? anyway, should probably move this to production code so are testing it.
function decodeMonarchArray(monarchArray) {
  return {
    compensationAddress: monarchArray[0],
    originAddress: monarchArray[1],
    name: monarchArray[2],
    claimPrice: monarchArray[3],
    coronationTimestamp: monarchArray[4],
    compensationStatus: monarchArray[5],
    compensationPaid: monarchArray[6]
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
    '240'
  ]);
}

tests.add({
  title: 'Claim Throne at Starting Price should Increase Claim Price',
  steps: [
    function(helper) {
      // given a new throne and one player
      this.throne = createStandardTestThrone(helper);
      this.playerOneAccount = helper.createAccountWith(helper.toWei('1040', 'finney'));
    },
    function(helper) {
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player pays the exact claim price (which should be 1 ether)
      var originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
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
      helper.assertWeiEqual(newClaimPrice, helper.toWei('1.5','ether'),
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player pays the exact claim price
      var originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
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
      helper.assertWeiEqual(newClaimPrice, helper.toWei('1.5','ether'),
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player tries to claim the throne but with too little ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      this.originalPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.subtractWei(this.originalClaimPrice, helper.toWei('20','finney')),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(newClaimPrice, this.originalClaimPrice,
        'expected claim price to stay the same');
      var newPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      helper.assertWeiLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.subtractWei(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.assertWeiNotAbove(loss, helper.toWei('25', 'finney'), 'expected player to only lose a little gas');
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player tries to claim the throne but with too much ether
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
      this.originalPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      var txnHash = this.throne.claimThrone('playerOne', {
        from: this.playerOneAccount,
        value: helper.addWei(this.originalClaimPrice, helper.toWei('20','finney')),
        gas: 500000
      });
      helper.waitForTxn(txnHash);
    },
    function(helper) {
      // then the claim price does not increase and the player gets their money back (less gas)
      var newClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(newClaimPrice, this.originalClaimPrice,
        'expected claim price to stay the same');
      var newPlayerOneBalance = helper.web3.eth.getBalance(this.playerOneAccount);
      helper.assertWeiLessThan(newPlayerOneBalance, this.originalPlayerOneBalance,
        'expected player to lose some funds for non-refunded gas');
      var loss = helper.subtractWei(this.originalPlayerOneBalance, newPlayerOneBalance);
      helper.assertWeiNotAbove(loss, helper.toWei('25', 'finney'), 'expected player to only lose a little gas');
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when we ask how many monarchs there have been
      // then the answer is none
      var numMonarchs = this.throne.numberOfMonarchs();
      helper.assertWeiEqual(numMonarchs, 0, 'have not been any monarchs');
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
      console.log('! throne is at ', this.throne.address);
      // when the player correctly claims the throne
      this.originalClaimPrice = this.throne.currentClaimPrice();
      helper.assertWeiEqual(this.originalClaimPrice, helper.toWei('1','ether'), 'starting claim price');
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
      helper.assertWeiEqual(numMonarchs, 1, 'should be one monarch now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, true, 'playerOne lives!');
      // and when we look in the monarchs array
      // then playerOne is there:
      // (let's not worry about the timestamps here, they're harder to test)
      var newMonarch = decodeMonarchArray(this.throne.monarchs(0));
      helper.assertStrictEqual(newMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(newMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(newMonarch.name, 'playerOne', 'name');
      helper.assertWeiEqual(newMonarch.claimPrice, this.originalClaimPrice, 'claimPrice');
      helper.assertWeiEqual(newMonarch.compensationStatus, '0', 'compensationStatus');
      helper.assertWeiEqual(newMonarch.compensationPaid, '0', 'compensationPaid');
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
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
      helper.assertWeiEqual(newClaimPrice, helper.toWei('2250','finney'),
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
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
      var increase = helper.subtractWei(playerOneBalanceAtEnd, this.playerOneBalanceAfterPaying);
      helper.assertWeiEqual(increase, helper.toWei('1470','finney'),
        'expected player to get compensation of 98% of claim price');
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
      if (!this.throne.address) helper.waitMore(); // TODO - fix so don't need this
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
      helper.assertWeiEqual(numMonarchs, 2, 'should be two monarchs now');
      // and when we ask if there is a living monarch on the throne
      // then the answer is yes
      var isLivingMonarch = this.throne.isLivingMonarch();
      helper.assertEqual(isLivingMonarch, true, 'playerTwo lives!');
      // and when we look in the monarchs array
      // then playerOne and playerTwo are there with expected properties:
      // (TODO - let's not worry about the timestamps here, they're harder to test)
      var firstMonarch = decodeMonarchArray(this.throne.monarchs(0));
      helper.assertStrictEqual(firstMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(firstMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(firstMonarch.name, 'playerOne', 'name');
      helper.assertWeiEqual(firstMonarch.claimPrice, this.firstClaimPrice, 'claimPrice');
      var goodPaymentStatusCode = 1;
      helper.assertWeiEqual(firstMonarch.compensationStatus, goodPaymentStatusCode, 'compensationStatus');
      var expectedCompensation = helper.toWei('1470', 'finney');
      helper.assertWeiEqual(firstMonarch.compensationPaid, expectedCompensation, 'compensationPaid');
      var secondMonarch = decodeMonarchArray(this.throne.monarchs(1));
      helper.assertStrictEqual(secondMonarch.compensationAddress, this.playerOneAccount, 'compensationAddress');
      helper.assertStrictEqual(secondMonarch.originAddress, this.playerOneAccount, 'originAddress');
      helper.assertStrictEqual(secondMonarch.name, 'playerTwo', 'name');
      helper.assertWeiEqual(secondMonarch.claimPrice, this.secondClaimPrice, 'claimPrice');
      helper.assertWeiEqual(secondMonarch.compensationStatus, '0', 'compensationStatus');
      helper.assertWeiEqual(secondMonarch.compensationPaid, '0', 'compensationPaid');
    }
  ]
});

// TODO - crikey, there's at least 100 more tests we could write ...

tests.run();
