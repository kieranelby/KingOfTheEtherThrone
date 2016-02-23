/* jslint node:true, mocha:true */
'use strict';

/*
 * Intended to be run against the testnet via the web3 RPC API.
 * e.g. might start geth like:
 * geth --testnet --port 31313 --datadir e:/ethereum -rpc -rpcport 8646
*/

var chai = require('chai');
var expect = chai.expect;

// get web3 stuff into a usable state first

var Web3 = require('web3');
var web3 = new Web3();
var testnetWeb3Provider = 'http://localhost:8646';
web3.setProvider(new web3.providers.HttpProvider(testnetWeb3Provider));
web3.eth.defaultAccount = web3.eth.accounts[1];

var waitUntilNotSyncing = function() {
  if (!web3.eth.syncing) {
    return;
  } else {
    console.log('waiting while ethereum node is syncing ...');
    setTimeout( function() { waitUntilNotSyncing() }, 500 );
  }
}

describe('Default test account balance', function() {
  before(function() { waitUntilNotSyncing(); });
  it('should have enough funds to run test', function() {
    var balance = web3.eth.getBalance(web3.eth.defaultAccount);
    expect(balance).to.be.at.least(web3.toWei('1.0', 'ether'));
  });
});
