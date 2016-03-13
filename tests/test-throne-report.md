# "King of the Ether Throne Core" Report

Generated at 2016-03-13T11:17:29.117Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Bad** - there were test failures:

* Tests added: 12
* Tests skipped: 7
* Tests passed: 3
* Tests failed: 2

The first test that failed was "First monarch appears to die after standard test curse incubation period"

## Tests

### Test - "Can inspect throne config"

##### Status

Skipped

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Skipped

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Skipped

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Skipped

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Skipped

### Test - "Hall of Monarchs after First Claim"

##### Status

Skipped

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Skipped

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x361adcef526bb1f9e8fb78527bd7b4b13678bebb
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xdb326d173ea68eff83c2b6b3272a445d58963136a65e309bed44b0c0ac09def7](http://testnet.etherscan.io/tx/0xdb326d173ea68eff83c2b6b3272a445d58963136a65e309bed44b0c0ac09def7)
* [0xe297de9eead60b68cded7d992db2aa4d5095479ccf90e981822464bc7c89f811](http://testnet.etherscan.io/tx/0xe297de9eead60b68cded7d992db2aa4d5095479ccf90e981822464bc7c89f811)
* [0xeae5836c3d64adb1a91c50a43c949056c7692cdd60f9e81539660f7c78b2d2ec](http://testnet.etherscan.io/tx/0xeae5836c3d64adb1a91c50a43c949056c7692cdd60f9e81539660f7c78b2d2ec)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x29a6448975cda93a098716553c3c0038421d8112
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2c8017c8c06bbb0cc80e3f2e0df3d19bd4bd89a9f12687a14937b9d7d5d09dfa](http://testnet.etherscan.io/tx/0x2c8017c8c06bbb0cc80e3f2e0df3d19bd4bd89a9f12687a14937b9d7d5d09dfa)
* [0xb475d55e6225a7913620074fd04fb7c353d20a7d2be18d4e9843da0e72ebaefa](http://testnet.etherscan.io/tx/0xb475d55e6225a7913620074fd04fb7c353d20a7d2be18d4e9843da0e72ebaefa)
* [0x6a5db4bce365c5fc67b50ecf45845c66f11856d8532fe5e19969d9ebb988cf78](http://testnet.etherscan.io/tx/0x6a5db4bce365c5fc67b50ecf45845c66f11856d8532fe5e19969d9ebb988cf78)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2f0acf3147342de55811a0d7a9e810397327d176
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x521b84bd129ecf8038f3bb9fa5a606b143138288e510b8df465b0b068ee72943](http://testnet.etherscan.io/tx/0x521b84bd129ecf8038f3bb9fa5a606b143138288e510b8df465b0b068ee72943)
* [0x737b28680a5cb4d5fa51cecc4eb1817e80007a81f7549072fdbcc88784c83ae7](http://testnet.etherscan.io/tx/0x737b28680a5cb4d5fa51cecc4eb1817e80007a81f7549072fdbcc88784c83ae7)
* [0xc52503e56248ba6f60c39e0d3c39e45645263553ca4b8d2551d121e148e13893](http://testnet.etherscan.io/tx/0xc52503e56248ba6f60c39e0d3c39e45645263553ca4b8d2551d121e148e13893)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Failed

##### Failure Cause

TypeError: Cannot read property 'nextStep' of undefined

Location: Step #2 at Object.<anonymous> (C:\Users\Kieran\Documents\KingOfTheEtherThrone\tests\test-throne.js:460:18)

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf593f7ad9d09d029d336e54e0812db1985c361bc
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x374a147452e72a4ca2ba1c57e3be46c27204966566b267fca99e0658530c909e](http://testnet.etherscan.io/tx/0x374a147452e72a4ca2ba1c57e3be46c27204966566b267fca99e0658530c909e)
* [0x303c10ee3aecc882bc7b70c543fca627528c06121b55430dff94669fd0538525](http://testnet.etherscan.io/tx/0x303c10ee3aecc882bc7b70c543fca627528c06121b55430dff94669fd0538525)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Failed

##### Failure Cause

TypeError: helper.getLatestBlockTime is not a function

Location: Step #2 at Object.<anonymous> (C:\Users\Kieran\Documents\KingOfTheEtherThrone\tests\test-throne.js:490:30)

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xbba34d43ef40451b5a8f686b2a2fd076289166b8
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf2e4d59fa5b902876d2e2ca9d5eb1950901cc7fe8cafd02d27955260d579e35a](http://testnet.etherscan.io/tx/0xf2e4d59fa5b902876d2e2ca9d5eb1950901cc7fe8cafd02d27955260d579e35a)
* [0xa9fb608e0f0b377e7e0a7be8babe0a3a912d343a8df660164aa78857f2e44732](http://testnet.etherscan.io/tx/0xa9fb608e0f0b377e7e0a7be8babe0a3a912d343a8df660164aa78857f2e44732)

