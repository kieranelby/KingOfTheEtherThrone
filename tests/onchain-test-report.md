# "King of the Ether Throne" Report

Generated at 2016-07-12T20:49:38.669Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 24
* Tests skipped: 0
* Tests passed: 24
* Tests failed: 0

## Tests

### Test - "Can inspect throne rules"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3ecf2172a7c5256b3ec0981b44b7df0b0d2c12ad477b93e6ae52aab2e7e88273
* txn 0x3ecf2172a7c5256b3ec0981b44b7df0b0d2c12ad477b93e6ae52aab2e7e88273 has been mined on all nodes
* created instance of contract Kingdom at 0xb260355dd674107c803d6cc730069d25615b3689

##### Transactions Generated

* [0x3ecf2172a7c5256b3ec0981b44b7df0b0d2c12ad477b93e6ae52aab2e7e88273](http://testnet.etherscan.io/tx/0x3ecf2172a7c5256b3ec0981b44b7df0b0d2c12ad477b93e6ae52aab2e7e88273)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb7da08f2dd156258c962aa2c2835169f4fd7772e558e8eb894e66d3f3f85bc10
* need to wait for txn 0x9a5041c546b50f023bcb16c410c4010271fe1e9eb61eff6a72b57eeee58d350b
* txn 0xb7da08f2dd156258c962aa2c2835169f4fd7772e558e8eb894e66d3f3f85bc10 has been mined on all nodes
* created instance of contract Kingdom at 0x7e7030a7d543e1952c3a59b4ba31c42b65dab488
* txn 0x9a5041c546b50f023bcb16c410c4010271fe1e9eb61eff6a72b57eeee58d350b has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xdbbf57e2a691dbfadde3744522c26f015dcafa5be01d062b7c8ff6fd1a2c872e
* txn 0xdbbf57e2a691dbfadde3744522c26f015dcafa5be01d062b7c8ff6fd1a2c872e has been mined on all nodes

##### Transactions Generated

* [0xb7da08f2dd156258c962aa2c2835169f4fd7772e558e8eb894e66d3f3f85bc10](http://testnet.etherscan.io/tx/0xb7da08f2dd156258c962aa2c2835169f4fd7772e558e8eb894e66d3f3f85bc10)
* [0x9a5041c546b50f023bcb16c410c4010271fe1e9eb61eff6a72b57eeee58d350b](http://testnet.etherscan.io/tx/0x9a5041c546b50f023bcb16c410c4010271fe1e9eb61eff6a72b57eeee58d350b)
* [0xdbbf57e2a691dbfadde3744522c26f015dcafa5be01d062b7c8ff6fd1a2c872e](http://testnet.etherscan.io/tx/0xdbbf57e2a691dbfadde3744522c26f015dcafa5be01d062b7c8ff6fd1a2c872e)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa286fab921d9814c39595ae67d6e6e5e204f94fa062b413d6c6addb31a86a349
* need to wait for txn 0x2c316751851eab1a159f21bf468dfcc368e0b404ec9f18804e83a167a77d01ac
* txn 0xa286fab921d9814c39595ae67d6e6e5e204f94fa062b413d6c6addb31a86a349 has been mined on all nodes
* created instance of contract Kingdom at 0x63f251a8dfc5191a8d0808f7f5e3f0d066bd9176
* txn 0x2c316751851eab1a159f21bf468dfcc368e0b404ec9f18804e83a167a77d01ac has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x41c46a27a98c6d4f68a36935d135e2f6653646de77f76dd102ec26dbbf84e6c4
* txn 0x41c46a27a98c6d4f68a36935d135e2f6653646de77f76dd102ec26dbbf84e6c4 has been mined on all nodes

##### Transactions Generated

* [0xa286fab921d9814c39595ae67d6e6e5e204f94fa062b413d6c6addb31a86a349](http://testnet.etherscan.io/tx/0xa286fab921d9814c39595ae67d6e6e5e204f94fa062b413d6c6addb31a86a349)
* [0x2c316751851eab1a159f21bf468dfcc368e0b404ec9f18804e83a167a77d01ac](http://testnet.etherscan.io/tx/0x2c316751851eab1a159f21bf468dfcc368e0b404ec9f18804e83a167a77d01ac)
* [0x41c46a27a98c6d4f68a36935d135e2f6653646de77f76dd102ec26dbbf84e6c4](http://testnet.etherscan.io/tx/0x41c46a27a98c6d4f68a36935d135e2f6653646de77f76dd102ec26dbbf84e6c4)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x07ac06898eadb9b8b627a0a4266d2cbc85a7cf7d6a491e16778b01194eda4665
* need to wait for txn 0x091e7cf01b7abd5adf622f4eba2e2eaae9de412deac3cde8cb473c48e4605978
* txn 0x07ac06898eadb9b8b627a0a4266d2cbc85a7cf7d6a491e16778b01194eda4665 has been mined on all nodes
* created instance of contract Kingdom at 0x3bb233fb5e1d1c6d13150b53f9d2acc748f02aab
* txn 0x091e7cf01b7abd5adf622f4eba2e2eaae9de412deac3cde8cb473c48e4605978 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x98ad645ae84711f58f480bea866390d384699a799f91437efa2bcbcfa49fe985
* txn 0x98ad645ae84711f58f480bea866390d384699a799f91437efa2bcbcfa49fe985 has been mined on all nodes

##### Transactions Generated

* [0x07ac06898eadb9b8b627a0a4266d2cbc85a7cf7d6a491e16778b01194eda4665](http://testnet.etherscan.io/tx/0x07ac06898eadb9b8b627a0a4266d2cbc85a7cf7d6a491e16778b01194eda4665)
* [0x091e7cf01b7abd5adf622f4eba2e2eaae9de412deac3cde8cb473c48e4605978](http://testnet.etherscan.io/tx/0x091e7cf01b7abd5adf622f4eba2e2eaae9de412deac3cde8cb473c48e4605978)
* [0x98ad645ae84711f58f480bea866390d384699a799f91437efa2bcbcfa49fe985](http://testnet.etherscan.io/tx/0x98ad645ae84711f58f480bea866390d384699a799f91437efa2bcbcfa49fe985)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x012295d409da267dce7ddb5cc828bb4089f1462f93601361464bbdec441fe9dc
* txn 0x012295d409da267dce7ddb5cc828bb4089f1462f93601361464bbdec441fe9dc has been mined on all nodes
* created instance of contract Kingdom at 0x6e87b068f41e4551d22ea7adbea4c7e5d896ec76

##### Transactions Generated

* [0x012295d409da267dce7ddb5cc828bb4089f1462f93601361464bbdec441fe9dc](http://testnet.etherscan.io/tx/0x012295d409da267dce7ddb5cc828bb4089f1462f93601361464bbdec441fe9dc)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa856b4df51c49959221d914fc16acd439f5b2406ee613243234f9c71235a79b2
* need to wait for txn 0xdc71300b1961e27ce3a71f15a5cc4e2c96d2a6bf821ee281110425684a4730b9
* txn 0xa856b4df51c49959221d914fc16acd439f5b2406ee613243234f9c71235a79b2 has been mined on all nodes
* created instance of contract Kingdom at 0x58af8e38666dbc67462e96f94a671ac326edea1d
* txn 0xdc71300b1961e27ce3a71f15a5cc4e2c96d2a6bf821ee281110425684a4730b9 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x0f2c3c45a2e6f931169ab9f0543246794fa0f3be469f9ea920aa8ee476240bb9
* txn 0x0f2c3c45a2e6f931169ab9f0543246794fa0f3be469f9ea920aa8ee476240bb9 has been mined on all nodes

##### Transactions Generated

* [0xa856b4df51c49959221d914fc16acd439f5b2406ee613243234f9c71235a79b2](http://testnet.etherscan.io/tx/0xa856b4df51c49959221d914fc16acd439f5b2406ee613243234f9c71235a79b2)
* [0xdc71300b1961e27ce3a71f15a5cc4e2c96d2a6bf821ee281110425684a4730b9](http://testnet.etherscan.io/tx/0xdc71300b1961e27ce3a71f15a5cc4e2c96d2a6bf821ee281110425684a4730b9)
* [0x0f2c3c45a2e6f931169ab9f0543246794fa0f3be469f9ea920aa8ee476240bb9](http://testnet.etherscan.io/tx/0x0f2c3c45a2e6f931169ab9f0543246794fa0f3be469f9ea920aa8ee476240bb9)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb4d963deaf1143519728249395fd4a0a20d8b393a27e56a90f6b566bac9c1d89
* need to wait for txn 0x6891a69fa57fc008b58b289d4a77f90c2c6013bb3348d40fd40723107c2d4e2a
* need to wait for txn 0x353ea33bd91040f1cf360c08f7f19928166eda7b7f5c39e318be2158ea242b95
* txn 0xb4d963deaf1143519728249395fd4a0a20d8b393a27e56a90f6b566bac9c1d89 has been mined on all nodes
* txn 0xb4d963deaf1143519728249395fd4a0a20d8b393a27e56a90f6b566bac9c1d89 has been mined on all nodes
* created instance of contract Kingdom at 0x91d69869d1cb2ebf4132e991da2270c73b124813
* txn 0x6891a69fa57fc008b58b289d4a77f90c2c6013bb3348d40fd40723107c2d4e2a has been mined on all nodes
* txn 0x353ea33bd91040f1cf360c08f7f19928166eda7b7f5c39e318be2158ea242b95 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x75baca4be98cbc1d71f2f8d25b1ea3d2c35732635627b27cd058139c1dfdef13
* txn 0x75baca4be98cbc1d71f2f8d25b1ea3d2c35732635627b27cd058139c1dfdef13 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xcf818c86c00b5b2374bb84e4d1417e1722f8e395215f4469291b5b964dbed14a
* txn 0xcf818c86c00b5b2374bb84e4d1417e1722f8e395215f4469291b5b964dbed14a has been mined on all nodes

##### Transactions Generated

* [0xb4d963deaf1143519728249395fd4a0a20d8b393a27e56a90f6b566bac9c1d89](http://testnet.etherscan.io/tx/0xb4d963deaf1143519728249395fd4a0a20d8b393a27e56a90f6b566bac9c1d89)
* [0x6891a69fa57fc008b58b289d4a77f90c2c6013bb3348d40fd40723107c2d4e2a](http://testnet.etherscan.io/tx/0x6891a69fa57fc008b58b289d4a77f90c2c6013bb3348d40fd40723107c2d4e2a)
* [0x353ea33bd91040f1cf360c08f7f19928166eda7b7f5c39e318be2158ea242b95](http://testnet.etherscan.io/tx/0x353ea33bd91040f1cf360c08f7f19928166eda7b7f5c39e318be2158ea242b95)
* [0x75baca4be98cbc1d71f2f8d25b1ea3d2c35732635627b27cd058139c1dfdef13](http://testnet.etherscan.io/tx/0x75baca4be98cbc1d71f2f8d25b1ea3d2c35732635627b27cd058139c1dfdef13)
* [0xcf818c86c00b5b2374bb84e4d1417e1722f8e395215f4469291b5b964dbed14a](http://testnet.etherscan.io/tx/0xcf818c86c00b5b2374bb84e4d1417e1722f8e395215f4469291b5b964dbed14a)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CompensationSentEvent(toAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa5d40bc3985432b83bc5d18517aca940f8a753f9ebbe7dec79b1801ceaf76ffe
* need to wait for txn 0xe331e01276bee5bc2ae92ddf3188dcdbaa6858e9716b9db58b3b149ac2f5a76e
* need to wait for txn 0x64f673c8b502de13ab00e61e8f418fb6483318a1298722b2f82c62fd7e1cbe76
* txn 0xa5d40bc3985432b83bc5d18517aca940f8a753f9ebbe7dec79b1801ceaf76ffe has been mined on all nodes
* created instance of contract Kingdom at 0xaa3e8d7b278c5bf0dd212f1f819dc59f6e0c7613
* txn 0xe331e01276bee5bc2ae92ddf3188dcdbaa6858e9716b9db58b3b149ac2f5a76e has been mined on all nodes
* txn 0x64f673c8b502de13ab00e61e8f418fb6483318a1298722b2f82c62fd7e1cbe76 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x95a2a100e90e5ea3954ee9ffe8ed79d6303d4533db47b471533416aa4920bb60
* txn 0x95a2a100e90e5ea3954ee9ffe8ed79d6303d4533db47b471533416aa4920bb60 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xecdaa5f9c3cbe06284b567c9878e28ed194fb19905caeefa2f96151a29f788e5
* txn 0xecdaa5f9c3cbe06284b567c9878e28ed194fb19905caeefa2f96151a29f788e5 has been mined on all nodes

##### Transactions Generated

* [0xa5d40bc3985432b83bc5d18517aca940f8a753f9ebbe7dec79b1801ceaf76ffe](http://testnet.etherscan.io/tx/0xa5d40bc3985432b83bc5d18517aca940f8a753f9ebbe7dec79b1801ceaf76ffe)
* [0xe331e01276bee5bc2ae92ddf3188dcdbaa6858e9716b9db58b3b149ac2f5a76e](http://testnet.etherscan.io/tx/0xe331e01276bee5bc2ae92ddf3188dcdbaa6858e9716b9db58b3b149ac2f5a76e)
* [0x64f673c8b502de13ab00e61e8f418fb6483318a1298722b2f82c62fd7e1cbe76](http://testnet.etherscan.io/tx/0x64f673c8b502de13ab00e61e8f418fb6483318a1298722b2f82c62fd7e1cbe76)
* [0x95a2a100e90e5ea3954ee9ffe8ed79d6303d4533db47b471533416aa4920bb60](http://testnet.etherscan.io/tx/0x95a2a100e90e5ea3954ee9ffe8ed79d6303d4533db47b471533416aa4920bb60)
* [0xecdaa5f9c3cbe06284b567c9878e28ed194fb19905caeefa2f96151a29f788e5](http://testnet.etherscan.io/tx/0xecdaa5f9c3cbe06284b567c9878e28ed194fb19905caeefa2f96151a29f788e5)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CompensationSentEvent(toAddress=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Claim Throne should pay Commission to the contract shared between the wizards"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xae39598c0ec726d40891f50556b11acfa91e3b3dd908449aed19c0b105362615
* need to wait for txn 0xc002a260a23af95a771f431c6d46d4aa1504145e48a1dcf28b36cb74338dbfc6
* need to wait for txn 0xc3e23748715ab76d8faf7165d87172b74195844380be02dfc04a9b78b53f7fdc
* txn 0xae39598c0ec726d40891f50556b11acfa91e3b3dd908449aed19c0b105362615 has been mined on all nodes
* txn 0xc002a260a23af95a771f431c6d46d4aa1504145e48a1dcf28b36cb74338dbfc6 has been mined on all nodes
* txn 0xc3e23748715ab76d8faf7165d87172b74195844380be02dfc04a9b78b53f7fdc has been mined on all nodes
* created instance of contract Kingdom at 0x1207809c162664bbb74da48895fa285a26573841
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xfdf6f26f2ac6f17e30313f8ecf8ebc3bb3289881d8a1a95a9493c3ba32a18d7a
* txn 0xfdf6f26f2ac6f17e30313f8ecf8ebc3bb3289881d8a1a95a9493c3ba32a18d7a has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x7267c2d07dc9f43b7d30eb110276f7269e5074600f4ad9f1f01da3280a27f0e7
* txn 0x7267c2d07dc9f43b7d30eb110276f7269e5074600f4ad9f1f01da3280a27f0e7 has been mined on all nodes

##### Transactions Generated

* [0xae39598c0ec726d40891f50556b11acfa91e3b3dd908449aed19c0b105362615](http://testnet.etherscan.io/tx/0xae39598c0ec726d40891f50556b11acfa91e3b3dd908449aed19c0b105362615)
* [0xc002a260a23af95a771f431c6d46d4aa1504145e48a1dcf28b36cb74338dbfc6](http://testnet.etherscan.io/tx/0xc002a260a23af95a771f431c6d46d4aa1504145e48a1dcf28b36cb74338dbfc6)
* [0xc3e23748715ab76d8faf7165d87172b74195844380be02dfc04a9b78b53f7fdc](http://testnet.etherscan.io/tx/0xc3e23748715ab76d8faf7165d87172b74195844380be02dfc04a9b78b53f7fdc)
* [0xfdf6f26f2ac6f17e30313f8ecf8ebc3bb3289881d8a1a95a9493c3ba32a18d7a](http://testnet.etherscan.io/tx/0xfdf6f26f2ac6f17e30313f8ecf8ebc3bb3289881d8a1a95a9493c3ba32a18d7a)
* [0x7267c2d07dc9f43b7d30eb110276f7269e5074600f4ad9f1f01da3280a27f0e7](http://testnet.etherscan.io/tx/0x7267c2d07dc9f43b7d30eb110276f7269e5074600f4ad9f1f01da3280a27f0e7)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=15000000000000000,)
* CompensationSentEvent(toAddress=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4225fe8c31383476da0c6517801e3393a7b161694f21dc9663cc8324d2bb134f
* need to wait for txn 0x8158207d30d2ef5bc7b97703c3c426583f8b4599ca037171422234385755e14c
* need to wait for txn 0xc5b75b764124646eed81622ef36240c4bf94a02e2fc651d98d3422919fb14e34
* txn 0x4225fe8c31383476da0c6517801e3393a7b161694f21dc9663cc8324d2bb134f has been mined on all nodes
* created instance of contract Kingdom at 0xd5b4ec86f320f34a7ecf963e354f75580421ea5c
* txn 0x8158207d30d2ef5bc7b97703c3c426583f8b4599ca037171422234385755e14c has been mined on all nodes
* txn 0xc5b75b764124646eed81622ef36240c4bf94a02e2fc651d98d3422919fb14e34 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x7ba3df78ba83527ced49176313d0460673e41b2916d92f254b8c287c9878a03c
* txn 0x7ba3df78ba83527ced49176313d0460673e41b2916d92f254b8c287c9878a03c has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x4470d250a498f2ba297777a3969dbe272288be8adbd1688f431a5f1c1be27166
* txn 0x4470d250a498f2ba297777a3969dbe272288be8adbd1688f431a5f1c1be27166 has been mined on all nodes

##### Transactions Generated

* [0x4225fe8c31383476da0c6517801e3393a7b161694f21dc9663cc8324d2bb134f](http://testnet.etherscan.io/tx/0x4225fe8c31383476da0c6517801e3393a7b161694f21dc9663cc8324d2bb134f)
* [0x8158207d30d2ef5bc7b97703c3c426583f8b4599ca037171422234385755e14c](http://testnet.etherscan.io/tx/0x8158207d30d2ef5bc7b97703c3c426583f8b4599ca037171422234385755e14c)
* [0xc5b75b764124646eed81622ef36240c4bf94a02e2fc651d98d3422919fb14e34](http://testnet.etherscan.io/tx/0xc5b75b764124646eed81622ef36240c4bf94a02e2fc651d98d3422919fb14e34)
* [0x7ba3df78ba83527ced49176313d0460673e41b2916d92f254b8c287c9878a03c](http://testnet.etherscan.io/tx/0x7ba3df78ba83527ced49176313d0460673e41b2916d92f254b8c287c9878a03c)
* [0x4470d250a498f2ba297777a3969dbe272288be8adbd1688f431a5f1c1be27166](http://testnet.etherscan.io/tx/0x4470d250a498f2ba297777a3969dbe272288be8adbd1688f431a5f1c1be27166)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CompensationSentEvent(toAddress=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x7953b2a5e78626359bcbd6423b07731ff61e88670c496e9705931f6103e63c63
* need to wait for txn 0xd2ef028786d422ec19b0dcb6f4252809b54350576b46ba42bd185ac16ea7e22e
* txn 0x7953b2a5e78626359bcbd6423b07731ff61e88670c496e9705931f6103e63c63 has been mined on all nodes
* created instance of contract Kingdom at 0x5bcc391d48fef045d015e7d3a3078459ee0ca19a
* txn 0xd2ef028786d422ec19b0dcb6f4252809b54350576b46ba42bd185ac16ea7e22e has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x2eb6b6ab139bc52765b9b09de75d125879aea92a389ba603eddea01da22e2890
* txn 0x2eb6b6ab139bc52765b9b09de75d125879aea92a389ba603eddea01da22e2890 has been mined on all nodes

##### Transactions Generated

* [0x7953b2a5e78626359bcbd6423b07731ff61e88670c496e9705931f6103e63c63](http://testnet.etherscan.io/tx/0x7953b2a5e78626359bcbd6423b07731ff61e88670c496e9705931f6103e63c63)
* [0xd2ef028786d422ec19b0dcb6f4252809b54350576b46ba42bd185ac16ea7e22e](http://testnet.etherscan.io/tx/0xd2ef028786d422ec19b0dcb6f4252809b54350576b46ba42bd185ac16ea7e22e)
* [0x2eb6b6ab139bc52765b9b09de75d125879aea92a389ba603eddea01da22e2890](http://testnet.etherscan.io/tx/0x2eb6b6ab139bc52765b9b09de75d125879aea92a389ba603eddea01da22e2890)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xfe6d12a9efe02715276b0890b7a78fa37002689c1e473e747fed2c61546a4814
* need to wait for txn 0xc005049b52cf8bf124e51290fe9a67e1eb175cdfbbae93dd163e6c3236f9e19d
* need to wait for txn 0x4cb085ab2d62da557e584d050bcccd02a9fadb843c036dd347e41dd04f195c84
* txn 0xfe6d12a9efe02715276b0890b7a78fa37002689c1e473e747fed2c61546a4814 has been mined on all nodes
* created instance of contract Kingdom at 0x3db6047a302b7cd874b6e47392ade987904929d4
* txn 0xc005049b52cf8bf124e51290fe9a67e1eb175cdfbbae93dd163e6c3236f9e19d has been mined on all nodes
* txn 0x4cb085ab2d62da557e584d050bcccd02a9fadb843c036dd347e41dd04f195c84 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x5026d9ac98df45645a0332681bf3b5f8580a55ad2eeced59ca3f5c8e4e9f69fe
* txn 0x5026d9ac98df45645a0332681bf3b5f8580a55ad2eeced59ca3f5c8e4e9f69fe has been mined on all nodes
* expect curse to kick in by 1468356118 based on 1468355938 180
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xc2df324f564e979b7c25f274325465fcfd13ba77bcd7ef2612e0a3d4c62bea52
* txn 0xc2df324f564e979b7c25f274325465fcfd13ba77bcd7ef2612e0a3d4c62bea52 has been mined on all nodes

##### Transactions Generated

* [0xfe6d12a9efe02715276b0890b7a78fa37002689c1e473e747fed2c61546a4814](http://testnet.etherscan.io/tx/0xfe6d12a9efe02715276b0890b7a78fa37002689c1e473e747fed2c61546a4814)
* [0xc005049b52cf8bf124e51290fe9a67e1eb175cdfbbae93dd163e6c3236f9e19d](http://testnet.etherscan.io/tx/0xc005049b52cf8bf124e51290fe9a67e1eb175cdfbbae93dd163e6c3236f9e19d)
* [0x4cb085ab2d62da557e584d050bcccd02a9fadb843c036dd347e41dd04f195c84](http://testnet.etherscan.io/tx/0x4cb085ab2d62da557e584d050bcccd02a9fadb843c036dd347e41dd04f195c84)
* [0x5026d9ac98df45645a0332681bf3b5f8580a55ad2eeced59ca3f5c8e4e9f69fe](http://testnet.etherscan.io/tx/0x5026d9ac98df45645a0332681bf3b5f8580a55ad2eeced59ca3f5c8e4e9f69fe)
* [0xc2df324f564e979b7c25f274325465fcfd13ba77bcd7ef2612e0a3d4c62bea52](http://testnet.etherscan.io/tx/0xc2df324f564e979b7c25f274325465fcfd13ba77bcd7ef2612e0a3d4c62bea52)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x65a5dedcb55c7e08c3a6ba0afc1780f7d5a889402b30723b1244d5740fe543a9
* need to wait for txn 0x409f0257c4e08b29d95d14fd754ba0400cefecb0736d85000453cf31c10f5fd2
* txn 0x65a5dedcb55c7e08c3a6ba0afc1780f7d5a889402b30723b1244d5740fe543a9 has been mined on all nodes
* created instance of contract Kingdom at 0x807e4adedb381e88b0706cf5c550a7ae7b143558
* txn 0x409f0257c4e08b29d95d14fd754ba0400cefecb0736d85000453cf31c10f5fd2 has been mined on all nodes
* need to wait for txn 0xda2fb9123bdc81916e087234caf15d65ac8ab80d1eb8e8052c8c07f495056ec8
* txn 0xda2fb9123bdc81916e087234caf15d65ac8ab80d1eb8e8052c8c07f495056ec8 has been mined on all nodes

##### Transactions Generated

* [0x65a5dedcb55c7e08c3a6ba0afc1780f7d5a889402b30723b1244d5740fe543a9](http://testnet.etherscan.io/tx/0x65a5dedcb55c7e08c3a6ba0afc1780f7d5a889402b30723b1244d5740fe543a9)
* [0x409f0257c4e08b29d95d14fd754ba0400cefecb0736d85000453cf31c10f5fd2](http://testnet.etherscan.io/tx/0x409f0257c4e08b29d95d14fd754ba0400cefecb0736d85000453cf31c10f5fd2)
* [0xda2fb9123bdc81916e087234caf15d65ac8ab80d1eb8e8052c8c07f495056ec8](http://testnet.etherscan.io/tx/0xda2fb9123bdc81916e087234caf15d65ac8ab80d1eb8e8052c8c07f495056ec8)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x60d47a6a95b2411ad93c9128471cf372e8c8b88fc8d8980bc084ccd2c7d41acc
* need to wait for txn 0x9e73aa6ab8c1df5e5208c69b1958d07567a9d262e9ab97065a96c5ce8fe2eef7
* txn 0x60d47a6a95b2411ad93c9128471cf372e8c8b88fc8d8980bc084ccd2c7d41acc has been mined on all nodes
* created instance of contract Kingdom at 0x984d8a26c05853e1e9c8abd948aa05329da7646b
* txn 0x9e73aa6ab8c1df5e5208c69b1958d07567a9d262e9ab97065a96c5ce8fe2eef7 has been mined on all nodes
* need to wait for txn 0x61015d174010f663c824cc47c2ebf040e6fa3992194ca78c14583d8b97e04e82
* txn 0x61015d174010f663c824cc47c2ebf040e6fa3992194ca78c14583d8b97e04e82 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x4a0b35a103bb09caeeadfa176a6fe4ee7da35857
* need to wait for txn 0xbf1c0ead7e507b43fe151e822154cf5f781baa8ac685c3b50809a2d1cd5d1e11
* txn 0xbf1c0ead7e507b43fe151e822154cf5f781baa8ac685c3b50809a2d1cd5d1e11 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x8bf9c695e07b2028e7a0cc242ff9104b9ce3898707955ab1644e013706620af2
* txn 0x8bf9c695e07b2028e7a0cc242ff9104b9ce3898707955ab1644e013706620af2 has been mined on all nodes

##### Transactions Generated

* [0x60d47a6a95b2411ad93c9128471cf372e8c8b88fc8d8980bc084ccd2c7d41acc](http://testnet.etherscan.io/tx/0x60d47a6a95b2411ad93c9128471cf372e8c8b88fc8d8980bc084ccd2c7d41acc)
* [0x9e73aa6ab8c1df5e5208c69b1958d07567a9d262e9ab97065a96c5ce8fe2eef7](http://testnet.etherscan.io/tx/0x9e73aa6ab8c1df5e5208c69b1958d07567a9d262e9ab97065a96c5ce8fe2eef7)
* [0x61015d174010f663c824cc47c2ebf040e6fa3992194ca78c14583d8b97e04e82](http://testnet.etherscan.io/tx/0x61015d174010f663c824cc47c2ebf040e6fa3992194ca78c14583d8b97e04e82)
* [0xbf1c0ead7e507b43fe151e822154cf5f781baa8ac685c3b50809a2d1cd5d1e11](http://testnet.etherscan.io/tx/0xbf1c0ead7e507b43fe151e822154cf5f781baa8ac685c3b50809a2d1cd5d1e11)
* [0x8bf9c695e07b2028e7a0cc242ff9104b9ce3898707955ab1644e013706620af2](http://testnet.etherscan.io/tx/0x8bf9c695e07b2028e7a0cc242ff9104b9ce3898707955ab1644e013706620af2)

##### Contract Events

* WalletCreated(by=0x1c222d814acc0fb170781ab43021957038c0995b,)
* DepositMade(from=0x1c222d814acc0fb170781ab43021957038c0995b,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0x984d8a26c05853e1e9c8abd948aa05329da7646b,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x64e40f6826a67c4adc120ac75523083487115db44816572df137a3c7fc075184
* need to wait for txn 0x8f5564e1dd8cf9e7a6e7cccfb063cf50cd249a53080800d8642fc98fd2666ae0
* need to wait for txn 0x3687c442dc3e8f43ef57db50e058cb2e09a60bafd00d1ec6067e2b3978b1af00
* txn 0x64e40f6826a67c4adc120ac75523083487115db44816572df137a3c7fc075184 has been mined on all nodes
* created instance of contract Kingdom at 0xebad21f61ecb7d8d4a2cdcedf318440aecb58f82
* txn 0x8f5564e1dd8cf9e7a6e7cccfb063cf50cd249a53080800d8642fc98fd2666ae0 has been mined on all nodes
* txn 0x3687c442dc3e8f43ef57db50e058cb2e09a60bafd00d1ec6067e2b3978b1af00 has been mined on all nodes
* need to wait for txn 0x53a93ad5a6cd0225e6e093fc1ac76eb9177e041dcef4a86af6a45ace0e93f7d9
* txn 0x53a93ad5a6cd0225e6e093fc1ac76eb9177e041dcef4a86af6a45ace0e93f7d9 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xd7d5a600135d315aa3e400a6d6c49f38c16172de
* need to wait for txn 0xd07c6ecb539521acb7ca82121e34ddec29259ceb2c6cab6c75310ef88b756707
* txn 0xd07c6ecb539521acb7ca82121e34ddec29259ceb2c6cab6c75310ef88b756707 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x8b0e8ba5a4d9e473a2728b15053d16b972f3d7cea4cbd6fc847f21131284eae9
* txn 0x8b0e8ba5a4d9e473a2728b15053d16b972f3d7cea4cbd6fc847f21131284eae9 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xeb593210c464d67d3543cc97fcc2ca7b7d681502cd97c9322b11ceae3a890774
* txn 0xeb593210c464d67d3543cc97fcc2ca7b7d681502cd97c9322b11ceae3a890774 has been mined on all nodes

##### Transactions Generated

* [0x64e40f6826a67c4adc120ac75523083487115db44816572df137a3c7fc075184](http://testnet.etherscan.io/tx/0x64e40f6826a67c4adc120ac75523083487115db44816572df137a3c7fc075184)
* [0x8f5564e1dd8cf9e7a6e7cccfb063cf50cd249a53080800d8642fc98fd2666ae0](http://testnet.etherscan.io/tx/0x8f5564e1dd8cf9e7a6e7cccfb063cf50cd249a53080800d8642fc98fd2666ae0)
* [0x3687c442dc3e8f43ef57db50e058cb2e09a60bafd00d1ec6067e2b3978b1af00](http://testnet.etherscan.io/tx/0x3687c442dc3e8f43ef57db50e058cb2e09a60bafd00d1ec6067e2b3978b1af00)
* [0x53a93ad5a6cd0225e6e093fc1ac76eb9177e041dcef4a86af6a45ace0e93f7d9](http://testnet.etherscan.io/tx/0x53a93ad5a6cd0225e6e093fc1ac76eb9177e041dcef4a86af6a45ace0e93f7d9)
* [0xd07c6ecb539521acb7ca82121e34ddec29259ceb2c6cab6c75310ef88b756707](http://testnet.etherscan.io/tx/0xd07c6ecb539521acb7ca82121e34ddec29259ceb2c6cab6c75310ef88b756707)
* [0x8b0e8ba5a4d9e473a2728b15053d16b972f3d7cea4cbd6fc847f21131284eae9](http://testnet.etherscan.io/tx/0x8b0e8ba5a4d9e473a2728b15053d16b972f3d7cea4cbd6fc847f21131284eae9)
* [0xeb593210c464d67d3543cc97fcc2ca7b7d681502cd97c9322b11ceae3a890774](http://testnet.etherscan.io/tx/0xeb593210c464d67d3543cc97fcc2ca7b7d681502cd97c9322b11ceae3a890774)

##### Contract Events

* WalletCreated(by=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,)
* DepositMade(from=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0xebad21f61ecb7d8d4a2cdcedf318440aecb58f82,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CompensationSentEvent(toAddress=0xd7d5a600135d315aa3e400a6d6c49f38c16172de,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* DepositMade(from=0xd65626af5bdd66de88991bac45598ac8eba904ec,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x15717c310d71f1bd8773787f2d6024223c880e9fad49bdbcbb36c76bb269b63c
* need to wait for txn 0xd577602f0d003fdd202f8d09c76881e37115d81456e468d76084407c7767b378
* need to wait for txn 0x7ceea461714f1eb7dd8f7fb5bb0562914700879af9f1e216e729137678ede7be
* txn 0x15717c310d71f1bd8773787f2d6024223c880e9fad49bdbcbb36c76bb269b63c has been mined on all nodes
* created instance of contract Kingdom at 0x53e281656827bb13523f01819e0e150d562736f7
* txn 0xd577602f0d003fdd202f8d09c76881e37115d81456e468d76084407c7767b378 has been mined on all nodes
* txn 0x7ceea461714f1eb7dd8f7fb5bb0562914700879af9f1e216e729137678ede7be has been mined on all nodes
* need to wait for txn 0x23b3a98ae79a8e0bb985d317da8511770576509323b7b4e153f01f536ecaadb0
* txn 0x23b3a98ae79a8e0bb985d317da8511770576509323b7b4e153f01f536ecaadb0 has been mined on all nodes
* txn 0x23b3a98ae79a8e0bb985d317da8511770576509323b7b4e153f01f536ecaadb0 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x325b7f1cb9bf641315447fded8fe04083f3a9efe
* need to wait for txn 0xe119492593c54d97752493da924185ac07471d336f85a6d164442bf1b1dc463f
* txn 0xe119492593c54d97752493da924185ac07471d336f85a6d164442bf1b1dc463f has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x3cedb62d6dffc13e47ecf5893934a0963b0f34550d5761ef27bf27ba3c17add5
* txn 0x3cedb62d6dffc13e47ecf5893934a0963b0f34550d5761ef27bf27ba3c17add5 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xa806b272edb9c5b3517dc7019831624842e05708e23efa6834242b70570f98aa
* txn 0xa806b272edb9c5b3517dc7019831624842e05708e23efa6834242b70570f98aa has been mined on all nodes

##### Transactions Generated

* [0x15717c310d71f1bd8773787f2d6024223c880e9fad49bdbcbb36c76bb269b63c](http://testnet.etherscan.io/tx/0x15717c310d71f1bd8773787f2d6024223c880e9fad49bdbcbb36c76bb269b63c)
* [0xd577602f0d003fdd202f8d09c76881e37115d81456e468d76084407c7767b378](http://testnet.etherscan.io/tx/0xd577602f0d003fdd202f8d09c76881e37115d81456e468d76084407c7767b378)
* [0x7ceea461714f1eb7dd8f7fb5bb0562914700879af9f1e216e729137678ede7be](http://testnet.etherscan.io/tx/0x7ceea461714f1eb7dd8f7fb5bb0562914700879af9f1e216e729137678ede7be)
* [0x23b3a98ae79a8e0bb985d317da8511770576509323b7b4e153f01f536ecaadb0](http://testnet.etherscan.io/tx/0x23b3a98ae79a8e0bb985d317da8511770576509323b7b4e153f01f536ecaadb0)
* [0xe119492593c54d97752493da924185ac07471d336f85a6d164442bf1b1dc463f](http://testnet.etherscan.io/tx/0xe119492593c54d97752493da924185ac07471d336f85a6d164442bf1b1dc463f)
* [0x3cedb62d6dffc13e47ecf5893934a0963b0f34550d5761ef27bf27ba3c17add5](http://testnet.etherscan.io/tx/0x3cedb62d6dffc13e47ecf5893934a0963b0f34550d5761ef27bf27ba3c17add5)
* [0xa806b272edb9c5b3517dc7019831624842e05708e23efa6834242b70570f98aa](http://testnet.etherscan.io/tx/0xa806b272edb9c5b3517dc7019831624842e05708e23efa6834242b70570f98aa)

##### Contract Events

* WalletCreated(by=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,)
* DepositMade(from=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0x53e281656827bb13523f01819e0e150d562736f7,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x325b7f1cb9bf641315447fded8fe04083f3a9efe,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xeccedeac1e8ccdf80124def3702933986fcab890666555913a449ee490022bad
* need to wait for txn 0xa5862729a41f41e8a0eb0beee255831465b22fb7b15460c29df9419b791024ee
* need to wait for txn 0xd46a2646e3a1aaa6f7519a9d7fbd0efaa51f231111d1c100fbfa6f9f95efe7a9
* txn 0xeccedeac1e8ccdf80124def3702933986fcab890666555913a449ee490022bad has been mined on all nodes
* created instance of contract Kingdom at 0x2c189a5b38b1a34784733ce2c80f3088fafd05f3
* txn 0xa5862729a41f41e8a0eb0beee255831465b22fb7b15460c29df9419b791024ee has been mined on all nodes
* txn 0xd46a2646e3a1aaa6f7519a9d7fbd0efaa51f231111d1c100fbfa6f9f95efe7a9 has been mined on all nodes
* need to wait for txn 0x6d22a4b532f3a90d31ee8904dfce31d2276ee3f55d93381c7702de35643c51b5
* txn 0x6d22a4b532f3a90d31ee8904dfce31d2276ee3f55d93381c7702de35643c51b5 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x6a2290a36f6eb3e68fa0fbb572c7195daec5e8e8
* need to wait for txn 0xe318361f3be0f7d82320845dce5e0452461811e5cc62192fb1481ff10089dce3
* txn 0xe318361f3be0f7d82320845dce5e0452461811e5cc62192fb1481ff10089dce3 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xe841731a33eb851a3a27d344e3140a03dbd949bedf7481c78a46b88352ba9b54
* txn 0xe841731a33eb851a3a27d344e3140a03dbd949bedf7481c78a46b88352ba9b54 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x463ff9be592674b311603815005ff5eee195f870560c202504cf0443fc254556
* txn 0x463ff9be592674b311603815005ff5eee195f870560c202504cf0443fc254556 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0xcabb6623244af105dac865e6d4a9c560db450dcc18180f1c57c6b2563954166c
* txn 0xcabb6623244af105dac865e6d4a9c560db450dcc18180f1c57c6b2563954166c has been mined on all nodes

##### Transactions Generated

* [0xeccedeac1e8ccdf80124def3702933986fcab890666555913a449ee490022bad](http://testnet.etherscan.io/tx/0xeccedeac1e8ccdf80124def3702933986fcab890666555913a449ee490022bad)
* [0xa5862729a41f41e8a0eb0beee255831465b22fb7b15460c29df9419b791024ee](http://testnet.etherscan.io/tx/0xa5862729a41f41e8a0eb0beee255831465b22fb7b15460c29df9419b791024ee)
* [0xd46a2646e3a1aaa6f7519a9d7fbd0efaa51f231111d1c100fbfa6f9f95efe7a9](http://testnet.etherscan.io/tx/0xd46a2646e3a1aaa6f7519a9d7fbd0efaa51f231111d1c100fbfa6f9f95efe7a9)
* [0x6d22a4b532f3a90d31ee8904dfce31d2276ee3f55d93381c7702de35643c51b5](http://testnet.etherscan.io/tx/0x6d22a4b532f3a90d31ee8904dfce31d2276ee3f55d93381c7702de35643c51b5)
* [0xe318361f3be0f7d82320845dce5e0452461811e5cc62192fb1481ff10089dce3](http://testnet.etherscan.io/tx/0xe318361f3be0f7d82320845dce5e0452461811e5cc62192fb1481ff10089dce3)
* [0xe841731a33eb851a3a27d344e3140a03dbd949bedf7481c78a46b88352ba9b54](http://testnet.etherscan.io/tx/0xe841731a33eb851a3a27d344e3140a03dbd949bedf7481c78a46b88352ba9b54)
* [0x463ff9be592674b311603815005ff5eee195f870560c202504cf0443fc254556](http://testnet.etherscan.io/tx/0x463ff9be592674b311603815005ff5eee195f870560c202504cf0443fc254556)
* [0xcabb6623244af105dac865e6d4a9c560db450dcc18180f1c57c6b2563954166c](http://testnet.etherscan.io/tx/0xcabb6623244af105dac865e6d4a9c560db450dcc18180f1c57c6b2563954166c)

##### Contract Events

* WalletCreated(by=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0x2c189a5b38b1a34784733ce2c80f3088fafd05f3,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x6a2290a36f6eb3e68fa0fbb572c7195daec5e8e8,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* FundsWithdrawnEvent(fromAddress=0x6a2290a36f6eb3e68fa0fbb572c7195daec5e8e8,toAddress=0x6a2290a36f6eb3e68fa0fbb572c7195daec5e8e8,valueWei=1470000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1470000000000000000,)
* WithdrawalMade(to=0x2c189a5b38b1a34784733ce2c80f3088fafd05f3,value=0,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x2c527bb9ea10383ceb8c9f4b75a7e26505fc8c77f51f34aba65ae210e7ba8c38
* need to wait for txn 0xdf34d19a9f26d689fa10f9120fee98c3792ff5c8fc052191a10afd218286c90e
* need to wait for txn 0x2da968fc02673c85f73e2cbf62112de701134a8bc8339c2f7ea8457ea527c8d6
* txn 0x2c527bb9ea10383ceb8c9f4b75a7e26505fc8c77f51f34aba65ae210e7ba8c38 has been mined on all nodes
* created instance of contract Kingdom at 0x94f46c1a7a9b00d27e2488e97b84c435936c5d7a
* txn 0xdf34d19a9f26d689fa10f9120fee98c3792ff5c8fc052191a10afd218286c90e has been mined on all nodes
* txn 0x2da968fc02673c85f73e2cbf62112de701134a8bc8339c2f7ea8457ea527c8d6 has been mined on all nodes
* need to wait for txn 0xe60377504f27e66a2281b24726ed3b9b4726c2d313403fabe9bcd9a8f6dec22b
* txn 0xe60377504f27e66a2281b24726ed3b9b4726c2d313403fabe9bcd9a8f6dec22b has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xd7edb56bf5c94a5309fa7abb65e55c657d44a2b7
* need to wait for txn 0x893e53f685bf911b9ddd5dab1c8041347fd103a1c0fa688a0b22675b3139dc3d
* txn 0x893e53f685bf911b9ddd5dab1c8041347fd103a1c0fa688a0b22675b3139dc3d has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x29609e2aba226c1ade7156517fc6415ace5b5e466b2009a8e96f94f18a99ab4e
* txn 0x29609e2aba226c1ade7156517fc6415ace5b5e466b2009a8e96f94f18a99ab4e has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x4ccbddde716dcd39b98a018d40be79b0a331dcd8393402203009944b52e21928
* txn 0x4ccbddde716dcd39b98a018d40be79b0a331dcd8393402203009944b52e21928 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0x79b58bc96784566688779b6cf3e12345dca293934d4fd8f4fe5f5d617c03e500
* txn 0x79b58bc96784566688779b6cf3e12345dca293934d4fd8f4fe5f5d617c03e500 has been mined on all nodes

##### Transactions Generated

* [0x2c527bb9ea10383ceb8c9f4b75a7e26505fc8c77f51f34aba65ae210e7ba8c38](http://testnet.etherscan.io/tx/0x2c527bb9ea10383ceb8c9f4b75a7e26505fc8c77f51f34aba65ae210e7ba8c38)
* [0xdf34d19a9f26d689fa10f9120fee98c3792ff5c8fc052191a10afd218286c90e](http://testnet.etherscan.io/tx/0xdf34d19a9f26d689fa10f9120fee98c3792ff5c8fc052191a10afd218286c90e)
* [0x2da968fc02673c85f73e2cbf62112de701134a8bc8339c2f7ea8457ea527c8d6](http://testnet.etherscan.io/tx/0x2da968fc02673c85f73e2cbf62112de701134a8bc8339c2f7ea8457ea527c8d6)
* [0xe60377504f27e66a2281b24726ed3b9b4726c2d313403fabe9bcd9a8f6dec22b](http://testnet.etherscan.io/tx/0xe60377504f27e66a2281b24726ed3b9b4726c2d313403fabe9bcd9a8f6dec22b)
* [0x893e53f685bf911b9ddd5dab1c8041347fd103a1c0fa688a0b22675b3139dc3d](http://testnet.etherscan.io/tx/0x893e53f685bf911b9ddd5dab1c8041347fd103a1c0fa688a0b22675b3139dc3d)
* [0x29609e2aba226c1ade7156517fc6415ace5b5e466b2009a8e96f94f18a99ab4e](http://testnet.etherscan.io/tx/0x29609e2aba226c1ade7156517fc6415ace5b5e466b2009a8e96f94f18a99ab4e)
* [0x4ccbddde716dcd39b98a018d40be79b0a331dcd8393402203009944b52e21928](http://testnet.etherscan.io/tx/0x4ccbddde716dcd39b98a018d40be79b0a331dcd8393402203009944b52e21928)
* [0x79b58bc96784566688779b6cf3e12345dca293934d4fd8f4fe5f5d617c03e500](http://testnet.etherscan.io/tx/0x79b58bc96784566688779b6cf3e12345dca293934d4fd8f4fe5f5d617c03e500)

##### Contract Events

* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0x94f46c1a7a9b00d27e2488e97b84c435936c5d7a,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0xd7edb56bf5c94a5309fa7abb65e55c657d44a2b7,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* WithdrawalMade(to=0x94f46c1a7a9b00d27e2488e97b84c435936c5d7a,value=0,)

### Test - "Cannot successfully withdraw failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xc31337c4c386a3a74e6e40ee0be3c2d8df36b49fc53f48edacdb7925c5bcb7d9
* need to wait for txn 0xeebf594189b3a7aca7004a382c2814297f48bd2fc182e20a206db73cf4587a6b
* need to wait for txn 0x0ae49ca2b06236f06d668844df55f0e9776f6e2ea5d7483ff9e9799890c94d62
* txn 0xc31337c4c386a3a74e6e40ee0be3c2d8df36b49fc53f48edacdb7925c5bcb7d9 has been mined on all nodes
* created instance of contract Kingdom at 0x3b9c0f51c0e53cfea9bd3b7e4a02dd2fab925282
* txn 0xeebf594189b3a7aca7004a382c2814297f48bd2fc182e20a206db73cf4587a6b has been mined on all nodes
* txn 0x0ae49ca2b06236f06d668844df55f0e9776f6e2ea5d7483ff9e9799890c94d62 has been mined on all nodes
* need to wait for txn 0x30da1d29c0ffaf9e5472b0a3325bb614ec11ad15fd1be998ede6ab35c4627038
* txn 0x30da1d29c0ffaf9e5472b0a3325bb614ec11ad15fd1be998ede6ab35c4627038 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x54eac579237ea6cb8e99dfcb51aa9f2fd78059f0
* need to wait for txn 0xadd70abceef1e1c38a8ba26f8f89ac20451564d0428d36f88994c12207b0dad7
* txn 0xadd70abceef1e1c38a8ba26f8f89ac20451564d0428d36f88994c12207b0dad7 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xd13a474a3b8f26587c6cd29948bab1afb898387c8d5888a4843468892a919d34
* txn 0xd13a474a3b8f26587c6cd29948bab1afb898387c8d5888a4843468892a919d34 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x850eb61b9b8db200d4694be0606635ba240ac136ba589f8ab0a1d5a503be03af
* txn 0x850eb61b9b8db200d4694be0606635ba240ac136ba589f8ab0a1d5a503be03af has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0xe7d9b59cd0a8b86144d7a2d25243aed8e0fa5eb91d96ed047e0d36b38233397d
* txn 0xe7d9b59cd0a8b86144d7a2d25243aed8e0fa5eb91d96ed047e0d36b38233397d has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0xdcbc9b082cdcfe014ba2d8633fcb7103b05433eaa0d22fb54f4852ac9fe493b2
* txn 0xdcbc9b082cdcfe014ba2d8633fcb7103b05433eaa0d22fb54f4852ac9fe493b2 has been mined on all nodes

##### Transactions Generated

* [0xc31337c4c386a3a74e6e40ee0be3c2d8df36b49fc53f48edacdb7925c5bcb7d9](http://testnet.etherscan.io/tx/0xc31337c4c386a3a74e6e40ee0be3c2d8df36b49fc53f48edacdb7925c5bcb7d9)
* [0xeebf594189b3a7aca7004a382c2814297f48bd2fc182e20a206db73cf4587a6b](http://testnet.etherscan.io/tx/0xeebf594189b3a7aca7004a382c2814297f48bd2fc182e20a206db73cf4587a6b)
* [0x0ae49ca2b06236f06d668844df55f0e9776f6e2ea5d7483ff9e9799890c94d62](http://testnet.etherscan.io/tx/0x0ae49ca2b06236f06d668844df55f0e9776f6e2ea5d7483ff9e9799890c94d62)
* [0x30da1d29c0ffaf9e5472b0a3325bb614ec11ad15fd1be998ede6ab35c4627038](http://testnet.etherscan.io/tx/0x30da1d29c0ffaf9e5472b0a3325bb614ec11ad15fd1be998ede6ab35c4627038)
* [0xadd70abceef1e1c38a8ba26f8f89ac20451564d0428d36f88994c12207b0dad7](http://testnet.etherscan.io/tx/0xadd70abceef1e1c38a8ba26f8f89ac20451564d0428d36f88994c12207b0dad7)
* [0xd13a474a3b8f26587c6cd29948bab1afb898387c8d5888a4843468892a919d34](http://testnet.etherscan.io/tx/0xd13a474a3b8f26587c6cd29948bab1afb898387c8d5888a4843468892a919d34)
* [0x850eb61b9b8db200d4694be0606635ba240ac136ba589f8ab0a1d5a503be03af](http://testnet.etherscan.io/tx/0x850eb61b9b8db200d4694be0606635ba240ac136ba589f8ab0a1d5a503be03af)
* [0xe7d9b59cd0a8b86144d7a2d25243aed8e0fa5eb91d96ed047e0d36b38233397d](http://testnet.etherscan.io/tx/0xe7d9b59cd0a8b86144d7a2d25243aed8e0fa5eb91d96ed047e0d36b38233397d)
* [0xdcbc9b082cdcfe014ba2d8633fcb7103b05433eaa0d22fb54f4852ac9fe493b2](http://testnet.etherscan.io/tx/0xdcbc9b082cdcfe014ba2d8633fcb7103b05433eaa0d22fb54f4852ac9fe493b2)

##### Contract Events

* WalletCreated(by=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,)
* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0x3b9c0f51c0e53cfea9bd3b7e4a02dd2fab925282,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x54eac579237ea6cb8e99dfcb51aa9f2fd78059f0,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* FundsWithdrawnEvent(fromAddress=0x54eac579237ea6cb8e99dfcb51aa9f2fd78059f0,toAddress=0x54eac579237ea6cb8e99dfcb51aa9f2fd78059f0,valueWei=1470000000000000000,)
* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1470000000000000000,)
* WithdrawalMade(to=0x3b9c0f51c0e53cfea9bd3b7e4a02dd2fab925282,value=0,)
* WithdrawalMade(to=0x3b9c0f51c0e53cfea9bd3b7e4a02dd2fab925282,value=0,)

### Test - "Dead monarchs not compensated and cannot resend"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4913a4d2039c376f25c3ee066b08fdef38d5ff0a0078bb3c7be85ad403a9f187
* need to wait for txn 0x0fe045778a013732769983e0c7ab2dcdaba54a71b0269e84da391ec02d0302eb
* need to wait for txn 0x961d6104ba130301bf7ba20a1ae95a1f22fa5b42b4529f105735adee6fa21644
* txn 0x4913a4d2039c376f25c3ee066b08fdef38d5ff0a0078bb3c7be85ad403a9f187 has been mined on all nodes
* created instance of contract Kingdom at 0x17ca95939c84f33fc538737596dab43a1bb2d6b2
* txn 0x0fe045778a013732769983e0c7ab2dcdaba54a71b0269e84da391ec02d0302eb has been mined on all nodes
* txn 0x961d6104ba130301bf7ba20a1ae95a1f22fa5b42b4529f105735adee6fa21644 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x432ac5c2be123b44ffb67d13f27f0ad9fc13f41aca76515672ad14095dd10874
* txn 0x432ac5c2be123b44ffb67d13f27f0ad9fc13f41aca76515672ad14095dd10874 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xb19b627ec69043ed96a47291a9d76cc0cd394ff6cdc2a28086fa75faa8ac9e01
* txn 0xb19b627ec69043ed96a47291a9d76cc0cd394ff6cdc2a28086fa75faa8ac9e01 has been mined on all nodes
* called contract function Kingdom.withdrawFunds on node 1
* need to wait for txn 0x970c290ffe51bd8478101d364424449082ba0743f9d0f0e4276abe18249f553d
* txn 0x970c290ffe51bd8478101d364424449082ba0743f9d0f0e4276abe18249f553d has been mined on all nodes

##### Transactions Generated

* [0x4913a4d2039c376f25c3ee066b08fdef38d5ff0a0078bb3c7be85ad403a9f187](http://testnet.etherscan.io/tx/0x4913a4d2039c376f25c3ee066b08fdef38d5ff0a0078bb3c7be85ad403a9f187)
* [0x0fe045778a013732769983e0c7ab2dcdaba54a71b0269e84da391ec02d0302eb](http://testnet.etherscan.io/tx/0x0fe045778a013732769983e0c7ab2dcdaba54a71b0269e84da391ec02d0302eb)
* [0x961d6104ba130301bf7ba20a1ae95a1f22fa5b42b4529f105735adee6fa21644](http://testnet.etherscan.io/tx/0x961d6104ba130301bf7ba20a1ae95a1f22fa5b42b4529f105735adee6fa21644)
* [0x432ac5c2be123b44ffb67d13f27f0ad9fc13f41aca76515672ad14095dd10874](http://testnet.etherscan.io/tx/0x432ac5c2be123b44ffb67d13f27f0ad9fc13f41aca76515672ad14095dd10874)
* [0xb19b627ec69043ed96a47291a9d76cc0cd394ff6cdc2a28086fa75faa8ac9e01](http://testnet.etherscan.io/tx/0xb19b627ec69043ed96a47291a9d76cc0cd394ff6cdc2a28086fa75faa8ac9e01)
* [0x970c290ffe51bd8478101d364424449082ba0743f9d0f0e4276abe18249f553d](http://testnet.etherscan.io/tx/0x970c290ffe51bd8478101d364424449082ba0743f9d0f0e4276abe18249f553d)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* FundsWithdrawnEvent(fromAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,toAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,valueWei=0,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x40ff19de0ab6aa0061b8bdcb24eb9e73eb02fa3065c406ea4b65778de97b0d9f
* txn 0x40ff19de0ab6aa0061b8bdcb24eb9e73eb02fa3065c406ea4b65778de97b0d9f has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x89cd3b1519ac89427327f430012dcb5d66e01092

##### Transactions Generated

* [0x40ff19de0ab6aa0061b8bdcb24eb9e73eb02fa3065c406ea4b65778de97b0d9f](http://testnet.etherscan.io/tx/0x40ff19de0ab6aa0061b8bdcb24eb9e73eb02fa3065c406ea4b65778de97b0d9f)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x681abf350018c7c8bfdf4142fec725922db9cedbe4d8d86ab1ed6b4935aa8ec3
* txn 0x681abf350018c7c8bfdf4142fec725922db9cedbe4d8d86ab1ed6b4935aa8ec3 has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x697ae4344ec3ae2fe5ff2fbd1acd078b3b83085f

##### Transactions Generated

* [0x681abf350018c7c8bfdf4142fec725922db9cedbe4d8d86ab1ed6b4935aa8ec3](http://testnet.etherscan.io/tx/0x681abf350018c7c8bfdf4142fec725922db9cedbe4d8d86ab1ed6b4935aa8ec3)

### Test - "Test roundMoneyDownNicely"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xcd5cd6ca6f2c03a5d5ff0c03dadd1a2f4a6e7d7ea9a573f9c7761bc60646d551
* txn 0xcd5cd6ca6f2c03a5d5ff0c03dadd1a2f4a6e7d7ea9a573f9c7761bc60646d551 has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x79628b8398b8ccfe93ec8838ae04e523b0b55643

##### Transactions Generated

* [0xcd5cd6ca6f2c03a5d5ff0c03dadd1a2f4a6e7d7ea9a573f9c7761bc60646d551](http://testnet.etherscan.io/tx/0xcd5cd6ca6f2c03a5d5ff0c03dadd1a2f4a6e7d7ea9a573f9c7761bc60646d551)

### Test - "Test roundMoneyUpToWholeFinney"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x742dc520e6485690da9227fb766e5164f0c491d8e3befa7a7de8764ba183921b
* txn 0x742dc520e6485690da9227fb766e5164f0c491d8e3befa7a7de8764ba183921b has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x3fe748d8871665f330913f9f611626db976db800

##### Transactions Generated

* [0x742dc520e6485690da9227fb766e5164f0c491d8e3befa7a7de8764ba183921b](http://testnet.etherscan.io/tx/0x742dc520e6485690da9227fb766e5164f0c491d8e3befa7a7de8764ba183921b)

