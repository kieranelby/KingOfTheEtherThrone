# "King of the Ether Throne" Report

Generated at 2016-03-30T21:54:35.508Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 23
* Tests skipped: 21
* Tests passed: 2
* Tests failed: 0

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

Skipped

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Skipped

### Test - "Hall of Monarchs after Second Claim"

##### Status

Skipped

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Skipped

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Skipped

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Skipped

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Skipped

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Skipped

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x1b0f95999b20f4075c8d14cc67a0abb27c8dbcae
* created instance of contract DTRExpensiveWallet at 0x0bb4e99bd5c4364cfbcb9058297faddc1dcd348a
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xcf7c4aa331228674a23917df5c0ba3b25f997adc260be1f483ca0361168084c1](http://testnet.etherscan.io/tx/0xcf7c4aa331228674a23917df5c0ba3b25f997adc260be1f483ca0361168084c1)
* [0x2f72f89b847d72928e39b6bb88772bdc1423c0f4fb7cf12995cdfdd4f25c0f90](http://testnet.etherscan.io/tx/0x2f72f89b847d72928e39b6bb88772bdc1423c0f4fb7cf12995cdfdd4f25c0f90)
* [0xc0eccf1892a6ce8e64ef5fce9708cbe7d1ed6ab033f44fc0d39f853dba67c8ba](http://testnet.etherscan.io/tx/0xc0eccf1892a6ce8e64ef5fce9708cbe7d1ed6ab033f44fc0d39f853dba67c8ba)
* [0xc1b5b3f1621a22ddb0ef583ebdbcac9ba7666ccac2a05421824f6d0b0cd5ccd0](http://testnet.etherscan.io/tx/0xc1b5b3f1621a22ddb0ef583ebdbcac9ba7666ccac2a05421824f6d0b0cd5ccd0)

##### Contract Events

* WalletCreated(by=0x0f73050a531407ea03e4f896365b7ac866e5db65,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x1b0f95999b20f4075c8d14cc67a0abb27c8dbcae,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x51c04f581cd35d7109c4307c9d57ed4106bfe0a8
* created instance of contract DTRExpensiveWallet at 0xb5354cb5173321b99315afe167669d7033034a12
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.resendFailedPayment

##### Transactions Generated

* [0x39985b9f4fb81a77b3b0d381c9ec5467e2566b8bcf863ebff01471de854395af](http://testnet.etherscan.io/tx/0x39985b9f4fb81a77b3b0d381c9ec5467e2566b8bcf863ebff01471de854395af)
* [0x3a83da573a59e140da649d29f14f334d62edfba8019a0ef127f8d70add4c5e0f](http://testnet.etherscan.io/tx/0x3a83da573a59e140da649d29f14f334d62edfba8019a0ef127f8d70add4c5e0f)
* [0x933ae3f807692edc698b6b751d57181bb2cb056f97762907c6f5e4098772b699](http://testnet.etherscan.io/tx/0x933ae3f807692edc698b6b751d57181bb2cb056f97762907c6f5e4098772b699)
* [0x30958557da58adcd7adeeef349d5c8c7e881fecbdf8bcda44624228c6c764fe9](http://testnet.etherscan.io/tx/0x30958557da58adcd7adeeef349d5c8c7e881fecbdf8bcda44624228c6c764fe9)
* [0x038f11693cfe0f7528ac6bff1e8bfde601abd1ab47099cc771d173cdada3ee89](http://testnet.etherscan.io/tx/0x038f11693cfe0f7528ac6bff1e8bfde601abd1ab47099cc771d173cdada3ee89)

##### Contract Events

* WalletCreated(by=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x51c04f581cd35d7109c4307c9d57ed4106bfe0a8,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Skipped

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Skipped

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Skipped

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Skipped

### Test - "Name Hashing"

##### Status

Skipped

### Test - "Name Validation"

##### Status

Skipped

