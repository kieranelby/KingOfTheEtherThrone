# "King of the Ether Throne" Report

Generated at 2016-03-30T20:23:44.077Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 21
* Tests skipped: 0
* Tests passed: 21
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x75b1906c20a70dd0c4d90aa0d554c61e753f7574

##### Transactions Generated

* [0x3f0b3018e29bbfda536cc0e2b11aea6d30980e7728d2b5a19048141cec919a96](http://testnet.etherscan.io/tx/0x3f0b3018e29bbfda536cc0e2b11aea6d30980e7728d2b5a19048141cec919a96)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x86ad88b412fe947eec52323354d9d019124f7b23
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf97aab702a4acaa544d81688a706e4a50e8b8e15fa837eb4f7fc94d6c6781f33](http://testnet.etherscan.io/tx/0xf97aab702a4acaa544d81688a706e4a50e8b8e15fa837eb4f7fc94d6c6781f33)
* [0x2ce515ed32f3c97a91689dbe6ec8efcdb322d57bff68719fd0091ed3e8021468](http://testnet.etherscan.io/tx/0x2ce515ed32f3c97a91689dbe6ec8efcdb322d57bff68719fd0091ed3e8021468)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2f44c8a26a81294ba4badd72513747d7f4771317
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1613906427338d89b787881ac18b19ee027616f2c2c496564a969da3e21ef27d](http://testnet.etherscan.io/tx/0x1613906427338d89b787881ac18b19ee027616f2c2c496564a969da3e21ef27d)
* [0x3966882ebc84a6084797d1043797f91cb8ac3021d7af36d6a8cfddcdbb8796b3](http://testnet.etherscan.io/tx/0x3966882ebc84a6084797d1043797f91cb8ac3021d7af36d6a8cfddcdbb8796b3)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x48b17e6c669bcf7dee326fd86f7049e29c92473a
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xfc58fff51f3c0bf3718c7a002db03b4a9c0073236a2084a927449bef395877ee](http://testnet.etherscan.io/tx/0xfc58fff51f3c0bf3718c7a002db03b4a9c0073236a2084a927449bef395877ee)
* [0xe96a842b8497f3a8cbcc98e86aaae38e378170d82005a0b7bc0699ed10acf2e9](http://testnet.etherscan.io/tx/0xe96a842b8497f3a8cbcc98e86aaae38e378170d82005a0b7bc0699ed10acf2e9)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x081dedd767318f5c5bd3f9a64b43a5d5e874bf60

##### Transactions Generated

* [0x9a67826bbb754f6dad85c512aad6602e908d8645d5ac4a419f0f16ddaea39d4f](http://testnet.etherscan.io/tx/0x9a67826bbb754f6dad85c512aad6602e908d8645d5ac4a419f0f16ddaea39d4f)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x575601fd549cb910324f3b7af8868c4d8551e463
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1fbbe71e73cdd250229b4aaff8350fdaff551124d0a6320618d868616a0e4524](http://testnet.etherscan.io/tx/0x1fbbe71e73cdd250229b4aaff8350fdaff551124d0a6320618d868616a0e4524)
* [0xaceaec4abef97e3af809d7b3fe42b9ba2b79188ef2873173e715337490cf8e51](http://testnet.etherscan.io/tx/0xaceaec4abef97e3af809d7b3fe42b9ba2b79188ef2873173e715337490cf8e51)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x29f1c77844f9b7759060c4b11825b3970dc380b4
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x21042ffc9ed61e39375c2ab7838dde949d281f990296f9873e728cfe52730289](http://testnet.etherscan.io/tx/0x21042ffc9ed61e39375c2ab7838dde949d281f990296f9873e728cfe52730289)
* [0x35f1f7422d7acfa811349aa476d96b0353e9dacb72f885dc90bd89f7b80e6e2a](http://testnet.etherscan.io/tx/0x35f1f7422d7acfa811349aa476d96b0353e9dacb72f885dc90bd89f7b80e6e2a)
* [0x44ceff08059f2d7aac1adc1e69792567f3c698fa85ca0dc94cced8e266ed83bf](http://testnet.etherscan.io/tx/0x44ceff08059f2d7aac1adc1e69792567f3c698fa85ca0dc94cced8e266ed83bf)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf4efab24f88d6c004218ebff52bc001c9b365abc
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xd018c2e1fad382b4fe0f84067c075b52af5dae6cad5e29de0fab01c14b99fb6b](http://testnet.etherscan.io/tx/0xd018c2e1fad382b4fe0f84067c075b52af5dae6cad5e29de0fab01c14b99fb6b)
* [0xcff5f9f3b3f8fb60c2247568d6497d8c0e35a4f7a77402c55db10ecf2b48e621](http://testnet.etherscan.io/tx/0xcff5f9f3b3f8fb60c2247568d6497d8c0e35a4f7a77402c55db10ecf2b48e621)
* [0x4ba12446ecc4ce9a930b9f879bce23ce3225aad5ee5ce666b287f8d9c1f8e73b](http://testnet.etherscan.io/tx/0x4ba12446ecc4ce9a930b9f879bce23ce3225aad5ee5ce666b287f8d9c1f8e73b)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xbd1ef2373b27e67f021c88ff868be5ed8aeff19f
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x37cbe2ef43a572528db5d65aa1f1c64f64ca825c9910d72383563d467b4e2e38](http://testnet.etherscan.io/tx/0x37cbe2ef43a572528db5d65aa1f1c64f64ca825c9910d72383563d467b4e2e38)
* [0x70dd7813e78d0fbf44182c9f80fe1ce25388d1c4a581f7af7baeaf04fca2baf6](http://testnet.etherscan.io/tx/0x70dd7813e78d0fbf44182c9f80fe1ce25388d1c4a581f7af7baeaf04fca2baf6)
* [0x21fbf33f458db9f7f4e71748878b56d6ebdadd38481c8d96b24cfcc22a4c474a](http://testnet.etherscan.io/tx/0x21fbf33f458db9f7f4e71748878b56d6ebdadd38481c8d96b24cfcc22a4c474a)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xa0b3fee7ae9cb0124133dc5507788f9e76ca0e4b
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xef8f7e905cbbcef8b0f011be5683771b1bfdfe0151851761fb3bdbcab19aa768](http://testnet.etherscan.io/tx/0xef8f7e905cbbcef8b0f011be5683771b1bfdfe0151851761fb3bdbcab19aa768)
* [0x03f2aff577d6e0e2bffadf3223a79b4ac135175cba6764ee320736ac887a5ea7](http://testnet.etherscan.io/tx/0x03f2aff577d6e0e2bffadf3223a79b4ac135175cba6764ee320736ac887a5ea7)
* [0x93779321940fad2b51de32088d2e7f3d7bfd234a34edd2b53a9f20b0a2f118e8](http://testnet.etherscan.io/tx/0x93779321940fad2b51de32088d2e7f3d7bfd234a34edd2b53a9f20b0a2f118e8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x25b834e4c42ea0a0ca731d22e087d96b7b27414a
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x96e6ed4223f1e088d0eb730613ef47ab2f3af602198934ee32d1728090a8a327](http://testnet.etherscan.io/tx/0x96e6ed4223f1e088d0eb730613ef47ab2f3af602198934ee32d1728090a8a327)
* [0xeddc3179c5b6b4574851d2875b1c90bdd5ee474f7c468aa700e418cdc60fbe22](http://testnet.etherscan.io/tx/0xeddc3179c5b6b4574851d2875b1c90bdd5ee474f7c468aa700e418cdc60fbe22)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x58929a95aae6683bf6faa7fea312c76f07fb3fd6
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1e4b02aaf57ee0f8ef11f816549644c3a0facda4972bed2e82bba997db63955c](http://testnet.etherscan.io/tx/0x1e4b02aaf57ee0f8ef11f816549644c3a0facda4972bed2e82bba997db63955c)
* [0xe94c73a96c60606868d9279b55781c9ac624f7c35f14a93ad0e79573ecd0c729](http://testnet.etherscan.io/tx/0xe94c73a96c60606868d9279b55781c9ac624f7c35f14a93ad0e79573ecd0c729)
* [0xac46bb755bd6eab9c50ba6d130d2221adf602fb18b47d7d543a79bf19bac19ea](http://testnet.etherscan.io/tx/0xac46bb755bd6eab9c50ba6d130d2221adf602fb18b47d7d543a79bf19bac19ea)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x7a0fa783563dde7496b63188d41de5d84c1b522d

##### Transactions Generated

* [0xa40b1d66433d5bd79022c54a7ec1eec4b08f1748d6e0515333b32e6ba157b7d3](http://testnet.etherscan.io/tx/0xa40b1d66433d5bd79022c54a7ec1eec4b08f1748d6e0515333b32e6ba157b7d3)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xa84c6d3eac2490584cc57244570ab876812607c3
* created instance of contract DTRExpensiveWallet at 0x6916e12ea54304c2f62023ef4df83632d977a3a5
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0x52e7f4ae22d8a9752d972cba8c9ce8fff121fedb35a93e2ddf37b05d10fb576e](http://testnet.etherscan.io/tx/0x52e7f4ae22d8a9752d972cba8c9ce8fff121fedb35a93e2ddf37b05d10fb576e)
* [0x1cf91076caf6c6fd0f43a7c7ccca0e9921ba64d9602c9cdc143979cf4f2d680c](http://testnet.etherscan.io/tx/0x1cf91076caf6c6fd0f43a7c7ccca0e9921ba64d9602c9cdc143979cf4f2d680c)
* [0x77df18522c51cbaa0088007f3af3989eb1ba524e0394a2757437cafeb32a496a](http://testnet.etherscan.io/tx/0x77df18522c51cbaa0088007f3af3989eb1ba524e0394a2757437cafeb32a496a)

##### Contract Events

* DepositMade(from=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xa84c6d3eac2490584cc57244570ab876812607c3,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xa84c6d3eac2490584cc57244570ab876812607c3,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xde037e7501c08636b47b536ed51f35079b2dcf65
* created instance of contract DTRExpensiveWallet at 0x89bd3ce509371264d58e45be7be1bb35d5311918
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x5a52947b2dcf1fdf6949b0f5a6abe848ecb79514adaf67998dd7aff328adb8f7](http://testnet.etherscan.io/tx/0x5a52947b2dcf1fdf6949b0f5a6abe848ecb79514adaf67998dd7aff328adb8f7)
* [0x0b24f7f98a445e1233310202f13a66e1083dfe3c89459044230b6a7ca3c55af3](http://testnet.etherscan.io/tx/0x0b24f7f98a445e1233310202f13a66e1083dfe3c89459044230b6a7ca3c55af3)
* [0x94fa2953376c72eb79f716546d7d9a7604a578ba40df2f3c0ba5b27d0e9a28f1](http://testnet.etherscan.io/tx/0x94fa2953376c72eb79f716546d7d9a7604a578ba40df2f3c0ba5b27d0e9a28f1)
* [0x629a5443b1c982d03fa92faf11f87ba96a238a895cf195916405c3c240f2e8b0](http://testnet.etherscan.io/tx/0x629a5443b1c982d03fa92faf11f87ba96a238a895cf195916405c3c240f2e8b0)

##### Contract Events

* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xde037e7501c08636b47b536ed51f35079b2dcf65,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1470000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xfe1f00df46dff9e50140a5487fc7de8ae12fe760
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0x350c5eff782eea52d749530b3627b71616079e02,200000000000000000,1459369114
* gazetteerEntry is  [object Object]
* myThroneAddress is  0x350c5eff782eea52d749530b3627b71616079e02
* created instance of contract KingOfTheEtherThrone at 0x350c5eff782eea52d749530b3627b71616079e02
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x644c4c4c5d9b8b03211809ba949a8311147fc27ff12947855ee7cefec21c1fa1](http://testnet.etherscan.io/tx/0x644c4c4c5d9b8b03211809ba949a8311147fc27ff12947855ee7cefec21c1fa1)
* [0x5cdf877fb0919ea8369e77e562c9994e886b8a94a3d1bed6e502078bff3c730a](http://testnet.etherscan.io/tx/0x5cdf877fb0919ea8369e77e562c9994e886b8a94a3d1bed6e502078bff3c730a)
* [0x015490cf1feefadcf91c4cdca71f080cb893e19dcf1da45b8afc0764fecdd3ee](http://testnet.etherscan.io/tx/0x015490cf1feefadcf91c4cdca71f080cb893e19dcf1da45b8afc0764fecdd3ee)

##### Contract Events

* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xc139cff056fcd10d31d0b0ddd0197baae1a0ffdb
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xc5f98b29dd1b9f7eab730b6d69ca3752cc1c87d04a5e2220f9aaf15a6a3c4edc](http://testnet.etherscan.io/tx/0xc5f98b29dd1b9f7eab730b6d69ca3752cc1c87d04a5e2220f9aaf15a6a3c4edc)
* [0x1496a8a64fd1aa0d0928a7ea513033387cfc932bf63984bd4a7f7a7027545053](http://testnet.etherscan.io/tx/0x1496a8a64fd1aa0d0928a7ea513033387cfc932bf63984bd4a7f7a7027545053)
* [0x574f461e7802d4e11577a9181c436af2c5da269e429b233346b7b4e50d298bf0](http://testnet.etherscan.io/tx/0x574f461e7802d4e11577a9181c436af2c5da269e429b233346b7b4e50d298bf0)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xd94612ec65c8a5c8a0d4cc119313f381f801a1af
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x976e668ab5b33e01dc31e8fedf14bf2deb088452ad19e6c575701a358bdd8074](http://testnet.etherscan.io/tx/0x976e668ab5b33e01dc31e8fedf14bf2deb088452ad19e6c575701a358bdd8074)
* [0xd3d08a5718aaf89a2e1fefc63d3f08fc24877901f59703414ab0b16098c3ceb5](http://testnet.etherscan.io/tx/0xd3d08a5718aaf89a2e1fefc63d3f08fc24877901f59703414ab0b16098c3ceb5)
* [0x92f95a01824166dbbd62747f2aa05d3cef87e0e9b3e0144bd476628d0b82f1cb](http://testnet.etherscan.io/tx/0x92f95a01824166dbbd62747f2aa05d3cef87e0e9b3e0144bd476628d0b82f1cb)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xed8d03e24a59ad0369db8f31a3d21bd1415c8635
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x09c9abf17cc1e485c57306f471fd3d2704987b31
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x043bf1ee4919866f632b9b8b2ddb62c539d3f02f
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x5f511eacf5701f40f8639fbac4ca988a201e6f6538fcf133ee49000ee39d471c](http://testnet.etherscan.io/tx/0x5f511eacf5701f40f8639fbac4ca988a201e6f6538fcf133ee49000ee39d471c)
* [0x9e59dd434f578e8b975760c714b3a4852668e7d106968fc3479fd46d79020329](http://testnet.etherscan.io/tx/0x9e59dd434f578e8b975760c714b3a4852668e7d106968fc3479fd46d79020329)
* [0x5f0425fc77b401e1b7e3dd810a75f20c94eaafdd203f6734ab14e0635d8cb53b](http://testnet.etherscan.io/tx/0x5f0425fc77b401e1b7e3dd810a75f20c94eaafdd203f6734ab14e0635d8cb53b)
* [0x537e66a03a07c4b4a3a7049614d8a4b8aa3256fd5f14e79818ca25574ca36297](http://testnet.etherscan.io/tx/0x537e66a03a07c4b4a3a7049614d8a4b8aa3256fd5f14e79818ca25574ca36297)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0xddcf2af76aa29e3f4a67576491a66ce703792be0

##### Transactions Generated

* [0x9184da99ea958cac55afc7713ebd97d6b9895c8071cebc0c0c5289aa47321de8](http://testnet.etherscan.io/tx/0x9184da99ea958cac55afc7713ebd97d6b9895c8071cebc0c0c5289aa47321de8)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x8b6c9449164d7874c414a98185277967f66e1045

##### Transactions Generated

* [0x9b8ffbd34b6339314a81407b0412c423a48c0ae5c35d6c30cf0ae405d93cfe2f](http://testnet.etherscan.io/tx/0x9b8ffbd34b6339314a81407b0412c423a48c0ae5c35d6c30cf0ae405d93cfe2f)

