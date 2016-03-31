# "King of the Ether Throne" Report

Generated at 2016-03-31T23:18:23.995Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Bad** - there were test failures:

* Tests added: 27
* Tests skipped: 0
* Tests passed: 26
* Tests failed: 1

The first test that failed was "Can void failed compensation payment after failedPaymentRingfenceDuration elapsed"

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x076ffe45ffc1ed796e09fc72262d248d70a6bb2b

##### Transactions Generated

* [0xab2fc033d1c931ad71a9400436c63e8a74e2cf8586de88dd01beec1c19e49743](http://testnet.etherscan.io/tx/0xab2fc033d1c931ad71a9400436c63e8a74e2cf8586de88dd01beec1c19e49743)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xad5626985f7e5cef6be69aecfe82ea6a7a57732f
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x4db1c46d93a021fa4a2faeacc332e6c2cb8b2c5c5172f67d6c18bb380cdfa69d](http://testnet.etherscan.io/tx/0x4db1c46d93a021fa4a2faeacc332e6c2cb8b2c5c5172f67d6c18bb380cdfa69d)
* [0x6c64a89d919f0aa3494b1b2f67a66d3721835259193f9a7b02f0623675e29927](http://testnet.etherscan.io/tx/0x6c64a89d919f0aa3494b1b2f67a66d3721835259193f9a7b02f0623675e29927)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xef70f80daef400841620d217e04d4405ed0ec6e1
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xd71354832948f85bcf0ef19fd4f4783139dafde839e5539665d7b77e583e2bbf](http://testnet.etherscan.io/tx/0xd71354832948f85bcf0ef19fd4f4783139dafde839e5539665d7b77e583e2bbf)
* [0x8614d487b2227a69f6697e957b63ca0f5f22ab7b1c2f89a8b1ee2725a33562b7](http://testnet.etherscan.io/tx/0x8614d487b2227a69f6697e957b63ca0f5f22ab7b1c2f89a8b1ee2725a33562b7)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x72846a55bc791ba573728f495258e66319c4a48e
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x870ff2080f38f9f524a520e379a0f5a457f38ce3d611c0347f5c282e1d63f4c8](http://testnet.etherscan.io/tx/0x870ff2080f38f9f524a520e379a0f5a457f38ce3d611c0347f5c282e1d63f4c8)
* [0x883a7c20275d48acd9f5738ffe9caee6be74de775c3041aa535542bfe1292173](http://testnet.etherscan.io/tx/0x883a7c20275d48acd9f5738ffe9caee6be74de775c3041aa535542bfe1292173)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x7eb33b5847722ebb13cc931150a000edfb7ead86

##### Transactions Generated

* [0x704953f922b03fe2839da14f72113978d1511fac9f59750b7fa4e7d8878d22f8](http://testnet.etherscan.io/tx/0x704953f922b03fe2839da14f72113978d1511fac9f59750b7fa4e7d8878d22f8)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x9779ff351ad309aba1bf3f609feaba5901ad9688
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xcbc27953320613044304c640d145742927a8dfce7e275c27b190ffd88d9ec942](http://testnet.etherscan.io/tx/0xcbc27953320613044304c640d145742927a8dfce7e275c27b190ffd88d9ec942)
* [0xeb2728a07bac525c332e0b062f09bce6b7a6f91b5519b6d3b29a541a91203aa8](http://testnet.etherscan.io/tx/0xeb2728a07bac525c332e0b062f09bce6b7a6f91b5519b6d3b29a541a91203aa8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xdd2269632f7a622fa29c34413382c5908656a3f6
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x16efad39bbe4e380fb83717e60ab1e98223e33e6169bc2cad4a3721f0e0d761d](http://testnet.etherscan.io/tx/0x16efad39bbe4e380fb83717e60ab1e98223e33e6169bc2cad4a3721f0e0d761d)
* [0xa42eb9849b69c614fa9013c4fb8a8e2c6c17e6a247eee298a09f2d3bd0e8aa50](http://testnet.etherscan.io/tx/0xa42eb9849b69c614fa9013c4fb8a8e2c6c17e6a247eee298a09f2d3bd0e8aa50)
* [0xf286a36398c38b52873c9b45fab066fd2cb803d96c440f19c6eca024ecfee66c](http://testnet.etherscan.io/tx/0xf286a36398c38b52873c9b45fab066fd2cb803d96c440f19c6eca024ecfee66c)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x18b6c32d7475e0168058cf321ccbec6fff34dae7
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x27e5b9b9ae11bafdd378af10f8e53d1dc789f2db83d4db341f34a3da1188fe60](http://testnet.etherscan.io/tx/0x27e5b9b9ae11bafdd378af10f8e53d1dc789f2db83d4db341f34a3da1188fe60)
* [0x8dc6ae1f314728ef37222e2b61bf31b91d533159a1f9d2fd45930ce01dc4ec93](http://testnet.etherscan.io/tx/0x8dc6ae1f314728ef37222e2b61bf31b91d533159a1f9d2fd45930ce01dc4ec93)
* [0xb1b6197b1bbe2cb892ec2d5e8f0645347fcc5080f7c149ae7879c865aa742ee9](http://testnet.etherscan.io/tx/0xb1b6197b1bbe2cb892ec2d5e8f0645347fcc5080f7c149ae7879c865aa742ee9)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x09cedf9820c79d1aaa58704952418c11f6b46cc5
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xd1ab83036ae6583a73987f2413d2a3e274fa6d5ea6409e89761db23e5a789378](http://testnet.etherscan.io/tx/0xd1ab83036ae6583a73987f2413d2a3e274fa6d5ea6409e89761db23e5a789378)
* [0x0d7fe58ebc201ce25f7f85d2b36d3e3aedaf4e982681c4dac737755db9e09185](http://testnet.etherscan.io/tx/0x0d7fe58ebc201ce25f7f85d2b36d3e3aedaf4e982681c4dac737755db9e09185)
* [0x639e51f563fb9dd13276840013794ecbc41ea4f542e885cca48eb40d17e45c99](http://testnet.etherscan.io/tx/0x639e51f563fb9dd13276840013794ecbc41ea4f542e885cca48eb40d17e45c99)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x9de7cbc25a656eb74aea626ce05413c33d5e7b45
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xa2f9dd25a0c9f1d72412af33ac557513720ba3dc3808ee1080de51a8399b935b](http://testnet.etherscan.io/tx/0xa2f9dd25a0c9f1d72412af33ac557513720ba3dc3808ee1080de51a8399b935b)
* [0x9be8ef62cb4e6f8d68b604fb7293ea447f91e5fd10b27445363c437d25863a1d](http://testnet.etherscan.io/tx/0x9be8ef62cb4e6f8d68b604fb7293ea447f91e5fd10b27445363c437d25863a1d)
* [0xdb8c465b4966f205083e4f571d876fa6a029b4b21a2d87509bca3363ef0619e6](http://testnet.etherscan.io/tx/0xdb8c465b4966f205083e4f571d876fa6a029b4b21a2d87509bca3363ef0619e6)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x8d56c84aee6d530992387605fc95f500c1450d9a
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xcaafb5a36255d2c69eb6ea836c612a7bd5a438ae545c30a03aab6bc9a17f96de](http://testnet.etherscan.io/tx/0xcaafb5a36255d2c69eb6ea836c612a7bd5a438ae545c30a03aab6bc9a17f96de)
* [0xe80a1df86230075173714d7536411714726f09275db9dcb68550b5432f8a8233](http://testnet.etherscan.io/tx/0xe80a1df86230075173714d7536411714726f09275db9dcb68550b5432f8a8233)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x84400c960538cee9e065ca391d00bc2995570f80
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xb5db2570bd5378b382b03a328f115c855ce9cbe48cbfad6d47770f353bcc11c6](http://testnet.etherscan.io/tx/0xb5db2570bd5378b382b03a328f115c855ce9cbe48cbfad6d47770f353bcc11c6)
* [0x7d9431d8a6cefd153b453f746445027720b61cb310b993f0ba038d2fa3144651](http://testnet.etherscan.io/tx/0x7d9431d8a6cefd153b453f746445027720b61cb310b993f0ba038d2fa3144651)
* [0x87a6b3199a045d640eaad4bec276168eb45ec0c27e38a49ba48c39bb68be5d6e](http://testnet.etherscan.io/tx/0x87a6b3199a045d640eaad4bec276168eb45ec0c27e38a49ba48c39bb68be5d6e)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x40b710f6793f2449a39d690d43793d916b769aa4

##### Transactions Generated

* [0xdb7a5f4d2da4df8afe1e94024b1493eaf9fcc655bff99bf5aace889dcb231c23](http://testnet.etherscan.io/tx/0xdb7a5f4d2da4df8afe1e94024b1493eaf9fcc655bff99bf5aace889dcb231c23)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x7584f8207fbc276acb2f81941af58eacef4714e7
* created instance of contract DTRExpensiveWallet at 0xc8fb7d8992ba3b46d89a84273921da97bbe8fdd6
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0xb7a8ad9a1b0c928b6bb4244819b74b7ac19f6540fdd4202ebf8c647e31ae6edc](http://testnet.etherscan.io/tx/0xb7a8ad9a1b0c928b6bb4244819b74b7ac19f6540fdd4202ebf8c647e31ae6edc)
* [0xd1f6f8456bbbf1dd3943021fdd80d7284dc9746ac9d77c515fc4a24303b685cf](http://testnet.etherscan.io/tx/0xd1f6f8456bbbf1dd3943021fdd80d7284dc9746ac9d77c515fc4a24303b685cf)
* [0x0d4107e2438ea8d0eacbc7c44705408fda83850812e2d6bf36b6337d477be663](http://testnet.etherscan.io/tx/0x0d4107e2438ea8d0eacbc7c44705408fda83850812e2d6bf36b6337d477be663)

##### Contract Events

* WalletCreated(by=0x0f73050a531407ea03e4f896365b7ac866e5db65,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x7584f8207fbc276acb2f81941af58eacef4714e7,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x6366d6f8f9d75e65d20d28a8d249a9914faf0a0a
* created instance of contract DTRExpensiveWallet at 0x2407854e84104f47a12cecb61c10d4b1777d5644
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x940444cb767c84d0af8ea8d3bfc983b50db16e8a953187d7d78941ad020f9ebe](http://testnet.etherscan.io/tx/0x940444cb767c84d0af8ea8d3bfc983b50db16e8a953187d7d78941ad020f9ebe)
* [0xc27b29372dfbfcff7ed8e9435aa474e2ab6319ec243202ca8c719a07a6ef42ac](http://testnet.etherscan.io/tx/0xc27b29372dfbfcff7ed8e9435aa474e2ab6319ec243202ca8c719a07a6ef42ac)
* [0x9d3f1f7785cc8dd4f12bdaec03d2940bcc3fa504a5456e1912dce14d6b7a85ce](http://testnet.etherscan.io/tx/0x9d3f1f7785cc8dd4f12bdaec03d2940bcc3fa504a5456e1912dce14d6b7a85ce)
* [0xfd66c7d6566731f73ca61053fe2d1ea14592b4e5dabcf6f88b628e290e30d05b](http://testnet.etherscan.io/tx/0xfd66c7d6566731f73ca61053fe2d1ea14592b4e5dabcf6f88b628e290e30d05b)

##### Contract Events

* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x6366d6f8f9d75e65d20d28a8d249a9914faf0a0a,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1470000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x338f1f7b8e9240abce5f64b7781eecdba9b2d78d
* created instance of contract DTRExpensiveWallet at 0xd67c62fc8f5dfbeeea9c8e0106815280e8f253cf
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x8bdfcc382b42a25b9e75486cde450e2004cbcffa755987630a8133c749ee6ea7](http://testnet.etherscan.io/tx/0x8bdfcc382b42a25b9e75486cde450e2004cbcffa755987630a8133c749ee6ea7)
* [0x85ae98c0a64f26accd0f9c07fcb011004092ad39b9df61adb5e5f29ce914d794](http://testnet.etherscan.io/tx/0x85ae98c0a64f26accd0f9c07fcb011004092ad39b9df61adb5e5f29ce914d794)
* [0x1eca8f7ac14ee496b8f4c1510f7fb309bb4c7d8b6b03db3303d07db8fff026d2](http://testnet.etherscan.io/tx/0x1eca8f7ac14ee496b8f4c1510f7fb309bb4c7d8b6b03db3303d07db8fff026d2)
* [0x7c051e54c2d089996fd2b76f162ab7360ee910ab392deb211e1e9e804354e502](http://testnet.etherscan.io/tx/0x7c051e54c2d089996fd2b76f162ab7360ee910ab392deb211e1e9e804354e502)

##### Contract Events

* WalletCreated(by=0x96384d8ee4275db3d9ff753ab0af81f431adb892,)
* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x338f1f7b8e9240abce5f64b7781eecdba9b2d78d,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x70d1130e468c81e3415f5d3bf76d9177796a2dc6
* created instance of contract DTRExpensiveWallet at 0x38bbf1a0883e0076eda15876ddbc32f1c70461db
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x2a44464beb586d6a842701a5b4bdd4d6d2b1395f367ca65d8a63ac8ebcbbd579](http://testnet.etherscan.io/tx/0x2a44464beb586d6a842701a5b4bdd4d6d2b1395f367ca65d8a63ac8ebcbbd579)
* [0x9600403187d935e7877372043de22748b0977d4ea939f184fd4ac859a736b7fb](http://testnet.etherscan.io/tx/0x9600403187d935e7877372043de22748b0977d4ea939f184fd4ac859a736b7fb)
* [0x638adfe2fa5e0cfe4421633e8d3e5bbc4589c53ebd230463efedb5bc48053e5f](http://testnet.etherscan.io/tx/0x638adfe2fa5e0cfe4421633e8d3e5bbc4589c53ebd230463efedb5bc48053e5f)
* [0x9d99639a2652a3f6a3572b9f2b6ccdd7bac4b3a07755443f7926d80c444943e9](http://testnet.etherscan.io/tx/0x9d99639a2652a3f6a3572b9f2b6ccdd7bac4b3a07755443f7926d80c444943e9)
* [0x590a202e95b41b3d11cf35d4d5f1d2b822ada003754b769d687f85208118ac8e](http://testnet.etherscan.io/tx/0x590a202e95b41b3d11cf35d4d5f1d2b822ada003754b769d687f85208118ac8e)

##### Contract Events

* WalletCreated(by=0x1c6ad57defb1cd81c183046995ededb3b3e78392,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x70d1130e468c81e3415f5d3bf76d9177796a2dc6,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1470000000000000000,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x934306383a90b4fac3b0b82e36d0a1fffba51fc5
* created instance of contract DTRExpensiveWallet at 0x70396d2637322542bc5747a3bcb7c1ee7cd36ead
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x645e6676c9e5ed20117c910be141560cc1662cedcc1c564f655f380d5387f43f](http://testnet.etherscan.io/tx/0x645e6676c9e5ed20117c910be141560cc1662cedcc1c564f655f380d5387f43f)
* [0x3455bda2f7d99ee09bc39624988c29f49f11bbdaf395c6e2e38c6ec635729d5e](http://testnet.etherscan.io/tx/0x3455bda2f7d99ee09bc39624988c29f49f11bbdaf395c6e2e38c6ec635729d5e)
* [0x8da52a86808d59dd4db46ab030f0398a846a2da993bf4384adb171f040ab2c51](http://testnet.etherscan.io/tx/0x8da52a86808d59dd4db46ab030f0398a846a2da993bf4384adb171f040ab2c51)
* [0x1a83086c9fab380801e581cae7daea24f41a9e19fa75ca70b2bd5a4f6ee68acf](http://testnet.etherscan.io/tx/0x1a83086c9fab380801e581cae7daea24f41a9e19fa75ca70b2bd5a4f6ee68acf)
* [0xad8a8eb12a973b80c9a8ac3f927f532f5e581877839a48a0dfa200bed7d60540](http://testnet.etherscan.io/tx/0xad8a8eb12a973b80c9a8ac3f927f532f5e581877839a48a0dfa200bed7d60540)

##### Contract Events

* WalletCreated(by=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,)
* DepositMade(from=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x934306383a90b4fac3b0b82e36d0a1fffba51fc5,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Cannot successfully resend failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x351b01141b7ea92176f90dd131a23d39aa345182
* created instance of contract DTRExpensiveWallet at 0x14e3d0c494d9ef05b24874226c0e2de27a143ea2
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x0f2a54c32f3098f95f95c224cb5d02e7b4aec0a1a786b49fb8dbda50394825a0](http://testnet.etherscan.io/tx/0x0f2a54c32f3098f95f95c224cb5d02e7b4aec0a1a786b49fb8dbda50394825a0)
* [0xc2514bbdc3967cd8248156818db31b853db14d23bfefdcd2ec624f883d4aee83](http://testnet.etherscan.io/tx/0xc2514bbdc3967cd8248156818db31b853db14d23bfefdcd2ec624f883d4aee83)
* [0x0e1ea66dffdc6944e2498e7503ae74e4baecfc1aaa3debce3f4574be08893579](http://testnet.etherscan.io/tx/0x0e1ea66dffdc6944e2498e7503ae74e4baecfc1aaa3debce3f4574be08893579)
* [0x2c3cc7b38286c5047b7d588803663e461946d38d2f2141843013d0d7ac01c155](http://testnet.etherscan.io/tx/0x2c3cc7b38286c5047b7d588803663e461946d38d2f2141843013d0d7ac01c155)
* [0xe15016dff06383078054d0a70baa56d4f00567cae9be0adf28233000499fb118](http://testnet.etherscan.io/tx/0xe15016dff06383078054d0a70baa56d4f00567cae9be0adf28233000499fb118)
* [0xbab29235ece9834e2520b0253fd48635f0164e38cb0611202c6d5406d38bd595](http://testnet.etherscan.io/tx/0xbab29235ece9834e2520b0253fd48635f0164e38cb0611202c6d5406d38bd595)

##### Contract Events

* WalletCreated(by=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x351b01141b7ea92176f90dd131a23d39aa345182,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x351b01141b7ea92176f90dd131a23d39aa345182,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1470000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1470000000000000000,)

### Test - "Cannot void failed compensation payment before failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2853e355d1f6d6ee9b1c33cff6a65e084d33469d
* created instance of contract DTRExpensiveWallet at 0x730cad8e9af043027071e14c0e1fc449ef84a974
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0x2efcbe25e2fdd5d79f44aa4532b7930f6a85eb64a0332a1532d9da741edf4403](http://testnet.etherscan.io/tx/0x2efcbe25e2fdd5d79f44aa4532b7930f6a85eb64a0332a1532d9da741edf4403)
* [0xf44e2c1e0e795dfd52787f8fb6be6ca4153f504af3677b40d21cc75f5403f8ec](http://testnet.etherscan.io/tx/0xf44e2c1e0e795dfd52787f8fb6be6ca4153f504af3677b40d21cc75f5403f8ec)
* [0x6070345a203f29f67e2df7a77748594a3e6888f45dac93c1476c962b61ed9dc9](http://testnet.etherscan.io/tx/0x6070345a203f29f67e2df7a77748594a3e6888f45dac93c1476c962b61ed9dc9)
* [0xfd455ce7548a17b4f101b5e5e98d956490cf9785c21f0306ce4be6d445dac2f5](http://testnet.etherscan.io/tx/0xfd455ce7548a17b4f101b5e5e98d956490cf9785c21f0306ce4be6d445dac2f5)
* [0xf9370180a5238b33542941e96f4862b0ac67ea29827d7304d348426afd9dafdd](http://testnet.etherscan.io/tx/0xf9370180a5238b33542941e96f4862b0ac67ea29827d7304d348426afd9dafdd)

##### Contract Events

* WalletCreated(by=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,)
* DepositMade(from=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,value=1000000000000000000,)
* DepositMade(from=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x2853e355d1f6d6ee9b1c33cff6a65e084d33469d,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x2853e355d1f6d6ee9b1c33cff6a65e084d33469d,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Can void failed compensation payment after failedPaymentRingfenceDuration elapsed"

##### Status

Failed

##### Failure Cause

Error: assertion failed: expected '2' got '3'; compensationStatus

Location: Step #8 at Object.<anonymous> (C:\Users\Kieran\Documents\KingOfTheEtherThrone\tests\test-throne-payments.js:398:23)

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x3e90257a1f1f8e5b78bb92f5da45c9c128e20be6
* created instance of contract DTRExpensiveWallet at 0x272b6a20d319197efd2f7e24e56fdfb2a4abbc7b
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0xd8e6f523e2218edfba0013df8d4b3da980a5ab74140c09a34d1787b8f23db8ea](http://testnet.etherscan.io/tx/0xd8e6f523e2218edfba0013df8d4b3da980a5ab74140c09a34d1787b8f23db8ea)
* [0x3663d3d9a589eea0391fed9241ccc6f97d5e4ac37e4b9be7e8773516f7c43e99](http://testnet.etherscan.io/tx/0x3663d3d9a589eea0391fed9241ccc6f97d5e4ac37e4b9be7e8773516f7c43e99)
* [0xdeb399a20ded64f6770a930d74d101a613fe3139973dd4da52502c577ece913c](http://testnet.etherscan.io/tx/0xdeb399a20ded64f6770a930d74d101a613fe3139973dd4da52502c577ece913c)
* [0x7311f93da46cc9e7f0d224edf2d643926b20854cec2015158141cae5fd7c03fa](http://testnet.etherscan.io/tx/0x7311f93da46cc9e7f0d224edf2d643926b20854cec2015158141cae5fd7c03fa)
* [0x7f428d0f47b13bec4bba992fa326268bc0c94ffa9a6ed73bcfb223b41f7db2ac](http://testnet.etherscan.io/tx/0x7f428d0f47b13bec4bba992fa326268bc0c94ffa9a6ed73bcfb223b41f7db2ac)

##### Contract Events

* WalletCreated(by=0x0f73050a531407ea03e4f896365b7ac866e5db65,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x3e90257a1f1f8e5b78bb92f5da45c9c128e20be6,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xc29ab6fe1b9decdd74d5b958d61153ce4d097a5b
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0xcb5ae3db6024cecf51ad3627cfc9f2d232011c81,200000000000000000,1459465947
* gazetteerEntry is  [object Object]
* myThroneAddress is  0xcb5ae3db6024cecf51ad3627cfc9f2d232011c81
* created instance of contract KingOfTheEtherThrone at 0xcb5ae3db6024cecf51ad3627cfc9f2d232011c81
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x7861a5c1b40ac8cfe170d425d08f43d082b747df8ebb7bd22073d1ae2ca16ea5](http://testnet.etherscan.io/tx/0x7861a5c1b40ac8cfe170d425d08f43d082b747df8ebb7bd22073d1ae2ca16ea5)
* [0xc539b2abd6ee31cd1b93e52cfd74f5be02e3915458707ff69e49c215d65f2a75](http://testnet.etherscan.io/tx/0xc539b2abd6ee31cd1b93e52cfd74f5be02e3915458707ff69e49c215d65f2a75)
* [0x22c2e88b065996db371a443ea9782e379fdb1b13922d4c6f58a3065e14e13aac](http://testnet.etherscan.io/tx/0x22c2e88b065996db371a443ea9782e379fdb1b13922d4c6f58a3065e14e13aac)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xfffcd967ea3ee2e5a9133f74e12ce7bdcd863220
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xbd8a359b2f3ad7ba6fd1daf93726714475bb0c4b487d6809af1ee444ccc34460](http://testnet.etherscan.io/tx/0xbd8a359b2f3ad7ba6fd1daf93726714475bb0c4b487d6809af1ee444ccc34460)
* [0x36fae5af3d57ca2d137ab8ab41c7efc2f4b37c4c36e02905d32fe21448105c08](http://testnet.etherscan.io/tx/0x36fae5af3d57ca2d137ab8ab41c7efc2f4b37c4c36e02905d32fe21448105c08)
* [0x04f6e8094530fd481b4455ad4d48f91a0bd424068e93fe7bfd7448e74d9bc798](http://testnet.etherscan.io/tx/0x04f6e8094530fd481b4455ad4d48f91a0bd424068e93fe7bfd7448e74d9bc798)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x12be2589e092b359890df8fa75ef989936fc7343
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x0e7904c48ab62587a7dca5369ec458378700f0ba6c186f071a180482b724d788](http://testnet.etherscan.io/tx/0x0e7904c48ab62587a7dca5369ec458378700f0ba6c186f071a180482b724d788)
* [0x55f70d8faa747f4acbc39c1a145f2267c7c5e9063b64f7256014a03e1c4803c8](http://testnet.etherscan.io/tx/0x55f70d8faa747f4acbc39c1a145f2267c7c5e9063b64f7256014a03e1c4803c8)
* [0x4b614a1cde86c09ba8d97599c42c19ee43d7cf6d534f80305c3fea3488a42ff4](http://testnet.etherscan.io/tx/0x4b614a1cde86c09ba8d97599c42c19ee43d7cf6d534f80305c3fea3488a42ff4)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x4be42a9bae107df4517cca3d95113be96f4b3bd6
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0xcaf334ec66b5233c5531ca34ddf74e8f4c05f833
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0xc8af15e22653bb30cf688f6be08812efde3134b6
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x9cbcb51029663231dbd34ac3ad982d1cb4b076ee66937be58dd78da89b6245f8](http://testnet.etherscan.io/tx/0x9cbcb51029663231dbd34ac3ad982d1cb4b076ee66937be58dd78da89b6245f8)
* [0x799c274ce08654e0da1120d138d54ca8533e65c2db25e311f192dd84f4f117a3](http://testnet.etherscan.io/tx/0x799c274ce08654e0da1120d138d54ca8533e65c2db25e311f192dd84f4f117a3)
* [0xb8c5e25d5dcb790c9ede60b2a40a6e71949263a06f9a2431123b48666682e0fa](http://testnet.etherscan.io/tx/0xb8c5e25d5dcb790c9ede60b2a40a6e71949263a06f9a2431123b48666682e0fa)
* [0x2a2acdab59870158c9e6b866ab6bd48cd050173f1b151b1455467a39c8b2fff5](http://testnet.etherscan.io/tx/0x2a2acdab59870158c9e6b866ab6bd48cd050173f1b151b1455467a39c8b2fff5)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x8c81faab960991ca2165499d392d4fa8b0e516b9

##### Transactions Generated

* [0x734b8aa36caa23bc66d6ddb2a83b00efab21888bbae1c58fa29f7fd2e31fc677](http://testnet.etherscan.io/tx/0x734b8aa36caa23bc66d6ddb2a83b00efab21888bbae1c58fa29f7fd2e31fc677)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0xec7e979c713be2030fe11f155a927be9215c376e

##### Transactions Generated

* [0xf10f5d08916fe4a20219042f6d1b4a9706c41394ac4bcd1389b6d9801777d685](http://testnet.etherscan.io/tx/0xf10f5d08916fe4a20219042f6d1b4a9706c41394ac4bcd1389b6d9801777d685)

