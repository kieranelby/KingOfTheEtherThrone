# "King of the Ether Throne Core" Report

Generated at 2016-03-24T07:42:40.480Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Bad** - there were test failures:

* Tests added: 20
* Tests skipped: 0
* Tests passed: 19
* Tests failed: 1

The first test that failed was "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xef0691f5d24ce10fe1954a60f4b9754351c16522

##### Transactions Generated

* [0x76796de6cc7d4f6c97b23155d2c3c09e31e657ebba9d0170a6695c86d8057d4d](http://testnet.etherscan.io/tx/0x76796de6cc7d4f6c97b23155d2c3c09e31e657ebba9d0170a6695c86d8057d4d)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xa96604b6cf75a6636f24e43f95663222ff5a924c
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xb3fa3c6402337337327e04218b0acf059705306ce78d8cda7f76392877421d29](http://testnet.etherscan.io/tx/0xb3fa3c6402337337327e04218b0acf059705306ce78d8cda7f76392877421d29)
* [0x399368ee3b09e16fa795bec2cc8eced4cc915d9f759d3a56372497b5b044e073](http://testnet.etherscan.io/tx/0x399368ee3b09e16fa795bec2cc8eced4cc915d9f759d3a56372497b5b044e073)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf1890f9f205fd116e65e03b2fe5c94c4b372e911
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x021055f56a3ad331dc34a094c50a5d2307d4531bbdc41dfd2bdf2e0e55b2e323](http://testnet.etherscan.io/tx/0x021055f56a3ad331dc34a094c50a5d2307d4531bbdc41dfd2bdf2e0e55b2e323)
* [0x5714e9857fa2ad38734ebc43b7686f4ea8a58d4ca41195464bd11b651bf884fb](http://testnet.etherscan.io/tx/0x5714e9857fa2ad38734ebc43b7686f4ea8a58d4ca41195464bd11b651bf884fb)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x3b2236eccd416f4dae10c423f3cebe9e5699a6eb
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x0048eac5b82b279566ad127a8e6d152fd56ba11bf5c653f8a462dd9421d0f34e](http://testnet.etherscan.io/tx/0x0048eac5b82b279566ad127a8e6d152fd56ba11bf5c653f8a462dd9421d0f34e)
* [0x87fa00abe38453a38e02cb3e2283190e6138779b5f414e6f3acc1b3d85ea6851](http://testnet.etherscan.io/tx/0x87fa00abe38453a38e02cb3e2283190e6138779b5f414e6f3acc1b3d85ea6851)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x33950d62655fa56dc5b206ab33d44d6063ca3703

##### Transactions Generated

* [0xe47ced9f1d615091fccf8aa67df810a9c63a571581d22c87bb4fb4dc2f7b1b70](http://testnet.etherscan.io/tx/0xe47ced9f1d615091fccf8aa67df810a9c63a571581d22c87bb4fb4dc2f7b1b70)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xde4290c1e8820c8e4d8305c906434c972429e864
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf8f1d190e8335c6f6a4dc92f4e4d95aef0cfe368d9917f78d9532defa9161c43](http://testnet.etherscan.io/tx/0xf8f1d190e8335c6f6a4dc92f4e4d95aef0cfe368d9917f78d9532defa9161c43)
* [0x794f4fae8976cda551dbc6a744e320394bb61fa01b768e66661cc80070bbceb6](http://testnet.etherscan.io/tx/0x794f4fae8976cda551dbc6a744e320394bb61fa01b768e66661cc80070bbceb6)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x990738dbd5de2dacd7d72e98c56476f9714ef7f7
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x404c469d2ca2da4fb0d2baa2f079784d404898b1f50b72f2fdd3a4968ba13800](http://testnet.etherscan.io/tx/0x404c469d2ca2da4fb0d2baa2f079784d404898b1f50b72f2fdd3a4968ba13800)
* [0x78d78e9bb78177ff12e8051b1348a1b9a7e151f390c0c07ec6c92e702390969c](http://testnet.etherscan.io/tx/0x78d78e9bb78177ff12e8051b1348a1b9a7e151f390c0c07ec6c92e702390969c)
* [0x95e8eae60d7dcf3981cc1d39dd496d384c15635ce2556b51dd332cf9ae82aeb8](http://testnet.etherscan.io/tx/0x95e8eae60d7dcf3981cc1d39dd496d384c15635ce2556b51dd332cf9ae82aeb8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x810dc4addc6b66a79eb1a6eae2900196af3e45dc
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x19714f804256269813940ad1e122bdde0fde73da0883b982e4bdfb9977dceb10](http://testnet.etherscan.io/tx/0x19714f804256269813940ad1e122bdde0fde73da0883b982e4bdfb9977dceb10)
* [0xc1ae9f6894114cbcfc4cda4a25aec48e903eec9d273d2bef4d40ccbc34d99689](http://testnet.etherscan.io/tx/0xc1ae9f6894114cbcfc4cda4a25aec48e903eec9d273d2bef4d40ccbc34d99689)
* [0x133a3cf55e08a2e91e8a5f22b787be9fe908500fcc771aea7ccdc822679d7be8](http://testnet.etherscan.io/tx/0x133a3cf55e08a2e91e8a5f22b787be9fe908500fcc771aea7ccdc822679d7be8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x24451b7963918918becb96e6989965b1528ee3ac
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xc9b7fc5f49eb0acefcef46572aceedff477cdd77648c9acccbe8e8f0e71f7eb3](http://testnet.etherscan.io/tx/0xc9b7fc5f49eb0acefcef46572aceedff477cdd77648c9acccbe8e8f0e71f7eb3)
* [0xa6fec617bf323cbec672468b0c7458d7657391db2e08feafaaaab4368e880442](http://testnet.etherscan.io/tx/0xa6fec617bf323cbec672468b0c7458d7657391db2e08feafaaaab4368e880442)
* [0xb0efc3a3e78e7670800ebc75e340fa16bcc6268c33ad627ecaf95fbe3318341d](http://testnet.etherscan.io/tx/0xb0efc3a3e78e7670800ebc75e340fa16bcc6268c33ad627ecaf95fbe3318341d)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf003f7b5c29fc4f99cb3f84b33463ae84a346ba9
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xaafe68c4cc3242668b9355aedc7914589f51e9c9cdb5445931ba82cc8ae3ee55](http://testnet.etherscan.io/tx/0xaafe68c4cc3242668b9355aedc7914589f51e9c9cdb5445931ba82cc8ae3ee55)
* [0xc960d9c82f99e6746daa443dbcef880f0561aaa0cc8e8b701af5ee0ad37f58c5](http://testnet.etherscan.io/tx/0xc960d9c82f99e6746daa443dbcef880f0561aaa0cc8e8b701af5ee0ad37f58c5)
* [0xf889a9d832a44db172af16cbd0481980bc87827b394aab613e1df67bfde7f23d](http://testnet.etherscan.io/tx/0xf889a9d832a44db172af16cbd0481980bc87827b394aab613e1df67bfde7f23d)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x228d8ed0ebb1a2e0964094e53228c67552a28a65
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xb44adfe017ee20c508e428d125c9205cec4e82a68490a73874dffbc6488ad91e](http://testnet.etherscan.io/tx/0xb44adfe017ee20c508e428d125c9205cec4e82a68490a73874dffbc6488ad91e)
* [0xf32dd199f5c4f0290dbca11d3e6c183072572533d913927b8707c871261107a4](http://testnet.etherscan.io/tx/0xf32dd199f5c4f0290dbca11d3e6c183072572533d913927b8707c871261107a4)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x55fcc55224893c682e8651950ef60a0d68f8f9a7
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2fbd7fba9413d70ed121476314b32492da6a78f8644ebf1e16a904f292eb2013](http://testnet.etherscan.io/tx/0x2fbd7fba9413d70ed121476314b32492da6a78f8644ebf1e16a904f292eb2013)
* [0x8dad48fb61ffd84531fe05167369bfe76582f63723f3a23c3f9659eb974022cd](http://testnet.etherscan.io/tx/0x8dad48fb61ffd84531fe05167369bfe76582f63723f3a23c3f9659eb974022cd)
* [0x0ec4dae792a715c57159e00fa47f4be7131d59ccc05f6fc31b4aa0a0bab43ca7](http://testnet.etherscan.io/tx/0x0ec4dae792a715c57159e00fa47f4be7131d59ccc05f6fc31b4aa0a0bab43ca7)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x5ca2796076cdf8ad27609df3ec9f695975d56426

##### Transactions Generated

* [0xddf10b5988db54967f40ca22bccb725752b3ec59f5d618bcb6fafa7acad156c9](http://testnet.etherscan.io/tx/0xddf10b5988db54967f40ca22bccb725752b3ec59f5d618bcb6fafa7acad156c9)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xff3491afc41e3b25017a38671ed23c42401f1faf
* created instance of contract DTRExpensiveWallet at 0x7d9ef70c917b185b75b9676365a41bbde820f799
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0xd8e721cc55d39af88cc29c1c340d7f0f07d637538495bdb09d4ecfb7d2052a3d](http://testnet.etherscan.io/tx/0xd8e721cc55d39af88cc29c1c340d7f0f07d637538495bdb09d4ecfb7d2052a3d)
* [0x0f37428d9446289e2f3840ad1918b8f1dda73caf2b634857551192e83b9b88e3](http://testnet.etherscan.io/tx/0x0f37428d9446289e2f3840ad1918b8f1dda73caf2b634857551192e83b9b88e3)
* [0x99f2341c5718e3aa3996387c6d339a17906c4f5fd93c930cf1df1499524560b8](http://testnet.etherscan.io/tx/0x99f2341c5718e3aa3996387c6d339a17906c4f5fd93c930cf1df1499524560b8)

##### Contract Events

* WalletCreated(by=0x96384d8ee4275db3d9ff753ab0af81f431adb892,)
* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xff3491afc41e3b25017a38671ed23c42401f1faf,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xcbc572d33c6b480ab84d2f707307ec922d51ee72
* created instance of contract DTRExpensiveWallet at 0x57e6cb6e49f70ecf72098374be3e4c598879db3b
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x7bf0688ff87aa76d07b35a34f10deff3ca49c85f7f5967b5ae07f0286344e813](http://testnet.etherscan.io/tx/0x7bf0688ff87aa76d07b35a34f10deff3ca49c85f7f5967b5ae07f0286344e813)
* [0x27c9e09844b921b641c6cdb2e2254d62fed4d014f3009e45f5945fab3ad4161f](http://testnet.etherscan.io/tx/0x27c9e09844b921b641c6cdb2e2254d62fed4d014f3009e45f5945fab3ad4161f)
* [0x473f2d42293804be47e3ebedfb443a87272e7feb2d4e0a10614144b79e14c45e](http://testnet.etherscan.io/tx/0x473f2d42293804be47e3ebedfb443a87272e7feb2d4e0a10614144b79e14c45e)
* [0x8d87f8cdf54bda032a02b4c50841eba4a073e8e54fbb521f3462038458a5d797](http://testnet.etherscan.io/tx/0x8d87f8cdf54bda032a02b4c50841eba4a073e8e54fbb521f3462038458a5d797)

##### Contract Events

* DepositMade(from=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xcbc572d33c6b480ab84d2f707307ec922d51ee72,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x351d31894be8aa7367b519f551955e4c6097ba79
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0x3bdc212ca6026a5823085078090d667c55db0193,200000000000000000,1458805089
* gazetteerEntry is  [object Object]
* myThroneAddress is  0x3bdc212ca6026a5823085078090d667c55db0193
* created instance of contract KingOfTheEtherThrone at 0x3bdc212ca6026a5823085078090d667c55db0193
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2b9953dfdee67438e7cf1fa4e640efbf5b08e0fd813745b767616cae6a07c0ae](http://testnet.etherscan.io/tx/0x2b9953dfdee67438e7cf1fa4e640efbf5b08e0fd813745b767616cae6a07c0ae)
* [0x4d503df29153cf66babaff1c99c2f2d6ae2397aba3a57c5fdc221a4e72d34f87](http://testnet.etherscan.io/tx/0x4d503df29153cf66babaff1c99c2f2d6ae2397aba3a57c5fdc221a4e72d34f87)
* [0x9c0fe33904dc522e397b93657352813012f64a9b4122a388f4b6f920b5b29bbe](http://testnet.etherscan.io/tx/0x9c0fe33904dc522e397b93657352813012f64a9b4122a388f4b6f920b5b29bbe)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x5dfe87748ec8611e0c70a7c61133291cd5aea992
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xf5f5fbcbc71f85a02f6a6f547cd2e278dee83b2992e32b43129cf90d10c6a931](http://testnet.etherscan.io/tx/0xf5f5fbcbc71f85a02f6a6f547cd2e278dee83b2992e32b43129cf90d10c6a931)
* [0x6fa611d9689c7a587383c27e8d5fd8bff0a2f4cda684d149ea846f0bd1858118](http://testnet.etherscan.io/tx/0x6fa611d9689c7a587383c27e8d5fd8bff0a2f4cda684d149ea846f0bd1858118)
* [0x13374949adb80cc341998c10830a68452981e4a59f89d9e801351c10ca8a2b07](http://testnet.etherscan.io/tx/0x13374949adb80cc341998c10830a68452981e4a59f89d9e801351c10ca8a2b07)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xcf700987be1ea967b01d4b8913e828bff3f203d1
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xa2ac36cbe4f5c2bce9e2c8896ce354235023ad73b0b5631e02f3c2c6983f458e](http://testnet.etherscan.io/tx/0xa2ac36cbe4f5c2bce9e2c8896ce354235023ad73b0b5631e02f3c2c6983f458e)
* [0x6fadc6f3837ceb03957c415b3ff84c6079b4c126cdd8d42da2eedc47f244c856](http://testnet.etherscan.io/tx/0x6fadc6f3837ceb03957c415b3ff84c6079b4c126cdd8d42da2eedc47f244c856)
* [0x077fe252969ddee276f34fa37a30265d8dc436074ac331d5d51d2cd230519684](http://testnet.etherscan.io/tx/0x077fe252969ddee276f34fa37a30265d8dc436074ac331d5d51d2cd230519684)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Failed

##### Failure Cause

Error: assertion failed: expected '0' got '1'; undefined

Location: Step #4 at Object.runner.addTest.steps.helper.throneTwo.claimThrone.from (C:\Users\Kieran\Documents\KingOfTheEtherThrone\tests\test-throne.js:979:21)

##### Debug Messages

* created instance of contract ThroneMaker at 0xd14b3d53e5a45724b802a504664316d30a814f80
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x023f23dfde23119890acd132707952b81962d5cb
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x4d259a8dc3018eabf64927414ea85591e8e648f393d300eb4afa948414ec3ecd](http://testnet.etherscan.io/tx/0x4d259a8dc3018eabf64927414ea85591e8e648f393d300eb4afa948414ec3ecd)
* [0xb62a964eaad5ccac07db8a2dbff10ea0a37c2cb7592c62f18d35143c970b9d2f](http://testnet.etherscan.io/tx/0xb62a964eaad5ccac07db8a2dbff10ea0a37c2cb7592c62f18d35143c970b9d2f)
* [0xcca06e90b0e7a511479822a51f954dd654560a6200ff558c19aa3620f0168096](http://testnet.etherscan.io/tx/0xcca06e90b0e7a511479822a51f954dd654560a6200ff558c19aa3620f0168096)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)

### Test - "Temp"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0xf0708cad9db1cd0a0c0f4a5807b16ee47671182f
* a -> 16640
* b -> 16896
* hello -> 79462470012672
* -Hello- -> 79462470012672
* -Hello- -> 79462470012672
* good -> 
* B@A@D -> 

##### Transactions Generated

* [0x2e518aad0939d51e72ca509436165e53f561997ae645c59879e69d974584bbc7](http://testnet.etherscan.io/tx/0x2e518aad0939d51e72ca509436165e53f561997ae645c59879e69d974584bbc7)

