/* jslint node:true */
'use strict';

/*
 * Perform on-block-chain tests of the King of the Ether Throne contracts & javascript interface.
 *
 * Intended to be run against the testnet via the web3 RPC API (it's a bit expensive on main net!).
 *
 * e.g. might start geth like:
 * cd Desktop
 * geth --testnet --port 31313 --datadir e:/ethereum -rpc -rpcport 8646 -rpcapi "eth,web3,personal" -unlock 0
 *
 * or using the test.ether.camp test met:
 *
 * geth --datadir 'E:\Ethereum\camptest' --networkid 161  --nodiscover --port 32323 \
 *   --port 32323 -verbosity 3 -rpc -rpcport 8646 -rpcapi "eth,web3,personal" \
 *   --genesis E:/Ethereum/camptest/frontier-test.json -unlock 0  --verbosity 5 --gpomin "50000000000"
 *
 * Alternatively running against private testnet with low difficulty is much faster (but fiddly to setup).
 *
 * NB: I guess we could try breaking up the contract into smaller mini-contracts to make testing
 * easier but CALLCODE is quite expensive (and a bit confusing) ...
*/

var fs = require('fs'); // needing for reading contracts and writing reports

var DAppTestRunner = require('dapp-test-runner');
var runner = new DAppTestRunner('King of the Ether Throne');

// Wrapper/helper functions for the throne contracts
var ThroneSupport = require('./throne-support.js');
var throneSupport = new ThroneSupport();

// For ease of maintenance we split out the tests into different files
// Perhaps we ought to have concept of suites? Or just use multiple runners?
var TestThroneCore = require('./test-throne-core.js');
var TestThronePayments = require('./test-throne-payments.js');
var TestThroneMaker = require('./test-throne-maker.js');
var TestThroneInternals = require('./test-throne-internals.js');

var subTestModules = [ new TestThroneCore(), new TestThronePayments(), new TestThroneMaker(), new TestThroneInternals() ];

// uncomment to debug concurrency problems
//runner.disableParallelism();

// Register the contract we want to test.
var throneContractSource = fs.readFileSync('contracts/KingOfTheEtherThrone.sol', 'utf8');
runner.registerSolidityContracts(throneContractSource);

// Register the tests from our sub-modules.
subTestModules.forEach(function (stm) {
  stm.addTests(runner, throneSupport);
});

// TODO - crikey, there's at least 100 more tests we could write ...
// more contract balance changes from comission
// claim throne as wizard / deity / same player as current monarch
// claim for different addr
// rounding
// wizard balance
// deity funds avail
// ring-fencing of failed payments
// ring-fencing between wizard + deity
// king with no name / long name / invalid name
// ownership transfer:
// - deity of throne
// - wizard of throne
// - deity of throne maker 
// creation of alt-thrones:
// - correct fee (even when fee changed)
// - bogus properties
// - resulting thrones behave ok
// - sweeping of comission
// - deity and wizard ownership assigned correctly
// multi-geth-node tests


// Uncomment these to control which tests are run.

runner.excludeCategory('safe');
//runner.excludeCategory('broken');

// Run the tests.
runner.run(function (results) {
  fs.writeFileSync('tests/test-throne-report.md', results.getMarkdownReport(), 'utf-8');
});
