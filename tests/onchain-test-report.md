# "King of the Ether Throne" Report

Generated at 2016-07-30T18:36:58.228Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 38
* Tests skipped: 0
* Tests passed: 38
* Tests failed: 0

## Tests

### Test - "Can inspect throne rules"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xab2c697456f71a106951999e69f7645bde5eae822fbb2110f67f392c150fede6
* txn 0xab2c697456f71a106951999e69f7645bde5eae822fbb2110f67f392c150fede6 has been mined on all nodes
* txn 0xab2c697456f71a106951999e69f7645bde5eae822fbb2110f67f392c150fede6 has been mined on all nodes
* created instance of contract Kingdom at 0x361bd0591e27fe5bc22f6e3dd63be85599f77fde

##### Transactions Generated

* [0xab2c697456f71a106951999e69f7645bde5eae822fbb2110f67f392c150fede6](http://testnet.etherscan.io/tx/0xab2c697456f71a106951999e69f7645bde5eae822fbb2110f67f392c150fede6)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x0ea47d8366e19e30ae6f36d045e2aca866a1db18680258b26b2d8d5d62451267
* need to wait for txn 0x1dd832b7d4c20735df6d17456fb663eeae7cfe66c6567d5cec4ba8877870c23b
* txn 0x0ea47d8366e19e30ae6f36d045e2aca866a1db18680258b26b2d8d5d62451267 has been mined on all nodes
* created instance of contract Kingdom at 0xadf16b83f6fc43a5d8b58969caa8e3eeb50eba94
* txn 0x1dd832b7d4c20735df6d17456fb663eeae7cfe66c6567d5cec4ba8877870c23b has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xa7ca5bdb5c3a73cd47b16c14fea1b463b75fcebddd4c9775a999856b6db2ecb3
* txn 0xa7ca5bdb5c3a73cd47b16c14fea1b463b75fcebddd4c9775a999856b6db2ecb3 has been mined on all nodes

##### Transactions Generated

* [0x0ea47d8366e19e30ae6f36d045e2aca866a1db18680258b26b2d8d5d62451267](http://testnet.etherscan.io/tx/0x0ea47d8366e19e30ae6f36d045e2aca866a1db18680258b26b2d8d5d62451267)
* [0x1dd832b7d4c20735df6d17456fb663eeae7cfe66c6567d5cec4ba8877870c23b](http://testnet.etherscan.io/tx/0x1dd832b7d4c20735df6d17456fb663eeae7cfe66c6567d5cec4ba8877870c23b)
* [0xa7ca5bdb5c3a73cd47b16c14fea1b463b75fcebddd4c9775a999856b6db2ecb3](http://testnet.etherscan.io/tx/0xa7ca5bdb5c3a73cd47b16c14fea1b463b75fcebddd4c9775a999856b6db2ecb3)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x9d077a64bf766c0619262db418acf1814b7d2069921b5363ea23ddb391bc3b5c
* need to wait for txn 0x397141eff3484229454b655135c4ddd6a8a693d8b4859e5f6a2a6364c3e3fdfe
* txn 0x9d077a64bf766c0619262db418acf1814b7d2069921b5363ea23ddb391bc3b5c has been mined on all nodes
* created instance of contract Kingdom at 0x27519cebf21e82bda10056b4b506dc12058c8735
* txn 0x397141eff3484229454b655135c4ddd6a8a693d8b4859e5f6a2a6364c3e3fdfe has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xfd9c6aeceb065ba1509acca07da0840704a67e4117cc076fd7053da78500dc32
* txn 0xfd9c6aeceb065ba1509acca07da0840704a67e4117cc076fd7053da78500dc32 has been mined on all nodes

##### Transactions Generated

* [0x9d077a64bf766c0619262db418acf1814b7d2069921b5363ea23ddb391bc3b5c](http://testnet.etherscan.io/tx/0x9d077a64bf766c0619262db418acf1814b7d2069921b5363ea23ddb391bc3b5c)
* [0x397141eff3484229454b655135c4ddd6a8a693d8b4859e5f6a2a6364c3e3fdfe](http://testnet.etherscan.io/tx/0x397141eff3484229454b655135c4ddd6a8a693d8b4859e5f6a2a6364c3e3fdfe)
* [0xfd9c6aeceb065ba1509acca07da0840704a67e4117cc076fd7053da78500dc32](http://testnet.etherscan.io/tx/0xfd9c6aeceb065ba1509acca07da0840704a67e4117cc076fd7053da78500dc32)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x53cbc964e159110bc195253e8badf3ffbc83c0eabc06b297bfbc785a677c9d60
* need to wait for txn 0x261b1a889c9d39477fc64787d501f6eaade7669c7a9a21875305177e8a6eef23
* txn 0x53cbc964e159110bc195253e8badf3ffbc83c0eabc06b297bfbc785a677c9d60 has been mined on all nodes
* created instance of contract Kingdom at 0xfd77c8642cd7d520cc7cfb41f8554810dffe4b20
* txn 0x261b1a889c9d39477fc64787d501f6eaade7669c7a9a21875305177e8a6eef23 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xf19e35fdaf4884a34057a007f345f146186f5306924023db2d255fa8ab9548ce
* txn 0xf19e35fdaf4884a34057a007f345f146186f5306924023db2d255fa8ab9548ce has been mined on all nodes

##### Transactions Generated

* [0x53cbc964e159110bc195253e8badf3ffbc83c0eabc06b297bfbc785a677c9d60](http://testnet.etherscan.io/tx/0x53cbc964e159110bc195253e8badf3ffbc83c0eabc06b297bfbc785a677c9d60)
* [0x261b1a889c9d39477fc64787d501f6eaade7669c7a9a21875305177e8a6eef23](http://testnet.etherscan.io/tx/0x261b1a889c9d39477fc64787d501f6eaade7669c7a9a21875305177e8a6eef23)
* [0xf19e35fdaf4884a34057a007f345f146186f5306924023db2d255fa8ab9548ce](http://testnet.etherscan.io/tx/0xf19e35fdaf4884a34057a007f345f146186f5306924023db2d255fa8ab9548ce)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x8c4351091f5b1cb3ab791325332260e6c5625d15a73178c05f1f7c6911ba668d
* txn 0x8c4351091f5b1cb3ab791325332260e6c5625d15a73178c05f1f7c6911ba668d has been mined on all nodes
* txn 0x8c4351091f5b1cb3ab791325332260e6c5625d15a73178c05f1f7c6911ba668d has been mined on all nodes
* created instance of contract Kingdom at 0xb3e908596bbaaa27c2f96c0d7d6f30245777ff83

##### Transactions Generated

* [0x8c4351091f5b1cb3ab791325332260e6c5625d15a73178c05f1f7c6911ba668d](http://testnet.etherscan.io/tx/0x8c4351091f5b1cb3ab791325332260e6c5625d15a73178c05f1f7c6911ba668d)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x70f84ca69b183273054123f9d03b30573bb0114bfb565fb85d2f011ba2c755a4
* need to wait for txn 0x1fe6431bd90a3a56a1219b01a8a2b37ee21b17159d4f2ff2724c2b98afba8308
* txn 0x70f84ca69b183273054123f9d03b30573bb0114bfb565fb85d2f011ba2c755a4 has been mined on all nodes
* created instance of contract Kingdom at 0x4c3a07007129b59f6a4b4efe8fd906f2e6c5e935
* txn 0x1fe6431bd90a3a56a1219b01a8a2b37ee21b17159d4f2ff2724c2b98afba8308 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xa2e4044246fafcb4373f6951b34405e2bab28b3c230c626cae94c27a6c275dba
* txn 0xa2e4044246fafcb4373f6951b34405e2bab28b3c230c626cae94c27a6c275dba has been mined on all nodes

##### Transactions Generated

* [0x70f84ca69b183273054123f9d03b30573bb0114bfb565fb85d2f011ba2c755a4](http://testnet.etherscan.io/tx/0x70f84ca69b183273054123f9d03b30573bb0114bfb565fb85d2f011ba2c755a4)
* [0x1fe6431bd90a3a56a1219b01a8a2b37ee21b17159d4f2ff2724c2b98afba8308](http://testnet.etherscan.io/tx/0x1fe6431bd90a3a56a1219b01a8a2b37ee21b17159d4f2ff2724c2b98afba8308)
* [0xa2e4044246fafcb4373f6951b34405e2bab28b3c230c626cae94c27a6c275dba](http://testnet.etherscan.io/tx/0xa2e4044246fafcb4373f6951b34405e2bab28b3c230c626cae94c27a6c275dba)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x60ed5ece8b5455877100581c690ce7e459f9b147951f5a9cccbaee921bcdc4d3
* need to wait for txn 0x46aca0ca6a3883c79eb88137a4b6f15f36393f1dee717b2843e156a0ba41a2b0
* need to wait for txn 0x4db02afd83b87be9973b1eebf7f12943faf7f557700b8cbb999dca6e4d0de3f8
* txn 0x60ed5ece8b5455877100581c690ce7e459f9b147951f5a9cccbaee921bcdc4d3 has been mined on all nodes
* created instance of contract Kingdom at 0x7c377f9a9750f8280aee64045e44d0ab24051cb9
* txn 0x46aca0ca6a3883c79eb88137a4b6f15f36393f1dee717b2843e156a0ba41a2b0 has been mined on all nodes
* txn 0x4db02afd83b87be9973b1eebf7f12943faf7f557700b8cbb999dca6e4d0de3f8 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x6f79090fa98b5e1af74b8490cba52a0a55924320d34dc17fa36ab0d8c6b6fbc7
* txn 0x6f79090fa98b5e1af74b8490cba52a0a55924320d34dc17fa36ab0d8c6b6fbc7 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xbcdd103d429e5617dd784266c851e53efb71d6758bc57b09f61d509f7c201d32
* txn 0xbcdd103d429e5617dd784266c851e53efb71d6758bc57b09f61d509f7c201d32 has been mined on all nodes

##### Transactions Generated

* [0x60ed5ece8b5455877100581c690ce7e459f9b147951f5a9cccbaee921bcdc4d3](http://testnet.etherscan.io/tx/0x60ed5ece8b5455877100581c690ce7e459f9b147951f5a9cccbaee921bcdc4d3)
* [0x46aca0ca6a3883c79eb88137a4b6f15f36393f1dee717b2843e156a0ba41a2b0](http://testnet.etherscan.io/tx/0x46aca0ca6a3883c79eb88137a4b6f15f36393f1dee717b2843e156a0ba41a2b0)
* [0x4db02afd83b87be9973b1eebf7f12943faf7f557700b8cbb999dca6e4d0de3f8](http://testnet.etherscan.io/tx/0x4db02afd83b87be9973b1eebf7f12943faf7f557700b8cbb999dca6e4d0de3f8)
* [0x6f79090fa98b5e1af74b8490cba52a0a55924320d34dc17fa36ab0d8c6b6fbc7](http://testnet.etherscan.io/tx/0x6f79090fa98b5e1af74b8490cba52a0a55924320d34dc17fa36ab0d8c6b6fbc7)
* [0xbcdd103d429e5617dd784266c851e53efb71d6758bc57b09f61d509f7c201d32](http://testnet.etherscan.io/tx/0xbcdd103d429e5617dd784266c851e53efb71d6758bc57b09f61d509f7c201d32)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
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

* need to wait for txn 0x876cb4b77fb0d158e893590a5bb1ca0c273ee8272149e75de78a77d0c6735fca
* need to wait for txn 0xca639b135e1b3a63b6709d004358105b4a8b2200562ab4f1972388d07b35d892
* need to wait for txn 0x72b472f4bd55f4a6cddaea856350479d11b0702361b5ec7630c3bf7d09b89ba9
* txn 0x876cb4b77fb0d158e893590a5bb1ca0c273ee8272149e75de78a77d0c6735fca has been mined on all nodes
* created instance of contract Kingdom at 0x92eca9353ff488150e61539aa67f0406bf152633
* txn 0xca639b135e1b3a63b6709d004358105b4a8b2200562ab4f1972388d07b35d892 has been mined on all nodes
* txn 0x72b472f4bd55f4a6cddaea856350479d11b0702361b5ec7630c3bf7d09b89ba9 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xd8dd6a04feb969250bf2e5254c504c7e4d32ef96d1c1c10b745905024ab9c6d9
* txn 0xd8dd6a04feb969250bf2e5254c504c7e4d32ef96d1c1c10b745905024ab9c6d9 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x56cf02651ab231e7e54b7dbd3294a4226a61fcc9313e029168a7d7c1843e0167
* txn 0x56cf02651ab231e7e54b7dbd3294a4226a61fcc9313e029168a7d7c1843e0167 has been mined on all nodes

##### Transactions Generated

* [0x876cb4b77fb0d158e893590a5bb1ca0c273ee8272149e75de78a77d0c6735fca](http://testnet.etherscan.io/tx/0x876cb4b77fb0d158e893590a5bb1ca0c273ee8272149e75de78a77d0c6735fca)
* [0xca639b135e1b3a63b6709d004358105b4a8b2200562ab4f1972388d07b35d892](http://testnet.etherscan.io/tx/0xca639b135e1b3a63b6709d004358105b4a8b2200562ab4f1972388d07b35d892)
* [0x72b472f4bd55f4a6cddaea856350479d11b0702361b5ec7630c3bf7d09b89ba9](http://testnet.etherscan.io/tx/0x72b472f4bd55f4a6cddaea856350479d11b0702361b5ec7630c3bf7d09b89ba9)
* [0xd8dd6a04feb969250bf2e5254c504c7e4d32ef96d1c1c10b745905024ab9c6d9](http://testnet.etherscan.io/tx/0xd8dd6a04feb969250bf2e5254c504c7e4d32ef96d1c1c10b745905024ab9c6d9)
* [0x56cf02651ab231e7e54b7dbd3294a4226a61fcc9313e029168a7d7c1843e0167](http://testnet.etherscan.io/tx/0x56cf02651ab231e7e54b7dbd3294a4226a61fcc9313e029168a7d7c1843e0167)

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

* need to wait for txn 0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850
* need to wait for txn 0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3
* need to wait for txn 0x877bb669a5e57101ce2981dd2c023fb8397ff43aec198102c463659f0c3149eb
* txn 0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850 has been mined on all nodes
* txn 0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3 has been mined on all nodes
* txn 0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850 has been mined on all nodes
* txn 0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3 has been mined on all nodes
* txn 0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850 has been mined on all nodes
* txn 0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3 has been mined on all nodes
* txn 0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850 has been mined on all nodes
* txn 0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3 has been mined on all nodes
* txn 0x877bb669a5e57101ce2981dd2c023fb8397ff43aec198102c463659f0c3149eb has been mined on all nodes
* txn 0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850 has been mined on all nodes
* txn 0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3 has been mined on all nodes
* txn 0x877bb669a5e57101ce2981dd2c023fb8397ff43aec198102c463659f0c3149eb has been mined on all nodes
* created instance of contract Kingdom at 0xe81ac8f5e3fe7c1519317212b12bcc8d36ce9d4c
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x365787a9a9ea1c3db427e5c6a8333ea7d5ffa16ae25c5ba5c05338f2531f97e1
* txn 0x365787a9a9ea1c3db427e5c6a8333ea7d5ffa16ae25c5ba5c05338f2531f97e1 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x33563b2207439e30ff15a8e7d6c2e39c304f2f2506f146c468e4e243e4e58120
* txn 0x33563b2207439e30ff15a8e7d6c2e39c304f2f2506f146c468e4e243e4e58120 has been mined on all nodes

##### Transactions Generated

* [0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850](http://testnet.etherscan.io/tx/0x9551649b7addfc8a8fb3b6334900ad9a5414ffcb8fb423dd0726c1add42e6850)
* [0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3](http://testnet.etherscan.io/tx/0x35df360a18dafe4722c8f368569ab82d0335e88900a29a8a6f7499d8436542f3)
* [0x877bb669a5e57101ce2981dd2c023fb8397ff43aec198102c463659f0c3149eb](http://testnet.etherscan.io/tx/0x877bb669a5e57101ce2981dd2c023fb8397ff43aec198102c463659f0c3149eb)
* [0x365787a9a9ea1c3db427e5c6a8333ea7d5ffa16ae25c5ba5c05338f2531f97e1](http://testnet.etherscan.io/tx/0x365787a9a9ea1c3db427e5c6a8333ea7d5ffa16ae25c5ba5c05338f2531f97e1)
* [0x33563b2207439e30ff15a8e7d6c2e39c304f2f2506f146c468e4e243e4e58120](http://testnet.etherscan.io/tx/0x33563b2207439e30ff15a8e7d6c2e39c304f2f2506f146c468e4e243e4e58120)

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

* need to wait for txn 0x47dc7f1ff604d93cdc7a4161c8ee5e4a797d239017a849e19fb05a1963bf0fb8
* need to wait for txn 0x86c85c89863ea94c24adca8413a4507c8ecfcdc99aa16e9db584836000b64447
* need to wait for txn 0x03d785e50b8a8767f3c7c9cbe14dfe4559d9324241cca63b45a565bac0fd3322
* txn 0x47dc7f1ff604d93cdc7a4161c8ee5e4a797d239017a849e19fb05a1963bf0fb8 has been mined on all nodes
* created instance of contract Kingdom at 0xc5671844d7fe56a6dcc3b3a3d7ab951461c8d7cb
* txn 0x86c85c89863ea94c24adca8413a4507c8ecfcdc99aa16e9db584836000b64447 has been mined on all nodes
* txn 0x03d785e50b8a8767f3c7c9cbe14dfe4559d9324241cca63b45a565bac0fd3322 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x0bff274a294a9053f0b556338a8b1a7d3eacc3f7dd7cea45ddec28d08d043cd3
* txn 0x0bff274a294a9053f0b556338a8b1a7d3eacc3f7dd7cea45ddec28d08d043cd3 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xbb9d5a882348a2f95a8fbce3251f290cc09c4342190804581cbb24d201b3d936
* txn 0xbb9d5a882348a2f95a8fbce3251f290cc09c4342190804581cbb24d201b3d936 has been mined on all nodes

##### Transactions Generated

* [0x47dc7f1ff604d93cdc7a4161c8ee5e4a797d239017a849e19fb05a1963bf0fb8](http://testnet.etherscan.io/tx/0x47dc7f1ff604d93cdc7a4161c8ee5e4a797d239017a849e19fb05a1963bf0fb8)
* [0x86c85c89863ea94c24adca8413a4507c8ecfcdc99aa16e9db584836000b64447](http://testnet.etherscan.io/tx/0x86c85c89863ea94c24adca8413a4507c8ecfcdc99aa16e9db584836000b64447)
* [0x03d785e50b8a8767f3c7c9cbe14dfe4559d9324241cca63b45a565bac0fd3322](http://testnet.etherscan.io/tx/0x03d785e50b8a8767f3c7c9cbe14dfe4559d9324241cca63b45a565bac0fd3322)
* [0x0bff274a294a9053f0b556338a8b1a7d3eacc3f7dd7cea45ddec28d08d043cd3](http://testnet.etherscan.io/tx/0x0bff274a294a9053f0b556338a8b1a7d3eacc3f7dd7cea45ddec28d08d043cd3)
* [0xbb9d5a882348a2f95a8fbce3251f290cc09c4342190804581cbb24d201b3d936](http://testnet.etherscan.io/tx/0xbb9d5a882348a2f95a8fbce3251f290cc09c4342190804581cbb24d201b3d936)

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

* need to wait for txn 0xfb23610337d79be281c6ccbd76321f852c7efa9d37aa4777ce4a12ea067716c9
* need to wait for txn 0xf81175977b9f0b0e7de7f3366661f0628b02e947703c7b1aa24cfab49325c209
* txn 0xfb23610337d79be281c6ccbd76321f852c7efa9d37aa4777ce4a12ea067716c9 has been mined on all nodes
* created instance of contract Kingdom at 0x05f1b62d4c132983c63849e5e2ca92fc82e89f1a
* txn 0xf81175977b9f0b0e7de7f3366661f0628b02e947703c7b1aa24cfab49325c209 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x346c63ddd6d38530421183ca9684f989395637b87966f5cc4c29c3cc32b5d5df
* txn 0x346c63ddd6d38530421183ca9684f989395637b87966f5cc4c29c3cc32b5d5df has been mined on all nodes

##### Transactions Generated

* [0xfb23610337d79be281c6ccbd76321f852c7efa9d37aa4777ce4a12ea067716c9](http://testnet.etherscan.io/tx/0xfb23610337d79be281c6ccbd76321f852c7efa9d37aa4777ce4a12ea067716c9)
* [0xf81175977b9f0b0e7de7f3366661f0628b02e947703c7b1aa24cfab49325c209](http://testnet.etherscan.io/tx/0xf81175977b9f0b0e7de7f3366661f0628b02e947703c7b1aa24cfab49325c209)
* [0x346c63ddd6d38530421183ca9684f989395637b87966f5cc4c29c3cc32b5d5df](http://testnet.etherscan.io/tx/0x346c63ddd6d38530421183ca9684f989395637b87966f5cc4c29c3cc32b5d5df)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x0c578ac55abb1a0214c091cb6962e0b9176cdfb46b1bbf04877a5477c7b5f44e
* need to wait for txn 0xd512be4749925f3227dd4ddcba18532efc9bc7b35970d7ee40405efb6e1b8c9e
* need to wait for txn 0x686aaf33514345b7996b381fa4cba753fd3aca8c36dbdf20f49f7bab69addcf6
* txn 0x0c578ac55abb1a0214c091cb6962e0b9176cdfb46b1bbf04877a5477c7b5f44e has been mined on all nodes
* txn 0x0c578ac55abb1a0214c091cb6962e0b9176cdfb46b1bbf04877a5477c7b5f44e has been mined on all nodes
* created instance of contract Kingdom at 0xeede55f2f8df1c9fd127bb7dc5b369e1acd80bb1
* txn 0xd512be4749925f3227dd4ddcba18532efc9bc7b35970d7ee40405efb6e1b8c9e has been mined on all nodes
* txn 0x686aaf33514345b7996b381fa4cba753fd3aca8c36dbdf20f49f7bab69addcf6 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x98d53e6b9ee4b79f70a53066d216542440f168849a43c626cd8be288d7283cf1
* txn 0x98d53e6b9ee4b79f70a53066d216542440f168849a43c626cd8be288d7283cf1 has been mined on all nodes
* expect curse to kick in by 1469902455 based on 1469902275 180
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x73b34b33b51a9a955ba4d1b1e1c7245119dcd9fec6053a2b590d7a3be4447b52
* txn 0x73b34b33b51a9a955ba4d1b1e1c7245119dcd9fec6053a2b590d7a3be4447b52 has been mined on all nodes

##### Transactions Generated

* [0x0c578ac55abb1a0214c091cb6962e0b9176cdfb46b1bbf04877a5477c7b5f44e](http://testnet.etherscan.io/tx/0x0c578ac55abb1a0214c091cb6962e0b9176cdfb46b1bbf04877a5477c7b5f44e)
* [0xd512be4749925f3227dd4ddcba18532efc9bc7b35970d7ee40405efb6e1b8c9e](http://testnet.etherscan.io/tx/0xd512be4749925f3227dd4ddcba18532efc9bc7b35970d7ee40405efb6e1b8c9e)
* [0x686aaf33514345b7996b381fa4cba753fd3aca8c36dbdf20f49f7bab69addcf6](http://testnet.etherscan.io/tx/0x686aaf33514345b7996b381fa4cba753fd3aca8c36dbdf20f49f7bab69addcf6)
* [0x98d53e6b9ee4b79f70a53066d216542440f168849a43c626cd8be288d7283cf1](http://testnet.etherscan.io/tx/0x98d53e6b9ee4b79f70a53066d216542440f168849a43c626cd8be288d7283cf1)
* [0x73b34b33b51a9a955ba4d1b1e1c7245119dcd9fec6053a2b590d7a3be4447b52](http://testnet.etherscan.io/tx/0x73b34b33b51a9a955ba4d1b1e1c7245119dcd9fec6053a2b590d7a3be4447b52)

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

* need to wait for txn 0xaa62f620164db44071a75c61ff48dbeec07338080f8b59fd5df45eebfd236d7b
* need to wait for txn 0xbe21a31283014888a82bf2b62a947994f3ec7caca140bc4489cee8322fbdaa61
* txn 0xaa62f620164db44071a75c61ff48dbeec07338080f8b59fd5df45eebfd236d7b has been mined on all nodes
* created instance of contract Kingdom at 0xc884bb58f87d2808f8a434db14482f0fbffdd568
* txn 0xbe21a31283014888a82bf2b62a947994f3ec7caca140bc4489cee8322fbdaa61 has been mined on all nodes
* need to wait for txn 0x63084114eb246e4cc282f9e7e72932c320265c4ba5728291a73f5557faf70a51
* txn 0x63084114eb246e4cc282f9e7e72932c320265c4ba5728291a73f5557faf70a51 has been mined on all nodes

##### Transactions Generated

* [0xaa62f620164db44071a75c61ff48dbeec07338080f8b59fd5df45eebfd236d7b](http://testnet.etherscan.io/tx/0xaa62f620164db44071a75c61ff48dbeec07338080f8b59fd5df45eebfd236d7b)
* [0xbe21a31283014888a82bf2b62a947994f3ec7caca140bc4489cee8322fbdaa61](http://testnet.etherscan.io/tx/0xbe21a31283014888a82bf2b62a947994f3ec7caca140bc4489cee8322fbdaa61)
* [0x63084114eb246e4cc282f9e7e72932c320265c4ba5728291a73f5557faf70a51](http://testnet.etherscan.io/tx/0x63084114eb246e4cc282f9e7e72932c320265c4ba5728291a73f5557faf70a51)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3044c5a8c8f195a391dc58ab712f2d76de7a3740ca3b4539dadfb83c3e3652ae
* need to wait for txn 0x8b72de5a90596de1acda946f9b2629a4e4e24cbe6af316816fd47733e5f0cb84
* txn 0x3044c5a8c8f195a391dc58ab712f2d76de7a3740ca3b4539dadfb83c3e3652ae has been mined on all nodes
* created instance of contract Kingdom at 0xe75fa7aee77ffd884cdee03d125e5972654ae7b4
* txn 0x8b72de5a90596de1acda946f9b2629a4e4e24cbe6af316816fd47733e5f0cb84 has been mined on all nodes
* need to wait for txn 0x55ba4f6486bfbeef79ddc2212d725d91e08d81a4dddb0a3df7901180243033a6
* txn 0x55ba4f6486bfbeef79ddc2212d725d91e08d81a4dddb0a3df7901180243033a6 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x91cab4b859c7d8a733083b0c100e1944f7eb5d06
* need to wait for txn 0x14c243084933b775c209292c43007982bcaeab12a4daf768295831f60d200e51
* txn 0x14c243084933b775c209292c43007982bcaeab12a4daf768295831f60d200e51 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x4bcd4015d6331e3435fe6e82fce59e1b17f0c956051f6b679812b42b94abc68a
* txn 0x4bcd4015d6331e3435fe6e82fce59e1b17f0c956051f6b679812b42b94abc68a has been mined on all nodes

##### Transactions Generated

* [0x3044c5a8c8f195a391dc58ab712f2d76de7a3740ca3b4539dadfb83c3e3652ae](http://testnet.etherscan.io/tx/0x3044c5a8c8f195a391dc58ab712f2d76de7a3740ca3b4539dadfb83c3e3652ae)
* [0x8b72de5a90596de1acda946f9b2629a4e4e24cbe6af316816fd47733e5f0cb84](http://testnet.etherscan.io/tx/0x8b72de5a90596de1acda946f9b2629a4e4e24cbe6af316816fd47733e5f0cb84)
* [0x55ba4f6486bfbeef79ddc2212d725d91e08d81a4dddb0a3df7901180243033a6](http://testnet.etherscan.io/tx/0x55ba4f6486bfbeef79ddc2212d725d91e08d81a4dddb0a3df7901180243033a6)
* [0x14c243084933b775c209292c43007982bcaeab12a4daf768295831f60d200e51](http://testnet.etherscan.io/tx/0x14c243084933b775c209292c43007982bcaeab12a4daf768295831f60d200e51)
* [0x4bcd4015d6331e3435fe6e82fce59e1b17f0c956051f6b679812b42b94abc68a](http://testnet.etherscan.io/tx/0x4bcd4015d6331e3435fe6e82fce59e1b17f0c956051f6b679812b42b94abc68a)

##### Contract Events

* WalletCreated(by=0x1c222d814acc0fb170781ab43021957038c0995b,)
* DepositMade(from=0x1c222d814acc0fb170781ab43021957038c0995b,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0xe75fa7aee77ffd884cdee03d125e5972654ae7b4,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb27d39489cd56597c0d36fb342cc5dd645840715718159a6444ff61bd2d7cb09
* need to wait for txn 0xc5ae00ec5ef9acf6e27a9bd95228313a4ae9c1036438196f93abf8a570c2d7f1
* need to wait for txn 0x047442fa61d240a4301a2c0c7402b1f5e47b6456b2f128442082f820153a3640
* txn 0xb27d39489cd56597c0d36fb342cc5dd645840715718159a6444ff61bd2d7cb09 has been mined on all nodes
* created instance of contract Kingdom at 0xa47c6a194914941f0b480192a33355713cbc490d
* txn 0xc5ae00ec5ef9acf6e27a9bd95228313a4ae9c1036438196f93abf8a570c2d7f1 has been mined on all nodes
* txn 0x047442fa61d240a4301a2c0c7402b1f5e47b6456b2f128442082f820153a3640 has been mined on all nodes
* need to wait for txn 0x1e24c6e55a267f163ec0352a7d0f937dd85694a6893d3bfa166d5fc4a0f5ce4f
* txn 0x1e24c6e55a267f163ec0352a7d0f937dd85694a6893d3bfa166d5fc4a0f5ce4f has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xe77ff6408af5922d89b63872ea0db3a9cd6b80c9
* need to wait for txn 0xe56b0091976aa82b383a16ee06dfc725c210108fc918af25745242587be2dc23
* txn 0xe56b0091976aa82b383a16ee06dfc725c210108fc918af25745242587be2dc23 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x49a8cefa636ad11078916aca1a66957857db22c082690a7e9a025d19d0ad6539
* txn 0x49a8cefa636ad11078916aca1a66957857db22c082690a7e9a025d19d0ad6539 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x1ded786d176f325450e3ee37e935787e5ed5740865f3af5718283cbc338ad336
* txn 0x1ded786d176f325450e3ee37e935787e5ed5740865f3af5718283cbc338ad336 has been mined on all nodes

##### Transactions Generated

* [0xb27d39489cd56597c0d36fb342cc5dd645840715718159a6444ff61bd2d7cb09](http://testnet.etherscan.io/tx/0xb27d39489cd56597c0d36fb342cc5dd645840715718159a6444ff61bd2d7cb09)
* [0xc5ae00ec5ef9acf6e27a9bd95228313a4ae9c1036438196f93abf8a570c2d7f1](http://testnet.etherscan.io/tx/0xc5ae00ec5ef9acf6e27a9bd95228313a4ae9c1036438196f93abf8a570c2d7f1)
* [0x047442fa61d240a4301a2c0c7402b1f5e47b6456b2f128442082f820153a3640](http://testnet.etherscan.io/tx/0x047442fa61d240a4301a2c0c7402b1f5e47b6456b2f128442082f820153a3640)
* [0x1e24c6e55a267f163ec0352a7d0f937dd85694a6893d3bfa166d5fc4a0f5ce4f](http://testnet.etherscan.io/tx/0x1e24c6e55a267f163ec0352a7d0f937dd85694a6893d3bfa166d5fc4a0f5ce4f)
* [0xe56b0091976aa82b383a16ee06dfc725c210108fc918af25745242587be2dc23](http://testnet.etherscan.io/tx/0xe56b0091976aa82b383a16ee06dfc725c210108fc918af25745242587be2dc23)
* [0x49a8cefa636ad11078916aca1a66957857db22c082690a7e9a025d19d0ad6539](http://testnet.etherscan.io/tx/0x49a8cefa636ad11078916aca1a66957857db22c082690a7e9a025d19d0ad6539)
* [0x1ded786d176f325450e3ee37e935787e5ed5740865f3af5718283cbc338ad336](http://testnet.etherscan.io/tx/0x1ded786d176f325450e3ee37e935787e5ed5740865f3af5718283cbc338ad336)

##### Contract Events

* WalletCreated(by=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,)
* DepositMade(from=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0xa47c6a194914941f0b480192a33355713cbc490d,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CompensationSentEvent(toAddress=0xe77ff6408af5922d89b63872ea0db3a9cd6b80c9,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* DepositMade(from=0xd65626af5bdd66de88991bac45598ac8eba904ec,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xe6ee688d8a62956d3b292e550940f724a48c7e582c555476d0d81d2721136ae7
* need to wait for txn 0xee917b7c0fb8e190c8b3aed352a6ead5ab5e77bc045b65e2437fb23eb88f8824
* need to wait for txn 0x7ac5a3e0c6af6a44cea05a81768bcf83656f92208001b487ce6fc1c10eaf9e3b
* txn 0xe6ee688d8a62956d3b292e550940f724a48c7e582c555476d0d81d2721136ae7 has been mined on all nodes
* created instance of contract Kingdom at 0xd01b3d45e10413dc919e16b9e2a43fd1d90769d1
* txn 0xee917b7c0fb8e190c8b3aed352a6ead5ab5e77bc045b65e2437fb23eb88f8824 has been mined on all nodes
* txn 0x7ac5a3e0c6af6a44cea05a81768bcf83656f92208001b487ce6fc1c10eaf9e3b has been mined on all nodes
* need to wait for txn 0xdb0666d1706ee85f0f1245498821a512ffd795c6433c5d59e4dbe53270b809d4
* txn 0xdb0666d1706ee85f0f1245498821a512ffd795c6433c5d59e4dbe53270b809d4 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xb87fe3c75dde1dde4488441ddbb1c200bb0ddb2a
* need to wait for txn 0x1ec9109fbf6263bcfe3b5ecc7b562dd5f500c3700afe14a598f03c457ea1e2f6
* txn 0x1ec9109fbf6263bcfe3b5ecc7b562dd5f500c3700afe14a598f03c457ea1e2f6 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x43ee22826dfb94998ce2ad0336537defd6e32b91676e0cbc43d5636296fe123d
* txn 0x43ee22826dfb94998ce2ad0336537defd6e32b91676e0cbc43d5636296fe123d has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xa362d0cdceb0ede559283f1fdadd0037712c01992d483dbdb66b209d1e4a9aa6
* txn 0xa362d0cdceb0ede559283f1fdadd0037712c01992d483dbdb66b209d1e4a9aa6 has been mined on all nodes

##### Transactions Generated

* [0xe6ee688d8a62956d3b292e550940f724a48c7e582c555476d0d81d2721136ae7](http://testnet.etherscan.io/tx/0xe6ee688d8a62956d3b292e550940f724a48c7e582c555476d0d81d2721136ae7)
* [0xee917b7c0fb8e190c8b3aed352a6ead5ab5e77bc045b65e2437fb23eb88f8824](http://testnet.etherscan.io/tx/0xee917b7c0fb8e190c8b3aed352a6ead5ab5e77bc045b65e2437fb23eb88f8824)
* [0x7ac5a3e0c6af6a44cea05a81768bcf83656f92208001b487ce6fc1c10eaf9e3b](http://testnet.etherscan.io/tx/0x7ac5a3e0c6af6a44cea05a81768bcf83656f92208001b487ce6fc1c10eaf9e3b)
* [0xdb0666d1706ee85f0f1245498821a512ffd795c6433c5d59e4dbe53270b809d4](http://testnet.etherscan.io/tx/0xdb0666d1706ee85f0f1245498821a512ffd795c6433c5d59e4dbe53270b809d4)
* [0x1ec9109fbf6263bcfe3b5ecc7b562dd5f500c3700afe14a598f03c457ea1e2f6](http://testnet.etherscan.io/tx/0x1ec9109fbf6263bcfe3b5ecc7b562dd5f500c3700afe14a598f03c457ea1e2f6)
* [0x43ee22826dfb94998ce2ad0336537defd6e32b91676e0cbc43d5636296fe123d](http://testnet.etherscan.io/tx/0x43ee22826dfb94998ce2ad0336537defd6e32b91676e0cbc43d5636296fe123d)
* [0xa362d0cdceb0ede559283f1fdadd0037712c01992d483dbdb66b209d1e4a9aa6](http://testnet.etherscan.io/tx/0xa362d0cdceb0ede559283f1fdadd0037712c01992d483dbdb66b209d1e4a9aa6)

##### Contract Events

* WalletCreated(by=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,)
* DepositMade(from=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0xd01b3d45e10413dc919e16b9e2a43fd1d90769d1,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0xb87fe3c75dde1dde4488441ddbb1c200bb0ddb2a,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb3e4679cdd86834b669023d55c921068e83f1996b8fe1753c9744311116d6b36
* need to wait for txn 0xca541e6e6da42216367c720397ba25341c159754bde138fb38ecfad6828dcd1f
* need to wait for txn 0x0044b709a94ef753c50290f62c76d309e841285a5923fed79bb17c40049ae510
* txn 0xb3e4679cdd86834b669023d55c921068e83f1996b8fe1753c9744311116d6b36 has been mined on all nodes
* created instance of contract Kingdom at 0xc9470eccbcc598f683b5e818f6fb4774e4c73d7b
* txn 0xca541e6e6da42216367c720397ba25341c159754bde138fb38ecfad6828dcd1f has been mined on all nodes
* txn 0x0044b709a94ef753c50290f62c76d309e841285a5923fed79bb17c40049ae510 has been mined on all nodes
* need to wait for txn 0x0d59102a64ed24e87debce6030864a622009d5c8dd2e33b263c2b0d570a7b572
* txn 0x0d59102a64ed24e87debce6030864a622009d5c8dd2e33b263c2b0d570a7b572 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x561799b4ae9b91da1f9b6d079eac275b1b30b92e
* need to wait for txn 0xc781a1e582907a135c5b8908465b9f4e921c37c2ee113752ad468a844e8e1991
* txn 0xc781a1e582907a135c5b8908465b9f4e921c37c2ee113752ad468a844e8e1991 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xe51fdac36391bff6f6272ae01957c7e3d4c11fde03aa991aa0b3f63ac096a862
* txn 0xe51fdac36391bff6f6272ae01957c7e3d4c11fde03aa991aa0b3f63ac096a862 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x06dedd989343ac0128585fbc3f53b650b47885e85ee5f42f9fd6b1ac1976ce68
* txn 0x06dedd989343ac0128585fbc3f53b650b47885e85ee5f42f9fd6b1ac1976ce68 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0xe188a498ea18d6cdd3b963cdef585d2e7fdf26627e4e75a07b886a42465052a9
* txn 0xe188a498ea18d6cdd3b963cdef585d2e7fdf26627e4e75a07b886a42465052a9 has been mined on all nodes

##### Transactions Generated

* [0xb3e4679cdd86834b669023d55c921068e83f1996b8fe1753c9744311116d6b36](http://testnet.etherscan.io/tx/0xb3e4679cdd86834b669023d55c921068e83f1996b8fe1753c9744311116d6b36)
* [0xca541e6e6da42216367c720397ba25341c159754bde138fb38ecfad6828dcd1f](http://testnet.etherscan.io/tx/0xca541e6e6da42216367c720397ba25341c159754bde138fb38ecfad6828dcd1f)
* [0x0044b709a94ef753c50290f62c76d309e841285a5923fed79bb17c40049ae510](http://testnet.etherscan.io/tx/0x0044b709a94ef753c50290f62c76d309e841285a5923fed79bb17c40049ae510)
* [0x0d59102a64ed24e87debce6030864a622009d5c8dd2e33b263c2b0d570a7b572](http://testnet.etherscan.io/tx/0x0d59102a64ed24e87debce6030864a622009d5c8dd2e33b263c2b0d570a7b572)
* [0xc781a1e582907a135c5b8908465b9f4e921c37c2ee113752ad468a844e8e1991](http://testnet.etherscan.io/tx/0xc781a1e582907a135c5b8908465b9f4e921c37c2ee113752ad468a844e8e1991)
* [0xe51fdac36391bff6f6272ae01957c7e3d4c11fde03aa991aa0b3f63ac096a862](http://testnet.etherscan.io/tx/0xe51fdac36391bff6f6272ae01957c7e3d4c11fde03aa991aa0b3f63ac096a862)
* [0x06dedd989343ac0128585fbc3f53b650b47885e85ee5f42f9fd6b1ac1976ce68](http://testnet.etherscan.io/tx/0x06dedd989343ac0128585fbc3f53b650b47885e85ee5f42f9fd6b1ac1976ce68)
* [0xe188a498ea18d6cdd3b963cdef585d2e7fdf26627e4e75a07b886a42465052a9](http://testnet.etherscan.io/tx/0xe188a498ea18d6cdd3b963cdef585d2e7fdf26627e4e75a07b886a42465052a9)

##### Contract Events

* WalletCreated(by=0x5845ebff39c116f6634337b867bd32ab4d74c193,)
* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0xc9470eccbcc598f683b5e818f6fb4774e4c73d7b,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x561799b4ae9b91da1f9b6d079eac275b1b30b92e,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* FundsWithdrawnEvent(fromAddress=0x561799b4ae9b91da1f9b6d079eac275b1b30b92e,toAddress=0x561799b4ae9b91da1f9b6d079eac275b1b30b92e,valueWei=1470000000000000000,)
* DepositMade(from=0x5845ebff39c116f6634337b867bd32ab4d74c193,value=1470000000000000000,)
* WithdrawalMade(to=0xc9470eccbcc598f683b5e818f6fb4774e4c73d7b,value=0,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xc45c4dcfff2abc41bc8264ec2d13ad582a4f15be404261955f6e74851f43ba09
* need to wait for txn 0xe7e15d95d2582cbfaa1046bd5422476accbc3a5cfc56d694297c22dbb1cc338c
* need to wait for txn 0xb5d2cf9124608a91905624d38c72cbf44307c2a4bae697c3f1814ea3065fe4cd
* txn 0xc45c4dcfff2abc41bc8264ec2d13ad582a4f15be404261955f6e74851f43ba09 has been mined on all nodes
* created instance of contract Kingdom at 0x5752b8fc40bc04696ea37b4931e66155442c9c2c
* txn 0xe7e15d95d2582cbfaa1046bd5422476accbc3a5cfc56d694297c22dbb1cc338c has been mined on all nodes
* txn 0xb5d2cf9124608a91905624d38c72cbf44307c2a4bae697c3f1814ea3065fe4cd has been mined on all nodes
* need to wait for txn 0x8e5330c3ab0b820dc745bf8b98dcdac899323428888be2680aa4a63a090ead1b
* txn 0x8e5330c3ab0b820dc745bf8b98dcdac899323428888be2680aa4a63a090ead1b has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x47362fb8f227e770c5bbc52c5eee478f70541925
* need to wait for txn 0x380c12872d2494c5fc5c9fdfc3811567f6242bdad050f6dde5a602261c011021
* txn 0x380c12872d2494c5fc5c9fdfc3811567f6242bdad050f6dde5a602261c011021 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xf760600bf00f85f6854073ae5232fe84e572c452bea568a2b3d8fb38dd8609f5
* txn 0xf760600bf00f85f6854073ae5232fe84e572c452bea568a2b3d8fb38dd8609f5 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x1bc56bffaefe0605c241b4d872ecfa5aec0715d37e2a2b96670963af0f32b14f
* txn 0x1bc56bffaefe0605c241b4d872ecfa5aec0715d37e2a2b96670963af0f32b14f has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0xa4d92cdcdf56d82c9f264857faff08e832912fa08a25c8cdc93c7811866593ee
* txn 0xa4d92cdcdf56d82c9f264857faff08e832912fa08a25c8cdc93c7811866593ee has been mined on all nodes

##### Transactions Generated

* [0xc45c4dcfff2abc41bc8264ec2d13ad582a4f15be404261955f6e74851f43ba09](http://testnet.etherscan.io/tx/0xc45c4dcfff2abc41bc8264ec2d13ad582a4f15be404261955f6e74851f43ba09)
* [0xe7e15d95d2582cbfaa1046bd5422476accbc3a5cfc56d694297c22dbb1cc338c](http://testnet.etherscan.io/tx/0xe7e15d95d2582cbfaa1046bd5422476accbc3a5cfc56d694297c22dbb1cc338c)
* [0xb5d2cf9124608a91905624d38c72cbf44307c2a4bae697c3f1814ea3065fe4cd](http://testnet.etherscan.io/tx/0xb5d2cf9124608a91905624d38c72cbf44307c2a4bae697c3f1814ea3065fe4cd)
* [0x8e5330c3ab0b820dc745bf8b98dcdac899323428888be2680aa4a63a090ead1b](http://testnet.etherscan.io/tx/0x8e5330c3ab0b820dc745bf8b98dcdac899323428888be2680aa4a63a090ead1b)
* [0x380c12872d2494c5fc5c9fdfc3811567f6242bdad050f6dde5a602261c011021](http://testnet.etherscan.io/tx/0x380c12872d2494c5fc5c9fdfc3811567f6242bdad050f6dde5a602261c011021)
* [0xf760600bf00f85f6854073ae5232fe84e572c452bea568a2b3d8fb38dd8609f5](http://testnet.etherscan.io/tx/0xf760600bf00f85f6854073ae5232fe84e572c452bea568a2b3d8fb38dd8609f5)
* [0x1bc56bffaefe0605c241b4d872ecfa5aec0715d37e2a2b96670963af0f32b14f](http://testnet.etherscan.io/tx/0x1bc56bffaefe0605c241b4d872ecfa5aec0715d37e2a2b96670963af0f32b14f)
* [0xa4d92cdcdf56d82c9f264857faff08e832912fa08a25c8cdc93c7811866593ee](http://testnet.etherscan.io/tx/0xa4d92cdcdf56d82c9f264857faff08e832912fa08a25c8cdc93c7811866593ee)

##### Contract Events

* WalletCreated(by=0x1c6ad57defb1cd81c183046995ededb3b3e78392,)
* DepositMade(from=0x1c6ad57defb1cd81c183046995ededb3b3e78392,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0x5752b8fc40bc04696ea37b4931e66155442c9c2c,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x47362fb8f227e770c5bbc52c5eee478f70541925,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* WithdrawalMade(to=0x5752b8fc40bc04696ea37b4931e66155442c9c2c,value=0,)

### Test - "Cannot successfully withdraw failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xe61557f1bd91c5afc0de5f5733a7e6debd70d416068dd7ebbe85de15e173a11c
* need to wait for txn 0x27cb0856cb570a8dca6891231276a449ea4e9600d7509be9740ef343c62612a3
* need to wait for txn 0x7b96c82ee4b9252938d1328274e25cfdb92ee4ad5b4097fe188c39de5baf984f
* txn 0xe61557f1bd91c5afc0de5f5733a7e6debd70d416068dd7ebbe85de15e173a11c has been mined on all nodes
* created instance of contract Kingdom at 0xc47305aaa5ac66c9e54f2ddfeadad10ac0897a12
* txn 0x27cb0856cb570a8dca6891231276a449ea4e9600d7509be9740ef343c62612a3 has been mined on all nodes
* txn 0x7b96c82ee4b9252938d1328274e25cfdb92ee4ad5b4097fe188c39de5baf984f has been mined on all nodes
* need to wait for txn 0x30db0bfa491b15514a79d9e5b93427662fe87f6da89ffc112425d5a1c3c0d0a0
* txn 0x30db0bfa491b15514a79d9e5b93427662fe87f6da89ffc112425d5a1c3c0d0a0 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x20efa8950ce2966bfaf4f3a144013e43401f336f
* need to wait for txn 0x97b53b93c81ed70ae66880bded1a5de146670b81410805e021fe8112f6f2eff1
* txn 0x97b53b93c81ed70ae66880bded1a5de146670b81410805e021fe8112f6f2eff1 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xc2f76d5e7fa182700f408b54d109856b220f59c78fb50def0b1befbab30e4d31
* txn 0xc2f76d5e7fa182700f408b54d109856b220f59c78fb50def0b1befbab30e4d31 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x46a0382300a93968b1195a87ea9567862d7692e7db87aa9d10588859a137fe54
* txn 0x46a0382300a93968b1195a87ea9567862d7692e7db87aa9d10588859a137fe54 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0x53b641abfa5692c333de62779f6f1afcb7628192960dce19173fb24f6f0b71e4
* txn 0x53b641abfa5692c333de62779f6f1afcb7628192960dce19173fb24f6f0b71e4 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGasAndData on node 1
* need to wait for txn 0x90e37dd5a4e50ea24ec42bdbea37e68df78973184edc13a6cce7147c684b4633
* txn 0x90e37dd5a4e50ea24ec42bdbea37e68df78973184edc13a6cce7147c684b4633 has been mined on all nodes

##### Transactions Generated

* [0xe61557f1bd91c5afc0de5f5733a7e6debd70d416068dd7ebbe85de15e173a11c](http://testnet.etherscan.io/tx/0xe61557f1bd91c5afc0de5f5733a7e6debd70d416068dd7ebbe85de15e173a11c)
* [0x27cb0856cb570a8dca6891231276a449ea4e9600d7509be9740ef343c62612a3](http://testnet.etherscan.io/tx/0x27cb0856cb570a8dca6891231276a449ea4e9600d7509be9740ef343c62612a3)
* [0x7b96c82ee4b9252938d1328274e25cfdb92ee4ad5b4097fe188c39de5baf984f](http://testnet.etherscan.io/tx/0x7b96c82ee4b9252938d1328274e25cfdb92ee4ad5b4097fe188c39de5baf984f)
* [0x30db0bfa491b15514a79d9e5b93427662fe87f6da89ffc112425d5a1c3c0d0a0](http://testnet.etherscan.io/tx/0x30db0bfa491b15514a79d9e5b93427662fe87f6da89ffc112425d5a1c3c0d0a0)
* [0x97b53b93c81ed70ae66880bded1a5de146670b81410805e021fe8112f6f2eff1](http://testnet.etherscan.io/tx/0x97b53b93c81ed70ae66880bded1a5de146670b81410805e021fe8112f6f2eff1)
* [0xc2f76d5e7fa182700f408b54d109856b220f59c78fb50def0b1befbab30e4d31](http://testnet.etherscan.io/tx/0xc2f76d5e7fa182700f408b54d109856b220f59c78fb50def0b1befbab30e4d31)
* [0x46a0382300a93968b1195a87ea9567862d7692e7db87aa9d10588859a137fe54](http://testnet.etherscan.io/tx/0x46a0382300a93968b1195a87ea9567862d7692e7db87aa9d10588859a137fe54)
* [0x53b641abfa5692c333de62779f6f1afcb7628192960dce19173fb24f6f0b71e4](http://testnet.etherscan.io/tx/0x53b641abfa5692c333de62779f6f1afcb7628192960dce19173fb24f6f0b71e4)
* [0x90e37dd5a4e50ea24ec42bdbea37e68df78973184edc13a6cce7147c684b4633](http://testnet.etherscan.io/tx/0x90e37dd5a4e50ea24ec42bdbea37e68df78973184edc13a6cce7147c684b4633)

##### Contract Events

* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* WithdrawalMade(to=0xc47305aaa5ac66c9e54f2ddfeadad10ac0897a12,value=1000000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x20efa8950ce2966bfaf4f3a144013e43401f336f,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* FundsWithdrawnEvent(fromAddress=0x20efa8950ce2966bfaf4f3a144013e43401f336f,toAddress=0x20efa8950ce2966bfaf4f3a144013e43401f336f,valueWei=1470000000000000000,)
* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1470000000000000000,)
* WithdrawalMade(to=0xc47305aaa5ac66c9e54f2ddfeadad10ac0897a12,value=0,)
* WithdrawalMade(to=0xc47305aaa5ac66c9e54f2ddfeadad10ac0897a12,value=0,)

### Test - "Dead monarchs not compensated and cannot resend"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xe721ba4cf11b1b7ea6b05439802464cc88a6a1234f6eecc7f9275b390c9d6a07
* need to wait for txn 0x1a4ce93a33eee2aeb41caa336ffbc68a602a1550c1986d660c6c81d180f50597
* need to wait for txn 0x70609293b1f7e8603bed857a157adad03db0ef73a8b5a1c81209dc3657b137b5
* txn 0xe721ba4cf11b1b7ea6b05439802464cc88a6a1234f6eecc7f9275b390c9d6a07 has been mined on all nodes
* created instance of contract Kingdom at 0xe00db1634ef1f59e9a33845472a0cfd9891835be
* txn 0x1a4ce93a33eee2aeb41caa336ffbc68a602a1550c1986d660c6c81d180f50597 has been mined on all nodes
* txn 0x70609293b1f7e8603bed857a157adad03db0ef73a8b5a1c81209dc3657b137b5 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xf43c50eb40f396e85d6544557875cec757e1ff4e304d7e8d785ced9bf993b9a3
* txn 0xf43c50eb40f396e85d6544557875cec757e1ff4e304d7e8d785ced9bf993b9a3 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xcad0844b52e01608d4cdd3cafbaca2b0b56960532c6b7c859f719bef41a2341a
* txn 0xcad0844b52e01608d4cdd3cafbaca2b0b56960532c6b7c859f719bef41a2341a has been mined on all nodes
* called contract function Kingdom.withdrawFunds on node 1
* need to wait for txn 0x18ea1c75162d7d8433b454cb1b00d31a728d67b4627395c470ed79da171cb7f3
* txn 0x18ea1c75162d7d8433b454cb1b00d31a728d67b4627395c470ed79da171cb7f3 has been mined on all nodes

##### Transactions Generated

* [0xe721ba4cf11b1b7ea6b05439802464cc88a6a1234f6eecc7f9275b390c9d6a07](http://testnet.etherscan.io/tx/0xe721ba4cf11b1b7ea6b05439802464cc88a6a1234f6eecc7f9275b390c9d6a07)
* [0x1a4ce93a33eee2aeb41caa336ffbc68a602a1550c1986d660c6c81d180f50597](http://testnet.etherscan.io/tx/0x1a4ce93a33eee2aeb41caa336ffbc68a602a1550c1986d660c6c81d180f50597)
* [0x70609293b1f7e8603bed857a157adad03db0ef73a8b5a1c81209dc3657b137b5](http://testnet.etherscan.io/tx/0x70609293b1f7e8603bed857a157adad03db0ef73a8b5a1c81209dc3657b137b5)
* [0xf43c50eb40f396e85d6544557875cec757e1ff4e304d7e8d785ced9bf993b9a3](http://testnet.etherscan.io/tx/0xf43c50eb40f396e85d6544557875cec757e1ff4e304d7e8d785ced9bf993b9a3)
* [0xcad0844b52e01608d4cdd3cafbaca2b0b56960532c6b7c859f719bef41a2341a](http://testnet.etherscan.io/tx/0xcad0844b52e01608d4cdd3cafbaca2b0b56960532c6b7c859f719bef41a2341a)
* [0x18ea1c75162d7d8433b454cb1b00d31a728d67b4627395c470ed79da171cb7f3](http://testnet.etherscan.io/tx/0x18ea1c75162d7d8433b454cb1b00d31a728d67b4627395c470ed79da171cb7f3)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* FundsWithdrawnEvent(fromAddress=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,toAddress=0xa1bd14bc59b40f6ecf99960913e88a70b9178fb6,valueWei=0,)

### Test - "Create bespoke throne via World has expected properties, appears in list of kingdoms and can be claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xcfa6f1871ce8fc00409a8a027362ce0972fedf326b94639a51e8c54dbb0f65b3
* txn 0xcfa6f1871ce8fc00409a8a027362ce0972fedf326b94639a51e8c54dbb0f65b3 has been mined on all nodes
* created instance of contract KingdomFactory at 0x30ce77b05d3899e8b016f4e70bcce8532bf73908
* need to wait for txn 0xd1fb866cc7be89c55c6553380a6c49d73f54a7ca0f4dd7e0e276f150af0f8650
* need to wait for txn 0x6d070d4e33e57ffa27e17fb59e865be87adfa51c6e9bada6af84968a2aa01d19
* need to wait for txn 0x5e14db7eb497c420a5fd584174374fcce5cbebe6ac5e2e582dbb1f605a1dda4f
* txn 0xd1fb866cc7be89c55c6553380a6c49d73f54a7ca0f4dd7e0e276f150af0f8650 has been mined on all nodes
* created instance of contract World at 0x59773618885c757f30c8792f5b910dd961881b43
* txn 0x6d070d4e33e57ffa27e17fb59e865be87adfa51c6e9bada6af84968a2aa01d19 has been mined on all nodes
* txn 0x5e14db7eb497c420a5fd584174374fcce5cbebe6ac5e2e582dbb1f605a1dda4f has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0xe2a44bfffcdb311e17173368e74c97920f8a7122a57dad58eee0f52accc17778
* txn 0xe2a44bfffcdb311e17173368e74c97920f8a7122a57dad58eee0f52accc17778 has been mined on all nodes
* throneName is  myKingdom
* kingdomEntry is  [object Object]
* myThroneAddress is  0x2d5aa459643b4e59247d711364d7600c94238c0e
* created instance of contract Kingdom at 0x2d5aa459643b4e59247d711364d7600c94238c0e
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xc5af42229d93dc15758ac8eacbcebe11fb20dfe278d4038f0567b645b09fca98
* txn 0xc5af42229d93dc15758ac8eacbcebe11fb20dfe278d4038f0567b645b09fca98 has been mined on all nodes

##### Transactions Generated

* [0xcfa6f1871ce8fc00409a8a027362ce0972fedf326b94639a51e8c54dbb0f65b3](http://testnet.etherscan.io/tx/0xcfa6f1871ce8fc00409a8a027362ce0972fedf326b94639a51e8c54dbb0f65b3)
* [0xd1fb866cc7be89c55c6553380a6c49d73f54a7ca0f4dd7e0e276f150af0f8650](http://testnet.etherscan.io/tx/0xd1fb866cc7be89c55c6553380a6c49d73f54a7ca0f4dd7e0e276f150af0f8650)
* [0x6d070d4e33e57ffa27e17fb59e865be87adfa51c6e9bada6af84968a2aa01d19](http://testnet.etherscan.io/tx/0x6d070d4e33e57ffa27e17fb59e865be87adfa51c6e9bada6af84968a2aa01d19)
* [0x5e14db7eb497c420a5fd584174374fcce5cbebe6ac5e2e582dbb1f605a1dda4f](http://testnet.etherscan.io/tx/0x5e14db7eb497c420a5fd584174374fcce5cbebe6ac5e2e582dbb1f605a1dda4f)
* [0xe2a44bfffcdb311e17173368e74c97920f8a7122a57dad58eee0f52accc17778](http://testnet.etherscan.io/tx/0xe2a44bfffcdb311e17173368e74c97920f8a7122a57dad58eee0f52accc17778)
* [0xc5af42229d93dc15758ac8eacbcebe11fb20dfe278d4038f0567b645b09fca98](http://testnet.etherscan.io/tx/0xc5af42229d93dc15758ac8eacbcebe11fb20dfe278d4038f0567b645b09fca98)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=125000000000000000,)
* CommissionEarnedEvent(byAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,valueWei=125000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Create second bespoke throne with exactly same name as first via World fails"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x078bab3017627259187d674294e1538b7295ad4820940eb05e7752f585e81bb8
* txn 0x078bab3017627259187d674294e1538b7295ad4820940eb05e7752f585e81bb8 has been mined on all nodes
* created instance of contract KingdomFactory at 0xbf87efe02608f3c93408fab9197360349ccdc6cd
* need to wait for txn 0x19d2afa7c9621d454f87be7c9fe8c36ce3d45319e920a543498f373424340ba8
* need to wait for txn 0x5f9172b1944824690508b79051fec5414ef9d28e8249474be26e1a61668fd87e
* need to wait for txn 0x227a996f71e7ec91ff4acf6652aa02f7ae5f6b43834d30f9ec709996f802e605
* txn 0x19d2afa7c9621d454f87be7c9fe8c36ce3d45319e920a543498f373424340ba8 has been mined on all nodes
* created instance of contract World at 0xf168743c47bdcb92efddf0af03a314ef3cd3a883
* txn 0x5f9172b1944824690508b79051fec5414ef9d28e8249474be26e1a61668fd87e has been mined on all nodes
* txn 0x227a996f71e7ec91ff4acf6652aa02f7ae5f6b43834d30f9ec709996f802e605 has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0xfde4d09f6803b7994e81e9cce0488f26ab165f33e8db78922ac36ebb9adaf999
* txn 0xfde4d09f6803b7994e81e9cce0488f26ab165f33e8db78922ac36ebb9adaf999 has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0xc6bed3f2416ae91d23b40dd355e3242e8a27774630ab8238946fb7f082158f87
* txn 0xc6bed3f2416ae91d23b40dd355e3242e8a27774630ab8238946fb7f082158f87 has been mined on all nodes

##### Transactions Generated

* [0x078bab3017627259187d674294e1538b7295ad4820940eb05e7752f585e81bb8](http://testnet.etherscan.io/tx/0x078bab3017627259187d674294e1538b7295ad4820940eb05e7752f585e81bb8)
* [0x19d2afa7c9621d454f87be7c9fe8c36ce3d45319e920a543498f373424340ba8](http://testnet.etherscan.io/tx/0x19d2afa7c9621d454f87be7c9fe8c36ce3d45319e920a543498f373424340ba8)
* [0x5f9172b1944824690508b79051fec5414ef9d28e8249474be26e1a61668fd87e](http://testnet.etherscan.io/tx/0x5f9172b1944824690508b79051fec5414ef9d28e8249474be26e1a61668fd87e)
* [0x227a996f71e7ec91ff4acf6652aa02f7ae5f6b43834d30f9ec709996f802e605](http://testnet.etherscan.io/tx/0x227a996f71e7ec91ff4acf6652aa02f7ae5f6b43834d30f9ec709996f802e605)
* [0xfde4d09f6803b7994e81e9cce0488f26ab165f33e8db78922ac36ebb9adaf999](http://testnet.etherscan.io/tx/0xfde4d09f6803b7994e81e9cce0488f26ab165f33e8db78922ac36ebb9adaf999)
* [0xc6bed3f2416ae91d23b40dd355e3242e8a27774630ab8238946fb7f082158f87](http://testnet.etherscan.io/tx/0xc6bed3f2416ae91d23b40dd355e3242e8a27774630ab8238946fb7f082158f87)

### Test - "Create second bespoke throne with too-similar name to the first via World fails"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x782e3b41830fd08a02dd054f1be63fba775116f849c554cec9c5becd17f2649c
* txn 0x782e3b41830fd08a02dd054f1be63fba775116f849c554cec9c5becd17f2649c has been mined on all nodes
* created instance of contract KingdomFactory at 0x74c11ee64c3ec530167e3db690a857c2161e253a
* need to wait for txn 0xf0f54ffb941e55da48629459ef9f0429d74f5b98b5391d87970d22b99a27e990
* need to wait for txn 0xbce76183e77efebe978cf5309f437eba6871c7376e79f91367e2e2337c481bfc
* need to wait for txn 0x382997af3c685941fcac63fe3fc196b6dd5700d49e7df1392f0ccb2b8bcf638f
* txn 0xf0f54ffb941e55da48629459ef9f0429d74f5b98b5391d87970d22b99a27e990 has been mined on all nodes
* created instance of contract World at 0x776fa85e160daf9fb6de1bf78d6d1e677c1621cb
* txn 0xbce76183e77efebe978cf5309f437eba6871c7376e79f91367e2e2337c481bfc has been mined on all nodes
* txn 0x382997af3c685941fcac63fe3fc196b6dd5700d49e7df1392f0ccb2b8bcf638f has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0xc592cb4f8ac8cbcf554e322eb8de1ce4ea362ce122c42b0e8487db9ee6748f41
* txn 0xc592cb4f8ac8cbcf554e322eb8de1ce4ea362ce122c42b0e8487db9ee6748f41 has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0x3dd0adf721a87dd9709d72e5ffb609891e83c2e1185dd14bace9abcbe6b9f268
* txn 0x3dd0adf721a87dd9709d72e5ffb609891e83c2e1185dd14bace9abcbe6b9f268 has been mined on all nodes

##### Transactions Generated

* [0x782e3b41830fd08a02dd054f1be63fba775116f849c554cec9c5becd17f2649c](http://testnet.etherscan.io/tx/0x782e3b41830fd08a02dd054f1be63fba775116f849c554cec9c5becd17f2649c)
* [0xf0f54ffb941e55da48629459ef9f0429d74f5b98b5391d87970d22b99a27e990](http://testnet.etherscan.io/tx/0xf0f54ffb941e55da48629459ef9f0429d74f5b98b5391d87970d22b99a27e990)
* [0xbce76183e77efebe978cf5309f437eba6871c7376e79f91367e2e2337c481bfc](http://testnet.etherscan.io/tx/0xbce76183e77efebe978cf5309f437eba6871c7376e79f91367e2e2337c481bfc)
* [0x382997af3c685941fcac63fe3fc196b6dd5700d49e7df1392f0ccb2b8bcf638f](http://testnet.etherscan.io/tx/0x382997af3c685941fcac63fe3fc196b6dd5700d49e7df1392f0ccb2b8bcf638f)
* [0xc592cb4f8ac8cbcf554e322eb8de1ce4ea362ce122c42b0e8487db9ee6748f41](http://testnet.etherscan.io/tx/0xc592cb4f8ac8cbcf554e322eb8de1ce4ea362ce122c42b0e8487db9ee6748f41)
* [0x3dd0adf721a87dd9709d72e5ffb609891e83c2e1185dd14bace9abcbe6b9f268](http://testnet.etherscan.io/tx/0x3dd0adf721a87dd9709d72e5ffb609891e83c2e1185dd14bace9abcbe6b9f268)

### Test - "Create second bespoke throne via World with different name has expected properties, appears in world listing and can be claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x53bbcb0cd5c55f20c5ef5f1d03643c50d37c7511f1a10333d81a75fdbb28b556
* txn 0x53bbcb0cd5c55f20c5ef5f1d03643c50d37c7511f1a10333d81a75fdbb28b556 has been mined on all nodes
* created instance of contract KingdomFactory at 0xbc4b0f32eee9e880902425ca0469efc98b16161c
* need to wait for txn 0xaa1f0299c4b188c291faeb7b21dab87a7beab6ceae0c6cb4b559ffeb4bfba647
* need to wait for txn 0x2faee977ee36fbe4ad77012569f408bb2da7dded1521333a5a96eb7279b322dc
* need to wait for txn 0x99e1b05a368ef98722a9468400076ddd7689e275f6d50c8871609dc34e8ac43b
* need to wait for txn 0x250b3b05812c2aed08eaabce548dfc1e3669d1655484101463bb5c6c7828b4c6
* txn 0xaa1f0299c4b188c291faeb7b21dab87a7beab6ceae0c6cb4b559ffeb4bfba647 has been mined on all nodes
* created instance of contract World at 0x1f59130ff4d7882b5513ebed7487387f8d1cc2d0
* txn 0x2faee977ee36fbe4ad77012569f408bb2da7dded1521333a5a96eb7279b322dc has been mined on all nodes
* txn 0x99e1b05a368ef98722a9468400076ddd7689e275f6d50c8871609dc34e8ac43b has been mined on all nodes
* txn 0x250b3b05812c2aed08eaabce548dfc1e3669d1655484101463bb5c6c7828b4c6 has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0x45739aa7fdf2f43f0fcbaf65c524a9f4f5891a1cd46dcb19c908a096219f97bd
* txn 0x45739aa7fdf2f43f0fcbaf65c524a9f4f5891a1cd46dcb19c908a096219f97bd has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0x922dad1b2c5ad88e8bce49c3d2f300dc488c10bd0c281fa827f4f7021f109b8b
* txn 0x922dad1b2c5ad88e8bce49c3d2f300dc488c10bd0c281fa827f4f7021f109b8b has been mined on all nodes
* created instance of contract Kingdom at 0x1cb7ad3f91dd9475db5f40a8b581317b27abe12a
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xda1b0e05c630e963e8fb737ee71d09560e5880d544efa0aba429996c355fae1c
* txn 0xda1b0e05c630e963e8fb737ee71d09560e5880d544efa0aba429996c355fae1c has been mined on all nodes

##### Transactions Generated

* [0x53bbcb0cd5c55f20c5ef5f1d03643c50d37c7511f1a10333d81a75fdbb28b556](http://testnet.etherscan.io/tx/0x53bbcb0cd5c55f20c5ef5f1d03643c50d37c7511f1a10333d81a75fdbb28b556)
* [0xaa1f0299c4b188c291faeb7b21dab87a7beab6ceae0c6cb4b559ffeb4bfba647](http://testnet.etherscan.io/tx/0xaa1f0299c4b188c291faeb7b21dab87a7beab6ceae0c6cb4b559ffeb4bfba647)
* [0x2faee977ee36fbe4ad77012569f408bb2da7dded1521333a5a96eb7279b322dc](http://testnet.etherscan.io/tx/0x2faee977ee36fbe4ad77012569f408bb2da7dded1521333a5a96eb7279b322dc)
* [0x99e1b05a368ef98722a9468400076ddd7689e275f6d50c8871609dc34e8ac43b](http://testnet.etherscan.io/tx/0x99e1b05a368ef98722a9468400076ddd7689e275f6d50c8871609dc34e8ac43b)
* [0x250b3b05812c2aed08eaabce548dfc1e3669d1655484101463bb5c6c7828b4c6](http://testnet.etherscan.io/tx/0x250b3b05812c2aed08eaabce548dfc1e3669d1655484101463bb5c6c7828b4c6)
* [0x45739aa7fdf2f43f0fcbaf65c524a9f4f5891a1cd46dcb19c908a096219f97bd](http://testnet.etherscan.io/tx/0x45739aa7fdf2f43f0fcbaf65c524a9f4f5891a1cd46dcb19c908a096219f97bd)
* [0x922dad1b2c5ad88e8bce49c3d2f300dc488c10bd0c281fa827f4f7021f109b8b](http://testnet.etherscan.io/tx/0x922dad1b2c5ad88e8bce49c3d2f300dc488c10bd0c281fa827f4f7021f109b8b)
* [0xda1b0e05c630e963e8fb737ee71d09560e5880d544efa0aba429996c355fae1c](http://testnet.etherscan.io/tx/0xda1b0e05c630e963e8fb737ee71d09560e5880d544efa0aba429996c355fae1c)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=166500000000000000,)
* CommissionEarnedEvent(byAddress=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,valueWei=166500000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Top Wizard can change throne creation price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x7bc5c53f27595686aa9a87040558ce531b1c53203129f80fa16521448dd7988c
* txn 0x7bc5c53f27595686aa9a87040558ce531b1c53203129f80fa16521448dd7988c has been mined on all nodes
* created instance of contract KingdomFactory at 0x41d21c934ba2a59ac1f0185153f347c21287015b
* need to wait for txn 0xce98475085753b82f8fe4a155efd27fcd68466afebbcff31092c71571694c1e7
* need to wait for txn 0x358d09205e3ab3da5e459de6d5c1fcdd09bd030416db4c890bc22e0d4e2ddadb
* txn 0xce98475085753b82f8fe4a155efd27fcd68466afebbcff31092c71571694c1e7 has been mined on all nodes
* created instance of contract World at 0xb10bc387a512ad694636be0db7fb42354df5c5d7
* txn 0x358d09205e3ab3da5e459de6d5c1fcdd09bd030416db4c890bc22e0d4e2ddadb has been mined on all nodes
* called contract function World.setKingdomCreationFeeWei on node 1
* need to wait for txn 0x3007593adc29bf04430e2d2446b70e65a171b63a1376d9b4fca06f8827149efc
* txn 0x3007593adc29bf04430e2d2446b70e65a171b63a1376d9b4fca06f8827149efc has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0x27ff3a237b6853de5b39b1fb2191e7120295220d656d5559d0506cc791a63bfd
* txn 0x27ff3a237b6853de5b39b1fb2191e7120295220d656d5559d0506cc791a63bfd has been mined on all nodes

##### Transactions Generated

* [0x7bc5c53f27595686aa9a87040558ce531b1c53203129f80fa16521448dd7988c](http://testnet.etherscan.io/tx/0x7bc5c53f27595686aa9a87040558ce531b1c53203129f80fa16521448dd7988c)
* [0xce98475085753b82f8fe4a155efd27fcd68466afebbcff31092c71571694c1e7](http://testnet.etherscan.io/tx/0xce98475085753b82f8fe4a155efd27fcd68466afebbcff31092c71571694c1e7)
* [0x358d09205e3ab3da5e459de6d5c1fcdd09bd030416db4c890bc22e0d4e2ddadb](http://testnet.etherscan.io/tx/0x358d09205e3ab3da5e459de6d5c1fcdd09bd030416db4c890bc22e0d4e2ddadb)
* [0x3007593adc29bf04430e2d2446b70e65a171b63a1376d9b4fca06f8827149efc](http://testnet.etherscan.io/tx/0x3007593adc29bf04430e2d2446b70e65a171b63a1376d9b4fca06f8827149efc)
* [0x27ff3a237b6853de5b39b1fb2191e7120295220d656d5559d0506cc791a63bfd](http://testnet.etherscan.io/tx/0x27ff3a237b6853de5b39b1fb2191e7120295220d656d5559d0506cc791a63bfd)

##### Contract Events

* CreationFeeChangedEvent(newFeeWei=250000000000000000,)

### Test - "Top Wizard can sweep throne creation fees"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xf0de52f69b06f00514d6c3261e1ba9b6e0b6e5b294268d4de65ad1e94fe1ce8d
* txn 0xf0de52f69b06f00514d6c3261e1ba9b6e0b6e5b294268d4de65ad1e94fe1ce8d has been mined on all nodes
* created instance of contract KingdomFactory at 0x4918854647f8c6c233f610331e00aae231e3d0c8
* need to wait for txn 0x3718bab27c83788da9e121066485b6d5405dca9a70b0c07e4f34fd72652d33aa
* need to wait for txn 0x4f48e1f80c09f195fa5c9103fed38ec04c076eb24c5c3bc99bb699a6d2dcac8a
* txn 0x3718bab27c83788da9e121066485b6d5405dca9a70b0c07e4f34fd72652d33aa has been mined on all nodes
* txn 0x4f48e1f80c09f195fa5c9103fed38ec04c076eb24c5c3bc99bb699a6d2dcac8a has been mined on all nodes
* need to wait for txn 0x6cdad405edea89345cc7badf142f6df89020fb222a31811846204ddb705810d0
* txn 0x6cdad405edea89345cc7badf142f6df89020fb222a31811846204ddb705810d0 has been mined on all nodes
* created instance of contract World at 0xf53bbde3e57056318cd91509314576a20576a197
* called contract function World.createKingdom on node 1
* need to wait for txn 0xeb9b4ea5e642f10445ca31a456dc0599986984a96ff58e9e6f3bc365f1206496
* txn 0xeb9b4ea5e642f10445ca31a456dc0599986984a96ff58e9e6f3bc365f1206496 has been mined on all nodes
* called contract function World.withdrawFunds on node 1
* need to wait for txn 0x298c1c528d7780cce499db05014ce2b5b8f143a243ddf4fc39232eb319e3d837
* txn 0x298c1c528d7780cce499db05014ce2b5b8f143a243ddf4fc39232eb319e3d837 has been mined on all nodes

##### Transactions Generated

* [0xf0de52f69b06f00514d6c3261e1ba9b6e0b6e5b294268d4de65ad1e94fe1ce8d](http://testnet.etherscan.io/tx/0xf0de52f69b06f00514d6c3261e1ba9b6e0b6e5b294268d4de65ad1e94fe1ce8d)
* [0x3718bab27c83788da9e121066485b6d5405dca9a70b0c07e4f34fd72652d33aa](http://testnet.etherscan.io/tx/0x3718bab27c83788da9e121066485b6d5405dca9a70b0c07e4f34fd72652d33aa)
* [0x4f48e1f80c09f195fa5c9103fed38ec04c076eb24c5c3bc99bb699a6d2dcac8a](http://testnet.etherscan.io/tx/0x4f48e1f80c09f195fa5c9103fed38ec04c076eb24c5c3bc99bb699a6d2dcac8a)
* [0x6cdad405edea89345cc7badf142f6df89020fb222a31811846204ddb705810d0](http://testnet.etherscan.io/tx/0x6cdad405edea89345cc7badf142f6df89020fb222a31811846204ddb705810d0)
* [0xeb9b4ea5e642f10445ca31a456dc0599986984a96ff58e9e6f3bc365f1206496](http://testnet.etherscan.io/tx/0xeb9b4ea5e642f10445ca31a456dc0599986984a96ff58e9e6f3bc365f1206496)
* [0x298c1c528d7780cce499db05014ce2b5b8f143a243ddf4fc39232eb319e3d837](http://testnet.etherscan.io/tx/0x298c1c528d7780cce499db05014ce2b5b8f143a243ddf4fc39232eb319e3d837)

##### Contract Events

* FundsWithdrawnEvent(fromAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,toAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=200000000000000000,)

### Test - "Can validate proposed throne before creating it"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x9d918c32c35bac5c08c15286c47c90b6c00b4c03ceaff0f552dcaaeaf686de8e
* txn 0x9d918c32c35bac5c08c15286c47c90b6c00b4c03ceaff0f552dcaaeaf686de8e has been mined on all nodes
* created instance of contract KingdomFactory at 0xb52f5b7adfcc5e4dc93c5f19f23695f1d919f9b6
* need to wait for txn 0x8f574f10789210fab11571071a531f07db4db94c594f44cad15f7ad1b3713769
* txn 0x8f574f10789210fab11571071a531f07db4db94c594f44cad15f7ad1b3713769 has been mined on all nodes
* created instance of contract World at 0x2a56afdf9fb6fd88fed7829c9b6b642f43c2c798

##### Transactions Generated

* [0x9d918c32c35bac5c08c15286c47c90b6c00b4c03ceaff0f552dcaaeaf686de8e](http://testnet.etherscan.io/tx/0x9d918c32c35bac5c08c15286c47c90b6c00b4c03ceaff0f552dcaaeaf686de8e)
* [0x8f574f10789210fab11571071a531f07db4db94c594f44cad15f7ad1b3713769](http://testnet.etherscan.io/tx/0x8f574f10789210fab11571071a531f07db4db94c594f44cad15f7ad1b3713769)

### Test - "Non-wizards cannot take wizard comission"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x094cfbf1259a7cf650a9dc77585bec8a9cda24b31d5104f28d11d179f9d21da2
* need to wait for txn 0xeb3258b990cfb06749e34436bba97687da552eaefc6d2ff575972e45b7d9fccd
* need to wait for txn 0xa35a9803275c6810463c1cc0bee8c458372888e83a36450818d69db7322764cf
* txn 0x094cfbf1259a7cf650a9dc77585bec8a9cda24b31d5104f28d11d179f9d21da2 has been mined on all nodes
* txn 0xeb3258b990cfb06749e34436bba97687da552eaefc6d2ff575972e45b7d9fccd has been mined on all nodes
* txn 0xa35a9803275c6810463c1cc0bee8c458372888e83a36450818d69db7322764cf has been mined on all nodes
* need to wait for txn 0xc3bb09bdcadc948d28d9f4e3755e5fd7424be449c06675650f3f96bb84755006
* txn 0xc3bb09bdcadc948d28d9f4e3755e5fd7424be449c06675650f3f96bb84755006 has been mined on all nodes
* created instance of contract Kingdom at 0x094381de03b04d612c9470b6a60ea6b77147ae8f
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xbc2629eb487e3c8d3852f844cf0ebd62fe57ca87a2fbfbbee26f4bfde701160e
* txn 0xbc2629eb487e3c8d3852f844cf0ebd62fe57ca87a2fbfbbee26f4bfde701160e has been mined on all nodes
* called contract function Kingdom.withdrawFunds on node 1
* need to wait for txn 0x38f7bdd5741a60a7ee3c334b8b05f29606c12d46f06cd01244903c2ddef1c921
* called contract function Kingdom.withdrawFunds on node 1
* need to wait for txn 0x622485da927fa240d84960b0fe6fc7629d5306cd286db42151a3dc7e75767dbc
* txn 0x38f7bdd5741a60a7ee3c334b8b05f29606c12d46f06cd01244903c2ddef1c921 has been mined on all nodes
* txn 0x622485da927fa240d84960b0fe6fc7629d5306cd286db42151a3dc7e75767dbc has been mined on all nodes
* called contract function Kingdom.withdrawFunds on node 1
* need to wait for txn 0x9451f9a128c06fff92fe8d70f26c39b21ac60535eca1342627dd97983946343f
* txn 0x9451f9a128c06fff92fe8d70f26c39b21ac60535eca1342627dd97983946343f has been mined on all nodes
* called contract function Kingdom.withdrawFunds on node 1
* need to wait for txn 0x9cee9fa046b851ffcb6d63755fa4bf8561a3060c29541e7a629681f56d092de9
* txn 0x9cee9fa046b851ffcb6d63755fa4bf8561a3060c29541e7a629681f56d092de9 has been mined on all nodes

##### Transactions Generated

* [0x094cfbf1259a7cf650a9dc77585bec8a9cda24b31d5104f28d11d179f9d21da2](http://testnet.etherscan.io/tx/0x094cfbf1259a7cf650a9dc77585bec8a9cda24b31d5104f28d11d179f9d21da2)
* [0xeb3258b990cfb06749e34436bba97687da552eaefc6d2ff575972e45b7d9fccd](http://testnet.etherscan.io/tx/0xeb3258b990cfb06749e34436bba97687da552eaefc6d2ff575972e45b7d9fccd)
* [0xa35a9803275c6810463c1cc0bee8c458372888e83a36450818d69db7322764cf](http://testnet.etherscan.io/tx/0xa35a9803275c6810463c1cc0bee8c458372888e83a36450818d69db7322764cf)
* [0xc3bb09bdcadc948d28d9f4e3755e5fd7424be449c06675650f3f96bb84755006](http://testnet.etherscan.io/tx/0xc3bb09bdcadc948d28d9f4e3755e5fd7424be449c06675650f3f96bb84755006)
* [0xbc2629eb487e3c8d3852f844cf0ebd62fe57ca87a2fbfbbee26f4bfde701160e](http://testnet.etherscan.io/tx/0xbc2629eb487e3c8d3852f844cf0ebd62fe57ca87a2fbfbbee26f4bfde701160e)
* [0x38f7bdd5741a60a7ee3c334b8b05f29606c12d46f06cd01244903c2ddef1c921](http://testnet.etherscan.io/tx/0x38f7bdd5741a60a7ee3c334b8b05f29606c12d46f06cd01244903c2ddef1c921)
* [0x622485da927fa240d84960b0fe6fc7629d5306cd286db42151a3dc7e75767dbc](http://testnet.etherscan.io/tx/0x622485da927fa240d84960b0fe6fc7629d5306cd286db42151a3dc7e75767dbc)
* [0x9451f9a128c06fff92fe8d70f26c39b21ac60535eca1342627dd97983946343f](http://testnet.etherscan.io/tx/0x9451f9a128c06fff92fe8d70f26c39b21ac60535eca1342627dd97983946343f)
* [0x9cee9fa046b851ffcb6d63755fa4bf8561a3060c29541e7a629681f56d092de9](http://testnet.etherscan.io/tx/0x9cee9fa046b851ffcb6d63755fa4bf8561a3060c29541e7a629681f56d092de9)

##### Contract Events

* CommissionEarnedEvent(byAddress=0x0f73050a531407ea03e4f896365b7ac866e5db65,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* FundsWithdrawnEvent(fromAddress=0x0f73050a531407ea03e4f896365b7ac866e5db65,toAddress=0x0f73050a531407ea03e4f896365b7ac866e5db65,valueWei=500000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x0f73050a531407ea03e4f896365b7ac866e5db65,toAddress=0x0f73050a531407ea03e4f896365b7ac866e5db65,valueWei=0,)
* FundsWithdrawnEvent(fromAddress=0x96384d8ee4275db3d9ff753ab0af81f431adb892,toAddress=0x96384d8ee4275db3d9ff753ab0af81f431adb892,valueWei=0,)
* FundsWithdrawnEvent(fromAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,toAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=500000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,toAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=500000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,toAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=500000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,toAddress=0x5845ebff39c116f6634337b867bd32ab4d74c193,valueWei=500000000000000000,)

### Test - "Non-wizard cannot transfer wizard-ship"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xc0666229dcbb2c0bbeec2d4485af066b2b7a80adbe5cbd329628f197e1040c2a
* need to wait for txn 0xaf0b64621dd340d6a8509b954d9b4cfadfa8a3e3b79ad8134b43547eee64687e
* need to wait for txn 0xe28df003af55170a64909010cf94b3496ddc9eae5d938cb583954d2d58662957
* need to wait for txn 0xa59cfd34bb549ce742675b4492fb277ff16affddac9ff5f08f217b530f415327
* txn 0xc0666229dcbb2c0bbeec2d4485af066b2b7a80adbe5cbd329628f197e1040c2a has been mined on all nodes
* txn 0xaf0b64621dd340d6a8509b954d9b4cfadfa8a3e3b79ad8134b43547eee64687e has been mined on all nodes
* txn 0xe28df003af55170a64909010cf94b3496ddc9eae5d938cb583954d2d58662957 has been mined on all nodes
* txn 0xa59cfd34bb549ce742675b4492fb277ff16affddac9ff5f08f217b530f415327 has been mined on all nodes
* need to wait for txn 0xecf7ea99e5f288213eda45b4e2f84ef826d38bf2268c0f401419b4a8d7b95dea
* txn 0xecf7ea99e5f288213eda45b4e2f84ef826d38bf2268c0f401419b4a8d7b95dea has been mined on all nodes
* created instance of contract Kingdom at 0xd8fca792c994c319aaca3d29c94c7afaca4c6e9e
* called contract function Kingdom.replaceWizard on node 1
* need to wait for txn 0xe028ff8420b6c6e64a4b018ad26870e62dfffd74c15d36363b53a72a3b7e0bb1
* txn 0xe028ff8420b6c6e64a4b018ad26870e62dfffd74c15d36363b53a72a3b7e0bb1 has been mined on all nodes
* called contract function Kingdom.replaceWizard on node 1
* need to wait for txn 0x6eba63c6a3a8cb0ae81caf3a9e97911a20f29a7d392e575ccca2ee462fdbf549
* txn 0x6eba63c6a3a8cb0ae81caf3a9e97911a20f29a7d392e575ccca2ee462fdbf549 has been mined on all nodes
* called contract function Kingdom.replaceWizard on node 1
* need to wait for txn 0x3fec18eb5f8754fe9d4763af50e2a0e5869b5627ad6d5f9fc1ab3d246ba63885
* txn 0x3fec18eb5f8754fe9d4763af50e2a0e5869b5627ad6d5f9fc1ab3d246ba63885 has been mined on all nodes
* called contract function Kingdom.replaceWizard on node 1
* need to wait for txn 0x2743f7b8d72076700341c1473d9ef9e24edf3461f4b7f08b34628677294d5f69
* txn 0x2743f7b8d72076700341c1473d9ef9e24edf3461f4b7f08b34628677294d5f69 has been mined on all nodes

##### Transactions Generated

* [0xc0666229dcbb2c0bbeec2d4485af066b2b7a80adbe5cbd329628f197e1040c2a](http://testnet.etherscan.io/tx/0xc0666229dcbb2c0bbeec2d4485af066b2b7a80adbe5cbd329628f197e1040c2a)
* [0xaf0b64621dd340d6a8509b954d9b4cfadfa8a3e3b79ad8134b43547eee64687e](http://testnet.etherscan.io/tx/0xaf0b64621dd340d6a8509b954d9b4cfadfa8a3e3b79ad8134b43547eee64687e)
* [0xe28df003af55170a64909010cf94b3496ddc9eae5d938cb583954d2d58662957](http://testnet.etherscan.io/tx/0xe28df003af55170a64909010cf94b3496ddc9eae5d938cb583954d2d58662957)
* [0xa59cfd34bb549ce742675b4492fb277ff16affddac9ff5f08f217b530f415327](http://testnet.etherscan.io/tx/0xa59cfd34bb549ce742675b4492fb277ff16affddac9ff5f08f217b530f415327)
* [0xecf7ea99e5f288213eda45b4e2f84ef826d38bf2268c0f401419b4a8d7b95dea](http://testnet.etherscan.io/tx/0xecf7ea99e5f288213eda45b4e2f84ef826d38bf2268c0f401419b4a8d7b95dea)
* [0xe028ff8420b6c6e64a4b018ad26870e62dfffd74c15d36363b53a72a3b7e0bb1](http://testnet.etherscan.io/tx/0xe028ff8420b6c6e64a4b018ad26870e62dfffd74c15d36363b53a72a3b7e0bb1)
* [0x6eba63c6a3a8cb0ae81caf3a9e97911a20f29a7d392e575ccca2ee462fdbf549](http://testnet.etherscan.io/tx/0x6eba63c6a3a8cb0ae81caf3a9e97911a20f29a7d392e575ccca2ee462fdbf549)
* [0x3fec18eb5f8754fe9d4763af50e2a0e5869b5627ad6d5f9fc1ab3d246ba63885](http://testnet.etherscan.io/tx/0x3fec18eb5f8754fe9d4763af50e2a0e5869b5627ad6d5f9fc1ab3d246ba63885)
* [0x2743f7b8d72076700341c1473d9ef9e24edf3461f4b7f08b34628677294d5f69](http://testnet.etherscan.io/tx/0x2743f7b8d72076700341c1473d9ef9e24edf3461f4b7f08b34628677294d5f69)

##### Contract Events

* WizardReplacedEvent(oldWizard=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,newWizard=0x5ca6648ce90fbc73b007f725b8300f35699f0807,)
* WizardReplacedEvent(oldWizard=0x5ca6648ce90fbc73b007f725b8300f35699f0807,newWizard=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,)

### Test - "Recursive call attack (claim, compensate, withdraw)"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x49f5c73af7eecf98890175a8bc8b5dcc1970ecf872c272d89631a7f0cb54e3b7
* need to wait for txn 0xe74637b187739a87c41da56b78929b92250a9336b6fadebdbab4bce43453e674
* need to wait for txn 0xc7bf2f44291320475beff37f7f47ba0d983a23e38ff5a650e1b642b245bf7739
* need to wait for txn 0x454d2023037d7f51d787e8088759bab0e0fbd3425825a397abb1665e4d583aa2
* txn 0x49f5c73af7eecf98890175a8bc8b5dcc1970ecf872c272d89631a7f0cb54e3b7 has been mined on all nodes
* txn 0xe74637b187739a87c41da56b78929b92250a9336b6fadebdbab4bce43453e674 has been mined on all nodes
* txn 0xc7bf2f44291320475beff37f7f47ba0d983a23e38ff5a650e1b642b245bf7739 has been mined on all nodes
* txn 0x49f5c73af7eecf98890175a8bc8b5dcc1970ecf872c272d89631a7f0cb54e3b7 has been mined on all nodes
* txn 0xe74637b187739a87c41da56b78929b92250a9336b6fadebdbab4bce43453e674 has been mined on all nodes
* txn 0xc7bf2f44291320475beff37f7f47ba0d983a23e38ff5a650e1b642b245bf7739 has been mined on all nodes
* txn 0x49f5c73af7eecf98890175a8bc8b5dcc1970ecf872c272d89631a7f0cb54e3b7 has been mined on all nodes
* txn 0xe74637b187739a87c41da56b78929b92250a9336b6fadebdbab4bce43453e674 has been mined on all nodes
* txn 0xc7bf2f44291320475beff37f7f47ba0d983a23e38ff5a650e1b642b245bf7739 has been mined on all nodes
* txn 0x454d2023037d7f51d787e8088759bab0e0fbd3425825a397abb1665e4d583aa2 has been mined on all nodes
* created instance of contract Kingdom at 0xd763f4bbd0f560d2c022b7391b8a4be0620f7601
* need to wait for txn 0x85d4731f3bfbefcf7b05f9077b8d972af8abe0e5b898b4b7c7fcc8258dfaff91
* txn 0x85d4731f3bfbefcf7b05f9077b8d972af8abe0e5b898b4b7c7fcc8258dfaff91 has been mined on all nodes
* created instance of contract RecursiveAttackerOne at 0x13e89d87dc29b8ecfb61825510d5d730ad117bc3
* called contract function Kingdom.replaceWizard on node 1
* need to wait for txn 0x083de57acbaf9fd96b08a28529f6b34b08d4d260572daffcb05d22d546ef57d6
* txn 0x083de57acbaf9fd96b08a28529f6b34b08d4d260572daffcb05d22d546ef57d6 has been mined on all nodes
* need to wait for txn 0xd823f197bd9499408191bcd39b8d611a6af2095975bdbf69572aefecf36cc5e5
* txn 0xd823f197bd9499408191bcd39b8d611a6af2095975bdbf69572aefecf36cc5e5 has been mined on all nodes
* called contract function RecursiveAttackerOne.claim on node 1
* need to wait for txn 0x7dcfdc14393b4b11a17d5a05db23922e434ae777021d24c9505713e23ec79c3f
* txn 0x7dcfdc14393b4b11a17d5a05db23922e434ae777021d24c9505713e23ec79c3f has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x2c6a2d75566245340d117792490ab743aa3d2ce73fc20119a269e3353ea55427
* txn 0x2c6a2d75566245340d117792490ab743aa3d2ce73fc20119a269e3353ea55427 has been mined on all nodes

##### Transactions Generated

* [0x49f5c73af7eecf98890175a8bc8b5dcc1970ecf872c272d89631a7f0cb54e3b7](http://testnet.etherscan.io/tx/0x49f5c73af7eecf98890175a8bc8b5dcc1970ecf872c272d89631a7f0cb54e3b7)
* [0xe74637b187739a87c41da56b78929b92250a9336b6fadebdbab4bce43453e674](http://testnet.etherscan.io/tx/0xe74637b187739a87c41da56b78929b92250a9336b6fadebdbab4bce43453e674)
* [0xc7bf2f44291320475beff37f7f47ba0d983a23e38ff5a650e1b642b245bf7739](http://testnet.etherscan.io/tx/0xc7bf2f44291320475beff37f7f47ba0d983a23e38ff5a650e1b642b245bf7739)
* [0x454d2023037d7f51d787e8088759bab0e0fbd3425825a397abb1665e4d583aa2](http://testnet.etherscan.io/tx/0x454d2023037d7f51d787e8088759bab0e0fbd3425825a397abb1665e4d583aa2)
* [0x85d4731f3bfbefcf7b05f9077b8d972af8abe0e5b898b4b7c7fcc8258dfaff91](http://testnet.etherscan.io/tx/0x85d4731f3bfbefcf7b05f9077b8d972af8abe0e5b898b4b7c7fcc8258dfaff91)
* [0x083de57acbaf9fd96b08a28529f6b34b08d4d260572daffcb05d22d546ef57d6](http://testnet.etherscan.io/tx/0x083de57acbaf9fd96b08a28529f6b34b08d4d260572daffcb05d22d546ef57d6)
* [0xd823f197bd9499408191bcd39b8d611a6af2095975bdbf69572aefecf36cc5e5](http://testnet.etherscan.io/tx/0xd823f197bd9499408191bcd39b8d611a6af2095975bdbf69572aefecf36cc5e5)
* [0x7dcfdc14393b4b11a17d5a05db23922e434ae777021d24c9505713e23ec79c3f](http://testnet.etherscan.io/tx/0x7dcfdc14393b4b11a17d5a05db23922e434ae777021d24c9505713e23ec79c3f)
* [0x2c6a2d75566245340d117792490ab743aa3d2ce73fc20119a269e3353ea55427](http://testnet.etherscan.io/tx/0x2c6a2d75566245340d117792490ab743aa3d2ce73fc20119a269e3353ea55427)

##### Contract Events

* WizardReplacedEvent(oldWizard=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,newWizard=0x13e89d87dc29b8ecfb61825510d5d730ad117bc3,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x13e89d87dc29b8ecfb61825510d5d730ad117bc3,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=15000000000000000,)
* CommissionEarnedEvent(byAddress=0x13e89d87dc29b8ecfb61825510d5d730ad117bc3,valueWei=15000000000000000,)
* CompensationFailEvent(toAddress=0x13e89d87dc29b8ecfb61825510d5d730ad117bc3,valueWei=1470000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)

### Test - "Recursive call attack (nested withdraw)"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x040de7bf10520c492f6c6bf0ce1dd84536628298cf2f003ab62690d218d688fc
* need to wait for txn 0xe897b9d8a0324b3e0b4de11dc323929797c920f59f3ddf6f3bde56be17239d1f
* need to wait for txn 0x5264b43db4b72d3b027344ad60146d1d79ee5c56d7311d006ae13e670e8397ac
* need to wait for txn 0xb6d2361e7d5e37399c52fb9980c5c5f955560b35c3489030896ef98af77142a1
* txn 0x040de7bf10520c492f6c6bf0ce1dd84536628298cf2f003ab62690d218d688fc has been mined on all nodes
* txn 0xe897b9d8a0324b3e0b4de11dc323929797c920f59f3ddf6f3bde56be17239d1f has been mined on all nodes
* txn 0x5264b43db4b72d3b027344ad60146d1d79ee5c56d7311d006ae13e670e8397ac has been mined on all nodes
* txn 0x040de7bf10520c492f6c6bf0ce1dd84536628298cf2f003ab62690d218d688fc has been mined on all nodes
* txn 0xe897b9d8a0324b3e0b4de11dc323929797c920f59f3ddf6f3bde56be17239d1f has been mined on all nodes
* txn 0x5264b43db4b72d3b027344ad60146d1d79ee5c56d7311d006ae13e670e8397ac has been mined on all nodes
* txn 0xb6d2361e7d5e37399c52fb9980c5c5f955560b35c3489030896ef98af77142a1 has been mined on all nodes
* created instance of contract Kingdom at 0x1a73bcd112a07a019904d99dd3c496007251b6c3
* need to wait for txn 0x8ad8adc83c4d01800bb297d9dc49ee5fe8ae1fe8e73225732193fcb64af20d00
* txn 0x8ad8adc83c4d01800bb297d9dc49ee5fe8ae1fe8e73225732193fcb64af20d00 has been mined on all nodes
* created instance of contract RecursiveAttackerOne at 0x239f21323db0df7c796f2f2953722155953646df
* called contract function Kingdom.replaceWizard on node 1
* need to wait for txn 0xedc1bb1213a27ce9ba9e8d6ecd3bdf64e9e06508567f0d6fd5be5bbe24bdfa42
* txn 0xedc1bb1213a27ce9ba9e8d6ecd3bdf64e9e06508567f0d6fd5be5bbe24bdfa42 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xe4a24d79cc7182c59e5e1c2f4a1dccbc2563be8bfe0eda98aeb4402e59c89a4f
* txn 0xe4a24d79cc7182c59e5e1c2f4a1dccbc2563be8bfe0eda98aeb4402e59c89a4f has been mined on all nodes
* called contract function RecursiveAttackerOne.withdrawToSelf on node 1
* need to wait for txn 0x1983a7d7e39af8b6f2269a2c27ff8677896fb0c75197f9e482ad65c3e7344172
* txn 0x1983a7d7e39af8b6f2269a2c27ff8677896fb0c75197f9e482ad65c3e7344172 has been mined on all nodes
* called contract function RecursiveAttackerOne.withdrawToSelf on node 1
* need to wait for txn 0xd8096447d52004c7b2f80388655e6c4116d2aa0c198fd6395f2a03a2e78e202a
* txn 0xd8096447d52004c7b2f80388655e6c4116d2aa0c198fd6395f2a03a2e78e202a has been mined on all nodes

##### Transactions Generated

* [0x040de7bf10520c492f6c6bf0ce1dd84536628298cf2f003ab62690d218d688fc](http://testnet.etherscan.io/tx/0x040de7bf10520c492f6c6bf0ce1dd84536628298cf2f003ab62690d218d688fc)
* [0xe897b9d8a0324b3e0b4de11dc323929797c920f59f3ddf6f3bde56be17239d1f](http://testnet.etherscan.io/tx/0xe897b9d8a0324b3e0b4de11dc323929797c920f59f3ddf6f3bde56be17239d1f)
* [0x5264b43db4b72d3b027344ad60146d1d79ee5c56d7311d006ae13e670e8397ac](http://testnet.etherscan.io/tx/0x5264b43db4b72d3b027344ad60146d1d79ee5c56d7311d006ae13e670e8397ac)
* [0xb6d2361e7d5e37399c52fb9980c5c5f955560b35c3489030896ef98af77142a1](http://testnet.etherscan.io/tx/0xb6d2361e7d5e37399c52fb9980c5c5f955560b35c3489030896ef98af77142a1)
* [0x8ad8adc83c4d01800bb297d9dc49ee5fe8ae1fe8e73225732193fcb64af20d00](http://testnet.etherscan.io/tx/0x8ad8adc83c4d01800bb297d9dc49ee5fe8ae1fe8e73225732193fcb64af20d00)
* [0xedc1bb1213a27ce9ba9e8d6ecd3bdf64e9e06508567f0d6fd5be5bbe24bdfa42](http://testnet.etherscan.io/tx/0xedc1bb1213a27ce9ba9e8d6ecd3bdf64e9e06508567f0d6fd5be5bbe24bdfa42)
* [0xe4a24d79cc7182c59e5e1c2f4a1dccbc2563be8bfe0eda98aeb4402e59c89a4f](http://testnet.etherscan.io/tx/0xe4a24d79cc7182c59e5e1c2f4a1dccbc2563be8bfe0eda98aeb4402e59c89a4f)
* [0x1983a7d7e39af8b6f2269a2c27ff8677896fb0c75197f9e482ad65c3e7344172](http://testnet.etherscan.io/tx/0x1983a7d7e39af8b6f2269a2c27ff8677896fb0c75197f9e482ad65c3e7344172)
* [0xd8096447d52004c7b2f80388655e6c4116d2aa0c198fd6395f2a03a2e78e202a](http://testnet.etherscan.io/tx/0xd8096447d52004c7b2f80388655e6c4116d2aa0c198fd6395f2a03a2e78e202a)

##### Contract Events

* WizardReplacedEvent(oldWizard=0x1c222d814acc0fb170781ab43021957038c0995b,newWizard=0x239f21323db0df7c796f2f2953722155953646df,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=500000000000000000,)
* CommissionEarnedEvent(byAddress=0x239f21323db0df7c796f2f2953722155953646df,valueWei=500000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* FundsWithdrawnEvent(fromAddress=0x239f21323db0df7c796f2f2953722155953646df,toAddress=0x239f21323db0df7c796f2f2953722155953646df,valueWei=50000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x239f21323db0df7c796f2f2953722155953646df,toAddress=0x239f21323db0df7c796f2f2953722155953646df,valueWei=50000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x239f21323db0df7c796f2f2953722155953646df,toAddress=0x239f21323db0df7c796f2f2953722155953646df,valueWei=50000000000000000,)
* FundsWithdrawnEvent(fromAddress=0x239f21323db0df7c796f2f2953722155953646df,toAddress=0x239f21323db0df7c796f2f2953722155953646df,valueWei=50000000000000000,)

### Test - "Cannot create a kingdom via the world without playing claim price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x9612d5d15e4ed512928d549da3aea0f77d3aa2a4eb5e7b6f8e305887a7efd9b2
* txn 0x9612d5d15e4ed512928d549da3aea0f77d3aa2a4eb5e7b6f8e305887a7efd9b2 has been mined on all nodes
* txn 0x9612d5d15e4ed512928d549da3aea0f77d3aa2a4eb5e7b6f8e305887a7efd9b2 has been mined on all nodes
* created instance of contract KingdomFactory at 0x367d925ac201632262327b4201e5087fa8a2cda7
* need to wait for txn 0x45eb260a1420795eaf4204b6e01c5a59170a1eebcbd149c3e6d01f2f90b9eee1
* need to wait for txn 0x602952fd5ba9c0a2bda2e9e1bce372e563a86ad504045923cd034180c135f784
* need to wait for txn 0xc3d8938787249ffa0a05b9cf9cd01dc39eae400c518b25c36b271b0c614c1b13
* txn 0x45eb260a1420795eaf4204b6e01c5a59170a1eebcbd149c3e6d01f2f90b9eee1 has been mined on all nodes
* created instance of contract World at 0xa6bdf6335acad3caee351442b62b71ac014f89d5
* txn 0x602952fd5ba9c0a2bda2e9e1bce372e563a86ad504045923cd034180c135f784 has been mined on all nodes
* txn 0xc3d8938787249ffa0a05b9cf9cd01dc39eae400c518b25c36b271b0c614c1b13 has been mined on all nodes
* called contract function World.createKingdom on node 1
* need to wait for txn 0xcaa486bed86392582a8443b64412f21f11ae4cb5d116f76a373c7315adb3aeee
* txn 0xcaa486bed86392582a8443b64412f21f11ae4cb5d116f76a373c7315adb3aeee has been mined on all nodes
* throneName is  myKingdom
* kingdomEntry is  [object Object]
* myThroneAddress is  0x455bb677d15dc16cfb1bde51be5ea00acd385349
* created instance of contract Kingdom at 0x455bb677d15dc16cfb1bde51be5ea00acd385349
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x090fcae80b9611d9f924841d12b9e643ae27c16ba5a5e908b1e737effe86ac77
* txn 0x090fcae80b9611d9f924841d12b9e643ae27c16ba5a5e908b1e737effe86ac77 has been mined on all nodes

##### Transactions Generated

* [0x9612d5d15e4ed512928d549da3aea0f77d3aa2a4eb5e7b6f8e305887a7efd9b2](http://testnet.etherscan.io/tx/0x9612d5d15e4ed512928d549da3aea0f77d3aa2a4eb5e7b6f8e305887a7efd9b2)
* [0x45eb260a1420795eaf4204b6e01c5a59170a1eebcbd149c3e6d01f2f90b9eee1](http://testnet.etherscan.io/tx/0x45eb260a1420795eaf4204b6e01c5a59170a1eebcbd149c3e6d01f2f90b9eee1)
* [0x602952fd5ba9c0a2bda2e9e1bce372e563a86ad504045923cd034180c135f784](http://testnet.etherscan.io/tx/0x602952fd5ba9c0a2bda2e9e1bce372e563a86ad504045923cd034180c135f784)
* [0xc3d8938787249ffa0a05b9cf9cd01dc39eae400c518b25c36b271b0c614c1b13](http://testnet.etherscan.io/tx/0xc3d8938787249ffa0a05b9cf9cd01dc39eae400c518b25c36b271b0c614c1b13)
* [0xcaa486bed86392582a8443b64412f21f11ae4cb5d116f76a373c7315adb3aeee](http://testnet.etherscan.io/tx/0xcaa486bed86392582a8443b64412f21f11ae4cb5d116f76a373c7315adb3aeee)
* [0x090fcae80b9611d9f924841d12b9e643ae27c16ba5a5e908b1e737effe86ac77](http://testnet.etherscan.io/tx/0x090fcae80b9611d9f924841d12b9e643ae27c16ba5a5e908b1e737effe86ac77)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=125000000000000000,)
* CommissionEarnedEvent(byAddress=0x2a14d813fdd174d259b9ef39e6dd2c9e02669e91,valueWei=125000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=125000000000000000,)
* CommissionEarnedEvent(byAddress=0x2a14d813fdd174d259b9ef39e6dd2c9e02669e91,valueWei=125000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=125000000000000000,)
* CommissionEarnedEvent(byAddress=0x2a14d813fdd174d259b9ef39e6dd2c9e02669e91,valueWei=125000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=125000000000000000,)
* CommissionEarnedEvent(byAddress=0x2a14d813fdd174d259b9ef39e6dd2c9e02669e91,valueWei=125000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)

### Test - "Throne claim price is eventually capped"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xbb2ebcd35d3b44c8d88dca1d8db3eb99f3e966e37f7c5fc07ed03ef3ff7a1894
* need to wait for txn 0x6a6e120ce31f558b1548299dca5caf85334ac1dd7c2bf928046cdfa3ebe8ee58
* need to wait for txn 0xc8ba43b65c35f9ffc78974d81d943a3237a2ba5399e2bc94ba4fd7932670f354
* txn 0xbb2ebcd35d3b44c8d88dca1d8db3eb99f3e966e37f7c5fc07ed03ef3ff7a1894 has been mined on all nodes
* created instance of contract Kingdom at 0x7e9aac55e25d94779fdee635792e0b777a249614
* txn 0x6a6e120ce31f558b1548299dca5caf85334ac1dd7c2bf928046cdfa3ebe8ee58 has been mined on all nodes
* txn 0xc8ba43b65c35f9ffc78974d81d943a3237a2ba5399e2bc94ba4fd7932670f354 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x7f149f6821e8cc7978a28a14c546432f6a71041172e81737e4fe862838f80288
* txn 0x7f149f6821e8cc7978a28a14c546432f6a71041172e81737e4fe862838f80288 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x48c648c40782284324c360038d8a19db6db8f229d16b19b38d3d4cc016d4e9f6
* txn 0x48c648c40782284324c360038d8a19db6db8f229d16b19b38d3d4cc016d4e9f6 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x13272d469d0a1902be345fccd4beecbb50b6e8eec91d30d767987edb1158c049
* txn 0x13272d469d0a1902be345fccd4beecbb50b6e8eec91d30d767987edb1158c049 has been mined on all nodes

##### Transactions Generated

* [0xbb2ebcd35d3b44c8d88dca1d8db3eb99f3e966e37f7c5fc07ed03ef3ff7a1894](http://testnet.etherscan.io/tx/0xbb2ebcd35d3b44c8d88dca1d8db3eb99f3e966e37f7c5fc07ed03ef3ff7a1894)
* [0x6a6e120ce31f558b1548299dca5caf85334ac1dd7c2bf928046cdfa3ebe8ee58](http://testnet.etherscan.io/tx/0x6a6e120ce31f558b1548299dca5caf85334ac1dd7c2bf928046cdfa3ebe8ee58)
* [0xc8ba43b65c35f9ffc78974d81d943a3237a2ba5399e2bc94ba4fd7932670f354](http://testnet.etherscan.io/tx/0xc8ba43b65c35f9ffc78974d81d943a3237a2ba5399e2bc94ba4fd7932670f354)
* [0x7f149f6821e8cc7978a28a14c546432f6a71041172e81737e4fe862838f80288](http://testnet.etherscan.io/tx/0x7f149f6821e8cc7978a28a14c546432f6a71041172e81737e4fe862838f80288)
* [0x48c648c40782284324c360038d8a19db6db8f229d16b19b38d3d4cc016d4e9f6](http://testnet.etherscan.io/tx/0x48c648c40782284324c360038d8a19db6db8f229d16b19b38d3d4cc016d4e9f6)
* [0x13272d469d0a1902be345fccd4beecbb50b6e8eec91d30d767987edb1158c049](http://testnet.etherscan.io/tx/0x13272d469d0a1902be345fccd4beecbb50b6e8eec91d30d767987edb1158c049)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=50000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=50000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=3000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=3000000000000000,)
* CompensationSentEvent(toAddress=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,valueWei=294000000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=5000000000000000,)
* CommissionEarnedEvent(byAddress=0xb028d69032b7ca02056d684e6086030aecbf6eb0,valueWei=5000000000000000,)
* CompensationSentEvent(toAddress=0x32ce60e1c70b98120dea069bd0b01613cdedad4a,valueWei=490000000000000000,)
* ThroneClaimedEvent(monarchNumber=3,)

### Test - "Fuzz test #12345 for 12"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f
* need to wait for txn 0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67
* need to wait for txn 0x7a569f64aadb9c5dac2e243f6ea61dceb888952773ebddabaaad18a1cc6b03bf
* need to wait for txn 0x0cf916448321dce4d201a654f1e3a70a692b1eea1c9716fed6773fb9ed3109f0
* need to wait for txn 0x0fe0f066c5dfaef48b0789e3094bce53ef9cf384e30905e25f5005af21320fd9
* need to wait for txn 0x1399ebc57b086921dd27e581e555cab948b66d91d626113268eaac40abe64525
* txn 0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f has been mined on all nodes
* txn 0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67 has been mined on all nodes
* txn 0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f has been mined on all nodes
* txn 0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67 has been mined on all nodes
* txn 0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f has been mined on all nodes
* txn 0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67 has been mined on all nodes
* txn 0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f has been mined on all nodes
* txn 0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67 has been mined on all nodes
* txn 0x7a569f64aadb9c5dac2e243f6ea61dceb888952773ebddabaaad18a1cc6b03bf has been mined on all nodes
* created instance of contract Kingdom at 0x68d9c54153da85bdd3e60c8a622543f4cd35bb57
* txn 0x0cf916448321dce4d201a654f1e3a70a692b1eea1c9716fed6773fb9ed3109f0 has been mined on all nodes
* txn 0x0fe0f066c5dfaef48b0789e3094bce53ef9cf384e30905e25f5005af21320fd9 has been mined on all nodes
* txn 0x1399ebc57b086921dd27e581e555cab948b66d91d626113268eaac40abe64525 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xbe3f06678707c9b27e9fac1121317d0b0686557d3b7c2f4ffd49bcf54b8ca905
* txn 0xbe3f06678707c9b27e9fac1121317d0b0686557d3b7c2f4ffd49bcf54b8ca905 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x1df49850d1a692bd2a194a28a97546a23b25f1eec60f7cf7aaf1c6c3cc4d764b
* txn 0x1df49850d1a692bd2a194a28a97546a23b25f1eec60f7cf7aaf1c6c3cc4d764b has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x5e3d90c403a9ab555254a0de0f8a8f50f0cca2850105e3b54c280f4d6f8a6f0b
* txn 0x5e3d90c403a9ab555254a0de0f8a8f50f0cca2850105e3b54c280f4d6f8a6f0b has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x091525c0a4ed289fc32803e1784c1dd1c82007a274f9700a29a8eef9ba095e7a
* txn 0x091525c0a4ed289fc32803e1784c1dd1c82007a274f9700a29a8eef9ba095e7a has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x759db2aaa1907aeb2c318440cc9217b59f7adce00fb3dc701f303245aad03a13
* txn 0x759db2aaa1907aeb2c318440cc9217b59f7adce00fb3dc701f303245aad03a13 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xd0199adaa67992abe5af48de71b67a4af162846a49748846e29edba2cbd31a2f
* txn 0xd0199adaa67992abe5af48de71b67a4af162846a49748846e29edba2cbd31a2f has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xea7b6ff735dcfc53529d7203ae61b5662556ff3527e94584d4b0290274a6e1be
* txn 0xea7b6ff735dcfc53529d7203ae61b5662556ff3527e94584d4b0290274a6e1be has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xdbd968a80339ae545f2ce835b0c3d61f9b2a73385481ba89a411e6e82b5596b7
* txn 0xdbd968a80339ae545f2ce835b0c3d61f9b2a73385481ba89a411e6e82b5596b7 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x1fb6f347f073e30edee26cf1214507e0beb09467b61b59ff2a0d5740b1f1d257
* txn 0x1fb6f347f073e30edee26cf1214507e0beb09467b61b59ff2a0d5740b1f1d257 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0xb48f865a4e40871687af2f5284a92e0d1cc6ae076e1e2495cdaa9ace495f31d1
* txn 0xb48f865a4e40871687af2f5284a92e0d1cc6ae076e1e2495cdaa9ace495f31d1 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x0a0e1f93970513aac5b8e5bf5daef8e903079b2a03042e46b003d8d89a93d755
* txn 0x0a0e1f93970513aac5b8e5bf5daef8e903079b2a03042e46b003d8d89a93d755 has been mined on all nodes
* called contract function Kingdom.claimThrone on node 1
* need to wait for txn 0x44763d06c459d5a6483af18529e750f56c71aea8a5a7d66239af8e4bda3d43f8
* txn 0x44763d06c459d5a6483af18529e750f56c71aea8a5a7d66239af8e4bda3d43f8 has been mined on all nodes

##### Transactions Generated

* [0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f](http://testnet.etherscan.io/tx/0xa840c2dd69a9f86a83bf0722437800cfb5b12a30ebf4f5babfcc70ebc0c9c33f)
* [0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67](http://testnet.etherscan.io/tx/0x1a0c0a0d6aeabf4820fb23965d1a9a78edead10eb4d901ac8ca9993d4fa66c67)
* [0x7a569f64aadb9c5dac2e243f6ea61dceb888952773ebddabaaad18a1cc6b03bf](http://testnet.etherscan.io/tx/0x7a569f64aadb9c5dac2e243f6ea61dceb888952773ebddabaaad18a1cc6b03bf)
* [0x0cf916448321dce4d201a654f1e3a70a692b1eea1c9716fed6773fb9ed3109f0](http://testnet.etherscan.io/tx/0x0cf916448321dce4d201a654f1e3a70a692b1eea1c9716fed6773fb9ed3109f0)
* [0x0fe0f066c5dfaef48b0789e3094bce53ef9cf384e30905e25f5005af21320fd9](http://testnet.etherscan.io/tx/0x0fe0f066c5dfaef48b0789e3094bce53ef9cf384e30905e25f5005af21320fd9)
* [0x1399ebc57b086921dd27e581e555cab948b66d91d626113268eaac40abe64525](http://testnet.etherscan.io/tx/0x1399ebc57b086921dd27e581e555cab948b66d91d626113268eaac40abe64525)
* [0xbe3f06678707c9b27e9fac1121317d0b0686557d3b7c2f4ffd49bcf54b8ca905](http://testnet.etherscan.io/tx/0xbe3f06678707c9b27e9fac1121317d0b0686557d3b7c2f4ffd49bcf54b8ca905)
* [0x1df49850d1a692bd2a194a28a97546a23b25f1eec60f7cf7aaf1c6c3cc4d764b](http://testnet.etherscan.io/tx/0x1df49850d1a692bd2a194a28a97546a23b25f1eec60f7cf7aaf1c6c3cc4d764b)
* [0x5e3d90c403a9ab555254a0de0f8a8f50f0cca2850105e3b54c280f4d6f8a6f0b](http://testnet.etherscan.io/tx/0x5e3d90c403a9ab555254a0de0f8a8f50f0cca2850105e3b54c280f4d6f8a6f0b)
* [0x091525c0a4ed289fc32803e1784c1dd1c82007a274f9700a29a8eef9ba095e7a](http://testnet.etherscan.io/tx/0x091525c0a4ed289fc32803e1784c1dd1c82007a274f9700a29a8eef9ba095e7a)
* [0x759db2aaa1907aeb2c318440cc9217b59f7adce00fb3dc701f303245aad03a13](http://testnet.etherscan.io/tx/0x759db2aaa1907aeb2c318440cc9217b59f7adce00fb3dc701f303245aad03a13)
* [0xd0199adaa67992abe5af48de71b67a4af162846a49748846e29edba2cbd31a2f](http://testnet.etherscan.io/tx/0xd0199adaa67992abe5af48de71b67a4af162846a49748846e29edba2cbd31a2f)
* [0xea7b6ff735dcfc53529d7203ae61b5662556ff3527e94584d4b0290274a6e1be](http://testnet.etherscan.io/tx/0xea7b6ff735dcfc53529d7203ae61b5662556ff3527e94584d4b0290274a6e1be)
* [0xdbd968a80339ae545f2ce835b0c3d61f9b2a73385481ba89a411e6e82b5596b7](http://testnet.etherscan.io/tx/0xdbd968a80339ae545f2ce835b0c3d61f9b2a73385481ba89a411e6e82b5596b7)
* [0x1fb6f347f073e30edee26cf1214507e0beb09467b61b59ff2a0d5740b1f1d257](http://testnet.etherscan.io/tx/0x1fb6f347f073e30edee26cf1214507e0beb09467b61b59ff2a0d5740b1f1d257)
* [0xb48f865a4e40871687af2f5284a92e0d1cc6ae076e1e2495cdaa9ace495f31d1](http://testnet.etherscan.io/tx/0xb48f865a4e40871687af2f5284a92e0d1cc6ae076e1e2495cdaa9ace495f31d1)
* [0x0a0e1f93970513aac5b8e5bf5daef8e903079b2a03042e46b003d8d89a93d755](http://testnet.etherscan.io/tx/0x0a0e1f93970513aac5b8e5bf5daef8e903079b2a03042e46b003d8d89a93d755)
* [0x44763d06c459d5a6483af18529e750f56c71aea8a5a7d66239af8e4bda3d43f8](http://testnet.etherscan.io/tx/0x44763d06c459d5a6483af18529e750f56c71aea8a5a7d66239af8e4bda3d43f8)

##### Contract Events

* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=50000000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=50000000000000000,)
* ThroneClaimedEvent(monarchNumber=1,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1100000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1100000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=107800000000000000,)
* ThroneClaimedEvent(monarchNumber=2,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1210000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1210000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=118580000000000000,)
* ThroneClaimedEvent(monarchNumber=3,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1330000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1330000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=130340000000000000,)
* ThroneClaimedEvent(monarchNumber=4,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1460000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1460000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=143080000000000000,)
* ThroneClaimedEvent(monarchNumber=5,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1600000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1600000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=156800000000000000,)
* ThroneClaimedEvent(monarchNumber=6,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1760000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1760000000000000,)
* CompensationSentEvent(toAddress=0x1c222d814acc0fb170781ab43021957038c0995b,valueWei=172480000000000000,)
* ThroneClaimedEvent(monarchNumber=7,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=1930000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=1930000000000000,)
* CompensationSentEvent(toAddress=0x1c222d814acc0fb170781ab43021957038c0995b,valueWei=189140000000000000,)
* ThroneClaimedEvent(monarchNumber=8,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2120000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2120000000000000,)
* CompensationSentEvent(toAddress=0x92706ae27208ef4bc360254a0b0c7c2079b21599,valueWei=207760000000000000,)
* ThroneClaimedEvent(monarchNumber=9,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2120000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2120000000000000,)
* CompensationSentEvent(toAddress=0x92706ae27208ef4bc360254a0b0c7c2079b21599,valueWei=207760000000000000,)
* ThroneClaimedEvent(monarchNumber=9,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2120000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2120000000000000,)
* CompensationSentEvent(toAddress=0x92706ae27208ef4bc360254a0b0c7c2079b21599,valueWei=207760000000000000,)
* ThroneClaimedEvent(monarchNumber=9,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2120000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2120000000000000,)
* CompensationSentEvent(toAddress=0x92706ae27208ef4bc360254a0b0c7c2079b21599,valueWei=207760000000000000,)
* ThroneClaimedEvent(monarchNumber=9,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2330000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2330000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=228340000000000000,)
* ThroneClaimedEvent(monarchNumber=10,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2560000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2560000000000000,)
* CompensationSentEvent(toAddress=0x92706ae27208ef4bc360254a0b0c7c2079b21599,valueWei=250880000000000000,)
* ThroneClaimedEvent(monarchNumber=11,)
* CommissionEarnedEvent(byAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,valueWei=2810000000000000,)
* CommissionEarnedEvent(byAddress=0x6eb7329d2f78643d5e9216a3db9fb86381f986b4,valueWei=2810000000000000,)
* CompensationSentEvent(toAddress=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,valueWei=275380000000000000,)
* ThroneClaimedEvent(monarchNumber=12,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb2a1d03cf15dd74e57338017cd5d917ce3ba32315c119b7b7e952aae3b5a10a8
* txn 0xb2a1d03cf15dd74e57338017cd5d917ce3ba32315c119b7b7e952aae3b5a10a8 has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x52a860b8a9e83bd4b331678d44b378c49ff047d9

##### Transactions Generated

* [0xb2a1d03cf15dd74e57338017cd5d917ce3ba32315c119b7b7e952aae3b5a10a8](http://testnet.etherscan.io/tx/0xb2a1d03cf15dd74e57338017cd5d917ce3ba32315c119b7b7e952aae3b5a10a8)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x195507d2818db1401c3f0738941dca31b50626cac548e910976e5594f5567ae3
* txn 0x195507d2818db1401c3f0738941dca31b50626cac548e910976e5594f5567ae3 has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x0373926474bca95bdf136be1eadd7f6e1b5dafca

##### Transactions Generated

* [0x195507d2818db1401c3f0738941dca31b50626cac548e910976e5594f5567ae3](http://testnet.etherscan.io/tx/0x195507d2818db1401c3f0738941dca31b50626cac548e910976e5594f5567ae3)

### Test - "Test roundMoneyDownNicely"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x7a673f2c3761351c4fa434608ffa8cd40a24e43e7df38c18931f1dd796722822
* txn 0x7a673f2c3761351c4fa434608ffa8cd40a24e43e7df38c18931f1dd796722822 has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0x1b01cf379c353b4d49e02d8ab99c7203781f09ab

##### Transactions Generated

* [0x7a673f2c3761351c4fa434608ffa8cd40a24e43e7df38c18931f1dd796722822](http://testnet.etherscan.io/tx/0x7a673f2c3761351c4fa434608ffa8cd40a24e43e7df38c18931f1dd796722822)

### Test - "Test roundMoneyUpToWholeFinney"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x7b1887cad61457b7ffa01dbae94f838c20be26b2a203f28a4b21a4cc692eda7d
* txn 0x7b1887cad61457b7ffa01dbae94f838c20be26b2a203f28a4b21a4cc692eda7d has been mined on all nodes
* created instance of contract ExposedInternalsForTesting at 0xa9f8fbb0266b9bedf1fbf60d24729d76cd11c9f0

##### Transactions Generated

* [0x7b1887cad61457b7ffa01dbae94f838c20be26b2a203f28a4b21a4cc692eda7d](http://testnet.etherscan.io/tx/0x7b1887cad61457b7ffa01dbae94f838c20be26b2a203f28a4b21a4cc692eda7d)

