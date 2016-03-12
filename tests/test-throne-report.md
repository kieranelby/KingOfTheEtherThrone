# "King of the Ether Throne Core" Report

Generated at 2016-03-12T23:50:09.321Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 12
* Tests skipped: 10
* Tests passed: 2
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Skipped

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x48aed31e9f4be3c1fb6829782cb1f83781eb2dfe
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x7013e709292cb29ec2da6a2106b593a99e116b5d073287014d13355aa7c27c7b](http://testnet.etherscan.io/tx/0x7013e709292cb29ec2da6a2106b593a99e116b5d073287014d13355aa7c27c7b)
* [0xcaf5cedd45df52c77d8402f02da90f3ac405263176fc80ae00541af745095daa](http://testnet.etherscan.io/tx/0xcaf5cedd45df52c77d8402f02da90f3ac405263176fc80ae00541af745095daa)

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

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb9ee944d55e964ff23422f4ed77813be27569ca1
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xe9c6e0b9684c0dee0307ac322cad4815f5bd74d4784f609dbaec87ed28a9c92a](http://testnet.etherscan.io/tx/0xe9c6e0b9684c0dee0307ac322cad4815f5bd74d4784f609dbaec87ed28a9c92a)
* [0x7baa2b66d2776ea5feffb030e825516e0c0de4c4e13fef9ca4f4575973ad9d98](http://testnet.etherscan.io/tx/0x7baa2b66d2776ea5feffb030e825516e0c0de4c4e13fef9ca4f4575973ad9d98)
* [0x363e6a087c165451c116adc54ea317b23de0baf6a8671837db6f769ef42629d2](http://testnet.etherscan.io/tx/0x363e6a087c165451c116adc54ea317b23de0baf6a8671837db6f769ef42629d2)

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

