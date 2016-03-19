# "King of the Ether Throne Core" Report

Generated at 2016-03-19T21:15:28.793Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 14
* Tests skipped: 0
* Tests passed: 14
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x42f98e8500e06dd6a98139a370b6837f90827753

##### Transactions Generated

* [0x67d4cc431a67f1f66153247ec48fede0900fbd1a67edf4a7f38950d70c1c80a9](http://testnet.etherscan.io/tx/0x67d4cc431a67f1f66153247ec48fede0900fbd1a67edf4a7f38950d70c1c80a9)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf0d67edb05bf3295b3900253a4685016bb19e70b
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x7a36c04c4e7e70ce45fc60010a4056a67b78719b0134873a649b53081a6a388e](http://testnet.etherscan.io/tx/0x7a36c04c4e7e70ce45fc60010a4056a67b78719b0134873a649b53081a6a388e)
* [0x7b37658944cb153f321dc8292071de6c820ae1842ba387f5bf2cd9c6696c84da](http://testnet.etherscan.io/tx/0x7b37658944cb153f321dc8292071de6c820ae1842ba387f5bf2cd9c6696c84da)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x3e26d1faf2b49fed1408b20fcdb19dd1d2964e6a
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xbacb40e6086b5a75e200ef2fcfcf3a87e26cc73f3ecd1385058112b576b2ab44](http://testnet.etherscan.io/tx/0xbacb40e6086b5a75e200ef2fcfcf3a87e26cc73f3ecd1385058112b576b2ab44)
* [0xa267411543c7fba2011493143a6bc9ecd1e422688c8dd3f1ab9151774a835574](http://testnet.etherscan.io/tx/0xa267411543c7fba2011493143a6bc9ecd1e422688c8dd3f1ab9151774a835574)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xee477ddefd967c5ef9b49bf0a4ba3896bb284c40
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x6d4ca4f8edca2ab09fa186c1efdce7fbde25a3d129ccbacffa2c53335b0f66e0](http://testnet.etherscan.io/tx/0x6d4ca4f8edca2ab09fa186c1efdce7fbde25a3d129ccbacffa2c53335b0f66e0)
* [0xad5dda4c5c0ce16b1fe078865a04c8e3ddd5071a02f79f7013889d6bd40297e3](http://testnet.etherscan.io/tx/0xad5dda4c5c0ce16b1fe078865a04c8e3ddd5071a02f79f7013889d6bd40297e3)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb4da0d1726d54ceab66b84f554dd66c1d2736388

##### Transactions Generated

* [0x9c78b6baffc58d50ea80775e84d5285f3458f32b1e9abb237ae120ab02ace4aa](http://testnet.etherscan.io/tx/0x9c78b6baffc58d50ea80775e84d5285f3458f32b1e9abb237ae120ab02ace4aa)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x841db1ef6434dce5c08e654b4cb16eb98657793f
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1a1f5ed9c6ab863a48d30aff6f2cbdb4296de29b6d8f67fdda361a3fc6cd7394](http://testnet.etherscan.io/tx/0x1a1f5ed9c6ab863a48d30aff6f2cbdb4296de29b6d8f67fdda361a3fc6cd7394)
* [0x33bae713a811a301f04ac3c987d57219330c27da7b293ca8074eb5f5f5709939](http://testnet.etherscan.io/tx/0x33bae713a811a301f04ac3c987d57219330c27da7b293ca8074eb5f5f5709939)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x62a3f8fe6cb40f49c598963a3e7e1881254af39f
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xb3fd39ca57f39e2840772d59164c3b57c9b6b984eb090a3e92a99dbfb0b818a4](http://testnet.etherscan.io/tx/0xb3fd39ca57f39e2840772d59164c3b57c9b6b984eb090a3e92a99dbfb0b818a4)
* [0x4fd47138384315e011a20dc99d4b5102c7966c2ab5cb13a8e7639f49217e637c](http://testnet.etherscan.io/tx/0x4fd47138384315e011a20dc99d4b5102c7966c2ab5cb13a8e7639f49217e637c)
* [0x5b8c473902d252805b9e47bf3ba86a0028a733367618cf96a2a5601b4c96c417](http://testnet.etherscan.io/tx/0x5b8c473902d252805b9e47bf3ba86a0028a733367618cf96a2a5601b4c96c417)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x27524cc67da4a91af0c557d2f52e04c821746d2d
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x8848107506a4b2cbaba7cd5fca23dbb6109333a26be5904bf9a4b1cbeadbe6a1](http://testnet.etherscan.io/tx/0x8848107506a4b2cbaba7cd5fca23dbb6109333a26be5904bf9a4b1cbeadbe6a1)
* [0x953d79abbdafd5f056d8761b6ff29104dfc53d00424f067d8e280dcb34284659](http://testnet.etherscan.io/tx/0x953d79abbdafd5f056d8761b6ff29104dfc53d00424f067d8e280dcb34284659)
* [0x4d56608664113f7fa89148ad7dad2882fb68ef479798195fffc9d3a31232afe5](http://testnet.etherscan.io/tx/0x4d56608664113f7fa89148ad7dad2882fb68ef479798195fffc9d3a31232afe5)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xcd0d73e96dd59f5cef7f36e33edbe60760b586f3
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x989444e7bbdb78c8130517c8311210ba2be5bbb97a0ae4597cf8eba99a8afc19](http://testnet.etherscan.io/tx/0x989444e7bbdb78c8130517c8311210ba2be5bbb97a0ae4597cf8eba99a8afc19)
* [0x2f1d8fd6d95ca220ddf17be41e1c22b34f84d7e989c03169a5527a5db76cf52f](http://testnet.etherscan.io/tx/0x2f1d8fd6d95ca220ddf17be41e1c22b34f84d7e989c03169a5527a5db76cf52f)
* [0x7ac221c118aedaa8e32d7afbb9241e1e13b5b3b90bb916966e45da6213da8aaf](http://testnet.etherscan.io/tx/0x7ac221c118aedaa8e32d7afbb9241e1e13b5b3b90bb916966e45da6213da8aaf)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x7fe08a7657e4e874a14820a370cd4cf2ab04ee43
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x37aeb41fcceab5b596d70b229c7a2a8edbd42b9acc31731d4633d5772badb6d0](http://testnet.etherscan.io/tx/0x37aeb41fcceab5b596d70b229c7a2a8edbd42b9acc31731d4633d5772badb6d0)
* [0xa748318cdb43499c05f1da5c47921305e57604002581e87c1d616beeb68cb97a](http://testnet.etherscan.io/tx/0xa748318cdb43499c05f1da5c47921305e57604002581e87c1d616beeb68cb97a)
* [0x53606632789c9aa4bc8cf77789987c01f913efe3ec3292f0b0f392b49cdf2353](http://testnet.etherscan.io/tx/0x53606632789c9aa4bc8cf77789987c01f913efe3ec3292f0b0f392b49cdf2353)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xceb775aa54e4d04d498f41d472e334f4c69051c5
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xed82092bf2dcbeb928316e1e0265bf14ce62c14de1651714652c49e5ed00049a](http://testnet.etherscan.io/tx/0xed82092bf2dcbeb928316e1e0265bf14ce62c14de1651714652c49e5ed00049a)
* [0x84a5e4e203c7673b805d8292d337f9ea6aafb80614b0bcc1225d33ecdde0b347](http://testnet.etherscan.io/tx/0x84a5e4e203c7673b805d8292d337f9ea6aafb80614b0bcc1225d33ecdde0b347)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xe14119db70a636f135a5bdee2c076f8521d6a791
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf66c251d0985a246b781556e3023dbccf237b361ed979b2853669fb2616db8bc](http://testnet.etherscan.io/tx/0xf66c251d0985a246b781556e3023dbccf237b361ed979b2853669fb2616db8bc)
* [0x7dd1abb5baef9775bc27c3be59411079466cf58342b541853b855d58b336bdfa](http://testnet.etherscan.io/tx/0x7dd1abb5baef9775bc27c3be59411079466cf58342b541853b855d58b336bdfa)
* [0x480bd87a373d231d3ac42c6ef34ea61022d59b222d9fc57fceaac322b635948c](http://testnet.etherscan.io/tx/0x480bd87a373d231d3ac42c6ef34ea61022d59b222d9fc57fceaac322b635948c)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf4ee0681df62be3868ce373b943ae34e3b5c44f7

##### Transactions Generated

* [0x7c1021e47e1c02820af458b11bdd0ee143cc311d0cde4e1288fce2ba2c45d4a2](http://testnet.etherscan.io/tx/0x7c1021e47e1c02820af458b11bdd0ee143cc311d0cde4e1288fce2ba2c45d4a2)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x754ebcec9473bbfe27ca0d486eb26de8f2032e80
* i think i am creating the wallet from 0x1c6ad57defb1cd81c183046995ededb3b3e78392
* created instance of contract DTRExpensiveWallet at 0x5cce635e46468f59d07c2ce2c0c19d0022c95d64
* i think i am telling the wallet to spend from 0x1c6ad57defb1cd81c183046995ededb3b3e78392
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0x8b337b21251ead4b0e8eca1793bfbc7ce427f54fe873ec725c6240593e5e3913](http://testnet.etherscan.io/tx/0x8b337b21251ead4b0e8eca1793bfbc7ce427f54fe873ec725c6240593e5e3913)
* [0xfc5420febe209da72c3c0a71b02da617a6792d9c217078cc3e861c178b2c5a5c](http://testnet.etherscan.io/tx/0xfc5420febe209da72c3c0a71b02da617a6792d9c217078cc3e861c178b2c5a5c)
* [0xdfcad883be99b4f05e144bc68ce1a93e1ce7ca3569fe81e847f2538cc1cf9e04](http://testnet.etherscan.io/tx/0xdfcad883be99b4f05e144bc68ce1a93e1ce7ca3569fe81e847f2538cc1cf9e04)

##### Contract Events

* WalletCreated(by=0x1c6ad57defb1cd81c183046995ededb3b3e78392,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* WithdrawalMade(to=0x754ebcec9473bbfe27ca0d486eb26de8f2032e80,value=1000000000000000000,)
