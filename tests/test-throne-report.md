# "King of the Ether Throne" Report

Generated at 2016-05-10T22:09:57.424Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 37
* Tests skipped: 0
* Tests passed: 37
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x1fd7a4b529a1e70403cb65b27bf73d48e0ca1e3d53117ac4110ed366b9563ba3
* txn 0x1fd7a4b529a1e70403cb65b27bf73d48e0ca1e3d53117ac4110ed366b9563ba3 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x563bd04ecc9056497e84a9b102a8138f045913a7
* got remote instance of contract KingOfTheEtherThrone at 0x563bd04ecc9056497e84a9b102a8138f045913a7 on node 2

##### Transactions Generated

* [0x1fd7a4b529a1e70403cb65b27bf73d48e0ca1e3d53117ac4110ed366b9563ba3](http://testnet.etherscan.io/tx/0x1fd7a4b529a1e70403cb65b27bf73d48e0ca1e3d53117ac4110ed366b9563ba3)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xe15db001d23ebdb975b9df2f9f8b2d863e5804258ff50d31b3b77356bbb2ce9d
* need to wait for txn 0x9b029d91d471d3e7ff9baf58c0d7228f29a7a653f6b4b9118ca2fc161a5cfc21
* txn 0xe15db001d23ebdb975b9df2f9f8b2d863e5804258ff50d31b3b77356bbb2ce9d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x1a9b69fd042c4242f1c43682366e37f0927abbae
* got remote instance of contract KingOfTheEtherThrone at 0x1a9b69fd042c4242f1c43682366e37f0927abbae on node 2
* txn 0x9b029d91d471d3e7ff9baf58c0d7228f29a7a653f6b4b9118ca2fc161a5cfc21 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x8c599760aca4da9b71b3acdd5a0688578f80967576da39355af356be5719f1b3
* txn 0x8c599760aca4da9b71b3acdd5a0688578f80967576da39355af356be5719f1b3 has been mined on all nodes

##### Transactions Generated

* [0xe15db001d23ebdb975b9df2f9f8b2d863e5804258ff50d31b3b77356bbb2ce9d](http://testnet.etherscan.io/tx/0xe15db001d23ebdb975b9df2f9f8b2d863e5804258ff50d31b3b77356bbb2ce9d)
* [0x9b029d91d471d3e7ff9baf58c0d7228f29a7a653f6b4b9118ca2fc161a5cfc21](http://testnet.etherscan.io/tx/0x9b029d91d471d3e7ff9baf58c0d7228f29a7a653f6b4b9118ca2fc161a5cfc21)
* [0x8c599760aca4da9b71b3acdd5a0688578f80967576da39355af356be5719f1b3](http://testnet.etherscan.io/tx/0x8c599760aca4da9b71b3acdd5a0688578f80967576da39355af356be5719f1b3)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xdf8b3fe218d2204c0e67b02604c4934d255a52cde42f64c940d41d34db8604ba
* need to wait for txn 0xdec56e54c18bd67b08531350f1ad703abcf533e319e20d788dfb027fb2b0f3cd
* txn 0xdf8b3fe218d2204c0e67b02604c4934d255a52cde42f64c940d41d34db8604ba has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x6cccb53f5cdb464b11231f7fe0a5e1673ba1a80e
* got remote instance of contract KingOfTheEtherThrone at 0x6cccb53f5cdb464b11231f7fe0a5e1673ba1a80e on node 2
* txn 0xdec56e54c18bd67b08531350f1ad703abcf533e319e20d788dfb027fb2b0f3cd has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x0bf382f15233ab11a62f7f6d0fe94ccc403957db2773d044a6572e29f9eef92a
* txn 0x0bf382f15233ab11a62f7f6d0fe94ccc403957db2773d044a6572e29f9eef92a has been mined on all nodes

##### Transactions Generated

* [0xdf8b3fe218d2204c0e67b02604c4934d255a52cde42f64c940d41d34db8604ba](http://testnet.etherscan.io/tx/0xdf8b3fe218d2204c0e67b02604c4934d255a52cde42f64c940d41d34db8604ba)
* [0xdec56e54c18bd67b08531350f1ad703abcf533e319e20d788dfb027fb2b0f3cd](http://testnet.etherscan.io/tx/0xdec56e54c18bd67b08531350f1ad703abcf533e319e20d788dfb027fb2b0f3cd)
* [0x0bf382f15233ab11a62f7f6d0fe94ccc403957db2773d044a6572e29f9eef92a](http://testnet.etherscan.io/tx/0x0bf382f15233ab11a62f7f6d0fe94ccc403957db2773d044a6572e29f9eef92a)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xac7aa27afb4a23792560ae5819e7f7163c499686c33ae2e4368d1acffdee4906
* need to wait for txn 0x8a2daf814dcc7119c62eb6dbff4c2952f1d594a0491965a1394645cb34c969ed
* txn 0xac7aa27afb4a23792560ae5819e7f7163c499686c33ae2e4368d1acffdee4906 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x7ce0bf10fd9bfaee04be4415d36f668d091d235b
* got remote instance of contract KingOfTheEtherThrone at 0x7ce0bf10fd9bfaee04be4415d36f668d091d235b on node 2
* txn 0x8a2daf814dcc7119c62eb6dbff4c2952f1d594a0491965a1394645cb34c969ed has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xef9688abac1e1328edad1e9574d9773887fcc7a7e4f51aee56c2654c22dc2608
* txn 0xef9688abac1e1328edad1e9574d9773887fcc7a7e4f51aee56c2654c22dc2608 has been mined on all nodes

##### Transactions Generated

* [0xac7aa27afb4a23792560ae5819e7f7163c499686c33ae2e4368d1acffdee4906](http://testnet.etherscan.io/tx/0xac7aa27afb4a23792560ae5819e7f7163c499686c33ae2e4368d1acffdee4906)
* [0x8a2daf814dcc7119c62eb6dbff4c2952f1d594a0491965a1394645cb34c969ed](http://testnet.etherscan.io/tx/0x8a2daf814dcc7119c62eb6dbff4c2952f1d594a0491965a1394645cb34c969ed)
* [0xef9688abac1e1328edad1e9574d9773887fcc7a7e4f51aee56c2654c22dc2608](http://testnet.etherscan.io/tx/0xef9688abac1e1328edad1e9574d9773887fcc7a7e4f51aee56c2654c22dc2608)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa6dc3598fc9b510b10bf52e38258c4fbde931bd7a91f3650619ef23c64b5f2eb
* txn 0xa6dc3598fc9b510b10bf52e38258c4fbde931bd7a91f3650619ef23c64b5f2eb has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x845f1300238162202b6140f8710f9eec70f4cc37
* got remote instance of contract KingOfTheEtherThrone at 0x845f1300238162202b6140f8710f9eec70f4cc37 on node 2

##### Transactions Generated

* [0xa6dc3598fc9b510b10bf52e38258c4fbde931bd7a91f3650619ef23c64b5f2eb](http://testnet.etherscan.io/tx/0xa6dc3598fc9b510b10bf52e38258c4fbde931bd7a91f3650619ef23c64b5f2eb)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xd504f958fb9af84262cf06a2bf457ab87296292054eabfd1b94abd11531a481a
* need to wait for txn 0xc3a4c139c64e007ac8c7c9cef623b3231a021942761d5f11305ab8b8099bd6ba
* txn 0xd504f958fb9af84262cf06a2bf457ab87296292054eabfd1b94abd11531a481a has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf2e9b33b4359704c1275ca1d21baffc259d5a170
* got remote instance of contract KingOfTheEtherThrone at 0xf2e9b33b4359704c1275ca1d21baffc259d5a170 on node 2
* txn 0xc3a4c139c64e007ac8c7c9cef623b3231a021942761d5f11305ab8b8099bd6ba has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xd2cf6b61f62aeb78d14df332acea9cdf0cf9b5b8e0906e540d9d0f3a02294fc4
* txn 0xd2cf6b61f62aeb78d14df332acea9cdf0cf9b5b8e0906e540d9d0f3a02294fc4 has been mined on all nodes

##### Transactions Generated

* [0xd504f958fb9af84262cf06a2bf457ab87296292054eabfd1b94abd11531a481a](http://testnet.etherscan.io/tx/0xd504f958fb9af84262cf06a2bf457ab87296292054eabfd1b94abd11531a481a)
* [0xc3a4c139c64e007ac8c7c9cef623b3231a021942761d5f11305ab8b8099bd6ba](http://testnet.etherscan.io/tx/0xc3a4c139c64e007ac8c7c9cef623b3231a021942761d5f11305ab8b8099bd6ba)
* [0xd2cf6b61f62aeb78d14df332acea9cdf0cf9b5b8e0906e540d9d0f3a02294fc4](http://testnet.etherscan.io/tx/0xd2cf6b61f62aeb78d14df332acea9cdf0cf9b5b8e0906e540d9d0f3a02294fc4)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xd1167df763cb79ad56dcf0cda99f120dfe6438b33ec2229b9a46e37437f2dd84
* need to wait for txn 0xff18c50681c8f0ecafe8646cdde9e27ea634997b4649f3ddb1e8b33e60bdbca0
* need to wait for txn 0x96f0f9e3cc6d82aa2ce22ecf4d9bf5a0490632264d4f10939f0543586b3a5cb3
* txn 0xd1167df763cb79ad56dcf0cda99f120dfe6438b33ec2229b9a46e37437f2dd84 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xdf1815f6c17c4984217b32657917e59320994fe8
* got remote instance of contract KingOfTheEtherThrone at 0xdf1815f6c17c4984217b32657917e59320994fe8 on node 2
* txn 0xff18c50681c8f0ecafe8646cdde9e27ea634997b4649f3ddb1e8b33e60bdbca0 has been mined on all nodes
* txn 0x96f0f9e3cc6d82aa2ce22ecf4d9bf5a0490632264d4f10939f0543586b3a5cb3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x98a2811066a277ed7ed84b9780e76ca20a28e1b072071caf9f13e688fceb3037
* txn 0x98a2811066a277ed7ed84b9780e76ca20a28e1b072071caf9f13e688fceb3037 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xf945eca2714a03cf0778fff91e0a12ff58a09f72143db43c8d96650e83e3d586
* txn 0xf945eca2714a03cf0778fff91e0a12ff58a09f72143db43c8d96650e83e3d586 has been mined on all nodes

##### Transactions Generated

* [0xd1167df763cb79ad56dcf0cda99f120dfe6438b33ec2229b9a46e37437f2dd84](http://testnet.etherscan.io/tx/0xd1167df763cb79ad56dcf0cda99f120dfe6438b33ec2229b9a46e37437f2dd84)
* [0xff18c50681c8f0ecafe8646cdde9e27ea634997b4649f3ddb1e8b33e60bdbca0](http://testnet.etherscan.io/tx/0xff18c50681c8f0ecafe8646cdde9e27ea634997b4649f3ddb1e8b33e60bdbca0)
* [0x96f0f9e3cc6d82aa2ce22ecf4d9bf5a0490632264d4f10939f0543586b3a5cb3](http://testnet.etherscan.io/tx/0x96f0f9e3cc6d82aa2ce22ecf4d9bf5a0490632264d4f10939f0543586b3a5cb3)
* [0x98a2811066a277ed7ed84b9780e76ca20a28e1b072071caf9f13e688fceb3037](http://testnet.etherscan.io/tx/0x98a2811066a277ed7ed84b9780e76ca20a28e1b072071caf9f13e688fceb3037)
* [0xf945eca2714a03cf0778fff91e0a12ff58a09f72143db43c8d96650e83e3d586](http://testnet.etherscan.io/tx/0xf945eca2714a03cf0778fff91e0a12ff58a09f72143db43c8d96650e83e3d586)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xeb11db9bf614f171d2f2ba9522bc01cdf811df945bf94f510ae2634a234e61eb
* need to wait for txn 0x7cd5a2204f47e90cfc1d5d9d78f7a3a71026a8e8d881c61fc709d02262043d0b
* need to wait for txn 0xcbed0340c23db6b7ba520e54985c2ffc88d2911e8fbeb2f6f566450061de93f2
* txn 0xeb11db9bf614f171d2f2ba9522bc01cdf811df945bf94f510ae2634a234e61eb has been mined on all nodes
* txn 0xeb11db9bf614f171d2f2ba9522bc01cdf811df945bf94f510ae2634a234e61eb has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xaca0b6d358b2321c7ca6294c035b489a284f7682
* got remote instance of contract KingOfTheEtherThrone at 0xaca0b6d358b2321c7ca6294c035b489a284f7682 on node 2
* txn 0x7cd5a2204f47e90cfc1d5d9d78f7a3a71026a8e8d881c61fc709d02262043d0b has been mined on all nodes
* txn 0xcbed0340c23db6b7ba520e54985c2ffc88d2911e8fbeb2f6f566450061de93f2 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x2cf15986cc17f3c052901cac466ba3a6886d449728399077f74fc30fed04ed14
* txn 0x2cf15986cc17f3c052901cac466ba3a6886d449728399077f74fc30fed04ed14 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xa5af30c2430921cadba149b3d8272d3f380f82f96bdba866e3389fabaaffe8c0
* txn 0xa5af30c2430921cadba149b3d8272d3f380f82f96bdba866e3389fabaaffe8c0 has been mined on all nodes

##### Transactions Generated

* [0xeb11db9bf614f171d2f2ba9522bc01cdf811df945bf94f510ae2634a234e61eb](http://testnet.etherscan.io/tx/0xeb11db9bf614f171d2f2ba9522bc01cdf811df945bf94f510ae2634a234e61eb)
* [0x7cd5a2204f47e90cfc1d5d9d78f7a3a71026a8e8d881c61fc709d02262043d0b](http://testnet.etherscan.io/tx/0x7cd5a2204f47e90cfc1d5d9d78f7a3a71026a8e8d881c61fc709d02262043d0b)
* [0xcbed0340c23db6b7ba520e54985c2ffc88d2911e8fbeb2f6f566450061de93f2](http://testnet.etherscan.io/tx/0xcbed0340c23db6b7ba520e54985c2ffc88d2911e8fbeb2f6f566450061de93f2)
* [0x2cf15986cc17f3c052901cac466ba3a6886d449728399077f74fc30fed04ed14](http://testnet.etherscan.io/tx/0x2cf15986cc17f3c052901cac466ba3a6886d449728399077f74fc30fed04ed14)
* [0xa5af30c2430921cadba149b3d8272d3f380f82f96bdba866e3389fabaaffe8c0](http://testnet.etherscan.io/tx/0xa5af30c2430921cadba149b3d8272d3f380f82f96bdba866e3389fabaaffe8c0)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x2210affc20281175dc5a74d5ac432e444afdddcbfd01315ecd62d681a4c02c55
* need to wait for txn 0x94b9e5963450cb5e7eaab2e392cd5daede83a1d211af9bdf086b9090f61d886c
* need to wait for txn 0x8bb25dfb1186b7b181b719934ed7eca3d678ba6d2e553817d9e4c633e339c32b
* txn 0x2210affc20281175dc5a74d5ac432e444afdddcbfd01315ecd62d681a4c02c55 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x1e2494319db7b05ff061aae7054df257459826cf
* got remote instance of contract KingOfTheEtherThrone at 0x1e2494319db7b05ff061aae7054df257459826cf on node 2
* txn 0x94b9e5963450cb5e7eaab2e392cd5daede83a1d211af9bdf086b9090f61d886c has been mined on all nodes
* txn 0x8bb25dfb1186b7b181b719934ed7eca3d678ba6d2e553817d9e4c633e339c32b has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x10e78c2d93ad5de1ad16c6202b44afad83498dacef773e71d32dc19501a6210a
* txn 0x10e78c2d93ad5de1ad16c6202b44afad83498dacef773e71d32dc19501a6210a has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x6250e0c5c432133caa9b159183a4c4f9d30284291dac38373c9f32a14ceeca93
* txn 0x6250e0c5c432133caa9b159183a4c4f9d30284291dac38373c9f32a14ceeca93 has been mined on all nodes

##### Transactions Generated

* [0x2210affc20281175dc5a74d5ac432e444afdddcbfd01315ecd62d681a4c02c55](http://testnet.etherscan.io/tx/0x2210affc20281175dc5a74d5ac432e444afdddcbfd01315ecd62d681a4c02c55)
* [0x94b9e5963450cb5e7eaab2e392cd5daede83a1d211af9bdf086b9090f61d886c](http://testnet.etherscan.io/tx/0x94b9e5963450cb5e7eaab2e392cd5daede83a1d211af9bdf086b9090f61d886c)
* [0x8bb25dfb1186b7b181b719934ed7eca3d678ba6d2e553817d9e4c633e339c32b](http://testnet.etherscan.io/tx/0x8bb25dfb1186b7b181b719934ed7eca3d678ba6d2e553817d9e4c633e339c32b)
* [0x10e78c2d93ad5de1ad16c6202b44afad83498dacef773e71d32dc19501a6210a](http://testnet.etherscan.io/tx/0x10e78c2d93ad5de1ad16c6202b44afad83498dacef773e71d32dc19501a6210a)
* [0x6250e0c5c432133caa9b159183a4c4f9d30284291dac38373c9f32a14ceeca93](http://testnet.etherscan.io/tx/0x6250e0c5c432133caa9b159183a4c4f9d30284291dac38373c9f32a14ceeca93)

##### Contract Events

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

* need to wait for txn 0x3f2b1e7c88fa00593cb61a8895bd07be19f0866401e25f3831b0407153b33f7d
* need to wait for txn 0xb90746840dba70b98ca01cd5386c7b3a2b7a384b44fe39c7dd464de43af838ee
* need to wait for txn 0x9a030568bf28cbf31d47052387f8bfcb45427d7cbc2cf479e36c67c2bf61c878
* txn 0x3f2b1e7c88fa00593cb61a8895bd07be19f0866401e25f3831b0407153b33f7d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xc30ba8a3326e320ee68d0b8ac85a5feb7c28a01b
* got remote instance of contract KingOfTheEtherThrone at 0xc30ba8a3326e320ee68d0b8ac85a5feb7c28a01b on node 2
* txn 0xb90746840dba70b98ca01cd5386c7b3a2b7a384b44fe39c7dd464de43af838ee has been mined on all nodes
* txn 0x9a030568bf28cbf31d47052387f8bfcb45427d7cbc2cf479e36c67c2bf61c878 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xae078d7ecbd686339985576acf00465781fed4096492f329863910684dc325d3
* txn 0xae078d7ecbd686339985576acf00465781fed4096492f329863910684dc325d3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x3ff4f5ffdc62d4f3a822628ade735e600b58839c37a916397ea38e65920838dc
* txn 0x3ff4f5ffdc62d4f3a822628ade735e600b58839c37a916397ea38e65920838dc has been mined on all nodes

##### Transactions Generated

* [0x3f2b1e7c88fa00593cb61a8895bd07be19f0866401e25f3831b0407153b33f7d](http://testnet.etherscan.io/tx/0x3f2b1e7c88fa00593cb61a8895bd07be19f0866401e25f3831b0407153b33f7d)
* [0xb90746840dba70b98ca01cd5386c7b3a2b7a384b44fe39c7dd464de43af838ee](http://testnet.etherscan.io/tx/0xb90746840dba70b98ca01cd5386c7b3a2b7a384b44fe39c7dd464de43af838ee)
* [0x9a030568bf28cbf31d47052387f8bfcb45427d7cbc2cf479e36c67c2bf61c878](http://testnet.etherscan.io/tx/0x9a030568bf28cbf31d47052387f8bfcb45427d7cbc2cf479e36c67c2bf61c878)
* [0xae078d7ecbd686339985576acf00465781fed4096492f329863910684dc325d3](http://testnet.etherscan.io/tx/0xae078d7ecbd686339985576acf00465781fed4096492f329863910684dc325d3)
* [0x3ff4f5ffdc62d4f3a822628ade735e600b58839c37a916397ea38e65920838dc](http://testnet.etherscan.io/tx/0x3ff4f5ffdc62d4f3a822628ade735e600b58839c37a916397ea38e65920838dc)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4dbf7f96d0c93c6d262d49e66d458c9b8c299f7d298d7500498d44eb664014f9
* need to wait for txn 0x9bca03732ae7e52440806795ff47cab82c476188f24e24c6df15647017bb902f
* txn 0x4dbf7f96d0c93c6d262d49e66d458c9b8c299f7d298d7500498d44eb664014f9 has been mined on all nodes
* txn 0x4dbf7f96d0c93c6d262d49e66d458c9b8c299f7d298d7500498d44eb664014f9 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x385a464a7fe1d6608be4db5602c0d1e4a33493e2
* got remote instance of contract KingOfTheEtherThrone at 0x385a464a7fe1d6608be4db5602c0d1e4a33493e2 on node 2
* txn 0x9bca03732ae7e52440806795ff47cab82c476188f24e24c6df15647017bb902f has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x7e855444d4264b6091ebc137614c256a7e08bbf59ff78f9830c604ee960d953b
* txn 0x7e855444d4264b6091ebc137614c256a7e08bbf59ff78f9830c604ee960d953b has been mined on all nodes

##### Transactions Generated

* [0x4dbf7f96d0c93c6d262d49e66d458c9b8c299f7d298d7500498d44eb664014f9](http://testnet.etherscan.io/tx/0x4dbf7f96d0c93c6d262d49e66d458c9b8c299f7d298d7500498d44eb664014f9)
* [0x9bca03732ae7e52440806795ff47cab82c476188f24e24c6df15647017bb902f](http://testnet.etherscan.io/tx/0x9bca03732ae7e52440806795ff47cab82c476188f24e24c6df15647017bb902f)
* [0x7e855444d4264b6091ebc137614c256a7e08bbf59ff78f9830c604ee960d953b](http://testnet.etherscan.io/tx/0x7e855444d4264b6091ebc137614c256a7e08bbf59ff78f9830c604ee960d953b)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3ca5703d04a9ab13ad6972e4ee355dad4e1565008599616538159658a31519d8
* need to wait for txn 0x816b5d555d318a72ee9e7e74c74e52322f23396a0345e74350fb24a9df055c3a
* need to wait for txn 0xe93dc368fb1c5e368bc1565cfef63bcb657fdc956a19fba85d1fc8ac26df9ff7
* txn 0x3ca5703d04a9ab13ad6972e4ee355dad4e1565008599616538159658a31519d8 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xa5c495ff7a181084f12a1a82ac4eb90994c04bb9
* got remote instance of contract KingOfTheEtherThrone at 0xa5c495ff7a181084f12a1a82ac4eb90994c04bb9 on node 2
* txn 0x816b5d555d318a72ee9e7e74c74e52322f23396a0345e74350fb24a9df055c3a has been mined on all nodes
* txn 0xe93dc368fb1c5e368bc1565cfef63bcb657fdc956a19fba85d1fc8ac26df9ff7 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x2e5347beec19460a50421685d238a9de5030a169bdb3877823287f3a337dd6c1
* txn 0x2e5347beec19460a50421685d238a9de5030a169bdb3877823287f3a337dd6c1 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x49ca8b4d62c5c4c4e1ccfad996aa7264f977c3e8d8202979034dbf6aa8052a45
* txn 0x49ca8b4d62c5c4c4e1ccfad996aa7264f977c3e8d8202979034dbf6aa8052a45 has been mined on all nodes

##### Transactions Generated

* [0x3ca5703d04a9ab13ad6972e4ee355dad4e1565008599616538159658a31519d8](http://testnet.etherscan.io/tx/0x3ca5703d04a9ab13ad6972e4ee355dad4e1565008599616538159658a31519d8)
* [0x816b5d555d318a72ee9e7e74c74e52322f23396a0345e74350fb24a9df055c3a](http://testnet.etherscan.io/tx/0x816b5d555d318a72ee9e7e74c74e52322f23396a0345e74350fb24a9df055c3a)
* [0xe93dc368fb1c5e368bc1565cfef63bcb657fdc956a19fba85d1fc8ac26df9ff7](http://testnet.etherscan.io/tx/0xe93dc368fb1c5e368bc1565cfef63bcb657fdc956a19fba85d1fc8ac26df9ff7)
* [0x2e5347beec19460a50421685d238a9de5030a169bdb3877823287f3a337dd6c1](http://testnet.etherscan.io/tx/0x2e5347beec19460a50421685d238a9de5030a169bdb3877823287f3a337dd6c1)
* [0x49ca8b4d62c5c4c4e1ccfad996aa7264f977c3e8d8202979034dbf6aa8052a45](http://testnet.etherscan.io/tx/0x49ca8b4d62c5c4c4e1ccfad996aa7264f977c3e8d8202979034dbf6aa8052a45)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x5a3edde96b9cc6803368f99170518944d1da323292ebf5f8da35ef99c48d0ada
* need to wait for txn 0x13bd0081a2b1db8e391fbd2cb931388f8761a6080d2c8a8eec9927c76b0b4ff1
* txn 0x5a3edde96b9cc6803368f99170518944d1da323292ebf5f8da35ef99c48d0ada has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf24606e586ed4ef336e08753bc421daf6de6969f
* got remote instance of contract KingOfTheEtherThrone at 0xf24606e586ed4ef336e08753bc421daf6de6969f on node 2
* txn 0x13bd0081a2b1db8e391fbd2cb931388f8761a6080d2c8a8eec9927c76b0b4ff1 has been mined on all nodes
* need to wait for txn 0x04dcf40ea1e91cb62db50d9307590b4e8fa4b46cbd283f63e10ac4802af3f48f
* txn 0x04dcf40ea1e91cb62db50d9307590b4e8fa4b46cbd283f63e10ac4802af3f48f has been mined on all nodes

##### Transactions Generated

* [0x5a3edde96b9cc6803368f99170518944d1da323292ebf5f8da35ef99c48d0ada](http://testnet.etherscan.io/tx/0x5a3edde96b9cc6803368f99170518944d1da323292ebf5f8da35ef99c48d0ada)
* [0x13bd0081a2b1db8e391fbd2cb931388f8761a6080d2c8a8eec9927c76b0b4ff1](http://testnet.etherscan.io/tx/0x13bd0081a2b1db8e391fbd2cb931388f8761a6080d2c8a8eec9927c76b0b4ff1)
* [0x04dcf40ea1e91cb62db50d9307590b4e8fa4b46cbd283f63e10ac4802af3f48f](http://testnet.etherscan.io/tx/0x04dcf40ea1e91cb62db50d9307590b4e8fa4b46cbd283f63e10ac4802af3f48f)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xfc6e4ad92244fd650869147f8c40bd55f16242b8a18ddd826296010f54fb05db
* need to wait for txn 0x822e5c5fd412efc8bf26ef59a7ef48d3f10542a6649066c381a7bc826134b09d
* txn 0xfc6e4ad92244fd650869147f8c40bd55f16242b8a18ddd826296010f54fb05db has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf984aab623a2c68cc60de433eea5156895dc7eed
* got remote instance of contract KingOfTheEtherThrone at 0xf984aab623a2c68cc60de433eea5156895dc7eed on node 2
* txn 0x822e5c5fd412efc8bf26ef59a7ef48d3f10542a6649066c381a7bc826134b09d has been mined on all nodes
* need to wait for txn 0x2ea9229df7c4f07cbe87d76589331289af9c9c8dd92fb9d6e9cce7e9c4533c2d
* txn 0x2ea9229df7c4f07cbe87d76589331289af9c9c8dd92fb9d6e9cce7e9c4533c2d has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x6feafe5ba0c0912e134a4f33278b994246bb52e9
* got remote instance of contract DTRExpensiveWallet at 0x6feafe5ba0c0912e134a4f33278b994246bb52e9 on node 2
* need to wait for txn 0xd0e01c69345dfbd8228b88355831c34c32faa545f8341e15cdcb974b42a9cc86
* txn 0xd0e01c69345dfbd8228b88355831c34c32faa545f8341e15cdcb974b42a9cc86 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x98840749b3396af7acc6ada70d937c3c9e4055e1e726a39514370d49eb9d3bea
* txn 0x98840749b3396af7acc6ada70d937c3c9e4055e1e726a39514370d49eb9d3bea has been mined on all nodes

##### Transactions Generated

* [0xfc6e4ad92244fd650869147f8c40bd55f16242b8a18ddd826296010f54fb05db](http://testnet.etherscan.io/tx/0xfc6e4ad92244fd650869147f8c40bd55f16242b8a18ddd826296010f54fb05db)
* [0x822e5c5fd412efc8bf26ef59a7ef48d3f10542a6649066c381a7bc826134b09d](http://testnet.etherscan.io/tx/0x822e5c5fd412efc8bf26ef59a7ef48d3f10542a6649066c381a7bc826134b09d)
* [0x2ea9229df7c4f07cbe87d76589331289af9c9c8dd92fb9d6e9cce7e9c4533c2d](http://testnet.etherscan.io/tx/0x2ea9229df7c4f07cbe87d76589331289af9c9c8dd92fb9d6e9cce7e9c4533c2d)
* [0xd0e01c69345dfbd8228b88355831c34c32faa545f8341e15cdcb974b42a9cc86](http://testnet.etherscan.io/tx/0xd0e01c69345dfbd8228b88355831c34c32faa545f8341e15cdcb974b42a9cc86)
* [0x98840749b3396af7acc6ada70d937c3c9e4055e1e726a39514370d49eb9d3bea](http://testnet.etherscan.io/tx/0x98840749b3396af7acc6ada70d937c3c9e4055e1e726a39514370d49eb9d3bea)

##### Contract Events

* WalletCreated(by=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,)
* WalletCreated(by=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,)
* DepositMade(from=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,value=1000000000000000000,)
* DepositMade(from=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xf984aab623a2c68cc60de433eea5156895dc7eed,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xf984aab623a2c68cc60de433eea5156895dc7eed,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb7665fee68fadadbb79421056296614ae4aa50d119fbd23b603d97c25db7ad65
* need to wait for txn 0x02484678984a610ef3a9c8eed23768456b27edff2bd35f7a0a5fb559db23a8bf
* need to wait for txn 0xfd677ec81734ef2b2c2338fcbf6befab6196ab47731b5f4c06bf2e4333a59054
* txn 0xb7665fee68fadadbb79421056296614ae4aa50d119fbd23b603d97c25db7ad65 has been mined on all nodes
* txn 0xb7665fee68fadadbb79421056296614ae4aa50d119fbd23b603d97c25db7ad65 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x8f9a5977b99322412f927cb25f42c019381d5849
* got remote instance of contract KingOfTheEtherThrone at 0x8f9a5977b99322412f927cb25f42c019381d5849 on node 2
* txn 0x02484678984a610ef3a9c8eed23768456b27edff2bd35f7a0a5fb559db23a8bf has been mined on all nodes
* txn 0xfd677ec81734ef2b2c2338fcbf6befab6196ab47731b5f4c06bf2e4333a59054 has been mined on all nodes
* need to wait for txn 0x804c0001fa9c491a3714a9f0e835ac4e31155295e95c305848a9224e5fb54d09
* txn 0x804c0001fa9c491a3714a9f0e835ac4e31155295e95c305848a9224e5fb54d09 has been mined on all nodes
* txn 0x804c0001fa9c491a3714a9f0e835ac4e31155295e95c305848a9224e5fb54d09 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x84243673ee2c9f37feb6e579137753203537ab53
* got remote instance of contract DTRExpensiveWallet at 0x84243673ee2c9f37feb6e579137753203537ab53 on node 2
* need to wait for txn 0xd7d25d6934637edc06b89cd8853379ed66c846a125e31c6440d4a7c3f6a93db2
* txn 0xd7d25d6934637edc06b89cd8853379ed66c846a125e31c6440d4a7c3f6a93db2 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x884e3f52898453e26ac5f9c828c37ef58ba481b3a00399f357ef07181f73ad13
* txn 0x884e3f52898453e26ac5f9c828c37ef58ba481b3a00399f357ef07181f73ad13 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x4d7ba26c57fcb97bacc1ada5c891e15ae448735986f59d78a1f578e17268b5a8
* txn 0x4d7ba26c57fcb97bacc1ada5c891e15ae448735986f59d78a1f578e17268b5a8 has been mined on all nodes

##### Transactions Generated

* [0xb7665fee68fadadbb79421056296614ae4aa50d119fbd23b603d97c25db7ad65](http://testnet.etherscan.io/tx/0xb7665fee68fadadbb79421056296614ae4aa50d119fbd23b603d97c25db7ad65)
* [0x02484678984a610ef3a9c8eed23768456b27edff2bd35f7a0a5fb559db23a8bf](http://testnet.etherscan.io/tx/0x02484678984a610ef3a9c8eed23768456b27edff2bd35f7a0a5fb559db23a8bf)
* [0xfd677ec81734ef2b2c2338fcbf6befab6196ab47731b5f4c06bf2e4333a59054](http://testnet.etherscan.io/tx/0xfd677ec81734ef2b2c2338fcbf6befab6196ab47731b5f4c06bf2e4333a59054)
* [0x804c0001fa9c491a3714a9f0e835ac4e31155295e95c305848a9224e5fb54d09](http://testnet.etherscan.io/tx/0x804c0001fa9c491a3714a9f0e835ac4e31155295e95c305848a9224e5fb54d09)
* [0xd7d25d6934637edc06b89cd8853379ed66c846a125e31c6440d4a7c3f6a93db2](http://testnet.etherscan.io/tx/0xd7d25d6934637edc06b89cd8853379ed66c846a125e31c6440d4a7c3f6a93db2)
* [0x884e3f52898453e26ac5f9c828c37ef58ba481b3a00399f357ef07181f73ad13](http://testnet.etherscan.io/tx/0x884e3f52898453e26ac5f9c828c37ef58ba481b3a00399f357ef07181f73ad13)
* [0x4d7ba26c57fcb97bacc1ada5c891e15ae448735986f59d78a1f578e17268b5a8](http://testnet.etherscan.io/tx/0x4d7ba26c57fcb97bacc1ada5c891e15ae448735986f59d78a1f578e17268b5a8)

##### Contract Events

* DepositMade(from=0x1c222d814acc0fb170781ab43021957038c0995b,value=1000000000000000000,)
* DepositMade(from=0x1c222d814acc0fb170781ab43021957038c0995b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x8f9a5977b99322412f927cb25f42c019381d5849,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x8f9a5977b99322412f927cb25f42c019381d5849,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,value=1470000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x418ddb18ecb24d22ee58202b62343e3f7dfa3ad763363b1168c12b080b4beea9
* need to wait for txn 0x2648d7fcdf12f2b71a2318f8139673041578fcd3c5ad3574a672c7c11fa56c87
* need to wait for txn 0xda3c07659e4bd2d753fda12a545218a83abcf1a77d0a98f211a8ef52c0d8af48
* txn 0x418ddb18ecb24d22ee58202b62343e3f7dfa3ad763363b1168c12b080b4beea9 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x787b8ce59a997c9350021f869358662165a5c065
* got remote instance of contract KingOfTheEtherThrone at 0x787b8ce59a997c9350021f869358662165a5c065 on node 2
* txn 0x2648d7fcdf12f2b71a2318f8139673041578fcd3c5ad3574a672c7c11fa56c87 has been mined on all nodes
* txn 0xda3c07659e4bd2d753fda12a545218a83abcf1a77d0a98f211a8ef52c0d8af48 has been mined on all nodes
* need to wait for txn 0x43e40a7b12877c36436948cfb71ae456eee3fd222e9add6c152f63eab57bd908
* txn 0x43e40a7b12877c36436948cfb71ae456eee3fd222e9add6c152f63eab57bd908 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xa94c3cfe5226d1c2b8da4d78201811034f0ff097
* got remote instance of contract DTRExpensiveWallet at 0xa94c3cfe5226d1c2b8da4d78201811034f0ff097 on node 2
* need to wait for txn 0x96d71749c105a365020663c8ec2062940399b81bb205302d7ac9b98440bbc27a
* txn 0x96d71749c105a365020663c8ec2062940399b81bb205302d7ac9b98440bbc27a has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xc01e2becdaea9df2267635bd31ea4839a7d91e9258d87bd7b31689a7c9927b86
* txn 0xc01e2becdaea9df2267635bd31ea4839a7d91e9258d87bd7b31689a7c9927b86 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xf1eec6ed6090ed303a05a6d57092e3c84614fee3ef2617dd7d9004c320c94211
* txn 0xf1eec6ed6090ed303a05a6d57092e3c84614fee3ef2617dd7d9004c320c94211 has been mined on all nodes

##### Transactions Generated

* [0x418ddb18ecb24d22ee58202b62343e3f7dfa3ad763363b1168c12b080b4beea9](http://testnet.etherscan.io/tx/0x418ddb18ecb24d22ee58202b62343e3f7dfa3ad763363b1168c12b080b4beea9)
* [0x2648d7fcdf12f2b71a2318f8139673041578fcd3c5ad3574a672c7c11fa56c87](http://testnet.etherscan.io/tx/0x2648d7fcdf12f2b71a2318f8139673041578fcd3c5ad3574a672c7c11fa56c87)
* [0xda3c07659e4bd2d753fda12a545218a83abcf1a77d0a98f211a8ef52c0d8af48](http://testnet.etherscan.io/tx/0xda3c07659e4bd2d753fda12a545218a83abcf1a77d0a98f211a8ef52c0d8af48)
* [0x43e40a7b12877c36436948cfb71ae456eee3fd222e9add6c152f63eab57bd908](http://testnet.etherscan.io/tx/0x43e40a7b12877c36436948cfb71ae456eee3fd222e9add6c152f63eab57bd908)
* [0x96d71749c105a365020663c8ec2062940399b81bb205302d7ac9b98440bbc27a](http://testnet.etherscan.io/tx/0x96d71749c105a365020663c8ec2062940399b81bb205302d7ac9b98440bbc27a)
* [0xc01e2becdaea9df2267635bd31ea4839a7d91e9258d87bd7b31689a7c9927b86](http://testnet.etherscan.io/tx/0xc01e2becdaea9df2267635bd31ea4839a7d91e9258d87bd7b31689a7c9927b86)
* [0xf1eec6ed6090ed303a05a6d57092e3c84614fee3ef2617dd7d9004c320c94211](http://testnet.etherscan.io/tx/0xf1eec6ed6090ed303a05a6d57092e3c84614fee3ef2617dd7d9004c320c94211)

##### Contract Events

* WalletCreated(by=0xd65626af5bdd66de88991bac45598ac8eba904ec,)
* WalletCreated(by=0xd65626af5bdd66de88991bac45598ac8eba904ec,)
* DepositMade(from=0xd65626af5bdd66de88991bac45598ac8eba904ec,value=1000000000000000000,)
* DepositMade(from=0xd65626af5bdd66de88991bac45598ac8eba904ec,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x787b8ce59a997c9350021f869358662165a5c065,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x787b8ce59a997c9350021f869358662165a5c065,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x474012890abcec78297982a4265dadd0e9bffa1cc4b29da8ff4234a686520639
* need to wait for txn 0x3083aa9518a29f4a2092ee6df9dcc845149847d8b9af0e0ed155cb2485d4cdf9
* need to wait for txn 0xf8c0aa9ab3ffa500930f71ffa828aac6f5b1d287c9787d2502f936a7670b33df
* txn 0x474012890abcec78297982a4265dadd0e9bffa1cc4b29da8ff4234a686520639 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x54fb65349dcd6e37227e55c864efb4d08b03c614
* got remote instance of contract KingOfTheEtherThrone at 0x54fb65349dcd6e37227e55c864efb4d08b03c614 on node 2
* txn 0x3083aa9518a29f4a2092ee6df9dcc845149847d8b9af0e0ed155cb2485d4cdf9 has been mined on all nodes
* txn 0xf8c0aa9ab3ffa500930f71ffa828aac6f5b1d287c9787d2502f936a7670b33df has been mined on all nodes
* need to wait for txn 0x2a8459b5af2719efd2b7ec72da21c4015ef5cdb851352e49cf8e243fc85c4dfc
* txn 0x2a8459b5af2719efd2b7ec72da21c4015ef5cdb851352e49cf8e243fc85c4dfc has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x4680c626fc7037108d3d63df59b215de283594ec
* got remote instance of contract DTRExpensiveWallet at 0x4680c626fc7037108d3d63df59b215de283594ec on node 2
* need to wait for txn 0x6b58285901a0754951d7a57ea02a8d494a4b3a52be40a1238fa24e6de114b367
* txn 0x6b58285901a0754951d7a57ea02a8d494a4b3a52be40a1238fa24e6de114b367 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xb4aaf9f0a2a971f4da6b01508c8bae7a7185258d71d499cd2f402fa73b50f95d
* txn 0xb4aaf9f0a2a971f4da6b01508c8bae7a7185258d71d499cd2f402fa73b50f95d has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x59b4fe84df6b6cea13769d1f9ea534b1719fe01950d51cc4dd8b509d6ab976d2
* txn 0x59b4fe84df6b6cea13769d1f9ea534b1719fe01950d51cc4dd8b509d6ab976d2 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x9f078b3f1693fb0f38b40ebee2417b0eb18aa6470db74ec6369d93c768b19608
* txn 0x9f078b3f1693fb0f38b40ebee2417b0eb18aa6470db74ec6369d93c768b19608 has been mined on all nodes

##### Transactions Generated

* [0x474012890abcec78297982a4265dadd0e9bffa1cc4b29da8ff4234a686520639](http://testnet.etherscan.io/tx/0x474012890abcec78297982a4265dadd0e9bffa1cc4b29da8ff4234a686520639)
* [0x3083aa9518a29f4a2092ee6df9dcc845149847d8b9af0e0ed155cb2485d4cdf9](http://testnet.etherscan.io/tx/0x3083aa9518a29f4a2092ee6df9dcc845149847d8b9af0e0ed155cb2485d4cdf9)
* [0xf8c0aa9ab3ffa500930f71ffa828aac6f5b1d287c9787d2502f936a7670b33df](http://testnet.etherscan.io/tx/0xf8c0aa9ab3ffa500930f71ffa828aac6f5b1d287c9787d2502f936a7670b33df)
* [0x2a8459b5af2719efd2b7ec72da21c4015ef5cdb851352e49cf8e243fc85c4dfc](http://testnet.etherscan.io/tx/0x2a8459b5af2719efd2b7ec72da21c4015ef5cdb851352e49cf8e243fc85c4dfc)
* [0x6b58285901a0754951d7a57ea02a8d494a4b3a52be40a1238fa24e6de114b367](http://testnet.etherscan.io/tx/0x6b58285901a0754951d7a57ea02a8d494a4b3a52be40a1238fa24e6de114b367)
* [0xb4aaf9f0a2a971f4da6b01508c8bae7a7185258d71d499cd2f402fa73b50f95d](http://testnet.etherscan.io/tx/0xb4aaf9f0a2a971f4da6b01508c8bae7a7185258d71d499cd2f402fa73b50f95d)
* [0x59b4fe84df6b6cea13769d1f9ea534b1719fe01950d51cc4dd8b509d6ab976d2](http://testnet.etherscan.io/tx/0x59b4fe84df6b6cea13769d1f9ea534b1719fe01950d51cc4dd8b509d6ab976d2)
* [0x9f078b3f1693fb0f38b40ebee2417b0eb18aa6470db74ec6369d93c768b19608](http://testnet.etherscan.io/tx/0x9f078b3f1693fb0f38b40ebee2417b0eb18aa6470db74ec6369d93c768b19608)

##### Contract Events

* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x54fb65349dcd6e37227e55c864efb4d08b03c614,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x54fb65349dcd6e37227e55c864efb4d08b03c614,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1470000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1470000000000000000,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xe52e892a232cef7aac643b496bb07ef2e48280131e51a53b189083ac493eb475
* need to wait for txn 0xbf95184df24876a0f8f5793bbb4cb0752d5e87699ec9d322e4bda1f11ad5ba76
* need to wait for txn 0xd66b78e1e6340dc51df5c27b4873017d1a1c9254399cef6a305d637e3d5662df
* txn 0xe52e892a232cef7aac643b496bb07ef2e48280131e51a53b189083ac493eb475 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xa0a47bbf2c7496503084a4025dd05c82a0e1094e
* got remote instance of contract KingOfTheEtherThrone at 0xa0a47bbf2c7496503084a4025dd05c82a0e1094e on node 2
* txn 0xbf95184df24876a0f8f5793bbb4cb0752d5e87699ec9d322e4bda1f11ad5ba76 has been mined on all nodes
* txn 0xd66b78e1e6340dc51df5c27b4873017d1a1c9254399cef6a305d637e3d5662df has been mined on all nodes
* need to wait for txn 0xab4db70e83d219a3ac153a34ac46d760d1a2e7b7b1c2fa9858fd221230777353
* txn 0xab4db70e83d219a3ac153a34ac46d760d1a2e7b7b1c2fa9858fd221230777353 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xd82fc7f37e01eb0f46066df0a0bdd17c39d3e60b
* got remote instance of contract DTRExpensiveWallet at 0xd82fc7f37e01eb0f46066df0a0bdd17c39d3e60b on node 2
* need to wait for txn 0xfa6813034fae2975d08cfd13aeecf76a50a2cc37c54ecc8bbaa6978e88057fc3
* txn 0xfa6813034fae2975d08cfd13aeecf76a50a2cc37c54ecc8bbaa6978e88057fc3 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xa19c7b0e5650e4604aa18aedb716e4898081d5c82cb51313728274b5f8321e92
* txn 0xa19c7b0e5650e4604aa18aedb716e4898081d5c82cb51313728274b5f8321e92 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xb93c669fcd9f5b4dc5ebead9178949d7144776add42d2f195f63024a698676e3
* txn 0xb93c669fcd9f5b4dc5ebead9178949d7144776add42d2f195f63024a698676e3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x8fea5700f8d9b41ed864aef6dc2d53f89b150e1984164c93ad252de19d1f3c48
* txn 0x8fea5700f8d9b41ed864aef6dc2d53f89b150e1984164c93ad252de19d1f3c48 has been mined on all nodes

##### Transactions Generated

* [0xe52e892a232cef7aac643b496bb07ef2e48280131e51a53b189083ac493eb475](http://testnet.etherscan.io/tx/0xe52e892a232cef7aac643b496bb07ef2e48280131e51a53b189083ac493eb475)
* [0xbf95184df24876a0f8f5793bbb4cb0752d5e87699ec9d322e4bda1f11ad5ba76](http://testnet.etherscan.io/tx/0xbf95184df24876a0f8f5793bbb4cb0752d5e87699ec9d322e4bda1f11ad5ba76)
* [0xd66b78e1e6340dc51df5c27b4873017d1a1c9254399cef6a305d637e3d5662df](http://testnet.etherscan.io/tx/0xd66b78e1e6340dc51df5c27b4873017d1a1c9254399cef6a305d637e3d5662df)
* [0xab4db70e83d219a3ac153a34ac46d760d1a2e7b7b1c2fa9858fd221230777353](http://testnet.etherscan.io/tx/0xab4db70e83d219a3ac153a34ac46d760d1a2e7b7b1c2fa9858fd221230777353)
* [0xfa6813034fae2975d08cfd13aeecf76a50a2cc37c54ecc8bbaa6978e88057fc3](http://testnet.etherscan.io/tx/0xfa6813034fae2975d08cfd13aeecf76a50a2cc37c54ecc8bbaa6978e88057fc3)
* [0xa19c7b0e5650e4604aa18aedb716e4898081d5c82cb51313728274b5f8321e92](http://testnet.etherscan.io/tx/0xa19c7b0e5650e4604aa18aedb716e4898081d5c82cb51313728274b5f8321e92)
* [0xb93c669fcd9f5b4dc5ebead9178949d7144776add42d2f195f63024a698676e3](http://testnet.etherscan.io/tx/0xb93c669fcd9f5b4dc5ebead9178949d7144776add42d2f195f63024a698676e3)
* [0x8fea5700f8d9b41ed864aef6dc2d53f89b150e1984164c93ad252de19d1f3c48](http://testnet.etherscan.io/tx/0x8fea5700f8d9b41ed864aef6dc2d53f89b150e1984164c93ad252de19d1f3c48)

##### Contract Events

* WalletCreated(by=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,)
* WalletCreated(by=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1000000000000000000,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xa0a47bbf2c7496503084a4025dd05c82a0e1094e,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xa0a47bbf2c7496503084a4025dd05c82a0e1094e,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Cannot successfully resend failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x1d45f96a7c944d6c4199465b72f7c4d54c1907d4d07a4c49144ce4c59cc6a189
* need to wait for txn 0xf636fb1d6b871a6dbde24026b531044f33ff102be80503286ff4d51f5c5a7ea7
* need to wait for txn 0x7a3117496db0c6b64eb8d3bf63505591e197ec1a646193453be1ef15c04940ec
* txn 0x1d45f96a7c944d6c4199465b72f7c4d54c1907d4d07a4c49144ce4c59cc6a189 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf0c4e8dab235074c4f77023d1887137dbac9153b
* got remote instance of contract KingOfTheEtherThrone at 0xf0c4e8dab235074c4f77023d1887137dbac9153b on node 2
* txn 0xf636fb1d6b871a6dbde24026b531044f33ff102be80503286ff4d51f5c5a7ea7 has been mined on all nodes
* txn 0x7a3117496db0c6b64eb8d3bf63505591e197ec1a646193453be1ef15c04940ec has been mined on all nodes
* need to wait for txn 0x54038a6528759ca2ca43f7e18aea34a3cdaa57f9aad48c873724237081782440
* txn 0x54038a6528759ca2ca43f7e18aea34a3cdaa57f9aad48c873724237081782440 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x7ea03cc79a1e78a84a21b569da95a25ef00fb1e6
* got remote instance of contract DTRExpensiveWallet at 0x7ea03cc79a1e78a84a21b569da95a25ef00fb1e6 on node 2
* need to wait for txn 0x83150ce424f1b434fb49f15265bb370bf62fe7102c2949cf4e41fc4254cdd586
* txn 0x83150ce424f1b434fb49f15265bb370bf62fe7102c2949cf4e41fc4254cdd586 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x654e47c742269039aac24b95c63d7b6c4f284aec2cfa75c802908613630a6a92
* txn 0x654e47c742269039aac24b95c63d7b6c4f284aec2cfa75c802908613630a6a92 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x23d51780c17eca1b6fb26d390b0e462a375324cb03e367418b8c9aeadcaca5f3
* txn 0x23d51780c17eca1b6fb26d390b0e462a375324cb03e367418b8c9aeadcaca5f3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x13387c6008746b388587bb80e5514e2d46a85a8ce945a36f243fdfef31a1823b
* txn 0x13387c6008746b388587bb80e5514e2d46a85a8ce945a36f243fdfef31a1823b has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0xda33cc5af6d8e8788b49c7a8757bf632912e82a494171ab8cca0308658eaf689
* txn 0xda33cc5af6d8e8788b49c7a8757bf632912e82a494171ab8cca0308658eaf689 has been mined on all nodes

##### Transactions Generated

* [0x1d45f96a7c944d6c4199465b72f7c4d54c1907d4d07a4c49144ce4c59cc6a189](http://testnet.etherscan.io/tx/0x1d45f96a7c944d6c4199465b72f7c4d54c1907d4d07a4c49144ce4c59cc6a189)
* [0xf636fb1d6b871a6dbde24026b531044f33ff102be80503286ff4d51f5c5a7ea7](http://testnet.etherscan.io/tx/0xf636fb1d6b871a6dbde24026b531044f33ff102be80503286ff4d51f5c5a7ea7)
* [0x7a3117496db0c6b64eb8d3bf63505591e197ec1a646193453be1ef15c04940ec](http://testnet.etherscan.io/tx/0x7a3117496db0c6b64eb8d3bf63505591e197ec1a646193453be1ef15c04940ec)
* [0x54038a6528759ca2ca43f7e18aea34a3cdaa57f9aad48c873724237081782440](http://testnet.etherscan.io/tx/0x54038a6528759ca2ca43f7e18aea34a3cdaa57f9aad48c873724237081782440)
* [0x83150ce424f1b434fb49f15265bb370bf62fe7102c2949cf4e41fc4254cdd586](http://testnet.etherscan.io/tx/0x83150ce424f1b434fb49f15265bb370bf62fe7102c2949cf4e41fc4254cdd586)
* [0x654e47c742269039aac24b95c63d7b6c4f284aec2cfa75c802908613630a6a92](http://testnet.etherscan.io/tx/0x654e47c742269039aac24b95c63d7b6c4f284aec2cfa75c802908613630a6a92)
* [0x23d51780c17eca1b6fb26d390b0e462a375324cb03e367418b8c9aeadcaca5f3](http://testnet.etherscan.io/tx/0x23d51780c17eca1b6fb26d390b0e462a375324cb03e367418b8c9aeadcaca5f3)
* [0x13387c6008746b388587bb80e5514e2d46a85a8ce945a36f243fdfef31a1823b](http://testnet.etherscan.io/tx/0x13387c6008746b388587bb80e5514e2d46a85a8ce945a36f243fdfef31a1823b)
* [0xda33cc5af6d8e8788b49c7a8757bf632912e82a494171ab8cca0308658eaf689](http://testnet.etherscan.io/tx/0xda33cc5af6d8e8788b49c7a8757bf632912e82a494171ab8cca0308658eaf689)

##### Contract Events

* WalletCreated(by=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,)
* WalletCreated(by=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,)
* DepositMade(from=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,value=1000000000000000000,)
* DepositMade(from=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xf0c4e8dab235074c4f77023d1887137dbac9153b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xf0c4e8dab235074c4f77023d1887137dbac9153b,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,value=1470000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,value=1470000000000000000,)

### Test - "Cannot void failed compensation payment before failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3667296264c1c9c4dba2c331da6f77419e41063a303151bb7f777c3ca15e441d
* need to wait for txn 0x4f70b21a4f2cdd876b5a5ee65be70ff00402cadd493385f3754147ab55c4ab67
* need to wait for txn 0x43ed8d9a9e16d278e3056d489ef03df44d71833e7d8c4d2fe8acbb6bd7c69301
* txn 0x3667296264c1c9c4dba2c331da6f77419e41063a303151bb7f777c3ca15e441d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x4a8248f1f73b31953df26ba71b5de95616f62508
* got remote instance of contract KingOfTheEtherThrone at 0x4a8248f1f73b31953df26ba71b5de95616f62508 on node 2
* txn 0x4f70b21a4f2cdd876b5a5ee65be70ff00402cadd493385f3754147ab55c4ab67 has been mined on all nodes
* txn 0x43ed8d9a9e16d278e3056d489ef03df44d71833e7d8c4d2fe8acbb6bd7c69301 has been mined on all nodes
* need to wait for txn 0xc950fb80df9d098e16a496fc8d0a25ac292251ba1bb66bfd249db32abd358266
* txn 0xc950fb80df9d098e16a496fc8d0a25ac292251ba1bb66bfd249db32abd358266 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x71f517f58f72bdcbd09ed79d6521ddfa2d54d0ae
* got remote instance of contract DTRExpensiveWallet at 0x71f517f58f72bdcbd09ed79d6521ddfa2d54d0ae on node 2
* need to wait for txn 0x238164768e9cf458ff02ecae4bb8586c0b56d916e996bce49b4b38e7a04d2c97
* txn 0x238164768e9cf458ff02ecae4bb8586c0b56d916e996bce49b4b38e7a04d2c97 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xf780efa0175ece5a118bb8c84e2a4d1537a9875c029d248e93bc64ef647813a0
* txn 0xf780efa0175ece5a118bb8c84e2a4d1537a9875c029d248e93bc64ef647813a0 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x04c95e74e2868c1670eb55428b3a5882bfe4a756747fa1d551c29702fbf2deff
* txn 0x04c95e74e2868c1670eb55428b3a5882bfe4a756747fa1d551c29702fbf2deff has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0x719967314ede06eaa9dde7c42ebb01a2e11a24821557df7ea25370494c6c4ddb
* txn 0x719967314ede06eaa9dde7c42ebb01a2e11a24821557df7ea25370494c6c4ddb has been mined on all nodes

##### Transactions Generated

* [0x3667296264c1c9c4dba2c331da6f77419e41063a303151bb7f777c3ca15e441d](http://testnet.etherscan.io/tx/0x3667296264c1c9c4dba2c331da6f77419e41063a303151bb7f777c3ca15e441d)
* [0x4f70b21a4f2cdd876b5a5ee65be70ff00402cadd493385f3754147ab55c4ab67](http://testnet.etherscan.io/tx/0x4f70b21a4f2cdd876b5a5ee65be70ff00402cadd493385f3754147ab55c4ab67)
* [0x43ed8d9a9e16d278e3056d489ef03df44d71833e7d8c4d2fe8acbb6bd7c69301](http://testnet.etherscan.io/tx/0x43ed8d9a9e16d278e3056d489ef03df44d71833e7d8c4d2fe8acbb6bd7c69301)
* [0xc950fb80df9d098e16a496fc8d0a25ac292251ba1bb66bfd249db32abd358266](http://testnet.etherscan.io/tx/0xc950fb80df9d098e16a496fc8d0a25ac292251ba1bb66bfd249db32abd358266)
* [0x238164768e9cf458ff02ecae4bb8586c0b56d916e996bce49b4b38e7a04d2c97](http://testnet.etherscan.io/tx/0x238164768e9cf458ff02ecae4bb8586c0b56d916e996bce49b4b38e7a04d2c97)
* [0xf780efa0175ece5a118bb8c84e2a4d1537a9875c029d248e93bc64ef647813a0](http://testnet.etherscan.io/tx/0xf780efa0175ece5a118bb8c84e2a4d1537a9875c029d248e93bc64ef647813a0)
* [0x04c95e74e2868c1670eb55428b3a5882bfe4a756747fa1d551c29702fbf2deff](http://testnet.etherscan.io/tx/0x04c95e74e2868c1670eb55428b3a5882bfe4a756747fa1d551c29702fbf2deff)
* [0x719967314ede06eaa9dde7c42ebb01a2e11a24821557df7ea25370494c6c4ddb](http://testnet.etherscan.io/tx/0x719967314ede06eaa9dde7c42ebb01a2e11a24821557df7ea25370494c6c4ddb)

##### Contract Events

* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1000000000000000000,)
* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x4a8248f1f73b31953df26ba71b5de95616f62508,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x4a8248f1f73b31953df26ba71b5de95616f62508,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Can void failed compensation payment after failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x1a6f27785ddff3afbb330ac3227add60bdc9f21ec1ec14104055443302d0076d
* need to wait for txn 0x7af64ea0f751d035374b620ed7f4b804211364e66bf779da6806685dd46ebf32
* need to wait for txn 0x9f8f7e2a9a3948785afb03619a665ab4cb6a9d5db1c4b767e6504f117cc6ab7e
* txn 0x1a6f27785ddff3afbb330ac3227add60bdc9f21ec1ec14104055443302d0076d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x32c170c1e9e4b33ac474684d37318b15e14de78b
* got remote instance of contract KingOfTheEtherThrone at 0x32c170c1e9e4b33ac474684d37318b15e14de78b on node 2
* txn 0x7af64ea0f751d035374b620ed7f4b804211364e66bf779da6806685dd46ebf32 has been mined on all nodes
* txn 0x9f8f7e2a9a3948785afb03619a665ab4cb6a9d5db1c4b767e6504f117cc6ab7e has been mined on all nodes
* need to wait for txn 0xc74be04429c7fa19a5132066244b519346a15b7d8ac2fb616c4319a06057b6a6
* txn 0xc74be04429c7fa19a5132066244b519346a15b7d8ac2fb616c4319a06057b6a6 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x9c0ac44a37d8f1c1771a1c7952f41585f23f380b
* got remote instance of contract DTRExpensiveWallet at 0x9c0ac44a37d8f1c1771a1c7952f41585f23f380b on node 2
* need to wait for txn 0xb3a0a6cabc379de0b389d0a5776ed46cb3d53ced33da4817e231c56b16b2ea06
* txn 0xb3a0a6cabc379de0b389d0a5776ed46cb3d53ced33da4817e231c56b16b2ea06 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xa1bf3f02351babc2f8a4a85879949a281edd62a192816939e77714e2b25e5350
* txn 0xa1bf3f02351babc2f8a4a85879949a281edd62a192816939e77714e2b25e5350 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xba6684df51c8ab32dcc2ba6dbda2b7589e4fa660dc4e5889904aee7c8e186dd6
* txn 0xba6684df51c8ab32dcc2ba6dbda2b7589e4fa660dc4e5889904aee7c8e186dd6 has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0x0a5bee473d4d2257dc950bdb2fd84546f79d2fb3e104e5e1e7b8710677db8e7c
* txn 0x0a5bee473d4d2257dc950bdb2fd84546f79d2fb3e104e5e1e7b8710677db8e7c has been mined on all nodes

##### Transactions Generated

* [0x1a6f27785ddff3afbb330ac3227add60bdc9f21ec1ec14104055443302d0076d](http://testnet.etherscan.io/tx/0x1a6f27785ddff3afbb330ac3227add60bdc9f21ec1ec14104055443302d0076d)
* [0x7af64ea0f751d035374b620ed7f4b804211364e66bf779da6806685dd46ebf32](http://testnet.etherscan.io/tx/0x7af64ea0f751d035374b620ed7f4b804211364e66bf779da6806685dd46ebf32)
* [0x9f8f7e2a9a3948785afb03619a665ab4cb6a9d5db1c4b767e6504f117cc6ab7e](http://testnet.etherscan.io/tx/0x9f8f7e2a9a3948785afb03619a665ab4cb6a9d5db1c4b767e6504f117cc6ab7e)
* [0xc74be04429c7fa19a5132066244b519346a15b7d8ac2fb616c4319a06057b6a6](http://testnet.etherscan.io/tx/0xc74be04429c7fa19a5132066244b519346a15b7d8ac2fb616c4319a06057b6a6)
* [0xb3a0a6cabc379de0b389d0a5776ed46cb3d53ced33da4817e231c56b16b2ea06](http://testnet.etherscan.io/tx/0xb3a0a6cabc379de0b389d0a5776ed46cb3d53ced33da4817e231c56b16b2ea06)
* [0xa1bf3f02351babc2f8a4a85879949a281edd62a192816939e77714e2b25e5350](http://testnet.etherscan.io/tx/0xa1bf3f02351babc2f8a4a85879949a281edd62a192816939e77714e2b25e5350)
* [0xba6684df51c8ab32dcc2ba6dbda2b7589e4fa660dc4e5889904aee7c8e186dd6](http://testnet.etherscan.io/tx/0xba6684df51c8ab32dcc2ba6dbda2b7589e4fa660dc4e5889904aee7c8e186dd6)
* [0x0a5bee473d4d2257dc950bdb2fd84546f79d2fb3e104e5e1e7b8710677db8e7c](http://testnet.etherscan.io/tx/0x0a5bee473d4d2257dc950bdb2fd84546f79d2fb3e104e5e1e7b8710677db8e7c)

##### Contract Events

* WalletCreated(by=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,)
* WalletCreated(by=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,)
* DepositMade(from=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,value=1000000000000000000,)
* DepositMade(from=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x32c170c1e9e4b33ac474684d37318b15e14de78b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x32c170c1e9e4b33ac474684d37318b15e14de78b,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Cannot void a failed compensation payment twice"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x2e3a947486fcfff0be1e6050ebf4a0fa3a11fc4b84de9fcfdee31b85e26b19ab
* need to wait for txn 0x90264cef2d38f4962dcb8c3b11666202c8283b8108c892df21f6362ab82328cd
* need to wait for txn 0xc47b248a9fd3e6aa389a30b56f0256be0d1c92a9d33c57e28bbaaf0a5656f90e
* txn 0x2e3a947486fcfff0be1e6050ebf4a0fa3a11fc4b84de9fcfdee31b85e26b19ab has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x21ffe8934c022e67435388c76419b536faa46f2a
* got remote instance of contract KingOfTheEtherThrone at 0x21ffe8934c022e67435388c76419b536faa46f2a on node 2
* txn 0x90264cef2d38f4962dcb8c3b11666202c8283b8108c892df21f6362ab82328cd has been mined on all nodes
* txn 0xc47b248a9fd3e6aa389a30b56f0256be0d1c92a9d33c57e28bbaaf0a5656f90e has been mined on all nodes
* need to wait for txn 0x3ba067cf7822623f360955cf081053f6617294d995c2b9a4f1af1204dc3021fc
* txn 0x3ba067cf7822623f360955cf081053f6617294d995c2b9a4f1af1204dc3021fc has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x0f1c633b70f44518dcd4c62b7df4461ecac5162c
* got remote instance of contract DTRExpensiveWallet at 0x0f1c633b70f44518dcd4c62b7df4461ecac5162c on node 2
* need to wait for txn 0x826a71151b8e11c19a266c8da5fb0611f42a8185cd9bf8f8b05fb641eee7d5c0
* txn 0x826a71151b8e11c19a266c8da5fb0611f42a8185cd9bf8f8b05fb641eee7d5c0 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x34c146a9278d807c74425e7d73fc9a3d2abb2354a92653228fb1929ed6bda876
* txn 0x34c146a9278d807c74425e7d73fc9a3d2abb2354a92653228fb1929ed6bda876 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xa41737199ba0dc376b1903699eeed89789eff8e462a9d78efeffc32e25f9ac41
* txn 0xa41737199ba0dc376b1903699eeed89789eff8e462a9d78efeffc32e25f9ac41 has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0x0f8a3d47dfc8e7bfbf9cd8a13a9e2c256eb5ce566b2d532b446007061252a3e8
* txn 0x0f8a3d47dfc8e7bfbf9cd8a13a9e2c256eb5ce566b2d532b446007061252a3e8 has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0xb1028e1ceddafe5b9fe9b49d22bc5e20e725a827c1b24e3ade67a2fe44a1f436
* txn 0xb1028e1ceddafe5b9fe9b49d22bc5e20e725a827c1b24e3ade67a2fe44a1f436 has been mined on all nodes

##### Transactions Generated

* [0x2e3a947486fcfff0be1e6050ebf4a0fa3a11fc4b84de9fcfdee31b85e26b19ab](http://testnet.etherscan.io/tx/0x2e3a947486fcfff0be1e6050ebf4a0fa3a11fc4b84de9fcfdee31b85e26b19ab)
* [0x90264cef2d38f4962dcb8c3b11666202c8283b8108c892df21f6362ab82328cd](http://testnet.etherscan.io/tx/0x90264cef2d38f4962dcb8c3b11666202c8283b8108c892df21f6362ab82328cd)
* [0xc47b248a9fd3e6aa389a30b56f0256be0d1c92a9d33c57e28bbaaf0a5656f90e](http://testnet.etherscan.io/tx/0xc47b248a9fd3e6aa389a30b56f0256be0d1c92a9d33c57e28bbaaf0a5656f90e)
* [0x3ba067cf7822623f360955cf081053f6617294d995c2b9a4f1af1204dc3021fc](http://testnet.etherscan.io/tx/0x3ba067cf7822623f360955cf081053f6617294d995c2b9a4f1af1204dc3021fc)
* [0x826a71151b8e11c19a266c8da5fb0611f42a8185cd9bf8f8b05fb641eee7d5c0](http://testnet.etherscan.io/tx/0x826a71151b8e11c19a266c8da5fb0611f42a8185cd9bf8f8b05fb641eee7d5c0)
* [0x34c146a9278d807c74425e7d73fc9a3d2abb2354a92653228fb1929ed6bda876](http://testnet.etherscan.io/tx/0x34c146a9278d807c74425e7d73fc9a3d2abb2354a92653228fb1929ed6bda876)
* [0xa41737199ba0dc376b1903699eeed89789eff8e462a9d78efeffc32e25f9ac41](http://testnet.etherscan.io/tx/0xa41737199ba0dc376b1903699eeed89789eff8e462a9d78efeffc32e25f9ac41)
* [0x0f8a3d47dfc8e7bfbf9cd8a13a9e2c256eb5ce566b2d532b446007061252a3e8](http://testnet.etherscan.io/tx/0x0f8a3d47dfc8e7bfbf9cd8a13a9e2c256eb5ce566b2d532b446007061252a3e8)
* [0xb1028e1ceddafe5b9fe9b49d22bc5e20e725a827c1b24e3ade67a2fe44a1f436](http://testnet.etherscan.io/tx/0xb1028e1ceddafe5b9fe9b49d22bc5e20e725a827c1b24e3ade67a2fe44a1f436)

##### Contract Events

* DepositMade(from=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,value=1000000000000000000,)
* DepositMade(from=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x21ffe8934c022e67435388c76419b536faa46f2a,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x21ffe8934c022e67435388c76419b536faa46f2a,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Dead monarchs not compensated and cannot resend"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xc5bbef0aef1717d6e23e091217b53091b3ced58abb946cfbb440a77dc4fedd70
* need to wait for txn 0x3f1d81e9a7287d29ce15990a6d71490f54940117e029a1dc713a326ace3ab1f0
* need to wait for txn 0x26440dacba8f51fef9b5398c7408b1100d89023e51b70a346974e8b024031271
* txn 0xc5bbef0aef1717d6e23e091217b53091b3ced58abb946cfbb440a77dc4fedd70 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf54265430d368db77b4ac5edaf11d55e0a94d202
* got remote instance of contract KingOfTheEtherThrone at 0xf54265430d368db77b4ac5edaf11d55e0a94d202 on node 2
* txn 0x3f1d81e9a7287d29ce15990a6d71490f54940117e029a1dc713a326ace3ab1f0 has been mined on all nodes
* txn 0x26440dacba8f51fef9b5398c7408b1100d89023e51b70a346974e8b024031271 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x54461a96b1bcc48b2763ad022e80f167168e180b46b7f6efe9f69e7ccc4d7355
* txn 0x54461a96b1bcc48b2763ad022e80f167168e180b46b7f6efe9f69e7ccc4d7355 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x9d121fc5845657e35c1586a108946ce46696157bc1b9c2ca96dfa471b5cfa1f9
* txn 0x9d121fc5845657e35c1586a108946ce46696157bc1b9c2ca96dfa471b5cfa1f9 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x2e6df61a1e42f4325e1c7740a12b99fff38a3fe4bd04ab7b6def84b7cf87d9e8
* txn 0x2e6df61a1e42f4325e1c7740a12b99fff38a3fe4bd04ab7b6def84b7cf87d9e8 has been mined on all nodes

##### Transactions Generated

* [0xc5bbef0aef1717d6e23e091217b53091b3ced58abb946cfbb440a77dc4fedd70](http://testnet.etherscan.io/tx/0xc5bbef0aef1717d6e23e091217b53091b3ced58abb946cfbb440a77dc4fedd70)
* [0x3f1d81e9a7287d29ce15990a6d71490f54940117e029a1dc713a326ace3ab1f0](http://testnet.etherscan.io/tx/0x3f1d81e9a7287d29ce15990a6d71490f54940117e029a1dc713a326ace3ab1f0)
* [0x26440dacba8f51fef9b5398c7408b1100d89023e51b70a346974e8b024031271](http://testnet.etherscan.io/tx/0x26440dacba8f51fef9b5398c7408b1100d89023e51b70a346974e8b024031271)
* [0x54461a96b1bcc48b2763ad022e80f167168e180b46b7f6efe9f69e7ccc4d7355](http://testnet.etherscan.io/tx/0x54461a96b1bcc48b2763ad022e80f167168e180b46b7f6efe9f69e7ccc4d7355)
* [0x9d121fc5845657e35c1586a108946ce46696157bc1b9c2ca96dfa471b5cfa1f9](http://testnet.etherscan.io/tx/0x9d121fc5845657e35c1586a108946ce46696157bc1b9c2ca96dfa471b5cfa1f9)
* [0x2e6df61a1e42f4325e1c7740a12b99fff38a3fe4bd04ab7b6def84b7cf87d9e8](http://testnet.etherscan.io/tx/0x2e6df61a1e42f4325e1c7740a12b99fff38a3fe4bd04ab7b6def84b7cf87d9e8)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xd3d3826b8d087bc363284e43abf20fee445570eed32ffffb5643751a37509589
* need to wait for txn 0x377d0b65473def2ec40f7e02fbf042c73ea1aa90fd7175874e553c43b2e1bcc9
* need to wait for txn 0xe1c73ee0af224886ddd2e5d39c37f92ac5677a8fc960d2cec46218e94bfc01ac
* txn 0xd3d3826b8d087bc363284e43abf20fee445570eed32ffffb5643751a37509589 has been mined on all nodes
* created instance of contract ThroneMaker at 0xb7c08ac0cc02948f9720298e089e0ad2bf337f3d
* got remote instance of contract ThroneMaker at 0xb7c08ac0cc02948f9720298e089e0ad2bf337f3d on node 2
* txn 0x377d0b65473def2ec40f7e02fbf042c73ea1aa90fd7175874e553c43b2e1bcc9 has been mined on all nodes
* txn 0xe1c73ee0af224886ddd2e5d39c37f92ac5677a8fc960d2cec46218e94bfc01ac has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x1ba9b5075280553a00483a7e1037b37401953c1e645d61cd7c4e285ce3d07e04
* txn 0x1ba9b5075280553a00483a7e1037b37401953c1e645d61cd7c4e285ce3d07e04 has been mined on all nodes
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0xa32ff17c737b681b051be0057aeead40c94a8bd7,200000000000000000,1462917541
* gazetteerEntry is  [object Object]
* myThroneAddress is  0xa32ff17c737b681b051be0057aeead40c94a8bd7
* created instance of contract KingOfTheEtherThrone at 0xa32ff17c737b681b051be0057aeead40c94a8bd7
* got remote instance of contract KingOfTheEtherThrone at 0xa32ff17c737b681b051be0057aeead40c94a8bd7 on node 2
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x2dc982b6ee87ee976507b5b887a82968b0bdbce9454d976c9168b4d9972389d7
* txn 0x2dc982b6ee87ee976507b5b887a82968b0bdbce9454d976c9168b4d9972389d7 has been mined on all nodes

##### Transactions Generated

* [0xd3d3826b8d087bc363284e43abf20fee445570eed32ffffb5643751a37509589](http://testnet.etherscan.io/tx/0xd3d3826b8d087bc363284e43abf20fee445570eed32ffffb5643751a37509589)
* [0x377d0b65473def2ec40f7e02fbf042c73ea1aa90fd7175874e553c43b2e1bcc9](http://testnet.etherscan.io/tx/0x377d0b65473def2ec40f7e02fbf042c73ea1aa90fd7175874e553c43b2e1bcc9)
* [0xe1c73ee0af224886ddd2e5d39c37f92ac5677a8fc960d2cec46218e94bfc01ac](http://testnet.etherscan.io/tx/0xe1c73ee0af224886ddd2e5d39c37f92ac5677a8fc960d2cec46218e94bfc01ac)
* [0x1ba9b5075280553a00483a7e1037b37401953c1e645d61cd7c4e285ce3d07e04](http://testnet.etherscan.io/tx/0x1ba9b5075280553a00483a7e1037b37401953c1e645d61cd7c4e285ce3d07e04)
* [0x2dc982b6ee87ee976507b5b887a82968b0bdbce9454d976c9168b4d9972389d7](http://testnet.etherscan.io/tx/0x2dc982b6ee87ee976507b5b887a82968b0bdbce9454d976c9168b4d9972389d7)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3e5164477743e5b5a43bba91a1a0b973906ad4316f803979cccf9f378a168276
* need to wait for txn 0xfc93b3673d2330f9b9401bd805ed6e7a0cc0c554159a97b24c19f76ab9e129d0
* need to wait for txn 0xf99b166c62adfc4a315de85aabe128b1af92d2f8bcd5678d2e4d9bc22987a088
* txn 0x3e5164477743e5b5a43bba91a1a0b973906ad4316f803979cccf9f378a168276 has been mined on all nodes
* created instance of contract ThroneMaker at 0x8ec982ce325a5a0bc558409d77e6dcae4405353e
* got remote instance of contract ThroneMaker at 0x8ec982ce325a5a0bc558409d77e6dcae4405353e on node 2
* txn 0xfc93b3673d2330f9b9401bd805ed6e7a0cc0c554159a97b24c19f76ab9e129d0 has been mined on all nodes
* txn 0xf99b166c62adfc4a315de85aabe128b1af92d2f8bcd5678d2e4d9bc22987a088 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xcfd2c86d61319673caf3c1c6e02d133a64e24b702932033612a59fe5eb35398a
* txn 0xcfd2c86d61319673caf3c1c6e02d133a64e24b702932033612a59fe5eb35398a has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x1bdd0f6bed1cc2f98afe927f2b60270ececec53c4bdbc9ca2138a7066b523c5d
* txn 0x1bdd0f6bed1cc2f98afe927f2b60270ececec53c4bdbc9ca2138a7066b523c5d has been mined on all nodes

##### Transactions Generated

* [0x3e5164477743e5b5a43bba91a1a0b973906ad4316f803979cccf9f378a168276](http://testnet.etherscan.io/tx/0x3e5164477743e5b5a43bba91a1a0b973906ad4316f803979cccf9f378a168276)
* [0xfc93b3673d2330f9b9401bd805ed6e7a0cc0c554159a97b24c19f76ab9e129d0](http://testnet.etherscan.io/tx/0xfc93b3673d2330f9b9401bd805ed6e7a0cc0c554159a97b24c19f76ab9e129d0)
* [0xf99b166c62adfc4a315de85aabe128b1af92d2f8bcd5678d2e4d9bc22987a088](http://testnet.etherscan.io/tx/0xf99b166c62adfc4a315de85aabe128b1af92d2f8bcd5678d2e4d9bc22987a088)
* [0xcfd2c86d61319673caf3c1c6e02d133a64e24b702932033612a59fe5eb35398a](http://testnet.etherscan.io/tx/0xcfd2c86d61319673caf3c1c6e02d133a64e24b702932033612a59fe5eb35398a)
* [0x1bdd0f6bed1cc2f98afe927f2b60270ececec53c4bdbc9ca2138a7066b523c5d](http://testnet.etherscan.io/tx/0x1bdd0f6bed1cc2f98afe927f2b60270ececec53c4bdbc9ca2138a7066b523c5d)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xe73ca7359ac42b16970ab71d473a90dd23d11dfb425a5a9b890d0f7a84b9444b
* need to wait for txn 0xd5112a94f0c4e5c12dc5d3c2ea1fe4420f939d9eaf3db69e850edebbf5ba9178
* need to wait for txn 0x1dfedf34ecbe9a8e034103008eab78e1ff69a3bd2efd97d1ac6169f289954c62
* txn 0xe73ca7359ac42b16970ab71d473a90dd23d11dfb425a5a9b890d0f7a84b9444b has been mined on all nodes
* created instance of contract ThroneMaker at 0x5515c3b7cbbdfc7c77cfd617ff018e7e30bb7481
* got remote instance of contract ThroneMaker at 0x5515c3b7cbbdfc7c77cfd617ff018e7e30bb7481 on node 2
* txn 0xd5112a94f0c4e5c12dc5d3c2ea1fe4420f939d9eaf3db69e850edebbf5ba9178 has been mined on all nodes
* txn 0x1dfedf34ecbe9a8e034103008eab78e1ff69a3bd2efd97d1ac6169f289954c62 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xb643d4c3e32f5367353bc499baa85e87751b702ec203b09db4eb3ece1bec9e86
* txn 0xb643d4c3e32f5367353bc499baa85e87751b702ec203b09db4eb3ece1bec9e86 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x9f409f4ffed88b256dda08c567bf3b4901ce6af96e3ffa8c53341ac98bf47a63
* txn 0x9f409f4ffed88b256dda08c567bf3b4901ce6af96e3ffa8c53341ac98bf47a63 has been mined on all nodes

##### Transactions Generated

* [0xe73ca7359ac42b16970ab71d473a90dd23d11dfb425a5a9b890d0f7a84b9444b](http://testnet.etherscan.io/tx/0xe73ca7359ac42b16970ab71d473a90dd23d11dfb425a5a9b890d0f7a84b9444b)
* [0xd5112a94f0c4e5c12dc5d3c2ea1fe4420f939d9eaf3db69e850edebbf5ba9178](http://testnet.etherscan.io/tx/0xd5112a94f0c4e5c12dc5d3c2ea1fe4420f939d9eaf3db69e850edebbf5ba9178)
* [0x1dfedf34ecbe9a8e034103008eab78e1ff69a3bd2efd97d1ac6169f289954c62](http://testnet.etherscan.io/tx/0x1dfedf34ecbe9a8e034103008eab78e1ff69a3bd2efd97d1ac6169f289954c62)
* [0xb643d4c3e32f5367353bc499baa85e87751b702ec203b09db4eb3ece1bec9e86](http://testnet.etherscan.io/tx/0xb643d4c3e32f5367353bc499baa85e87751b702ec203b09db4eb3ece1bec9e86)
* [0x9f409f4ffed88b256dda08c567bf3b4901ce6af96e3ffa8c53341ac98bf47a63](http://testnet.etherscan.io/tx/0x9f409f4ffed88b256dda08c567bf3b4901ce6af96e3ffa8c53341ac98bf47a63)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x02c5783188152f52c92944e01fd2c05bd973e2fa15005cf5da34c57e5bebe821
* need to wait for txn 0x6e1a6a4ba2071f9ebd2a48d9bf0ac136bb8f7810dbc12b160c1f541c98e2b736
* need to wait for txn 0xf91f3926e01d0af14bc9a92d844168cf674aa38c0ea6868a3e19d0758344772d
* need to wait for txn 0x15c4c3b6571119b9b13d40c06665f5db0e9ca0d5288d9aad8bba077f6dc68bf6
* txn 0x02c5783188152f52c92944e01fd2c05bd973e2fa15005cf5da34c57e5bebe821 has been mined on all nodes
* created instance of contract ThroneMaker at 0x7aa4ffa00fc5fc3997cfe5bca757639bd6607f0d
* got remote instance of contract ThroneMaker at 0x7aa4ffa00fc5fc3997cfe5bca757639bd6607f0d on node 2
* txn 0x6e1a6a4ba2071f9ebd2a48d9bf0ac136bb8f7810dbc12b160c1f541c98e2b736 has been mined on all nodes
* txn 0xf91f3926e01d0af14bc9a92d844168cf674aa38c0ea6868a3e19d0758344772d has been mined on all nodes
* txn 0x15c4c3b6571119b9b13d40c06665f5db0e9ca0d5288d9aad8bba077f6dc68bf6 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x4ed912b0db95b043b52a547f01a8b66ae3a70d0875cf5a0ffd57e4d27c35f29b
* txn 0x4ed912b0db95b043b52a547f01a8b66ae3a70d0875cf5a0ffd57e4d27c35f29b has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xc735e40f2568d609b907be549055a86ae31c3cdb
* got remote instance of contract KingOfTheEtherThrone at 0xc735e40f2568d609b907be549055a86ae31c3cdb on node 2
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x03b7f2abfe8ddfd7c525e9cdec0ab77100de3e132ab316729d4f61221bc9fc30
* txn 0x03b7f2abfe8ddfd7c525e9cdec0ab77100de3e132ab316729d4f61221bc9fc30 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xa909a29c6f9676d3fc2561eb37bc2c423cd29cf4
* got remote instance of contract KingOfTheEtherThrone at 0xa909a29c6f9676d3fc2561eb37bc2c423cd29cf4 on node 2
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xf44b9690e79710a5b6f41656a1e7a849be318e723b40b0ab083296346b483ded
* txn 0xf44b9690e79710a5b6f41656a1e7a849be318e723b40b0ab083296346b483ded has been mined on all nodes

##### Transactions Generated

* [0x02c5783188152f52c92944e01fd2c05bd973e2fa15005cf5da34c57e5bebe821](http://testnet.etherscan.io/tx/0x02c5783188152f52c92944e01fd2c05bd973e2fa15005cf5da34c57e5bebe821)
* [0x6e1a6a4ba2071f9ebd2a48d9bf0ac136bb8f7810dbc12b160c1f541c98e2b736](http://testnet.etherscan.io/tx/0x6e1a6a4ba2071f9ebd2a48d9bf0ac136bb8f7810dbc12b160c1f541c98e2b736)
* [0xf91f3926e01d0af14bc9a92d844168cf674aa38c0ea6868a3e19d0758344772d](http://testnet.etherscan.io/tx/0xf91f3926e01d0af14bc9a92d844168cf674aa38c0ea6868a3e19d0758344772d)
* [0x15c4c3b6571119b9b13d40c06665f5db0e9ca0d5288d9aad8bba077f6dc68bf6](http://testnet.etherscan.io/tx/0x15c4c3b6571119b9b13d40c06665f5db0e9ca0d5288d9aad8bba077f6dc68bf6)
* [0x4ed912b0db95b043b52a547f01a8b66ae3a70d0875cf5a0ffd57e4d27c35f29b](http://testnet.etherscan.io/tx/0x4ed912b0db95b043b52a547f01a8b66ae3a70d0875cf5a0ffd57e4d27c35f29b)
* [0x03b7f2abfe8ddfd7c525e9cdec0ab77100de3e132ab316729d4f61221bc9fc30](http://testnet.etherscan.io/tx/0x03b7f2abfe8ddfd7c525e9cdec0ab77100de3e132ab316729d4f61221bc9fc30)
* [0xf44b9690e79710a5b6f41656a1e7a849be318e723b40b0ab083296346b483ded](http://testnet.etherscan.io/tx/0xf44b9690e79710a5b6f41656a1e7a849be318e723b40b0ab083296346b483ded)

##### Contract Events

* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Deity can change throne creation price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x49365bcfdec1d3c91cd553e68223331de2f87b36c513d82af6990a5543e08e89
* need to wait for txn 0x53d931058d49c6213bf5746305fadafd2dbf11a1d62013a955d3c2cfaff85c1c
* txn 0x49365bcfdec1d3c91cd553e68223331de2f87b36c513d82af6990a5543e08e89 has been mined on all nodes
* created instance of contract ThroneMaker at 0x41e3cbf9f26d43ebe411b72ae4fe07874f0ededc
* got remote instance of contract ThroneMaker at 0x41e3cbf9f26d43ebe411b72ae4fe07874f0ededc on node 2
* txn 0x53d931058d49c6213bf5746305fadafd2dbf11a1d62013a955d3c2cfaff85c1c has been mined on all nodes
* called contract function ThroneMaker.setThroneCreationPrice on node 1
* need to wait for txn 0xe4ae1b74465e23b5df883075d48e54155e8e739bac11de39b76516f1c18e6164
* txn 0xe4ae1b74465e23b5df883075d48e54155e8e739bac11de39b76516f1c18e6164 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xed079beafb844a86faa4ed3671727887cd7b4c3ff398e801a8a7175472029130
* txn 0xed079beafb844a86faa4ed3671727887cd7b4c3ff398e801a8a7175472029130 has been mined on all nodes

##### Transactions Generated

* [0x49365bcfdec1d3c91cd553e68223331de2f87b36c513d82af6990a5543e08e89](http://testnet.etherscan.io/tx/0x49365bcfdec1d3c91cd553e68223331de2f87b36c513d82af6990a5543e08e89)
* [0x53d931058d49c6213bf5746305fadafd2dbf11a1d62013a955d3c2cfaff85c1c](http://testnet.etherscan.io/tx/0x53d931058d49c6213bf5746305fadafd2dbf11a1d62013a955d3c2cfaff85c1c)
* [0xe4ae1b74465e23b5df883075d48e54155e8e739bac11de39b76516f1c18e6164](http://testnet.etherscan.io/tx/0xe4ae1b74465e23b5df883075d48e54155e8e739bac11de39b76516f1c18e6164)
* [0xed079beafb844a86faa4ed3671727887cd7b4c3ff398e801a8a7175472029130](http://testnet.etherscan.io/tx/0xed079beafb844a86faa4ed3671727887cd7b4c3ff398e801a8a7175472029130)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)

### Test - "Deity can sweep throne creation fees"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa6526b7233def4200f66bf3ddc5f004b50704705bd97f63108c00f82dde84876
* txn 0xa6526b7233def4200f66bf3ddc5f004b50704705bd97f63108c00f82dde84876 has been mined on all nodes
* need to wait for txn 0x17df3e348f66f7c1841f6c7e653dbb64612805663f5e896b9ee86cc04128b59d
* need to wait for txn 0x3c0f48f34c6dd5c084a3add1cf133e48145efeaa1e0547d8f769fbbe29487a0c
* txn 0x17df3e348f66f7c1841f6c7e653dbb64612805663f5e896b9ee86cc04128b59d has been mined on all nodes
* created instance of contract ThroneMaker at 0x63e288313c05a9c3e214eaeebcfdd1597c324285
* got remote instance of contract ThroneMaker at 0x63e288313c05a9c3e214eaeebcfdd1597c324285 on node 2
* txn 0x3c0f48f34c6dd5c084a3add1cf133e48145efeaa1e0547d8f769fbbe29487a0c has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xb31527e645517a7e19614a2b1faf17d1b4ab24078fe243a69b8ca4efd2b25761
* txn 0xb31527e645517a7e19614a2b1faf17d1b4ab24078fe243a69b8ca4efd2b25761 has been mined on all nodes
* called contract function ThroneMaker.sweepDeityCommission on node 1
* need to wait for txn 0x59647403fef26871b6a076673a64d952c4ed3e80f6d0ebdf2209a4564d74aeaf
* txn 0x59647403fef26871b6a076673a64d952c4ed3e80f6d0ebdf2209a4564d74aeaf has been mined on all nodes

##### Transactions Generated

* [0xa6526b7233def4200f66bf3ddc5f004b50704705bd97f63108c00f82dde84876](http://testnet.etherscan.io/tx/0xa6526b7233def4200f66bf3ddc5f004b50704705bd97f63108c00f82dde84876)
* [0x17df3e348f66f7c1841f6c7e653dbb64612805663f5e896b9ee86cc04128b59d](http://testnet.etherscan.io/tx/0x17df3e348f66f7c1841f6c7e653dbb64612805663f5e896b9ee86cc04128b59d)
* [0x3c0f48f34c6dd5c084a3add1cf133e48145efeaa1e0547d8f769fbbe29487a0c](http://testnet.etherscan.io/tx/0x3c0f48f34c6dd5c084a3add1cf133e48145efeaa1e0547d8f769fbbe29487a0c)
* [0xb31527e645517a7e19614a2b1faf17d1b4ab24078fe243a69b8ca4efd2b25761](http://testnet.etherscan.io/tx/0xb31527e645517a7e19614a2b1faf17d1b4ab24078fe243a69b8ca4efd2b25761)
* [0x59647403fef26871b6a076673a64d952c4ed3e80f6d0ebdf2209a4564d74aeaf](http://testnet.etherscan.io/tx/0x59647403fef26871b6a076673a64d952c4ed3e80f6d0ebdf2209a4564d74aeaf)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=0,)
* DeityCommissionSwept(toDeityAddress=0x96384d8ee4275db3d9ff753ab0af81f431adb892,amount=200000000000000000,)
* DeityCommissionSwept(toDeityAddress=0x96384d8ee4275db3d9ff753ab0af81f431adb892,amount=200000000000000000,)

### Test - "Can validate proposed throne before creating it"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x8599a868116184cd7567ccf2d58573db2ad600b33e002884073d2acef54583ca
* txn 0x8599a868116184cd7567ccf2d58573db2ad600b33e002884073d2acef54583ca has been mined on all nodes
* created instance of contract ThroneMaker at 0x47f553cd1ddd55b0facfcdac4e7a8130158ac1e3
* got remote instance of contract ThroneMaker at 0x47f553cd1ddd55b0facfcdac4e7a8130158ac1e3 on node 2

##### Transactions Generated

* [0x8599a868116184cd7567ccf2d58573db2ad600b33e002884073d2acef54583ca](http://testnet.etherscan.io/tx/0x8599a868116184cd7567ccf2d58573db2ad600b33e002884073d2acef54583ca)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)

### Test - "Non-wizards cannot take wizard comission"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xcb188c8f1e97fad006bbac9a530156d0597969e17dba35ddcd483a941a6f6fd1
* need to wait for txn 0xc9a97f7ea1bdbe23235cf21eece51f290672900d062ecc74a24c3ac58c7f8f0f
* need to wait for txn 0xd843f1dec98e2bd340096fffcc09d12f98da0c8550756d37cf89003826c93ef8
* need to wait for txn 0xfa3f9a92a06de171c61cc2f36a8a0884aaf5f90723f3030fd500d4ed22c4a73f
* txn 0xcb188c8f1e97fad006bbac9a530156d0597969e17dba35ddcd483a941a6f6fd1 has been mined on all nodes
* txn 0xc9a97f7ea1bdbe23235cf21eece51f290672900d062ecc74a24c3ac58c7f8f0f has been mined on all nodes
* txn 0xd843f1dec98e2bd340096fffcc09d12f98da0c8550756d37cf89003826c93ef8 has been mined on all nodes
* txn 0xfa3f9a92a06de171c61cc2f36a8a0884aaf5f90723f3030fd500d4ed22c4a73f has been mined on all nodes
* need to wait for txn 0x24c025634628d5e60558d1eb5b7b4c9b1b8733ba7dce68d1fa70aee36f701b6c
* txn 0x24c025634628d5e60558d1eb5b7b4c9b1b8733ba7dce68d1fa70aee36f701b6c has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x99c00f90547046e4193d7cbf0b932812fcc0c56d
* got remote instance of contract KingOfTheEtherThrone at 0x99c00f90547046e4193d7cbf0b932812fcc0c56d on node 2
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x30ef5dc25323bd4035ef11083c1a45392ab1c1e7104629bed02fc9cb779e20a4
* txn 0x30ef5dc25323bd4035ef11083c1a45392ab1c1e7104629bed02fc9cb779e20a4 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0x3cb42fb6b0da00530450e0d005209edbbc3eeb59505e00e34d3a0fa241198780
* txn 0x3cb42fb6b0da00530450e0d005209edbbc3eeb59505e00e34d3a0fa241198780 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0x2ad15a4a160070174d43e87484193727a909ee96dbeb7e5ddda51b1398382e32
* txn 0x2ad15a4a160070174d43e87484193727a909ee96dbeb7e5ddda51b1398382e32 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0xa5b10ede0abd7b9612b5864e0bc2110ae75b24e77e962e1e597f97ffbcd5c312
* txn 0xa5b10ede0abd7b9612b5864e0bc2110ae75b24e77e962e1e597f97ffbcd5c312 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0xdab6c07f69e0278e416c59ef4a3fc06f682c319798adc8203aa1b25f5c8a930f
* txn 0xdab6c07f69e0278e416c59ef4a3fc06f682c319798adc8203aa1b25f5c8a930f has been mined on all nodes

##### Transactions Generated

* [0xcb188c8f1e97fad006bbac9a530156d0597969e17dba35ddcd483a941a6f6fd1](http://testnet.etherscan.io/tx/0xcb188c8f1e97fad006bbac9a530156d0597969e17dba35ddcd483a941a6f6fd1)
* [0xc9a97f7ea1bdbe23235cf21eece51f290672900d062ecc74a24c3ac58c7f8f0f](http://testnet.etherscan.io/tx/0xc9a97f7ea1bdbe23235cf21eece51f290672900d062ecc74a24c3ac58c7f8f0f)
* [0xd843f1dec98e2bd340096fffcc09d12f98da0c8550756d37cf89003826c93ef8](http://testnet.etherscan.io/tx/0xd843f1dec98e2bd340096fffcc09d12f98da0c8550756d37cf89003826c93ef8)
* [0xfa3f9a92a06de171c61cc2f36a8a0884aaf5f90723f3030fd500d4ed22c4a73f](http://testnet.etherscan.io/tx/0xfa3f9a92a06de171c61cc2f36a8a0884aaf5f90723f3030fd500d4ed22c4a73f)
* [0x24c025634628d5e60558d1eb5b7b4c9b1b8733ba7dce68d1fa70aee36f701b6c](http://testnet.etherscan.io/tx/0x24c025634628d5e60558d1eb5b7b4c9b1b8733ba7dce68d1fa70aee36f701b6c)
* [0x30ef5dc25323bd4035ef11083c1a45392ab1c1e7104629bed02fc9cb779e20a4](http://testnet.etherscan.io/tx/0x30ef5dc25323bd4035ef11083c1a45392ab1c1e7104629bed02fc9cb779e20a4)
* [0x3cb42fb6b0da00530450e0d005209edbbc3eeb59505e00e34d3a0fa241198780](http://testnet.etherscan.io/tx/0x3cb42fb6b0da00530450e0d005209edbbc3eeb59505e00e34d3a0fa241198780)
* [0x2ad15a4a160070174d43e87484193727a909ee96dbeb7e5ddda51b1398382e32](http://testnet.etherscan.io/tx/0x2ad15a4a160070174d43e87484193727a909ee96dbeb7e5ddda51b1398382e32)
* [0xa5b10ede0abd7b9612b5864e0bc2110ae75b24e77e962e1e597f97ffbcd5c312](http://testnet.etherscan.io/tx/0xa5b10ede0abd7b9612b5864e0bc2110ae75b24e77e962e1e597f97ffbcd5c312)
* [0xdab6c07f69e0278e416c59ef4a3fc06f682c319798adc8203aa1b25f5c8a930f](http://testnet.etherscan.io/tx/0xdab6c07f69e0278e416c59ef4a3fc06f682c319798adc8203aa1b25f5c8a930f)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WizardCommissionSwept(toWizardAddress=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,amount=500000000000000000,)
* WizardCommissionSwept(toWizardAddress=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,amount=500000000000000000,)

### Test - "Non-deity cannot take deity comission"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x238f16233e248d2ff260dbfdf6878ae2c63a2f611072b18bdd4367514d86f89e
* need to wait for txn 0xba89c4865e55ab2f423c646cb23716b0b2a120ecb97c3962e4be3aa991be0313
* need to wait for txn 0x581b0df5d2951be2aa506c6f0b47b07028ea4319f109a594fd3396a269bdfd5f
* need to wait for txn 0x5d35646a91fe0e8a1e909c6af4e1e20a70e05a405e4a5d6f4a9aa69c39d30e33
* txn 0x238f16233e248d2ff260dbfdf6878ae2c63a2f611072b18bdd4367514d86f89e has been mined on all nodes
* txn 0xba89c4865e55ab2f423c646cb23716b0b2a120ecb97c3962e4be3aa991be0313 has been mined on all nodes
* txn 0x581b0df5d2951be2aa506c6f0b47b07028ea4319f109a594fd3396a269bdfd5f has been mined on all nodes
* txn 0x5d35646a91fe0e8a1e909c6af4e1e20a70e05a405e4a5d6f4a9aa69c39d30e33 has been mined on all nodes
* need to wait for txn 0x67228857a0619d789ece4264e745a4d1bd5379b411a921cf367c910154dc08d3
* txn 0x67228857a0619d789ece4264e745a4d1bd5379b411a921cf367c910154dc08d3 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x10bf1859531edbe836099157bb2c8ade5f5b7b74
* got remote instance of contract KingOfTheEtherThrone at 0x10bf1859531edbe836099157bb2c8ade5f5b7b74 on node 2
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xb501aeaf1878e0795439269a1da743393387ba252fd0995f281a97963fff9b3d
* txn 0xb501aeaf1878e0795439269a1da743393387ba252fd0995f281a97963fff9b3d has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0xc2a92292424e2238e0d77326eea0f2b1017605d21614a28b4ce0f7fcde3b18f4
* txn 0xc2a92292424e2238e0d77326eea0f2b1017605d21614a28b4ce0f7fcde3b18f4 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0x041d55e83985cf6bda6aa9b3dc7901ea57c4e00fa0192f31f29d18dfa3582bd5
* txn 0x041d55e83985cf6bda6aa9b3dc7901ea57c4e00fa0192f31f29d18dfa3582bd5 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0xf9d42f33a092311f2897bc387aae8be63b97dd3731c335ad205074bd8a740770
* txn 0xf9d42f33a092311f2897bc387aae8be63b97dd3731c335ad205074bd8a740770 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0xd9bbb669131e489a20d8cf0d874bdb01b8b43f30cb6fbd2775c94eabe949b4e2
* txn 0xd9bbb669131e489a20d8cf0d874bdb01b8b43f30cb6fbd2775c94eabe949b4e2 has been mined on all nodes

##### Transactions Generated

* [0x238f16233e248d2ff260dbfdf6878ae2c63a2f611072b18bdd4367514d86f89e](http://testnet.etherscan.io/tx/0x238f16233e248d2ff260dbfdf6878ae2c63a2f611072b18bdd4367514d86f89e)
* [0xba89c4865e55ab2f423c646cb23716b0b2a120ecb97c3962e4be3aa991be0313](http://testnet.etherscan.io/tx/0xba89c4865e55ab2f423c646cb23716b0b2a120ecb97c3962e4be3aa991be0313)
* [0x581b0df5d2951be2aa506c6f0b47b07028ea4319f109a594fd3396a269bdfd5f](http://testnet.etherscan.io/tx/0x581b0df5d2951be2aa506c6f0b47b07028ea4319f109a594fd3396a269bdfd5f)
* [0x5d35646a91fe0e8a1e909c6af4e1e20a70e05a405e4a5d6f4a9aa69c39d30e33](http://testnet.etherscan.io/tx/0x5d35646a91fe0e8a1e909c6af4e1e20a70e05a405e4a5d6f4a9aa69c39d30e33)
* [0x67228857a0619d789ece4264e745a4d1bd5379b411a921cf367c910154dc08d3](http://testnet.etherscan.io/tx/0x67228857a0619d789ece4264e745a4d1bd5379b411a921cf367c910154dc08d3)
* [0xb501aeaf1878e0795439269a1da743393387ba252fd0995f281a97963fff9b3d](http://testnet.etherscan.io/tx/0xb501aeaf1878e0795439269a1da743393387ba252fd0995f281a97963fff9b3d)
* [0xc2a92292424e2238e0d77326eea0f2b1017605d21614a28b4ce0f7fcde3b18f4](http://testnet.etherscan.io/tx/0xc2a92292424e2238e0d77326eea0f2b1017605d21614a28b4ce0f7fcde3b18f4)
* [0x041d55e83985cf6bda6aa9b3dc7901ea57c4e00fa0192f31f29d18dfa3582bd5](http://testnet.etherscan.io/tx/0x041d55e83985cf6bda6aa9b3dc7901ea57c4e00fa0192f31f29d18dfa3582bd5)
* [0xf9d42f33a092311f2897bc387aae8be63b97dd3731c335ad205074bd8a740770](http://testnet.etherscan.io/tx/0xf9d42f33a092311f2897bc387aae8be63b97dd3731c335ad205074bd8a740770)
* [0xd9bbb669131e489a20d8cf0d874bdb01b8b43f30cb6fbd2775c94eabe949b4e2](http://testnet.etherscan.io/tx/0xd9bbb669131e489a20d8cf0d874bdb01b8b43f30cb6fbd2775c94eabe949b4e2)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* DeityCommissionSwept(toDeityAddress=0x1c222d814acc0fb170781ab43021957038c0995b,amount=500000000000000000,)
* DeityCommissionSwept(toDeityAddress=0x1c222d814acc0fb170781ab43021957038c0995b,amount=500000000000000000,)

### Test - "Non-wizard cannot transfer wizard-ship"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4e2b35de637f63255829e3a134b903bab1d67aac454dbec5ef7b1d4475b7453b
* need to wait for txn 0x735afa96cbf11de316a8648c11949d359b5d2f294af1167b5ed4e53efc3edcdb
* need to wait for txn 0x09aec32a102f167f3024a3d8e32abac67feaba444fc8f6bc257d62891bf17f86
* need to wait for txn 0xcaafc696e68b4fe2f4885a23a3ecd937c688c56598b31591b3e15515a79c7e51
* txn 0x4e2b35de637f63255829e3a134b903bab1d67aac454dbec5ef7b1d4475b7453b has been mined on all nodes
* txn 0x735afa96cbf11de316a8648c11949d359b5d2f294af1167b5ed4e53efc3edcdb has been mined on all nodes
* txn 0x09aec32a102f167f3024a3d8e32abac67feaba444fc8f6bc257d62891bf17f86 has been mined on all nodes
* txn 0xcaafc696e68b4fe2f4885a23a3ecd937c688c56598b31591b3e15515a79c7e51 has been mined on all nodes
* need to wait for txn 0x834e7dc01621254c798a634b7968c22a841137390bb2577a23f56c4a88f5c54a
* txn 0x834e7dc01621254c798a634b7968c22a841137390bb2577a23f56c4a88f5c54a has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x781e981157c7877f2bf23628009553d6f0548a61
* got remote instance of contract KingOfTheEtherThrone at 0x781e981157c7877f2bf23628009553d6f0548a61 on node 2
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0xaeaf0a1f98425979fa04213fa4e22770e0cf0a73d24441e1bc4423f340fdbc8a
* txn 0xaeaf0a1f98425979fa04213fa4e22770e0cf0a73d24441e1bc4423f340fdbc8a has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0xc5ae6c63272ab3ab04ff1b0445a9422645e96b69d80b7b5a93578431cdc2560f
* txn 0xc5ae6c63272ab3ab04ff1b0445a9422645e96b69d80b7b5a93578431cdc2560f has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0x44c9e0d929a13cbf8f356ecc3079d2facbbfb5130e08bee19770c7a1e6b27240
* txn 0x44c9e0d929a13cbf8f356ecc3079d2facbbfb5130e08bee19770c7a1e6b27240 has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0x0a19dd6da2ff94e31db6837ba27ac086fb7d2cb223d062593766a607c6901c2e
* txn 0x0a19dd6da2ff94e31db6837ba27ac086fb7d2cb223d062593766a607c6901c2e has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0x21d070ddd7ab34beb3b3a42233b6dc908d928e87e93ac203a4184aa572af3e7b
* txn 0x21d070ddd7ab34beb3b3a42233b6dc908d928e87e93ac203a4184aa572af3e7b has been mined on all nodes

##### Transactions Generated

* [0x4e2b35de637f63255829e3a134b903bab1d67aac454dbec5ef7b1d4475b7453b](http://testnet.etherscan.io/tx/0x4e2b35de637f63255829e3a134b903bab1d67aac454dbec5ef7b1d4475b7453b)
* [0x735afa96cbf11de316a8648c11949d359b5d2f294af1167b5ed4e53efc3edcdb](http://testnet.etherscan.io/tx/0x735afa96cbf11de316a8648c11949d359b5d2f294af1167b5ed4e53efc3edcdb)
* [0x09aec32a102f167f3024a3d8e32abac67feaba444fc8f6bc257d62891bf17f86](http://testnet.etherscan.io/tx/0x09aec32a102f167f3024a3d8e32abac67feaba444fc8f6bc257d62891bf17f86)
* [0xcaafc696e68b4fe2f4885a23a3ecd937c688c56598b31591b3e15515a79c7e51](http://testnet.etherscan.io/tx/0xcaafc696e68b4fe2f4885a23a3ecd937c688c56598b31591b3e15515a79c7e51)
* [0x834e7dc01621254c798a634b7968c22a841137390bb2577a23f56c4a88f5c54a](http://testnet.etherscan.io/tx/0x834e7dc01621254c798a634b7968c22a841137390bb2577a23f56c4a88f5c54a)
* [0xaeaf0a1f98425979fa04213fa4e22770e0cf0a73d24441e1bc4423f340fdbc8a](http://testnet.etherscan.io/tx/0xaeaf0a1f98425979fa04213fa4e22770e0cf0a73d24441e1bc4423f340fdbc8a)
* [0xc5ae6c63272ab3ab04ff1b0445a9422645e96b69d80b7b5a93578431cdc2560f](http://testnet.etherscan.io/tx/0xc5ae6c63272ab3ab04ff1b0445a9422645e96b69d80b7b5a93578431cdc2560f)
* [0x44c9e0d929a13cbf8f356ecc3079d2facbbfb5130e08bee19770c7a1e6b27240](http://testnet.etherscan.io/tx/0x44c9e0d929a13cbf8f356ecc3079d2facbbfb5130e08bee19770c7a1e6b27240)
* [0x0a19dd6da2ff94e31db6837ba27ac086fb7d2cb223d062593766a607c6901c2e](http://testnet.etherscan.io/tx/0x0a19dd6da2ff94e31db6837ba27ac086fb7d2cb223d062593766a607c6901c2e)
* [0x21d070ddd7ab34beb3b3a42233b6dc908d928e87e93ac203a4184aa572af3e7b](http://testnet.etherscan.io/tx/0x21d070ddd7ab34beb3b3a42233b6dc908d928e87e93ac203a4184aa572af3e7b)

##### Contract Events

* WizardSwitched(newWizardAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,)
* WizardSwitched(newWizardAddress=0xd65626af5bdd66de88991bac45598ac8eba904ec,)
* WizardSwitched(newWizardAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,)
* WizardSwitched(newWizardAddress=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xc947690e3fda57655bd98c9e56eb93b2f0edfcb543b1e94067ae4d740cd3c443
* txn 0xc947690e3fda57655bd98c9e56eb93b2f0edfcb543b1e94067ae4d740cd3c443 has been mined on all nodes
* created instance of contract ThroneInternalsForTesting at 0x5954519d600b1fe54703009eefff34d7ed71fb40
* got remote instance of contract ThroneInternalsForTesting at 0x5954519d600b1fe54703009eefff34d7ed71fb40 on node 2

##### Transactions Generated

* [0xc947690e3fda57655bd98c9e56eb93b2f0edfcb543b1e94067ae4d740cd3c443](http://testnet.etherscan.io/tx/0xc947690e3fda57655bd98c9e56eb93b2f0edfcb543b1e94067ae4d740cd3c443)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x0e815e74f24124120b190c326e126bd42a938c50a6484b7e5ec744962dac227b
* txn 0x0e815e74f24124120b190c326e126bd42a938c50a6484b7e5ec744962dac227b has been mined on all nodes
* created instance of contract ThroneInternalsForTesting at 0x0de89883a5432ea78ca2fad96d307de056c8b732
* got remote instance of contract ThroneInternalsForTesting at 0x0de89883a5432ea78ca2fad96d307de056c8b732 on node 2

##### Transactions Generated

* [0x0e815e74f24124120b190c326e126bd42a938c50a6484b7e5ec744962dac227b](http://testnet.etherscan.io/tx/0x0e815e74f24124120b190c326e126bd42a938c50a6484b7e5ec744962dac227b)

### Test - "Money Rounding"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3a4252258771e97eb8bcf5a1d07373967dcbac1b7d745f5379594b3cc03ba17a
* txn 0x3a4252258771e97eb8bcf5a1d07373967dcbac1b7d745f5379594b3cc03ba17a has been mined on all nodes
* created instance of contract ThroneInternalsForTesting at 0x05a2fbd2dbc48ef74e1f515ed16b9362bc744af1
* got remote instance of contract ThroneInternalsForTesting at 0x05a2fbd2dbc48ef74e1f515ed16b9362bc744af1 on node 2

##### Transactions Generated

* [0x3a4252258771e97eb8bcf5a1d07373967dcbac1b7d745f5379594b3cc03ba17a](http://testnet.etherscan.io/tx/0x3a4252258771e97eb8bcf5a1d07373967dcbac1b7d745f5379594b3cc03ba17a)

### Test - "Two claims from two nodes, exactly one winner"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x0f7838270248e1026d006b0b31e8ea98dedc53ee6564277b03c4cbce7bdd6cc2
* need to wait for txn 0x600147afacabe88e5bb19fcfcbe0357a4849b57a1a28783bdb05c46fb9325f93
* need to wait for txn 0x2ac085a6dccd882a88b2a0ffeffd6f24a24e000eae0974e14289f161b435f1ff
* txn 0x0f7838270248e1026d006b0b31e8ea98dedc53ee6564277b03c4cbce7bdd6cc2 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x540fb4cc1771e332b1381ddb2cce4528f9ac6ddd
* got remote instance of contract KingOfTheEtherThrone at 0x540fb4cc1771e332b1381ddb2cce4528f9ac6ddd on node 2
* txn 0x600147afacabe88e5bb19fcfcbe0357a4849b57a1a28783bdb05c46fb9325f93 has been mined on all nodes
* txn 0x2ac085a6dccd882a88b2a0ffeffd6f24a24e000eae0974e14289f161b435f1ff has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xd0ae74209f7ac9de19514206f918e2659bec1a2b17251f561c7ad9da5b474fb0
* called contract function KingOfTheEtherThrone.claimThrone on node 2
* need to wait for txn 0xcb98e44374de853e1775b4b16bc0649ef61290964b5e24b39403a7976650ef99
* txn 0xd0ae74209f7ac9de19514206f918e2659bec1a2b17251f561c7ad9da5b474fb0 has been mined on all nodes
* txn 0xcb98e44374de853e1775b4b16bc0649ef61290964b5e24b39403a7976650ef99 has been mined on all nodes

##### Transactions Generated

* [0x0f7838270248e1026d006b0b31e8ea98dedc53ee6564277b03c4cbce7bdd6cc2](http://testnet.etherscan.io/tx/0x0f7838270248e1026d006b0b31e8ea98dedc53ee6564277b03c4cbce7bdd6cc2)
* [0x600147afacabe88e5bb19fcfcbe0357a4849b57a1a28783bdb05c46fb9325f93](http://testnet.etherscan.io/tx/0x600147afacabe88e5bb19fcfcbe0357a4849b57a1a28783bdb05c46fb9325f93)
* [0x2ac085a6dccd882a88b2a0ffeffd6f24a24e000eae0974e14289f161b435f1ff](http://testnet.etherscan.io/tx/0x2ac085a6dccd882a88b2a0ffeffd6f24a24e000eae0974e14289f161b435f1ff)
* [0xd0ae74209f7ac9de19514206f918e2659bec1a2b17251f561c7ad9da5b474fb0](http://testnet.etherscan.io/tx/0xd0ae74209f7ac9de19514206f918e2659bec1a2b17251f561c7ad9da5b474fb0)
* [0xcb98e44374de853e1775b4b16bc0649ef61290964b5e24b39403a7976650ef99](http://testnet.etherscan.io/tx/0xcb98e44374de853e1775b4b16bc0649ef61290964b5e24b39403a7976650ef99)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

