# "King of the Ether Throne" Report

Generated at 2016-04-09T21:27:40.284Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 27
* Tests skipped: 0
* Tests passed: 27
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x10a25cbf76ccdb15e4577a4d9eb37ccfaa281c92

##### Transactions Generated

* [0xb8efccd6175652c2ac35a574c3100dcc082b0a766055aac7437a18546746c007](http://testnet.etherscan.io/tx/0xb8efccd6175652c2ac35a574c3100dcc082b0a766055aac7437a18546746c007)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x371b7353cb97b54905a9a6870f17d060d6d3aa9d
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x169b898e9cac1da94d18f959d52cb1b9c591145459b0a4d9f11ba06c3e85b8c0](http://testnet.etherscan.io/tx/0x169b898e9cac1da94d18f959d52cb1b9c591145459b0a4d9f11ba06c3e85b8c0)
* [0xfcebe8df561cb07ed3b7a74161ec146d1182fc112360864293151399afc996b3](http://testnet.etherscan.io/tx/0xfcebe8df561cb07ed3b7a74161ec146d1182fc112360864293151399afc996b3)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xfb42c0b1b1a395dff7eec49f0f968ccd5166a603
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x14277f4bc219acfba25cfec7dbe74b8cca278b3635efcace0401817ca4f54400](http://testnet.etherscan.io/tx/0x14277f4bc219acfba25cfec7dbe74b8cca278b3635efcace0401817ca4f54400)
* [0x592a8e096ea77406fe58969276bdb79e019267d3fec18e2e51adedaee16f5324](http://testnet.etherscan.io/tx/0x592a8e096ea77406fe58969276bdb79e019267d3fec18e2e51adedaee16f5324)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xe433c923baa4b82cafc75ad2f1eb4f4acefe22c2
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x31f99dd66b819d7097633e6423e33e754e9102ce972c41bc46bb0e50340ed3eb](http://testnet.etherscan.io/tx/0x31f99dd66b819d7097633e6423e33e754e9102ce972c41bc46bb0e50340ed3eb)
* [0xae958b177fe59e7cd68bd26032189cab291562fe958fead5d2fc221c2506ccca](http://testnet.etherscan.io/tx/0xae958b177fe59e7cd68bd26032189cab291562fe958fead5d2fc221c2506ccca)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb27de3ffb2ca384c15da492c807d27f939be3792

##### Transactions Generated

* [0x78eef83fb1a4587d92ba24a11590124e129b6133887c8171e1a933f2d1bcbadd](http://testnet.etherscan.io/tx/0x78eef83fb1a4587d92ba24a11590124e129b6133887c8171e1a933f2d1bcbadd)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xa3d9dd2ecea44f818449c2e36033cb9ceba75fe1
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x256f3c48a70460b518fbbb9e3034cd8de5c5c935499b69371f137bfb9f0fad66](http://testnet.etherscan.io/tx/0x256f3c48a70460b518fbbb9e3034cd8de5c5c935499b69371f137bfb9f0fad66)
* [0xad3eec53fe806202a607363eb522fa3da4b3db0144fa40581d18c8951beae953](http://testnet.etherscan.io/tx/0xad3eec53fe806202a607363eb522fa3da4b3db0144fa40581d18c8951beae953)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xd9a4cb8edcc5d9df30ba090bfc15e5c866593d21
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x132c1be81dc2b1d8b3d74077848541a9047b7a627d2475f385e9172a5ab1274f](http://testnet.etherscan.io/tx/0x132c1be81dc2b1d8b3d74077848541a9047b7a627d2475f385e9172a5ab1274f)
* [0x07526188c1cd1c698542000808e36323fa5231f4e00c7832214bcb164d9e8967](http://testnet.etherscan.io/tx/0x07526188c1cd1c698542000808e36323fa5231f4e00c7832214bcb164d9e8967)
* [0x343673355717a37204ef01b464f3e5c76338c6331db1b7ac17249c3669849a73](http://testnet.etherscan.io/tx/0x343673355717a37204ef01b464f3e5c76338c6331db1b7ac17249c3669849a73)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x0961a6383d86152d3866bb81dca3075a565732f1
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1b0444681a9423f2450ab351019163c3b45f2bb25da05f0126041f958c1dcccf](http://testnet.etherscan.io/tx/0x1b0444681a9423f2450ab351019163c3b45f2bb25da05f0126041f958c1dcccf)
* [0x52a9f5494dee5d43ccc77e6fe8c1a23e98a3a1c3f01326c3f4ec19f3868f275e](http://testnet.etherscan.io/tx/0x52a9f5494dee5d43ccc77e6fe8c1a23e98a3a1c3f01326c3f4ec19f3868f275e)
* [0xbb7e4f846a57aecdd85daec326a9756e798595b6d6a8229af6b807c26c1caa86](http://testnet.etherscan.io/tx/0xbb7e4f846a57aecdd85daec326a9756e798595b6d6a8229af6b807c26c1caa86)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x56aff304c456ca54b3f9d2eea3950806afc41168
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2d78dde2d65defc1f23d935e14ce44e104adc889c63541fa8315012b2e9dd17a](http://testnet.etherscan.io/tx/0x2d78dde2d65defc1f23d935e14ce44e104adc889c63541fa8315012b2e9dd17a)
* [0xeb7e28208da7ee1df173a743a8effb18778141d22893c22a4fb4c185cb77741d](http://testnet.etherscan.io/tx/0xeb7e28208da7ee1df173a743a8effb18778141d22893c22a4fb4c185cb77741d)
* [0xc605f0813ca902860dca09cf262fcbbc6d7e7c6e9de4490cd2bfb2b57f9d1e8e](http://testnet.etherscan.io/tx/0xc605f0813ca902860dca09cf262fcbbc6d7e7c6e9de4490cd2bfb2b57f9d1e8e)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x06fadfa2108891f5a0d5b2fd510b7a4557f14ab4
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf523ce86c961b73768eb8140d85cde421297f470d3de85e302b0a7a4156e0b96](http://testnet.etherscan.io/tx/0xf523ce86c961b73768eb8140d85cde421297f470d3de85e302b0a7a4156e0b96)
* [0xc63d57035876604d5c82690184f08d6061a69eceb7a82892349d4d17799f3552](http://testnet.etherscan.io/tx/0xc63d57035876604d5c82690184f08d6061a69eceb7a82892349d4d17799f3552)
* [0x7d8bb387ef0e35aafd2004b62ba8c5222708406e1260d17b23ff383a3c04fe4e](http://testnet.etherscan.io/tx/0x7d8bb387ef0e35aafd2004b62ba8c5222708406e1260d17b23ff383a3c04fe4e)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xddf040e0e206f6588bb809b91085c8acadea0f58
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x42da41580cce58b380690eb8365d5e728f6b4334e22a8693d89456276c41617f](http://testnet.etherscan.io/tx/0x42da41580cce58b380690eb8365d5e728f6b4334e22a8693d89456276c41617f)
* [0xd8476a0424201e12aee3f2f5c1be6caa630e353a9161bbcac6e1649cab20e9f6](http://testnet.etherscan.io/tx/0xd8476a0424201e12aee3f2f5c1be6caa630e353a9161bbcac6e1649cab20e9f6)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xd9619a960d609dc38ccb21c89961b87c5be4b75d
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1c663c569d24f2f16d670d827d24b11ba6c4ae4b0aae46874ca86ae84f166222](http://testnet.etherscan.io/tx/0x1c663c569d24f2f16d670d827d24b11ba6c4ae4b0aae46874ca86ae84f166222)
* [0x1493cb50686ba66da6d4b000e6417590bca4e4fa8275fb452943b4a3d3024e16](http://testnet.etherscan.io/tx/0x1493cb50686ba66da6d4b000e6417590bca4e4fa8275fb452943b4a3d3024e16)
* [0xd1accc839144521b670d7b7f6a6d2d37f09850743b71a14ddf479651e35303d0](http://testnet.etherscan.io/tx/0xd1accc839144521b670d7b7f6a6d2d37f09850743b71a14ddf479651e35303d0)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x586b3f4d151114d465ce81e0d3363ea6ea485eec

##### Transactions Generated

* [0xbf738e3648d25928f0c4099a65675387530bd0daff5afb7ff7fc4ef9d7693051](http://testnet.etherscan.io/tx/0xbf738e3648d25928f0c4099a65675387530bd0daff5afb7ff7fc4ef9d7693051)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x79f3549df7ffb9aa5f1d44e8de40aae652fac3ed
* created instance of contract DTRExpensiveWallet at 0x94a27cd6d5ff2e8fda3b2351adf59ea476e1b5f2
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0xad4492e6b27eb06e354583108e1555864826ed2d84d2f1c74acbb03329568e45](http://testnet.etherscan.io/tx/0xad4492e6b27eb06e354583108e1555864826ed2d84d2f1c74acbb03329568e45)
* [0xc4f69afa80a582349123049cb8d17c4bb6e0a6d1668f5f2443b7aea45d664708](http://testnet.etherscan.io/tx/0xc4f69afa80a582349123049cb8d17c4bb6e0a6d1668f5f2443b7aea45d664708)
* [0x8bcb2912fcb14ff2f60b2a2ead867093319632bf492286b8246ea35de0dd2926](http://testnet.etherscan.io/tx/0x8bcb2912fcb14ff2f60b2a2ead867093319632bf492286b8246ea35de0dd2926)

##### Contract Events

* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x79f3549df7ffb9aa5f1d44e8de40aae652fac3ed,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x79f3549df7ffb9aa5f1d44e8de40aae652fac3ed,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2f30bbbba6825e65101c45bb805f723d25c1798b
* created instance of contract DTRExpensiveWallet at 0xda6ed17017663099f15d11d92ee1865acc203b4d
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2f139b1c53b520a94f913e365da2445301974d0b2ea4e689cf8436da0185663f](http://testnet.etherscan.io/tx/0x2f139b1c53b520a94f913e365da2445301974d0b2ea4e689cf8436da0185663f)
* [0x194c527641680e98b1f62f8af4f1ce02c5cab588cf610edc775b2ac4f7b0a579](http://testnet.etherscan.io/tx/0x194c527641680e98b1f62f8af4f1ce02c5cab588cf610edc775b2ac4f7b0a579)
* [0x95500155380beec82541fc0bdfdc5473fe870e4c5179cd0a9015d9d8d8500248](http://testnet.etherscan.io/tx/0x95500155380beec82541fc0bdfdc5473fe870e4c5179cd0a9015d9d8d8500248)
* [0x6d94320d7adb0cfab5865c1b82792dc0723a1c36ae027827fe612bb45dd04822](http://testnet.etherscan.io/tx/0x6d94320d7adb0cfab5865c1b82792dc0723a1c36ae027827fe612bb45dd04822)

##### Contract Events

* WalletCreated(by=0x5845ebff39c116f6634337b867bd32ab4d74c193,)
* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x2f30bbbba6825e65101c45bb805f723d25c1798b,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb1dbc883c0b90841efa8d6df924ade1bce7a64d3
* created instance of contract DTRExpensiveWallet at 0xa927fa12826ba59e6f8cd01a7b0fd2d570a3b2f8
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x0159155c056687d4cb79b0f72a7f0861e1f0d6ca4c4663dce68407a1003fe8e0](http://testnet.etherscan.io/tx/0x0159155c056687d4cb79b0f72a7f0861e1f0d6ca4c4663dce68407a1003fe8e0)
* [0xde47018a19e14ac181a38c818343fc6237746d2359cb5d1947227492fa34c441](http://testnet.etherscan.io/tx/0xde47018a19e14ac181a38c818343fc6237746d2359cb5d1947227492fa34c441)
* [0xba8dd321b92ff6fbc06ecf315afa336e7b20eff3f40586ccce3279b1f8bf5cd2](http://testnet.etherscan.io/tx/0xba8dd321b92ff6fbc06ecf315afa336e7b20eff3f40586ccce3279b1f8bf5cd2)
* [0xe3f6d6b7b028b8b2e7204b0c58cdbe487ec39dc18120c96ab144ba4cd9b94078](http://testnet.etherscan.io/tx/0xe3f6d6b7b028b8b2e7204b0c58cdbe487ec39dc18120c96ab144ba4cd9b94078)

##### Contract Events

* WalletCreated(by=0x96384d8ee4275db3d9ff753ab0af81f431adb892,)
* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xb1dbc883c0b90841efa8d6df924ade1bce7a64d3,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x0cdba38bbfc137b82dad4d95977c2ccebd4cd0da
* created instance of contract DTRExpensiveWallet at 0x03ac3caf5334affbbb77c85e678e701cc961f304
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x613a26abb640393f4850b21c0209893e840a6bcce87cede456ad6ce3f2f805e3](http://testnet.etherscan.io/tx/0x613a26abb640393f4850b21c0209893e840a6bcce87cede456ad6ce3f2f805e3)
* [0x0a5d87b96b6a0b60620acad3524bae2c849de7e60bccff89592f5fb1682ca01a](http://testnet.etherscan.io/tx/0x0a5d87b96b6a0b60620acad3524bae2c849de7e60bccff89592f5fb1682ca01a)
* [0x8ecf35a34e6dad3db286ac535243da03264bd5ff40668c2e45d7421c9d1e1cad](http://testnet.etherscan.io/tx/0x8ecf35a34e6dad3db286ac535243da03264bd5ff40668c2e45d7421c9d1e1cad)
* [0x4920a898e006f01b2eb7126367cc045c5e522ec831afa9382177f06d120dd000](http://testnet.etherscan.io/tx/0x4920a898e006f01b2eb7126367cc045c5e522ec831afa9382177f06d120dd000)
* [0x2de1bb4ffe27465f3077a0aa0a43f154c8a1a67370006f5435acdae4b72b31a8](http://testnet.etherscan.io/tx/0x2de1bb4ffe27465f3077a0aa0a43f154c8a1a67370006f5435acdae4b72b31a8)

##### Contract Events

* WalletCreated(by=0x1c6ad57defb1cd81c183046995ededb3b3e78392,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x0cdba38bbfc137b82dad4d95977c2ccebd4cd0da,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1470000000000000000,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xa2955ef635aab2f79aed18fa231c9b824dae06d5
* created instance of contract DTRExpensiveWallet at 0xf1d6c3e37c947f13e87363e9ee3153e1e68a81bd
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x6bd034a15033099f837718b61d020cdc088981fa25877d751da6dddbcec8bce1](http://testnet.etherscan.io/tx/0x6bd034a15033099f837718b61d020cdc088981fa25877d751da6dddbcec8bce1)
* [0xfdd7c8c3ff266981b188fdb74680ed2435e628b5325ba27b656ebaa089cb29f6](http://testnet.etherscan.io/tx/0xfdd7c8c3ff266981b188fdb74680ed2435e628b5325ba27b656ebaa089cb29f6)
* [0x81b2d149ce28ce6ce12ee29984016a0a4244d9c410ee0dea98e34a5d31e82c09](http://testnet.etherscan.io/tx/0x81b2d149ce28ce6ce12ee29984016a0a4244d9c410ee0dea98e34a5d31e82c09)
* [0x6b53933b019787e03c1fc48c277fbcd47b9e6acf8e42811e267fa33ef3ed6329](http://testnet.etherscan.io/tx/0x6b53933b019787e03c1fc48c277fbcd47b9e6acf8e42811e267fa33ef3ed6329)
* [0x3274e1df19d0f32b273068a929d157e449697d1de38fc385abdedd24cab71e1c](http://testnet.etherscan.io/tx/0x3274e1df19d0f32b273068a929d157e449697d1de38fc385abdedd24cab71e1c)

##### Contract Events

* DepositMade(from=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xa2955ef635aab2f79aed18fa231c9b824dae06d5,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Cannot successfully resend failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x636fbf48be0f579bd79642abc22660dae44ddeb9
* created instance of contract DTRExpensiveWallet at 0x65253393d75c17131ea7c4a735ea90b03cc6ee88
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0xda3d1db7a65aa4bf6bdc01ff1a33ef8f2ba16475b618bdd1671008283bbc0c53](http://testnet.etherscan.io/tx/0xda3d1db7a65aa4bf6bdc01ff1a33ef8f2ba16475b618bdd1671008283bbc0c53)
* [0x61c386756a1353751b9b4b71ebb194343901faa4dc68a59657773df3c60579de](http://testnet.etherscan.io/tx/0x61c386756a1353751b9b4b71ebb194343901faa4dc68a59657773df3c60579de)
* [0x5f60c59bb2d1f8d9d35a8379651fd25eeee385a8c3e3056de0ee804fababd13e](http://testnet.etherscan.io/tx/0x5f60c59bb2d1f8d9d35a8379651fd25eeee385a8c3e3056de0ee804fababd13e)
* [0x00e11d7401a0f883b4a06bcd2e80c3dfb66db557bf9315f1bf676613bd73b9b5](http://testnet.etherscan.io/tx/0x00e11d7401a0f883b4a06bcd2e80c3dfb66db557bf9315f1bf676613bd73b9b5)
* [0x80c23831efffdf17dec0841188cead617817b32dc1dc544bc2e14b6a8b8a8196](http://testnet.etherscan.io/tx/0x80c23831efffdf17dec0841188cead617817b32dc1dc544bc2e14b6a8b8a8196)
* [0xa8e5dc6a702f821b13134a21337543d40b58b4caf63ad2f7f289911df8f67c75](http://testnet.etherscan.io/tx/0xa8e5dc6a702f821b13134a21337543d40b58b4caf63ad2f7f289911df8f67c75)

##### Contract Events

* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x636fbf48be0f579bd79642abc22660dae44ddeb9,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1470000000000000000,)

### Test - "Cannot void failed compensation payment before failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb586d8a8a600d2f23bd8411365c189b1a3d680e4
* created instance of contract DTRExpensiveWallet at 0xc6184611d7a3f7a98729da9e335b30b357c91350
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0x39d9610086ca482c59c7e07da936ea2a7c132fb80639f643ea53779589aee23d](http://testnet.etherscan.io/tx/0x39d9610086ca482c59c7e07da936ea2a7c132fb80639f643ea53779589aee23d)
* [0x870d00b2a1d8df8d36d5a8133e276868f8737d60cabe9dc4b488e47b11796918](http://testnet.etherscan.io/tx/0x870d00b2a1d8df8d36d5a8133e276868f8737d60cabe9dc4b488e47b11796918)
* [0x6b182da3f5739ff4aa1920c66bb667dbac6dcfd15da59bf6bf85599c271ae493](http://testnet.etherscan.io/tx/0x6b182da3f5739ff4aa1920c66bb667dbac6dcfd15da59bf6bf85599c271ae493)
* [0xbeb264917df4b3272ac99431e49c18cb309fcd3d85e78f75ae43d7c562939a9c](http://testnet.etherscan.io/tx/0xbeb264917df4b3272ac99431e49c18cb309fcd3d85e78f75ae43d7c562939a9c)
* [0x733a933b63f1beac5fee4a2095d325e649b5a4951b715975656f28a2e17f13d7](http://testnet.etherscan.io/tx/0x733a933b63f1beac5fee4a2095d325e649b5a4951b715975656f28a2e17f13d7)

##### Contract Events

* DepositMade(from=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xb586d8a8a600d2f23bd8411365c189b1a3d680e4,value=1000000000000000000,)
* WithdrawalMade(to=0xb586d8a8a600d2f23bd8411365c189b1a3d680e4,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Can void failed compensation payment after failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x0a8d8847dd6c769d050f0f47e8a0abe80e855f90
* created instance of contract DTRExpensiveWallet at 0x621477cfd08ff9aec5780516428d8fbea04da80d
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0x5c41d4ae36643621d973376d5bf5afcbad81e89d8766bb70ba54931aa7eda41b](http://testnet.etherscan.io/tx/0x5c41d4ae36643621d973376d5bf5afcbad81e89d8766bb70ba54931aa7eda41b)
* [0x992083d60a72a047f5519dc601860f0c5b0f77066989da6d4726a9274febffbc](http://testnet.etherscan.io/tx/0x992083d60a72a047f5519dc601860f0c5b0f77066989da6d4726a9274febffbc)
* [0xee056866eb2d99086c5fb4cfac9efb6476c17be24ba9245196e903ecbb9c7406](http://testnet.etherscan.io/tx/0xee056866eb2d99086c5fb4cfac9efb6476c17be24ba9245196e903ecbb9c7406)
* [0xdf947fd66490a711cfdd25870d35d412f338fceaab6581bbdc668f652c5a2e33](http://testnet.etherscan.io/tx/0xdf947fd66490a711cfdd25870d35d412f338fceaab6581bbdc668f652c5a2e33)
* [0xe1a8430120d3d0e3cd48b7c8b62d1648d092cf17e1648ba7081e30970ed5485a](http://testnet.etherscan.io/tx/0xe1a8430120d3d0e3cd48b7c8b62d1648d092cf17e1648ba7081e30970ed5485a)

##### Contract Events

* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x0a8d8847dd6c769d050f0f47e8a0abe80e855f90,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x88abb566287ec0091878809e4fb2b23c2045a29e
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0x31cbcb98340cce2e20e81ccb0cddcb198f949881,200000000000000000,1460236822
* gazetteerEntry is  [object Object]
* myThroneAddress is  0x31cbcb98340cce2e20e81ccb0cddcb198f949881
* created instance of contract KingOfTheEtherThrone at 0x31cbcb98340cce2e20e81ccb0cddcb198f949881
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xd46666c1653a99d18adcc879b83c1ac4aafc99504910af229292aa525a451c3e](http://testnet.etherscan.io/tx/0xd46666c1653a99d18adcc879b83c1ac4aafc99504910af229292aa525a451c3e)
* [0xe735469ba4ffc097614b13e7e84ddc77eb50807ae12af030d2e1a9f0e686133c](http://testnet.etherscan.io/tx/0xe735469ba4ffc097614b13e7e84ddc77eb50807ae12af030d2e1a9f0e686133c)
* [0xa9fa5bcecfb3408ca4bee1a2a187a561eb1f809941afe8a060dda15281836269](http://testnet.etherscan.io/tx/0xa9fa5bcecfb3408ca4bee1a2a187a561eb1f809941afe8a060dda15281836269)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xd60592e32fc069be1f63070996eb812cc2dc6c3a
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x1b3aaca8c27b3a67bd08f5d801eea54e785adced6409c6dbe52f85e399cb1641](http://testnet.etherscan.io/tx/0x1b3aaca8c27b3a67bd08f5d801eea54e785adced6409c6dbe52f85e399cb1641)
* [0x2a14ad6a4f4875b41719ff14956d07dd0352467f7332a587f29a80cb293efee1](http://testnet.etherscan.io/tx/0x2a14ad6a4f4875b41719ff14956d07dd0352467f7332a587f29a80cb293efee1)
* [0xdb2b0a21de289ec034c41460016166c610a4a4093ad0015731a3187014ed87be](http://testnet.etherscan.io/tx/0xdb2b0a21de289ec034c41460016166c610a4a4093ad0015731a3187014ed87be)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x30007002079fb88be47662f5acb921b40b7c3eb2
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x0be84f483af3ced9aab1b552a2a00405681ccbb849e70243ee041cf042d04ccb](http://testnet.etherscan.io/tx/0x0be84f483af3ced9aab1b552a2a00405681ccbb849e70243ee041cf042d04ccb)
* [0x53f4eadf8ee97748f8eb01ea71590d094847777283967e77a68ad3b007d0fde3](http://testnet.etherscan.io/tx/0x53f4eadf8ee97748f8eb01ea71590d094847777283967e77a68ad3b007d0fde3)
* [0x7cb26f2c8fe82a3e8cc58872cc5aa7580c565d50b58e9488a05400dc0cb9d636](http://testnet.etherscan.io/tx/0x7cb26f2c8fe82a3e8cc58872cc5aa7580c565d50b58e9488a05400dc0cb9d636)

##### Contract Events

* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xb937ca8d052335eb3eeb6dfdc8fe88564602c44c
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x6f60eb02f91104d717ce99f805b2aae3cc08b3ac
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x41dd506e7e433c71ea8d185f5845ffdf4981fe09
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xa77e19960627fd14fc3d04422f7a1d494ce9f9822002da9175301806030b086c](http://testnet.etherscan.io/tx/0xa77e19960627fd14fc3d04422f7a1d494ce9f9822002da9175301806030b086c)
* [0x94966299a0cbd3e8673154767869c5426c1d71464e71c7df5b3c4c8b9e0e0f7b](http://testnet.etherscan.io/tx/0x94966299a0cbd3e8673154767869c5426c1d71464e71c7df5b3c4c8b9e0e0f7b)
* [0x0c71d57321d53602ff2d19c3a02650eb26d01b2ccae849ee2f4d8e861d96dcd8](http://testnet.etherscan.io/tx/0x0c71d57321d53602ff2d19c3a02650eb26d01b2ccae849ee2f4d8e861d96dcd8)
* [0xad1d23ca8fbd4e7aca718310cbf83dcc5fb86cc794c2be41d2f1628c9e83fa17](http://testnet.etherscan.io/tx/0xad1d23ca8fbd4e7aca718310cbf83dcc5fb86cc794c2be41d2f1628c9e83fa17)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x95d8c5702fab7b8f911faf30f87c2a0e0666215d

##### Transactions Generated

* [0x520019540b4513e1eb5aa52acf5205de8df2e886820c7430044ab1d4d8ad82c4](http://testnet.etherscan.io/tx/0x520019540b4513e1eb5aa52acf5205de8df2e886820c7430044ab1d4d8ad82c4)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x65cdf83b311be3efe26bc050194296503281c966

##### Transactions Generated

* [0xb5c55905706d575712a8a394425669a25fb8d30b0b57c7950e9deccc594e691f](http://testnet.etherscan.io/tx/0xb5c55905706d575712a8a394425669a25fb8d30b0b57c7950e9deccc594e691f)

