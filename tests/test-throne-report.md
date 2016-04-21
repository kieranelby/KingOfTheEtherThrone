# "King of the Ether Throne" Report

Generated at 2016-04-20T22:12:39.639Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 36
* Tests skipped: 0
* Tests passed: 36
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xcb134ce8532430821a696400eaef18b12d4a295b

##### Transactions Generated

* [0xe620afb5f35438d7f82a224d063116b0dcb74301198a0a08306a175fc3a98ad9](http://testnet.etherscan.io/tx/0xe620afb5f35438d7f82a224d063116b0dcb74301198a0a08306a175fc3a98ad9)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x1fbfb13a5d1dde7d62c6f4d4ce890a040e5ae4e4
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf0df66045535e0c4adff1faa2ec14fe84a049ad184436d78131b1979c080c42e](http://testnet.etherscan.io/tx/0xf0df66045535e0c4adff1faa2ec14fe84a049ad184436d78131b1979c080c42e)
* [0x1ebbb67e74235084b36434f032d3281b6d83edfecfa5e72787c9bc2fbe3e3a7d](http://testnet.etherscan.io/tx/0x1ebbb67e74235084b36434f032d3281b6d83edfecfa5e72787c9bc2fbe3e3a7d)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x4375603399d65045222c1f155e22e55cf1b00960
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1efbc2bba10937e09aa2b90569936bf12f62354468d2522ec5bff1bb95ece5d8](http://testnet.etherscan.io/tx/0x1efbc2bba10937e09aa2b90569936bf12f62354468d2522ec5bff1bb95ece5d8)
* [0x38d0765bd582a3cefd5899af0ef62ccea79c10807f86514e224495a5ba3ffd02](http://testnet.etherscan.io/tx/0x38d0765bd582a3cefd5899af0ef62ccea79c10807f86514e224495a5ba3ffd02)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xfcf03479f0cfca89915172c44bf457fe446c276d
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x5728691e6c1079ba54c1487e3a2cf56229220fa3aa7ec6c7789403ed700eec9b](http://testnet.etherscan.io/tx/0x5728691e6c1079ba54c1487e3a2cf56229220fa3aa7ec6c7789403ed700eec9b)
* [0x07d73af0b9a7232d1310050fab4590b169fdacd4f240d2356c3323f7a67f8a46](http://testnet.etherscan.io/tx/0x07d73af0b9a7232d1310050fab4590b169fdacd4f240d2356c3323f7a67f8a46)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x8c3d4a0a4ae0fde06766a37498f3eb3b4e4f17a5

##### Transactions Generated

* [0xc0dd793efcaab2141b352859e282a236f24faeefe8b6889d4b122dbf99b10dbb](http://testnet.etherscan.io/tx/0xc0dd793efcaab2141b352859e282a236f24faeefe8b6889d4b122dbf99b10dbb)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x11477caf3f317b77ebf2a8e6456cafec289d178e
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xef64201051c038248a7d21c8cf8ed6b051b13e42dfd4b7e1bd1563d346c78c64](http://testnet.etherscan.io/tx/0xef64201051c038248a7d21c8cf8ed6b051b13e42dfd4b7e1bd1563d346c78c64)
* [0x621524a8a57d309d64ad5694fd66e34a9eeee8aa1dd37ecbe0dcc9aca890ec1a](http://testnet.etherscan.io/tx/0x621524a8a57d309d64ad5694fd66e34a9eeee8aa1dd37ecbe0dcc9aca890ec1a)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xaf198ca96fa0a743472f99a0330c543e23b1410e
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xc94ab5488f0e817ed796802e37f6c867fcd1c980c4fde5f9cbab1be8ea0c6941](http://testnet.etherscan.io/tx/0xc94ab5488f0e817ed796802e37f6c867fcd1c980c4fde5f9cbab1be8ea0c6941)
* [0x6f8ebbde904f31bb25adb76f64522e5879d74a04ad52487af8ae697da01b40b5](http://testnet.etherscan.io/tx/0x6f8ebbde904f31bb25adb76f64522e5879d74a04ad52487af8ae697da01b40b5)
* [0xcd81690da848ba883320c993a90d47fd4a24438e8deefbe7da2326fd247d3a36](http://testnet.etherscan.io/tx/0xcd81690da848ba883320c993a90d47fd4a24438e8deefbe7da2326fd247d3a36)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x7a8887de7b394b2aedc239faaf5ebe585c05e52a
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xefb8a763eea4f6d917904198820ca30b449ebd624fb8ca07ba1661a9813f358d](http://testnet.etherscan.io/tx/0xefb8a763eea4f6d917904198820ca30b449ebd624fb8ca07ba1661a9813f358d)
* [0xe1e6cf9a7da0958122ec566a7b4a3ff85a5a8be54a8b0d9f4d02f0b3044ab239](http://testnet.etherscan.io/tx/0xe1e6cf9a7da0958122ec566a7b4a3ff85a5a8be54a8b0d9f4d02f0b3044ab239)
* [0xccdfd0c0a3d2624c97a044ba79dcbd0bc938edafb658fe2b0d499269c8bcaadd](http://testnet.etherscan.io/tx/0xccdfd0c0a3d2624c97a044ba79dcbd0bc938edafb658fe2b0d499269c8bcaadd)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x3d1c920c536169a06b3784f96dd42231523144eb
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x3dcb85dc6def4e13c37a05df274a1dfa8e58d24430203cf1e8eac882275304c9](http://testnet.etherscan.io/tx/0x3dcb85dc6def4e13c37a05df274a1dfa8e58d24430203cf1e8eac882275304c9)
* [0x3b9017c40f02a768440d66f5abf7b84affe77bbe4ea288d6e086a7695c75395e](http://testnet.etherscan.io/tx/0x3b9017c40f02a768440d66f5abf7b84affe77bbe4ea288d6e086a7695c75395e)
* [0xeed02baa9cb37692cb0316afdc965cbeadd8b297165426f2ef2be294b1c82a36](http://testnet.etherscan.io/tx/0xeed02baa9cb37692cb0316afdc965cbeadd8b297165426f2ef2be294b1c82a36)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x52b267b6ca04fba89fd7e15833b389a5e466dd18
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x966617bada87ddffc10d45ded336f3bd301c7fe2ef340607acb97292434b8837](http://testnet.etherscan.io/tx/0x966617bada87ddffc10d45ded336f3bd301c7fe2ef340607acb97292434b8837)
* [0x3abe27e0715eb20e55f0bbec5e77637dbf2b860039993c090b99a36a9bd9e324](http://testnet.etherscan.io/tx/0x3abe27e0715eb20e55f0bbec5e77637dbf2b860039993c090b99a36a9bd9e324)
* [0x9415b786793d17b35eac4394a361af5885b65ca5d1a0538c9d80b750834df8dc](http://testnet.etherscan.io/tx/0x9415b786793d17b35eac4394a361af5885b65ca5d1a0538c9d80b750834df8dc)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xf82fb7500a07484f0af1f839995a8bd50ec36c20
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x21d480e04e0706b2e203f0f4a09c3cbedf5c58703b78918d89f7b1e9fca3bd64](http://testnet.etherscan.io/tx/0x21d480e04e0706b2e203f0f4a09c3cbedf5c58703b78918d89f7b1e9fca3bd64)
* [0x0003148036ae07bf0721b635dac8d7a1fe28cc0f447143cece31de1f8161ec77](http://testnet.etherscan.io/tx/0x0003148036ae07bf0721b635dac8d7a1fe28cc0f447143cece31de1f8161ec77)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x57a2738a1e2dd55975904be1ad33892fe8526f0f
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xa4970399a43ffabe1b55c7e961f9d6b16c4540df9ea069ffb0fc2d49437a0c2b](http://testnet.etherscan.io/tx/0xa4970399a43ffabe1b55c7e961f9d6b16c4540df9ea069ffb0fc2d49437a0c2b)
* [0x1e1a99348c649bfc9c2f8622142da54ba417de2e5d911a8e9b343e0426383645](http://testnet.etherscan.io/tx/0x1e1a99348c649bfc9c2f8622142da54ba417de2e5d911a8e9b343e0426383645)
* [0x7a2791bf182b21d46131d444d180104910408bc4bca76ca054563c3e7dbfe18c](http://testnet.etherscan.io/tx/0x7a2791bf182b21d46131d444d180104910408bc4bca76ca054563c3e7dbfe18c)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x947d612a6ba639c621b7ce77eafb4e7326ef6c9f

##### Transactions Generated

* [0xaca5c3bab926c60d9a4b2710d06553bc6de0b453d967c05505acef4e7ff34ce6](http://testnet.etherscan.io/tx/0xaca5c3bab926c60d9a4b2710d06553bc6de0b453d967c05505acef4e7ff34ce6)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x48a274ebfb2791095bae8c8232d06e60c7825b33
* created instance of contract DTRExpensiveWallet at 0xf70d3a8b72dd29189dbdcd044094286c9fbcc0a4
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0xacd3c74bbc7b96c06d862f7878a65c0dee333229ef01b35df839e0ae20bdcfdd](http://testnet.etherscan.io/tx/0xacd3c74bbc7b96c06d862f7878a65c0dee333229ef01b35df839e0ae20bdcfdd)
* [0x8d84e5e47046907ba7eb6f9c9e3b69097c603b55fa6e988bdade8af829e3b96f](http://testnet.etherscan.io/tx/0x8d84e5e47046907ba7eb6f9c9e3b69097c603b55fa6e988bdade8af829e3b96f)
* [0x5b23fb3418c47f44db719a1fe6aba47decd883684d4e6ceb0ab4335bb1ab1aaa](http://testnet.etherscan.io/tx/0x5b23fb3418c47f44db719a1fe6aba47decd883684d4e6ceb0ab4335bb1ab1aaa)

##### Contract Events

* WalletCreated(by=0x0f73050a531407ea03e4f896365b7ac866e5db65,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x48a274ebfb2791095bae8c8232d06e60c7825b33,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb8f5de939c0935f75c875f9b1f79bcc6942ba869
* created instance of contract DTRExpensiveWallet at 0xf7c6d091cf4cb91dc304370a7e5f8b76663dd1d5
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x86c7f9b16533eead14f8ac0c4d54c30024b7716b8aae77295b2ad54a429e83b6](http://testnet.etherscan.io/tx/0x86c7f9b16533eead14f8ac0c4d54c30024b7716b8aae77295b2ad54a429e83b6)
* [0xba8991eb55577c26fd63ec46f6d9683b5db3c3e8537cd5e4949690f4207743fd](http://testnet.etherscan.io/tx/0xba8991eb55577c26fd63ec46f6d9683b5db3c3e8537cd5e4949690f4207743fd)
* [0x5c2e8cdd2c90aad7fbac8e7fbe3f61a8d1cae3b89a22db1d5891319afdd16643](http://testnet.etherscan.io/tx/0x5c2e8cdd2c90aad7fbac8e7fbe3f61a8d1cae3b89a22db1d5891319afdd16643)
* [0xf2ab765b1447a0924afe109fdd6f3cb8c62222864f2fe362d902644fd9a5580b](http://testnet.etherscan.io/tx/0xf2ab765b1447a0924afe109fdd6f3cb8c62222864f2fe362d902644fd9a5580b)

##### Contract Events

* WalletCreated(by=0x5845ebff39c116f6634337b867bd32ab4d74c193,)
* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xb8f5de939c0935f75c875f9b1f79bcc6942ba869,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2fc97c9f60985fb03da0b1159b9b0783d3c257c7
* created instance of contract DTRExpensiveWallet at 0x875c245aec52c934b60493f45e14211c50e13d0c
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x22260a67ac8ce60a7e8e9e723fff6ebb9b1454fa45b1ff9933d0e6044bfd9cb3](http://testnet.etherscan.io/tx/0x22260a67ac8ce60a7e8e9e723fff6ebb9b1454fa45b1ff9933d0e6044bfd9cb3)
* [0xd16aa6193cfbe00aae23775bef99b94bb2a42586445f80206dcdd942dbb17fd3](http://testnet.etherscan.io/tx/0xd16aa6193cfbe00aae23775bef99b94bb2a42586445f80206dcdd942dbb17fd3)
* [0x480540135fd84b16652730faf86a2febfc0b6014807cb9d79ba7b5be7213ca00](http://testnet.etherscan.io/tx/0x480540135fd84b16652730faf86a2febfc0b6014807cb9d79ba7b5be7213ca00)
* [0x5eb2a904763375c49b4373ca591845fc9d4ae96ccaa4efe9f29bace2125c0bf1](http://testnet.etherscan.io/tx/0x5eb2a904763375c49b4373ca591845fc9d4ae96ccaa4efe9f29bace2125c0bf1)

##### Contract Events

* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x2fc97c9f60985fb03da0b1159b9b0783d3c257c7,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x2fc97c9f60985fb03da0b1159b9b0783d3c257c7,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xab488f103dac796e1c5a440c0b72a3baac8f8c2c
* created instance of contract DTRExpensiveWallet at 0x1617770a264ab0a853fa5ca345563678e35170e9
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x6b4e138e977d8bdf8436e875b8ae3d9594b82a65585dfa55552262e858208c2d](http://testnet.etherscan.io/tx/0x6b4e138e977d8bdf8436e875b8ae3d9594b82a65585dfa55552262e858208c2d)
* [0x454ff2e83a883e229d7d446ab778771a0d7045a264cd4677ef057167ef632e5e](http://testnet.etherscan.io/tx/0x454ff2e83a883e229d7d446ab778771a0d7045a264cd4677ef057167ef632e5e)
* [0xafea7364dc163644427a6cedf2d7d43a57992fd813ee19e197e488e5403d6b26](http://testnet.etherscan.io/tx/0xafea7364dc163644427a6cedf2d7d43a57992fd813ee19e197e488e5403d6b26)
* [0x8af1c6f028a7d30f33ca3922e151818196158fa9de98385a28b3d0ac9478bf08](http://testnet.etherscan.io/tx/0x8af1c6f028a7d30f33ca3922e151818196158fa9de98385a28b3d0ac9478bf08)
* [0xda15a484d78b44ea8f8009d9557904d3e2c45a6d2f0773c064644dca0112625c](http://testnet.etherscan.io/tx/0xda15a484d78b44ea8f8009d9557904d3e2c45a6d2f0773c064644dca0112625c)

##### Contract Events

* WalletCreated(by=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,)
* DepositMade(from=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,value=1000000000000000000,)
* DepositMade(from=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xab488f103dac796e1c5a440c0b72a3baac8f8c2c,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,value=1470000000000000000,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2de8cff57ef8e79d3d0312a901dd3aead1b38981
* created instance of contract DTRExpensiveWallet at 0x70e32c6ec72a947be8413821431a13fe2535dd60
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0xfe210386ba6388cf2e39febd663674ed45526f5a81548d50ac1309c648da62d3](http://testnet.etherscan.io/tx/0xfe210386ba6388cf2e39febd663674ed45526f5a81548d50ac1309c648da62d3)
* [0xe2d3a12d097ada049d919f27d49d1cc2ae46d6d97b06b286dcc654fad1169ead](http://testnet.etherscan.io/tx/0xe2d3a12d097ada049d919f27d49d1cc2ae46d6d97b06b286dcc654fad1169ead)
* [0x16d3db998ec213ee5d16941be1a0b67491bbb9aa9d79758e6299c3a67fa6b12e](http://testnet.etherscan.io/tx/0x16d3db998ec213ee5d16941be1a0b67491bbb9aa9d79758e6299c3a67fa6b12e)
* [0x5bee09d693a60d29033328452ee93280a643441713a596eeb536b30dd450a835](http://testnet.etherscan.io/tx/0x5bee09d693a60d29033328452ee93280a643441713a596eeb536b30dd450a835)
* [0x349edbd5f647533aba7757fbb0d1bfdc96538eea944497dbb41e136e8970e406](http://testnet.etherscan.io/tx/0x349edbd5f647533aba7757fbb0d1bfdc96538eea944497dbb41e136e8970e406)

##### Contract Events

* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x2de8cff57ef8e79d3d0312a901dd3aead1b38981,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Cannot successfully resend failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xdab5e0c6ce2d6953be42c22d89d0b179debda057
* created instance of contract DTRExpensiveWallet at 0x58d772be419d7c07631c6406c1e9a4b06d69aed5
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0xf03cf58f46f6b1f3ed1a44340f4439406366699620f4ee962a63be8f3ffffe11](http://testnet.etherscan.io/tx/0xf03cf58f46f6b1f3ed1a44340f4439406366699620f4ee962a63be8f3ffffe11)
* [0x49e1060d27186b10967608bcb2e80786c3a3fdc9f8e76a89ee9159587f46944d](http://testnet.etherscan.io/tx/0x49e1060d27186b10967608bcb2e80786c3a3fdc9f8e76a89ee9159587f46944d)
* [0xe7d447cb5d618357b05a9b742e04ff9f49d96ace62601d3bf9d8539706d40c05](http://testnet.etherscan.io/tx/0xe7d447cb5d618357b05a9b742e04ff9f49d96ace62601d3bf9d8539706d40c05)
* [0x403730a90ffa273ddfc176e67e8da5bf0f95ba2a06946db2af0f9d1c0ab753fa](http://testnet.etherscan.io/tx/0x403730a90ffa273ddfc176e67e8da5bf0f95ba2a06946db2af0f9d1c0ab753fa)
* [0x548340d49e3ac5baa335258ab747113fe56cf594c92291a820fa8ad0ecb45151](http://testnet.etherscan.io/tx/0x548340d49e3ac5baa335258ab747113fe56cf594c92291a820fa8ad0ecb45151)
* [0x1afa0d6df14b1c64317189abc36964dc50c824eb9e59db84671d16aa2f0dd00c](http://testnet.etherscan.io/tx/0x1afa0d6df14b1c64317189abc36964dc50c824eb9e59db84671d16aa2f0dd00c)

##### Contract Events

* WalletCreated(by=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xdab5e0c6ce2d6953be42c22d89d0b179debda057,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,value=1470000000000000000,)

### Test - "Cannot void failed compensation payment before failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x9e8e3d6f7ba3b4d189cb91983924edd7f86fa6d5
* created instance of contract DTRExpensiveWallet at 0x485da514dc38dbdad9096048f63b16b8bd3ca716
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0x5ecc6c45fddbd1baa48b9fcf18a13f86368a316aa87f6810e54105164bc94052](http://testnet.etherscan.io/tx/0x5ecc6c45fddbd1baa48b9fcf18a13f86368a316aa87f6810e54105164bc94052)
* [0xaff49e7d1243452f81e39c54d6f53a32c1877e0fe70293de8edaeda95d25b827](http://testnet.etherscan.io/tx/0xaff49e7d1243452f81e39c54d6f53a32c1877e0fe70293de8edaeda95d25b827)
* [0xe153266b12fbcb1be79f675f5c5422353808d6a21534fce750d7ba9f218705a2](http://testnet.etherscan.io/tx/0xe153266b12fbcb1be79f675f5c5422353808d6a21534fce750d7ba9f218705a2)
* [0xad67bd33ce33c73883c9ebe09e7be8eafbfc0068c5a78095054734a9ce66633b](http://testnet.etherscan.io/tx/0xad67bd33ce33c73883c9ebe09e7be8eafbfc0068c5a78095054734a9ce66633b)
* [0x755e74cdf0f5078cfb5c6e8bde0fc4aca927fda7aabcc998ac966d8e5568d191](http://testnet.etherscan.io/tx/0x755e74cdf0f5078cfb5c6e8bde0fc4aca927fda7aabcc998ac966d8e5568d191)

##### Contract Events

* WalletCreated(by=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,)
* DepositMade(from=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x9e8e3d6f7ba3b4d189cb91983924edd7f86fa6d5,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Can void failed compensation payment after failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xddf5ac7d270fa2f920f5a5d790b578958061dbca
* created instance of contract DTRExpensiveWallet at 0x19c62f48f8c9644017ee57b30bc188d7e7183040
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0x87e85eab3f9b97d59fef301d2872c6b468755223ddde778d1d2aff70317b5550](http://testnet.etherscan.io/tx/0x87e85eab3f9b97d59fef301d2872c6b468755223ddde778d1d2aff70317b5550)
* [0xd290e3c73c761a95cfd5d07461cddc3d75853e23d845a20840f8582a8870cb2f](http://testnet.etherscan.io/tx/0xd290e3c73c761a95cfd5d07461cddc3d75853e23d845a20840f8582a8870cb2f)
* [0x9f9e79e96c11440f805e7141f31819707f048e3302bee54b00cd27f36e0723eb](http://testnet.etherscan.io/tx/0x9f9e79e96c11440f805e7141f31819707f048e3302bee54b00cd27f36e0723eb)
* [0xea33f7ac9749c515849f4c40c0ad08dc95ea86b6cf5eedb0dc45d9e1d941c8de](http://testnet.etherscan.io/tx/0xea33f7ac9749c515849f4c40c0ad08dc95ea86b6cf5eedb0dc45d9e1d941c8de)
* [0x902d1de7618854102a5c23f0b3ea295f2fbbafc93fc037560cc1d199f1bffd58](http://testnet.etherscan.io/tx/0x902d1de7618854102a5c23f0b3ea295f2fbbafc93fc037560cc1d199f1bffd58)

##### Contract Events

* WalletCreated(by=0x0f73050a531407ea03e4f896365b7ac866e5db65,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xddf5ac7d270fa2f920f5a5d790b578958061dbca,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Cannot void a failed compensation payment twice"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xd7eaebfccafc576d831e982dec9333661bddfd14
* created instance of contract DTRExpensiveWallet at 0xd6ca5c2fe34b98f33e8c9b664fbb58616513f452
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.voidFailedPayment
* called contract function KingOfTheEtherThrone.voidFailedPayment

##### Transactions Generated

* [0xc1aa4e8c42d1f910ad95580c1010c1528ad624ac8e8341aa7f453a05d6115470](http://testnet.etherscan.io/tx/0xc1aa4e8c42d1f910ad95580c1010c1528ad624ac8e8341aa7f453a05d6115470)
* [0xd0df5b405cfeb7633f71bea67030c2a5b8ff0e9b18f74ce5a1904b1ca08c4d67](http://testnet.etherscan.io/tx/0xd0df5b405cfeb7633f71bea67030c2a5b8ff0e9b18f74ce5a1904b1ca08c4d67)
* [0x68bcb731ba46c5a320aca9ce9b8a7357198e53f9785d19ecb2cb9a85de764706](http://testnet.etherscan.io/tx/0x68bcb731ba46c5a320aca9ce9b8a7357198e53f9785d19ecb2cb9a85de764706)
* [0x48e29bc19485e48712513ec9bf1c2d62aae9bedea3fc16ceed78c6264b21e773](http://testnet.etherscan.io/tx/0x48e29bc19485e48712513ec9bf1c2d62aae9bedea3fc16ceed78c6264b21e773)
* [0x337e66ad84f00bd2d9441846070bd30d3b4886ee877e003815888e036f6dfbb2](http://testnet.etherscan.io/tx/0x337e66ad84f00bd2d9441846070bd30d3b4886ee877e003815888e036f6dfbb2)
* [0x5ef19268875bff661fab777cfee2c9670faeca1d234756d05f32baf1075be250](http://testnet.etherscan.io/tx/0x5ef19268875bff661fab777cfee2c9670faeca1d234756d05f32baf1075be250)

##### Contract Events

* WalletCreated(by=0x5845ebff39c116f6634337b867bd32ab4d74c193,)
* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xd7eaebfccafc576d831e982dec9333661bddfd14,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Dead monarchs not compensated and cannot resend"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xac5c89e56a7eff92a589e5ce7323946915f530c3
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0xdcb036733516d9df5e93a038761f2145c18f3271de1a158097cdbc2d9ea2a214](http://testnet.etherscan.io/tx/0xdcb036733516d9df5e93a038761f2145c18f3271de1a158097cdbc2d9ea2a214)
* [0xfb73418e1531c0b199cad71e2a84584f4ffdc1576661573df9696ce2b81bc5e7](http://testnet.etherscan.io/tx/0xfb73418e1531c0b199cad71e2a84584f4ffdc1576661573df9696ce2b81bc5e7)
* [0x315a8317c2f74172b797320d1f572f4cad842950ca1837c6a2d91bf51f87f804](http://testnet.etherscan.io/tx/0x315a8317c2f74172b797320d1f572f4cad842950ca1837c6a2d91bf51f87f804)
* [0x71d1bb2a803cd20c4dba52caed4675be47e66ce74d0652320b47e288cfb64bba](http://testnet.etherscan.io/tx/0x71d1bb2a803cd20c4dba52caed4675be47e66ce74d0652320b47e288cfb64bba)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x37ffc2d881c1a96d66283b8c19733eb8a61db9ef
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0xc8af5307992c1f57b534c4e684b653bd95e37c09,200000000000000000,1461189640
* gazetteerEntry is  [object Object]
* myThroneAddress is  0xc8af5307992c1f57b534c4e684b653bd95e37c09
* created instance of contract KingOfTheEtherThrone at 0xc8af5307992c1f57b534c4e684b653bd95e37c09
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xe3b2ebd797d5bb734df595f587bae8f782479e1361d73b31b3eb0c5cfbd688af](http://testnet.etherscan.io/tx/0xe3b2ebd797d5bb734df595f587bae8f782479e1361d73b31b3eb0c5cfbd688af)
* [0x38bd74d6f54b9b6b70f4f788195cc13be8ef3633d6809b832259355ce791aedf](http://testnet.etherscan.io/tx/0x38bd74d6f54b9b6b70f4f788195cc13be8ef3633d6809b832259355ce791aedf)
* [0x00d5cc6e775d8aa848d0b364c50b489fe6d2c27b19fccc7ac6456e1c91a2e32c](http://testnet.etherscan.io/tx/0x00d5cc6e775d8aa848d0b364c50b489fe6d2c27b19fccc7ac6456e1c91a2e32c)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x59caa604330677f74f8651a727bd23db980c0a49
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x1bd651be08df0ab05dc119b6475832277119e39175a317cadc2958afb0d3a96b](http://testnet.etherscan.io/tx/0x1bd651be08df0ab05dc119b6475832277119e39175a317cadc2958afb0d3a96b)
* [0xa5e2f553cc9c9181359e909dc59edb59549af262be926d3f4709a417be6fc5fe](http://testnet.etherscan.io/tx/0xa5e2f553cc9c9181359e909dc59edb59549af262be926d3f4709a417be6fc5fe)
* [0x591a374865af5b21db911583a28dc1cf2c89985cf5f6c0cf6671d070769af457](http://testnet.etherscan.io/tx/0x591a374865af5b21db911583a28dc1cf2c89985cf5f6c0cf6671d070769af457)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x4fbab9f613d992d21134d4370e5e7cf19b37c549
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x5a899a8a8b1dae1d3051c4aebb0e46f1ae5a551bd9b2dd4916365bdb3eaec96e](http://testnet.etherscan.io/tx/0x5a899a8a8b1dae1d3051c4aebb0e46f1ae5a551bd9b2dd4916365bdb3eaec96e)
* [0x82571c0dc245fd014630daf09ddbb68e8b0b544c6e836142f0db89b1036f636e](http://testnet.etherscan.io/tx/0x82571c0dc245fd014630daf09ddbb68e8b0b544c6e836142f0db89b1036f636e)
* [0x9df5474fbd29b863bf4667c6344c46790f49a694916952e2dbbb9cfc94b77578](http://testnet.etherscan.io/tx/0x9df5474fbd29b863bf4667c6344c46790f49a694916952e2dbbb9cfc94b77578)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x9dbd456e4471cec70d4cdcf81e1f4c04218c7067
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x1ef66142f4d28fbdb03712f81852a8257dea361c
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x7e9d5a3478e24f136c746fd5e1e223d1f53aa60c
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x8e14c1586048ecc2491d6f6645eb36a1f2ae9453b94cf9e4aba7cca8c89855cf](http://testnet.etherscan.io/tx/0x8e14c1586048ecc2491d6f6645eb36a1f2ae9453b94cf9e4aba7cca8c89855cf)
* [0xa3790983d92ed5e81374a5d322eb52c52e2225cfeaa9243649f1e02f951a875c](http://testnet.etherscan.io/tx/0xa3790983d92ed5e81374a5d322eb52c52e2225cfeaa9243649f1e02f951a875c)
* [0x815be9f8f06086aa2c7875a5ad383b52d301f9ae8edd343ac3d015c698fbc2bb](http://testnet.etherscan.io/tx/0x815be9f8f06086aa2c7875a5ad383b52d301f9ae8edd343ac3d015c698fbc2bb)
* [0xf23067ea8ba927f6510fd8cba32d152990f4c6a287a8d1f7f17cb46de4a07602](http://testnet.etherscan.io/tx/0xf23067ea8ba927f6510fd8cba32d152990f4c6a287a8d1f7f17cb46de4a07602)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Deity can change throne creation price"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x2bc6c0702ac31e3fc7eb070b1929924e5db1ead9
* called contract function ThroneMaker.setThroneCreationPrice
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0x7eb42154ab62a73cd79a53291cf85ce895ec8434356ca91cb9372c6c250b743c](http://testnet.etherscan.io/tx/0x7eb42154ab62a73cd79a53291cf85ce895ec8434356ca91cb9372c6c250b743c)
* [0xe7946d3a908bb2ff377a8df4735381099c347cc49ebf40fff1b6509be353d3f6](http://testnet.etherscan.io/tx/0xe7946d3a908bb2ff377a8df4735381099c347cc49ebf40fff1b6509be353d3f6)
* [0x1befcb15acbd628c7554b3768ad5054ff143670bd31c3a796baacad3f6554dad](http://testnet.etherscan.io/tx/0x1befcb15acbd628c7554b3768ad5054ff143670bd31c3a796baacad3f6554dad)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=0,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Deity can sweep throne creation fees"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x8a6cffb26b2997a738f7e7ab73a240b34cf90a2e
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.sweepDeityCommission

##### Transactions Generated

* [0x1e494d109897845f7f20768b84930e101061553fc9d2a14e7f1189bec1390061](http://testnet.etherscan.io/tx/0x1e494d109897845f7f20768b84930e101061553fc9d2a14e7f1189bec1390061)
* [0xb94fef4881f5e54449b6fd01771fb7781eb4b89e1572e1f76593710c8fe5312a](http://testnet.etherscan.io/tx/0xb94fef4881f5e54449b6fd01771fb7781eb4b89e1572e1f76593710c8fe5312a)
* [0x0a01a79bf683ede6295b9ca7b4220e20089d8f891889b5eda69fb6e42d887b8b](http://testnet.etherscan.io/tx/0x0a01a79bf683ede6295b9ca7b4220e20089d8f891889b5eda69fb6e42d887b8b)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* DeityCommissionSwept(toDeityAddress=0x92706ae27208ef4bc360254a0b0c7c2079b21599,amount=200000000000000000,)

### Test - "Can validate proposed throne before creating it"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x4fe824462062a46acc2b911ccee30b56ac6b2598

##### Transactions Generated

* [0x54f2372fff4d74fb42ef16c275637d8498ef39139fb565f9a45783b3a4e72c3c](http://testnet.etherscan.io/tx/0x54f2372fff4d74fb42ef16c275637d8498ef39139fb565f9a45783b3a4e72c3c)

### Test - "Non-wizards cannot take wizard comission"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x68888bf3bba157891f081191b09b24a1e9e0f87b
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.sweepWizardCommission
* called contract function KingOfTheEtherThrone.sweepWizardCommission
* called contract function KingOfTheEtherThrone.sweepWizardCommission
* called contract function KingOfTheEtherThrone.sweepWizardCommission

##### Transactions Generated

* [0xbce06350ff61cafb889ab21336d6b01344cfc40757791b6a19372726753d782a](http://testnet.etherscan.io/tx/0xbce06350ff61cafb889ab21336d6b01344cfc40757791b6a19372726753d782a)
* [0x9c0c8163061d2ecc662bb70889257b9f36b8f20758a1afddbafb8a033983e102](http://testnet.etherscan.io/tx/0x9c0c8163061d2ecc662bb70889257b9f36b8f20758a1afddbafb8a033983e102)
* [0xb1727aef91b2131e99735c14b742940d1165321206d822633dd8a8d99c5e9b28](http://testnet.etherscan.io/tx/0xb1727aef91b2131e99735c14b742940d1165321206d822633dd8a8d99c5e9b28)
* [0x344a7f095f2217a766712cd204c889d78a7c47a8d5917e5d24d170774f5f51df](http://testnet.etherscan.io/tx/0x344a7f095f2217a766712cd204c889d78a7c47a8d5917e5d24d170774f5f51df)
* [0x1d4212b1a4a346c0ad83885d76c86b9dfdf41c99c2838fce9dcb12a41b16c053](http://testnet.etherscan.io/tx/0x1d4212b1a4a346c0ad83885d76c86b9dfdf41c99c2838fce9dcb12a41b16c053)
* [0xf56348e4561e3f751227f7dca0806d1a20759011da4351971916c3380f5513c8](http://testnet.etherscan.io/tx/0xf56348e4561e3f751227f7dca0806d1a20759011da4351971916c3380f5513c8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WizardCommissionSwept(toWizardAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,amount=500000000000000000,)

### Test - "Non-deity cannot take deity comission"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb2ec5f81539fa03955eaae2d07ccf2fab58e83a5
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.sweepDeityCommission
* called contract function KingOfTheEtherThrone.sweepDeityCommission
* called contract function KingOfTheEtherThrone.sweepDeityCommission
* called contract function KingOfTheEtherThrone.sweepDeityCommission

##### Transactions Generated

* [0x527eafe24829eb3d18e73b187b07df918ff56587421cfca13e936c89aef5f9f3](http://testnet.etherscan.io/tx/0x527eafe24829eb3d18e73b187b07df918ff56587421cfca13e936c89aef5f9f3)
* [0x395f2ba8a7ee14bfea6bd0ec66e9c65439a1ee56ff9788f0491d892516c84da3](http://testnet.etherscan.io/tx/0x395f2ba8a7ee14bfea6bd0ec66e9c65439a1ee56ff9788f0491d892516c84da3)
* [0x40a98bd60ff3fcd9625fb8a9c664bf11f9fa879478d03fc684177b84958f5b92](http://testnet.etherscan.io/tx/0x40a98bd60ff3fcd9625fb8a9c664bf11f9fa879478d03fc684177b84958f5b92)
* [0x1e5322078d93619b31d71eedbf35ef8fcceeb17cd9528fc4c38d4aa63bfc1758](http://testnet.etherscan.io/tx/0x1e5322078d93619b31d71eedbf35ef8fcceeb17cd9528fc4c38d4aa63bfc1758)
* [0x6617cc8945f5729b91aecfc8a47422679ce8e2584958ba2c7c432943816d9911](http://testnet.etherscan.io/tx/0x6617cc8945f5729b91aecfc8a47422679ce8e2584958ba2c7c432943816d9911)
* [0xc0db28ae3cf3420fbe7b161a40008905fbb49e53bfdc8ea7662046cf6e6f6266](http://testnet.etherscan.io/tx/0xc0db28ae3cf3420fbe7b161a40008905fbb49e53bfdc8ea7662046cf6e6f6266)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* DeityCommissionSwept(toDeityAddress=0x96384d8ee4275db3d9ff753ab0af81f431adb892,amount=500000000000000000,)

### Test - "Non-wizard cannot transfer wizard-ship"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x21c478a36242b889d3dacfc7aa051033140082dc
* called contract function KingOfTheEtherThrone.switchWizard
* called contract function KingOfTheEtherThrone.switchWizard
* called contract function KingOfTheEtherThrone.switchWizard
* called contract function KingOfTheEtherThrone.switchWizard
* called contract function KingOfTheEtherThrone.switchWizard

##### Transactions Generated

* [0x467bba61f164a4a7b3b21a4c9fafd3d1d53713112e5704cf35710def76159f37](http://testnet.etherscan.io/tx/0x467bba61f164a4a7b3b21a4c9fafd3d1d53713112e5704cf35710def76159f37)
* [0x9a73d814c87b5cdca38f856ce5e0842c2d8a87ad305dee0a79af62a6794450d3](http://testnet.etherscan.io/tx/0x9a73d814c87b5cdca38f856ce5e0842c2d8a87ad305dee0a79af62a6794450d3)
* [0xf7fdbf257f1bd05cc06bb346590054e2918a45accb86a843e004452ebb6eb8d9](http://testnet.etherscan.io/tx/0xf7fdbf257f1bd05cc06bb346590054e2918a45accb86a843e004452ebb6eb8d9)
* [0x672539143623e14dee913a68a7f2f4741ede623fb1d2a3b4c8aa371236cdd7c4](http://testnet.etherscan.io/tx/0x672539143623e14dee913a68a7f2f4741ede623fb1d2a3b4c8aa371236cdd7c4)
* [0x7656f8518d73b55f387c6a6dac23bc6eb59795f2245d13e43f02df991f084a03](http://testnet.etherscan.io/tx/0x7656f8518d73b55f387c6a6dac23bc6eb59795f2245d13e43f02df991f084a03)
* [0x3fad6bf8d2ee32dc3110592307490501163f58868b3c1687ab10964954f91867](http://testnet.etherscan.io/tx/0x3fad6bf8d2ee32dc3110592307490501163f58868b3c1687ab10964954f91867)

##### Contract Events

* WizardSwitched(newWizardAddress=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,)
* WizardSwitched(newWizardAddress=0x1c222d814acc0fb170781ab43021957038c0995b,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x918b7f53bed06eec06210726a52ee9cfa9f3c999

##### Transactions Generated

* [0x702c8911a84a8eaee38c6dcd64728184c2dcad0a1160f8876cce590350f6cfab](http://testnet.etherscan.io/tx/0x702c8911a84a8eaee38c6dcd64728184c2dcad0a1160f8876cce590350f6cfab)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0xd473a431b49603e4202a2c14118128208a4b4f7a

##### Transactions Generated

* [0x037fa03d16a06f9d5788eee149b1bbd4727c041d6610bb4f629acf745bba15c5](http://testnet.etherscan.io/tx/0x037fa03d16a06f9d5788eee149b1bbd4727c041d6610bb4f629acf745bba15c5)

### Test - "Money Rounding"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x0e278882e55a5e3e16eeac6c45d96e83e29e20c0

##### Transactions Generated

* [0x51d89a658378f750230bfd5e538d9f61da490ddcc613d8359041435fa3ccc5ce](http://testnet.etherscan.io/tx/0x51d89a658378f750230bfd5e538d9f61da490ddcc613d8359041435fa3ccc5ce)

