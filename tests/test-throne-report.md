# "King of the Ether Throne" Report

Generated at 2016-03-29T22:13:54.790Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

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

* created instance of contract KingOfTheEtherThrone at 0xabe1127d4a9cf7f52fc1ddb039b0ba3c36cbaa0f

##### Transactions Generated

* [0x158bcb187d559ca971d1ecbfeab85da3543e574b4b22205b291da5aac5ea40ab](http://testnet.etherscan.io/tx/0x158bcb187d559ca971d1ecbfeab85da3543e574b4b22205b291da5aac5ea40ab)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xba69ee807b9ac93d1364c815973bf7c91a195430
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2ef7043ed059b0d8f8f66e6b95696a269192216608b401fe47dd5aa3ec1f6141](http://testnet.etherscan.io/tx/0x2ef7043ed059b0d8f8f66e6b95696a269192216608b401fe47dd5aa3ec1f6141)
* [0xa11b4476aa269695f07fbb2ce698316563c7609512e184af944cecf22b6ea45f](http://testnet.etherscan.io/tx/0xa11b4476aa269695f07fbb2ce698316563c7609512e184af944cecf22b6ea45f)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xefc2433d55f4b748798fdd7ca1786a4acc4e8a7d
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf2887a87aa38521bd9c31f468f638ffee9ca9507cc3dc00b2cd91a6d97ad1ba7](http://testnet.etherscan.io/tx/0xf2887a87aa38521bd9c31f468f638ffee9ca9507cc3dc00b2cd91a6d97ad1ba7)
* [0x32cb84daef695e0af9f014d428edbf5681be5f6292a569265b1f200a81344156](http://testnet.etherscan.io/tx/0x32cb84daef695e0af9f014d428edbf5681be5f6292a569265b1f200a81344156)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x3507c75d1cbec585d61323904264a9d9d1c4a116
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xca97312b85523b493a15ab26ccfed37550cdbdb1acd7156d6e9b703bcf33bad0](http://testnet.etherscan.io/tx/0xca97312b85523b493a15ab26ccfed37550cdbdb1acd7156d6e9b703bcf33bad0)
* [0xbd1cebf4fb0729cada0a1209ef624661d3e193878ad19aea72740198808f2416](http://testnet.etherscan.io/tx/0xbd1cebf4fb0729cada0a1209ef624661d3e193878ad19aea72740198808f2416)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf7a92909e1022dcddf3f32974f64eb048ffad82f

##### Transactions Generated

* [0xbd64c45a6e6482641dec4f1bd101d71f2a144ce3bd44426d81427e7d6f1e1cca](http://testnet.etherscan.io/tx/0xbd64c45a6e6482641dec4f1bd101d71f2a144ce3bd44426d81427e7d6f1e1cca)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x21f8259a3eee61dabeaec758cc7b36d70de8ee36
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x6634534a1ede43e54d4ce62c8aa13c293b541efd52f0d6fc040b40ce3a8697be](http://testnet.etherscan.io/tx/0x6634534a1ede43e54d4ce62c8aa13c293b541efd52f0d6fc040b40ce3a8697be)
* [0x0bb4780ea8b5614d7b571546dde2b5d4e0bfb86c5b4e907dcb3f93174ace9f4b](http://testnet.etherscan.io/tx/0x0bb4780ea8b5614d7b571546dde2b5d4e0bfb86c5b4e907dcb3f93174ace9f4b)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x1fe0a3b1ef20c3947bb3580b6ffb428e58365dc6
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xe833d6349e4be79c4a54a2e72ae09b55734e710558849a75b835e5df04d508ae](http://testnet.etherscan.io/tx/0xe833d6349e4be79c4a54a2e72ae09b55734e710558849a75b835e5df04d508ae)
* [0x5e5aa9996cac52f525853d37ddf41b08d16317966e207d7a20d40c7f953673b9](http://testnet.etherscan.io/tx/0x5e5aa9996cac52f525853d37ddf41b08d16317966e207d7a20d40c7f953673b9)
* [0xa2cd3878fd3172c622c091daa2490d2d53ec04ebf69efb217a09d22f8086474f](http://testnet.etherscan.io/tx/0xa2cd3878fd3172c622c091daa2490d2d53ec04ebf69efb217a09d22f8086474f)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x63d265e84df52a4c5416839e2debf4de2c0a1963
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x68b800487fd58ce5aee1012966190dad0f2d847a0ac5863be821c302ca3c7728](http://testnet.etherscan.io/tx/0x68b800487fd58ce5aee1012966190dad0f2d847a0ac5863be821c302ca3c7728)
* [0x82829d64f02c2d6c2ed8e93bdcd6c6f9b91545a5277704ebfa0157b267e47b23](http://testnet.etherscan.io/tx/0x82829d64f02c2d6c2ed8e93bdcd6c6f9b91545a5277704ebfa0157b267e47b23)
* [0xde3686c5ef946d0c94cf276599ea4426ee7322412c846217e952f79c97524dba](http://testnet.etherscan.io/tx/0xde3686c5ef946d0c94cf276599ea4426ee7322412c846217e952f79c97524dba)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf8c62028261f038b8ac13ec56bea05860fb11c99
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xdba4a2b264a760bd453f1f1dfe060283a7bf46106624f2c52670494916685854](http://testnet.etherscan.io/tx/0xdba4a2b264a760bd453f1f1dfe060283a7bf46106624f2c52670494916685854)
* [0x4cfb09f780705476b7aadcf1c2a40ccd500c93ce50a1b7378fa1964e39a8fd3d](http://testnet.etherscan.io/tx/0x4cfb09f780705476b7aadcf1c2a40ccd500c93ce50a1b7378fa1964e39a8fd3d)
* [0x29e5e3ceb88f2432ecf8f0383aa7dd1e5d05f3615a16db4085df3ef0cd9be930](http://testnet.etherscan.io/tx/0x29e5e3ceb88f2432ecf8f0383aa7dd1e5d05f3615a16db4085df3ef0cd9be930)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x1b14ec2a06c8acb44d740fa4c0a8396a1045b69f
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x6de30826d4ab15d9f771deee9f0c632869808d010054573a30a5a5594003a74c](http://testnet.etherscan.io/tx/0x6de30826d4ab15d9f771deee9f0c632869808d010054573a30a5a5594003a74c)
* [0x6b2473e2eb184255310daf5621b1ad83f58ef1fe5538ae4c360bb6ef75f09dbf](http://testnet.etherscan.io/tx/0x6b2473e2eb184255310daf5621b1ad83f58ef1fe5538ae4c360bb6ef75f09dbf)
* [0xf4b83527e4e9fd6d41e9fe7b625c79c99f1473b05dd89ac3f99f09ca6e7de8b8](http://testnet.etherscan.io/tx/0xf4b83527e4e9fd6d41e9fe7b625c79c99f1473b05dd89ac3f99f09ca6e7de8b8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x501f3def52833a30223c45586a6e52e0fbdecb19
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x17f68ee03dd8f9cb424b4beba545db1cdb1e2b2b23fc9ccafa3aaa2c25f6595c](http://testnet.etherscan.io/tx/0x17f68ee03dd8f9cb424b4beba545db1cdb1e2b2b23fc9ccafa3aaa2c25f6595c)
* [0x0ee02082e39fb4acd740f6c2737851e4a49c7b365d7605f93ff2429f8befa9b9](http://testnet.etherscan.io/tx/0x0ee02082e39fb4acd740f6c2737851e4a49c7b365d7605f93ff2429f8befa9b9)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x86019782b60942f881d08c868abeb39ec9ed7c6d
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x425a1095648be970b137ec9c747a9f84580376dd8a080c2dd543d4a6c221f3cb](http://testnet.etherscan.io/tx/0x425a1095648be970b137ec9c747a9f84580376dd8a080c2dd543d4a6c221f3cb)
* [0xed40197d148589d98a65785a179176f69da57b373436fb41cfd3909081f98463](http://testnet.etherscan.io/tx/0xed40197d148589d98a65785a179176f69da57b373436fb41cfd3909081f98463)
* [0x82168e14c54dbb99c487653858f84c8d7e47ac40f10d1ae93b56302cef791c42](http://testnet.etherscan.io/tx/0x82168e14c54dbb99c487653858f84c8d7e47ac40f10d1ae93b56302cef791c42)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x683513371fe7eb2710f093a4549fef1b2150ce04

##### Transactions Generated

* [0x1adf7fa2250062bcd57654c5051f26af5357738aa994f07edbed4e0b9606a0c1](http://testnet.etherscan.io/tx/0x1adf7fa2250062bcd57654c5051f26af5357738aa994f07edbed4e0b9606a0c1)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x8828ebafd362eb57c06c65265e174a0d9326e4f9
* created instance of contract DTRExpensiveWallet at 0x6ebf90244cafb451bc221b8a731f437af4e0db3c
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0xe393ae41c6c82794cfcd1933a5be0c12361cd3c9f5c2d0d4cec75f165576e4db](http://testnet.etherscan.io/tx/0xe393ae41c6c82794cfcd1933a5be0c12361cd3c9f5c2d0d4cec75f165576e4db)
* [0x43d9082cb322638364be6152c0ee66bc462ee9d9e702cc034c402dcf56b11bc8](http://testnet.etherscan.io/tx/0x43d9082cb322638364be6152c0ee66bc462ee9d9e702cc034c402dcf56b11bc8)
* [0x63e5342bac59bdc1c4a9a93c3dfcfe9b9e0569bf31e6ef9ffc4b9e09d5ee61c5](http://testnet.etherscan.io/tx/0x63e5342bac59bdc1c4a9a93c3dfcfe9b9e0569bf31e6ef9ffc4b9e09d5ee61c5)

##### Contract Events

* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x8828ebafd362eb57c06c65265e174a0d9326e4f9,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x1324a7d3ddd36afbca49d240c0c77a118b7af0fa
* created instance of contract DTRExpensiveWallet at 0x983bc49421c4640ef08bdfd8d3c7b7a26342d915
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xb0b47427eb50ae63206a38c4508f6e17290512cfe4ed4eb9dde053341cf825aa](http://testnet.etherscan.io/tx/0xb0b47427eb50ae63206a38c4508f6e17290512cfe4ed4eb9dde053341cf825aa)
* [0xfb88e3c43ab7d444c01235fed00910ae07a1bbf54712f28db56162bcc28218fa](http://testnet.etherscan.io/tx/0xfb88e3c43ab7d444c01235fed00910ae07a1bbf54712f28db56162bcc28218fa)
* [0x4cafcec7088b42a7369eec9101c5b11454e857289fc82d90beeae7d7e640f7bc](http://testnet.etherscan.io/tx/0x4cafcec7088b42a7369eec9101c5b11454e857289fc82d90beeae7d7e640f7bc)
* [0x87b9103afa9cbfaaa651e85d30fd2957e67fb605ce3f64e50bd7562eaeae3e66](http://testnet.etherscan.io/tx/0x87b9103afa9cbfaaa651e85d30fd2957e67fb605ce3f64e50bd7562eaeae3e66)

##### Contract Events

* WalletCreated(by=0x96384d8ee4275db3d9ff753ab0af81f431adb892,)
* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x1324a7d3ddd36afbca49d240c0c77a118b7af0fa,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,value=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xd9e7e68accfb9706a8427e4fce06623aa30c0e32
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0xeb62374c6bedd210dd1479214c4dd73203d0a87b,200000000000000000,1459289383
* gazetteerEntry is  [object Object]
* myThroneAddress is  0xeb62374c6bedd210dd1479214c4dd73203d0a87b
* created instance of contract KingOfTheEtherThrone at 0xeb62374c6bedd210dd1479214c4dd73203d0a87b
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xfc9287f57d33a64c10a90aad0c722a89cf8b8f8b0a4828fea406e5492642c176](http://testnet.etherscan.io/tx/0xfc9287f57d33a64c10a90aad0c722a89cf8b8f8b0a4828fea406e5492642c176)
* [0x59d81cc9d0320e4eb53214cbaeee2d7dfdca37c2dd9220b76edd9957f5e37298](http://testnet.etherscan.io/tx/0x59d81cc9d0320e4eb53214cbaeee2d7dfdca37c2dd9220b76edd9957f5e37298)
* [0x48e532c395ef86f24c0c561911bf8efa2e904cdf3b8a077d05d8c71da102c495](http://testnet.etherscan.io/tx/0x48e532c395ef86f24c0c561911bf8efa2e904cdf3b8a077d05d8c71da102c495)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x54447f5c4e18787a65c2264d8497c5c7235ee869
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xf0c5fdf05596f97ee00aee6a6a23ac00cfe84915908284b673c9cf513a730ce7](http://testnet.etherscan.io/tx/0xf0c5fdf05596f97ee00aee6a6a23ac00cfe84915908284b673c9cf513a730ce7)
* [0xd4d826f1c3643895f7753cfeb9c578ae99c986441265ade7dfc22a0b0735e4ff](http://testnet.etherscan.io/tx/0xd4d826f1c3643895f7753cfeb9c578ae99c986441265ade7dfc22a0b0735e4ff)
* [0x4dbaedefc4066a2b17d09b9c4e5e3018e81833a7ab09d117859ed62a9ad939b7](http://testnet.etherscan.io/tx/0x4dbaedefc4066a2b17d09b9c4e5e3018e81833a7ab09d117859ed62a9ad939b7)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xf29f6551aad43ea8e209f437a2b4976a6c5baf3b
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x01297cc85bf752d29a887818c76b9888b9faa111beed14be5f53d0c7efb62db5](http://testnet.etherscan.io/tx/0x01297cc85bf752d29a887818c76b9888b9faa111beed14be5f53d0c7efb62db5)
* [0x2818a90bde8d364d9868967ceca671dd97722bcc0e22c8e36b91718e08aa4228](http://testnet.etherscan.io/tx/0x2818a90bde8d364d9868967ceca671dd97722bcc0e22c8e36b91718e08aa4228)
* [0x8cd8588c62ef5bf2476ac3266610d872df0856e5528bc98996958b560f425530](http://testnet.etherscan.io/tx/0x8cd8588c62ef5bf2476ac3266610d872df0856e5528bc98996958b560f425530)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xa355f70adf8205dc1f44aebf028273357f941ef2
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0xbe66738da57dfab844128b3c5d7a07e835817782
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x25f5b92bab8a66b34af27ef92315fae42905329d
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x6cf70c7fd163ac2125fd6891b6ff9e035f423da11bd63e608aebf1d5d3349db5](http://testnet.etherscan.io/tx/0x6cf70c7fd163ac2125fd6891b6ff9e035f423da11bd63e608aebf1d5d3349db5)
* [0x22e6a6c45c2df47c83cac7ffce9c5e2f6fac4f628966d7440e9f41cb961f5352](http://testnet.etherscan.io/tx/0x22e6a6c45c2df47c83cac7ffce9c5e2f6fac4f628966d7440e9f41cb961f5352)
* [0x5c717f0b415b41b59b666fdb433c111d07d421262a2e72cc19b17f7b7e3a5ca8](http://testnet.etherscan.io/tx/0x5c717f0b415b41b59b666fdb433c111d07d421262a2e72cc19b17f7b7e3a5ca8)
* [0xe0642958fe2e340ca4a70166a943d3ca8ffadef0e0d509e7040a59bdd00411d2](http://testnet.etherscan.io/tx/0xe0642958fe2e340ca4a70166a943d3ca8ffadef0e0d509e7040a59bdd00411d2)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x81cd2abe3c8876bfc7cddacda11742ebaf638015

##### Transactions Generated

* [0xa1239697df698997fcfcb19b2b8510307b01c6953ea233c2a30b0be60d46ce15](http://testnet.etherscan.io/tx/0xa1239697df698997fcfcb19b2b8510307b01c6953ea233c2a30b0be60d46ce15)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0xd10209025b35700ca44475a5f8402b7670d965b1

##### Transactions Generated

* [0xa6b3515bf45d7fd62d2d065a2ee68e4c22adb9e2a1a23b88d645fa36c0d6dd15](http://testnet.etherscan.io/tx/0xa6b3515bf45d7fd62d2d065a2ee68e4c22adb9e2a1a23b88d645fa36c0d6dd15)

