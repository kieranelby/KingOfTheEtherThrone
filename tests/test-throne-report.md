# "King of the Ether Throne" Report

Generated at 2016-05-25T22:23:16.852Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 37
* Tests skipped: 1
* Tests passed: 36
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x91504ee352bb4bc5570c8ed2b99ee0e7cdecf20daecbd28c83d7e9530c3ec735
* txn 0x91504ee352bb4bc5570c8ed2b99ee0e7cdecf20daecbd28c83d7e9530c3ec735 has been mined on all nodes
* txn 0x91504ee352bb4bc5570c8ed2b99ee0e7cdecf20daecbd28c83d7e9530c3ec735 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf5d0afc49b3347dc9fbe905ad5166e35731c4dfd

##### Transactions Generated

* [0x91504ee352bb4bc5570c8ed2b99ee0e7cdecf20daecbd28c83d7e9530c3ec735](http://testnet.etherscan.io/tx/0x91504ee352bb4bc5570c8ed2b99ee0e7cdecf20daecbd28c83d7e9530c3ec735)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x2205ff55092469e9350ce926a1389778062f2789c2c214632c92f4908a6125d9
* need to wait for txn 0x4d7772b654d533a8286f3c9c589d82e2ea3249571fb2e093f08bbc14c137b6f3
* txn 0x2205ff55092469e9350ce926a1389778062f2789c2c214632c92f4908a6125d9 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xb14fbb858960f32cf2ee27fe9f1041a738e0ffcc
* txn 0x4d7772b654d533a8286f3c9c589d82e2ea3249571fb2e093f08bbc14c137b6f3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x220441f1d44689fef2e37c0f9c3778cd0ce236b0e7f920baa0e3894b49a69972
* txn 0x220441f1d44689fef2e37c0f9c3778cd0ce236b0e7f920baa0e3894b49a69972 has been mined on all nodes

##### Transactions Generated

* [0x2205ff55092469e9350ce926a1389778062f2789c2c214632c92f4908a6125d9](http://testnet.etherscan.io/tx/0x2205ff55092469e9350ce926a1389778062f2789c2c214632c92f4908a6125d9)
* [0x4d7772b654d533a8286f3c9c589d82e2ea3249571fb2e093f08bbc14c137b6f3](http://testnet.etherscan.io/tx/0x4d7772b654d533a8286f3c9c589d82e2ea3249571fb2e093f08bbc14c137b6f3)
* [0x220441f1d44689fef2e37c0f9c3778cd0ce236b0e7f920baa0e3894b49a69972](http://testnet.etherscan.io/tx/0x220441f1d44689fef2e37c0f9c3778cd0ce236b0e7f920baa0e3894b49a69972)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x777d60ec2d224c03986bb73128d93d697590793433c475d31b2f18bfb1661bf8
* need to wait for txn 0xce3411c0d7de55d18ce1d75deacedb4604c965b97a16734f803cbe4a1c28b980
* txn 0x777d60ec2d224c03986bb73128d93d697590793433c475d31b2f18bfb1661bf8 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x96133316a111ef48d8c04d4ff3be9e9058ba11d1
* txn 0xce3411c0d7de55d18ce1d75deacedb4604c965b97a16734f803cbe4a1c28b980 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xb56f120703dda65818e4d94350b666bc307609e0c4e93c6e5c33d4d8f63b6cab
* txn 0xb56f120703dda65818e4d94350b666bc307609e0c4e93c6e5c33d4d8f63b6cab has been mined on all nodes

##### Transactions Generated

* [0x777d60ec2d224c03986bb73128d93d697590793433c475d31b2f18bfb1661bf8](http://testnet.etherscan.io/tx/0x777d60ec2d224c03986bb73128d93d697590793433c475d31b2f18bfb1661bf8)
* [0xce3411c0d7de55d18ce1d75deacedb4604c965b97a16734f803cbe4a1c28b980](http://testnet.etherscan.io/tx/0xce3411c0d7de55d18ce1d75deacedb4604c965b97a16734f803cbe4a1c28b980)
* [0xb56f120703dda65818e4d94350b666bc307609e0c4e93c6e5c33d4d8f63b6cab](http://testnet.etherscan.io/tx/0xb56f120703dda65818e4d94350b666bc307609e0c4e93c6e5c33d4d8f63b6cab)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x07d7a91e9558d59daee0869f7a8782dd010a2be97034f202aceff80cd9efd371
* need to wait for txn 0x66a602b7f085284510036c5d519aacd77fdff5aca3418fb9dff946d19a497122
* txn 0x07d7a91e9558d59daee0869f7a8782dd010a2be97034f202aceff80cd9efd371 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x28c5d556871065ed9f9e70149d0993ce6143ae57
* txn 0x66a602b7f085284510036c5d519aacd77fdff5aca3418fb9dff946d19a497122 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x5b867e308c87dc76d3e3f8eb6d8b1bd5aebccbe5f18acc1fd71f505de0a951c0
* txn 0x5b867e308c87dc76d3e3f8eb6d8b1bd5aebccbe5f18acc1fd71f505de0a951c0 has been mined on all nodes

##### Transactions Generated

* [0x07d7a91e9558d59daee0869f7a8782dd010a2be97034f202aceff80cd9efd371](http://testnet.etherscan.io/tx/0x07d7a91e9558d59daee0869f7a8782dd010a2be97034f202aceff80cd9efd371)
* [0x66a602b7f085284510036c5d519aacd77fdff5aca3418fb9dff946d19a497122](http://testnet.etherscan.io/tx/0x66a602b7f085284510036c5d519aacd77fdff5aca3418fb9dff946d19a497122)
* [0x5b867e308c87dc76d3e3f8eb6d8b1bd5aebccbe5f18acc1fd71f505de0a951c0](http://testnet.etherscan.io/tx/0x5b867e308c87dc76d3e3f8eb6d8b1bd5aebccbe5f18acc1fd71f505de0a951c0)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x40ffe9917bc33f7f40df3714ea5f961f1723dcab5d2880264da8999cc74581af
* txn 0x40ffe9917bc33f7f40df3714ea5f961f1723dcab5d2880264da8999cc74581af has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x81287b9aaf10a1b3d38a0b84c51bf3127d46e30b

##### Transactions Generated

* [0x40ffe9917bc33f7f40df3714ea5f961f1723dcab5d2880264da8999cc74581af](http://testnet.etherscan.io/tx/0x40ffe9917bc33f7f40df3714ea5f961f1723dcab5d2880264da8999cc74581af)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x5cc287fb3ae98f1088b141c39d6adab95700a72a197ed0a1112c5f28a89bc52c
* need to wait for txn 0xac9ba58099b706c02c662c3c665f7968d658489bc5960bb1482a972a6694b9da
* txn 0x5cc287fb3ae98f1088b141c39d6adab95700a72a197ed0a1112c5f28a89bc52c has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x758508736cd5a1a52962aee1055212360b1d6fb9
* txn 0xac9ba58099b706c02c662c3c665f7968d658489bc5960bb1482a972a6694b9da has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xe84b4095101f7335a5127e8feb2ccaf670081064bbef311b0fbf2ccabf6d29f6
* txn 0xe84b4095101f7335a5127e8feb2ccaf670081064bbef311b0fbf2ccabf6d29f6 has been mined on all nodes

##### Transactions Generated

* [0x5cc287fb3ae98f1088b141c39d6adab95700a72a197ed0a1112c5f28a89bc52c](http://testnet.etherscan.io/tx/0x5cc287fb3ae98f1088b141c39d6adab95700a72a197ed0a1112c5f28a89bc52c)
* [0xac9ba58099b706c02c662c3c665f7968d658489bc5960bb1482a972a6694b9da](http://testnet.etherscan.io/tx/0xac9ba58099b706c02c662c3c665f7968d658489bc5960bb1482a972a6694b9da)
* [0xe84b4095101f7335a5127e8feb2ccaf670081064bbef311b0fbf2ccabf6d29f6](http://testnet.etherscan.io/tx/0xe84b4095101f7335a5127e8feb2ccaf670081064bbef311b0fbf2ccabf6d29f6)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x24e028c4151ebc88fb7ebab5d5ca88edb5d0ab339c2d72a48d0654a2bcd7358b
* need to wait for txn 0xa637edb4e04faaca5b8d736ea3bb9364b716da11986880fa910408239e10e1a9
* need to wait for txn 0x4dbb1c6d6db0fe789172ec57084b39139f9c9fd797180d0e50991550de70ae64
* txn 0x24e028c4151ebc88fb7ebab5d5ca88edb5d0ab339c2d72a48d0654a2bcd7358b has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xa0b067e49ac13ddc93f127ed5a927f06d16bf301
* txn 0xa637edb4e04faaca5b8d736ea3bb9364b716da11986880fa910408239e10e1a9 has been mined on all nodes
* txn 0x4dbb1c6d6db0fe789172ec57084b39139f9c9fd797180d0e50991550de70ae64 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x0005b46528224a3afd891850b23e01fcf3a368d8274b08db59f6dbc81eade3b2
* txn 0x0005b46528224a3afd891850b23e01fcf3a368d8274b08db59f6dbc81eade3b2 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x63dce3d177aacb17d8dab683cfe8bdfdee25540c74b2acb2d6fe9559e34a280c
* txn 0x63dce3d177aacb17d8dab683cfe8bdfdee25540c74b2acb2d6fe9559e34a280c has been mined on all nodes

##### Transactions Generated

* [0x24e028c4151ebc88fb7ebab5d5ca88edb5d0ab339c2d72a48d0654a2bcd7358b](http://testnet.etherscan.io/tx/0x24e028c4151ebc88fb7ebab5d5ca88edb5d0ab339c2d72a48d0654a2bcd7358b)
* [0xa637edb4e04faaca5b8d736ea3bb9364b716da11986880fa910408239e10e1a9](http://testnet.etherscan.io/tx/0xa637edb4e04faaca5b8d736ea3bb9364b716da11986880fa910408239e10e1a9)
* [0x4dbb1c6d6db0fe789172ec57084b39139f9c9fd797180d0e50991550de70ae64](http://testnet.etherscan.io/tx/0x4dbb1c6d6db0fe789172ec57084b39139f9c9fd797180d0e50991550de70ae64)
* [0x0005b46528224a3afd891850b23e01fcf3a368d8274b08db59f6dbc81eade3b2](http://testnet.etherscan.io/tx/0x0005b46528224a3afd891850b23e01fcf3a368d8274b08db59f6dbc81eade3b2)
* [0x63dce3d177aacb17d8dab683cfe8bdfdee25540c74b2acb2d6fe9559e34a280c](http://testnet.etherscan.io/tx/0x63dce3d177aacb17d8dab683cfe8bdfdee25540c74b2acb2d6fe9559e34a280c)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x2dadad330831733d950e62a68f5f55316b42346f010fc8717bf3007bdb411c8d
* need to wait for txn 0xfa6f5e7a96a98419810d9ee6e83eb7cd827641cca441028bef15770ef8a2ef4a
* need to wait for txn 0xaf7841f2e4f2a7c061c7f7e126cec86d98f961aac7b71729e4e84644b22e309b
* txn 0x2dadad330831733d950e62a68f5f55316b42346f010fc8717bf3007bdb411c8d has been mined on all nodes
* txn 0x2dadad330831733d950e62a68f5f55316b42346f010fc8717bf3007bdb411c8d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x7efc3b534a60526eef5515abeaf9abb44ee5f1d5
* txn 0xfa6f5e7a96a98419810d9ee6e83eb7cd827641cca441028bef15770ef8a2ef4a has been mined on all nodes
* txn 0xaf7841f2e4f2a7c061c7f7e126cec86d98f961aac7b71729e4e84644b22e309b has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x05b39beddf9b340939b28634346bd96870b5f9a24e4a94145620d09c5402aa14
* txn 0x05b39beddf9b340939b28634346bd96870b5f9a24e4a94145620d09c5402aa14 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x954f8d15a942fa5b15448d9c8268c7f4ca0198aff5e929660a37199a85517ac7
* txn 0x954f8d15a942fa5b15448d9c8268c7f4ca0198aff5e929660a37199a85517ac7 has been mined on all nodes

##### Transactions Generated

* [0x2dadad330831733d950e62a68f5f55316b42346f010fc8717bf3007bdb411c8d](http://testnet.etherscan.io/tx/0x2dadad330831733d950e62a68f5f55316b42346f010fc8717bf3007bdb411c8d)
* [0xfa6f5e7a96a98419810d9ee6e83eb7cd827641cca441028bef15770ef8a2ef4a](http://testnet.etherscan.io/tx/0xfa6f5e7a96a98419810d9ee6e83eb7cd827641cca441028bef15770ef8a2ef4a)
* [0xaf7841f2e4f2a7c061c7f7e126cec86d98f961aac7b71729e4e84644b22e309b](http://testnet.etherscan.io/tx/0xaf7841f2e4f2a7c061c7f7e126cec86d98f961aac7b71729e4e84644b22e309b)
* [0x05b39beddf9b340939b28634346bd96870b5f9a24e4a94145620d09c5402aa14](http://testnet.etherscan.io/tx/0x05b39beddf9b340939b28634346bd96870b5f9a24e4a94145620d09c5402aa14)
* [0x954f8d15a942fa5b15448d9c8268c7f4ca0198aff5e929660a37199a85517ac7](http://testnet.etherscan.io/tx/0x954f8d15a942fa5b15448d9c8268c7f4ca0198aff5e929660a37199a85517ac7)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xd404759d121f790bc4a8f5f49b5ce8c23732557a5e210d15d8a635c5e451ac9a
* need to wait for txn 0xcd01dc8a517e2b9010ef0921916f6df4dc4ff5f82b5d9bb56dae38e80d6b166b
* need to wait for txn 0x24ab965e1184178fe8ec4160d6ce659f5f83eae618797f405429303325b89bb5
* txn 0xd404759d121f790bc4a8f5f49b5ce8c23732557a5e210d15d8a635c5e451ac9a has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xbb9085480884c1ef787c1f1be1dc315284492516
* txn 0xcd01dc8a517e2b9010ef0921916f6df4dc4ff5f82b5d9bb56dae38e80d6b166b has been mined on all nodes
* txn 0x24ab965e1184178fe8ec4160d6ce659f5f83eae618797f405429303325b89bb5 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x3a523d765c195472d1491448d7e9518044793f82a58474c984259cb637bafadb
* txn 0x3a523d765c195472d1491448d7e9518044793f82a58474c984259cb637bafadb has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x93f31d3d8ec51aeba1ea65a980266f6d28eada5f3141accdfbcc00df34044092
* txn 0x93f31d3d8ec51aeba1ea65a980266f6d28eada5f3141accdfbcc00df34044092 has been mined on all nodes

##### Transactions Generated

* [0xd404759d121f790bc4a8f5f49b5ce8c23732557a5e210d15d8a635c5e451ac9a](http://testnet.etherscan.io/tx/0xd404759d121f790bc4a8f5f49b5ce8c23732557a5e210d15d8a635c5e451ac9a)
* [0xcd01dc8a517e2b9010ef0921916f6df4dc4ff5f82b5d9bb56dae38e80d6b166b](http://testnet.etherscan.io/tx/0xcd01dc8a517e2b9010ef0921916f6df4dc4ff5f82b5d9bb56dae38e80d6b166b)
* [0x24ab965e1184178fe8ec4160d6ce659f5f83eae618797f405429303325b89bb5](http://testnet.etherscan.io/tx/0x24ab965e1184178fe8ec4160d6ce659f5f83eae618797f405429303325b89bb5)
* [0x3a523d765c195472d1491448d7e9518044793f82a58474c984259cb637bafadb](http://testnet.etherscan.io/tx/0x3a523d765c195472d1491448d7e9518044793f82a58474c984259cb637bafadb)
* [0x93f31d3d8ec51aeba1ea65a980266f6d28eada5f3141accdfbcc00df34044092](http://testnet.etherscan.io/tx/0x93f31d3d8ec51aeba1ea65a980266f6d28eada5f3141accdfbcc00df34044092)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x3007cc05013de0a0e471b51c771db7a4ce143d28fc6ebf444647e1529f4b7041
* need to wait for txn 0x613a6903cd96fa37873a82d942a49f4b5429f7c65899caea2140ed5b11be4339
* need to wait for txn 0x84889a11977261838575c89f8cd8cacb109e2b7cad4d6987ec7e81b0bc4b722c
* txn 0x3007cc05013de0a0e471b51c771db7a4ce143d28fc6ebf444647e1529f4b7041 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xdcde5de2c87c549345442eeb7fe9117b22e17c23
* txn 0x613a6903cd96fa37873a82d942a49f4b5429f7c65899caea2140ed5b11be4339 has been mined on all nodes
* txn 0x84889a11977261838575c89f8cd8cacb109e2b7cad4d6987ec7e81b0bc4b722c has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x0ed8dc0e1a7521cc73bda9d93fa848f9ab3ccc089a26f37fa70475ace96fe0dc
* txn 0x0ed8dc0e1a7521cc73bda9d93fa848f9ab3ccc089a26f37fa70475ace96fe0dc has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xb1936c4b312115309931929043559860be571d890520a7584fd27dd15a28bf89
* txn 0xb1936c4b312115309931929043559860be571d890520a7584fd27dd15a28bf89 has been mined on all nodes

##### Transactions Generated

* [0x3007cc05013de0a0e471b51c771db7a4ce143d28fc6ebf444647e1529f4b7041](http://testnet.etherscan.io/tx/0x3007cc05013de0a0e471b51c771db7a4ce143d28fc6ebf444647e1529f4b7041)
* [0x613a6903cd96fa37873a82d942a49f4b5429f7c65899caea2140ed5b11be4339](http://testnet.etherscan.io/tx/0x613a6903cd96fa37873a82d942a49f4b5429f7c65899caea2140ed5b11be4339)
* [0x84889a11977261838575c89f8cd8cacb109e2b7cad4d6987ec7e81b0bc4b722c](http://testnet.etherscan.io/tx/0x84889a11977261838575c89f8cd8cacb109e2b7cad4d6987ec7e81b0bc4b722c)
* [0x0ed8dc0e1a7521cc73bda9d93fa848f9ab3ccc089a26f37fa70475ace96fe0dc](http://testnet.etherscan.io/tx/0x0ed8dc0e1a7521cc73bda9d93fa848f9ab3ccc089a26f37fa70475ace96fe0dc)
* [0xb1936c4b312115309931929043559860be571d890520a7584fd27dd15a28bf89](http://testnet.etherscan.io/tx/0xb1936c4b312115309931929043559860be571d890520a7584fd27dd15a28bf89)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x5374113905eb01af25ee26a10e35e7edc14739fe288d50a8a8372c5d0d06a5c2
* need to wait for txn 0x331f3f0d102919c5d21b96f4bdb71abb884a9e81e408dd762be1d0bda1d6b825
* txn 0x5374113905eb01af25ee26a10e35e7edc14739fe288d50a8a8372c5d0d06a5c2 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x179518caa2ebb731c05e473fba5d953730abc5cb
* txn 0x331f3f0d102919c5d21b96f4bdb71abb884a9e81e408dd762be1d0bda1d6b825 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x02a849e65f026ac256681988875a0d9039128f5e8320d22f0cc199f009142753
* txn 0x02a849e65f026ac256681988875a0d9039128f5e8320d22f0cc199f009142753 has been mined on all nodes

##### Transactions Generated

* [0x5374113905eb01af25ee26a10e35e7edc14739fe288d50a8a8372c5d0d06a5c2](http://testnet.etherscan.io/tx/0x5374113905eb01af25ee26a10e35e7edc14739fe288d50a8a8372c5d0d06a5c2)
* [0x331f3f0d102919c5d21b96f4bdb71abb884a9e81e408dd762be1d0bda1d6b825](http://testnet.etherscan.io/tx/0x331f3f0d102919c5d21b96f4bdb71abb884a9e81e408dd762be1d0bda1d6b825)
* [0x02a849e65f026ac256681988875a0d9039128f5e8320d22f0cc199f009142753](http://testnet.etherscan.io/tx/0x02a849e65f026ac256681988875a0d9039128f5e8320d22f0cc199f009142753)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x8e121d0eb5d6272faff174d2f428682308af00d9ba82c1b92dd773a1661bf18d
* need to wait for txn 0xbb0359868a9edd084b87f6f14ece72bab53194cf86eb2ae98ec8f92b4f4b8959
* need to wait for txn 0x9598517fa233f162ca8aaa67abd42aaac9340c3433cc92beca5f565275411de3
* txn 0x8e121d0eb5d6272faff174d2f428682308af00d9ba82c1b92dd773a1661bf18d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x2cacb11b1c797bf0adaf561708f4852314b5989f
* txn 0xbb0359868a9edd084b87f6f14ece72bab53194cf86eb2ae98ec8f92b4f4b8959 has been mined on all nodes
* txn 0x9598517fa233f162ca8aaa67abd42aaac9340c3433cc92beca5f565275411de3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x4a27b3ff39d22b21cf0d81d6343a6a858a7c71787d13b0046c2293b3052143de
* txn 0x4a27b3ff39d22b21cf0d81d6343a6a858a7c71787d13b0046c2293b3052143de has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xdf5010287e681b7560788cfdc838ae2d66e294230cff6843b46e516bf7c0d71f
* txn 0xdf5010287e681b7560788cfdc838ae2d66e294230cff6843b46e516bf7c0d71f has been mined on all nodes

##### Transactions Generated

* [0x8e121d0eb5d6272faff174d2f428682308af00d9ba82c1b92dd773a1661bf18d](http://testnet.etherscan.io/tx/0x8e121d0eb5d6272faff174d2f428682308af00d9ba82c1b92dd773a1661bf18d)
* [0xbb0359868a9edd084b87f6f14ece72bab53194cf86eb2ae98ec8f92b4f4b8959](http://testnet.etherscan.io/tx/0xbb0359868a9edd084b87f6f14ece72bab53194cf86eb2ae98ec8f92b4f4b8959)
* [0x9598517fa233f162ca8aaa67abd42aaac9340c3433cc92beca5f565275411de3](http://testnet.etherscan.io/tx/0x9598517fa233f162ca8aaa67abd42aaac9340c3433cc92beca5f565275411de3)
* [0x4a27b3ff39d22b21cf0d81d6343a6a858a7c71787d13b0046c2293b3052143de](http://testnet.etherscan.io/tx/0x4a27b3ff39d22b21cf0d81d6343a6a858a7c71787d13b0046c2293b3052143de)
* [0xdf5010287e681b7560788cfdc838ae2d66e294230cff6843b46e516bf7c0d71f](http://testnet.etherscan.io/tx/0xdf5010287e681b7560788cfdc838ae2d66e294230cff6843b46e516bf7c0d71f)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xd06dccc3af33b12e7bc9ccfa1b4b987b292b14102ba3d87b93850251093d1ac3
* need to wait for txn 0xd212c53c6a679c675f25916d51bdd486ed7c61c8af73ea48f074a2333a1d9bf2
* txn 0xd06dccc3af33b12e7bc9ccfa1b4b987b292b14102ba3d87b93850251093d1ac3 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x034effeb732fce7186fa44c482979da67cd60e38
* txn 0xd212c53c6a679c675f25916d51bdd486ed7c61c8af73ea48f074a2333a1d9bf2 has been mined on all nodes
* need to wait for txn 0xf7dcf46404262b1e5432a0f477aade115090cfe215f3dbca3e17d740c51ef7af
* txn 0xf7dcf46404262b1e5432a0f477aade115090cfe215f3dbca3e17d740c51ef7af has been mined on all nodes

##### Transactions Generated

* [0xd06dccc3af33b12e7bc9ccfa1b4b987b292b14102ba3d87b93850251093d1ac3](http://testnet.etherscan.io/tx/0xd06dccc3af33b12e7bc9ccfa1b4b987b292b14102ba3d87b93850251093d1ac3)
* [0xd212c53c6a679c675f25916d51bdd486ed7c61c8af73ea48f074a2333a1d9bf2](http://testnet.etherscan.io/tx/0xd212c53c6a679c675f25916d51bdd486ed7c61c8af73ea48f074a2333a1d9bf2)
* [0xf7dcf46404262b1e5432a0f477aade115090cfe215f3dbca3e17d740c51ef7af](http://testnet.etherscan.io/tx/0xf7dcf46404262b1e5432a0f477aade115090cfe215f3dbca3e17d740c51ef7af)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x2a4930c5dd336b46c3967344d8b4ff35787d4aa7b96cbf927c55f2203c398c5c
* need to wait for txn 0x3db0e954d9757810e1fb0d65f2b59d8ec938496173b25ae56a66a41899564e17
* txn 0x2a4930c5dd336b46c3967344d8b4ff35787d4aa7b96cbf927c55f2203c398c5c has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x18222dab95c4ed331dbf263d078ee87c1aa75e6a
* txn 0x3db0e954d9757810e1fb0d65f2b59d8ec938496173b25ae56a66a41899564e17 has been mined on all nodes
* need to wait for txn 0x452386553d0d20f9b284d47a8b06bb7e5f0b4d90b62b2e321bb6d555eec010ea
* txn 0x452386553d0d20f9b284d47a8b06bb7e5f0b4d90b62b2e321bb6d555eec010ea has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xe40b3a8ec5027af1ebff4cb610e8c345603b7c0f
* need to wait for txn 0x01a595c12ed97293067266025cf7ef3de80cf987daa2af294a8ea76c0de6411f
* txn 0x01a595c12ed97293067266025cf7ef3de80cf987daa2af294a8ea76c0de6411f has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xcd465adc7b9d71ff1f1b6484a4ab1fed7557651b982d9501269f9aa8e07713e3
* txn 0xcd465adc7b9d71ff1f1b6484a4ab1fed7557651b982d9501269f9aa8e07713e3 has been mined on all nodes

##### Transactions Generated

* [0x2a4930c5dd336b46c3967344d8b4ff35787d4aa7b96cbf927c55f2203c398c5c](http://testnet.etherscan.io/tx/0x2a4930c5dd336b46c3967344d8b4ff35787d4aa7b96cbf927c55f2203c398c5c)
* [0x3db0e954d9757810e1fb0d65f2b59d8ec938496173b25ae56a66a41899564e17](http://testnet.etherscan.io/tx/0x3db0e954d9757810e1fb0d65f2b59d8ec938496173b25ae56a66a41899564e17)
* [0x452386553d0d20f9b284d47a8b06bb7e5f0b4d90b62b2e321bb6d555eec010ea](http://testnet.etherscan.io/tx/0x452386553d0d20f9b284d47a8b06bb7e5f0b4d90b62b2e321bb6d555eec010ea)
* [0x01a595c12ed97293067266025cf7ef3de80cf987daa2af294a8ea76c0de6411f](http://testnet.etherscan.io/tx/0x01a595c12ed97293067266025cf7ef3de80cf987daa2af294a8ea76c0de6411f)
* [0xcd465adc7b9d71ff1f1b6484a4ab1fed7557651b982d9501269f9aa8e07713e3](http://testnet.etherscan.io/tx/0xcd465adc7b9d71ff1f1b6484a4ab1fed7557651b982d9501269f9aa8e07713e3)

##### Contract Events

* WalletCreated(by=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,)
* DepositMade(from=0xec256937c339b1d85dbbe621a0e6e5e92827e04e,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x18222dab95c4ed331dbf263d078ee87c1aa75e6a,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xdf7b0183308725e261add4d1a70fc07a2ffd2386015bf3ae62d97bdd330d4a8a
* need to wait for txn 0x0af1aee9c11b3571aeacec1b592e401b8861a65bcc4ae0aa7fb432ae09b729a4
* need to wait for txn 0x0531a9f38559f726e95f91cb4f6ee9e808445c48c6f4e726bc569caee6e1ea4c
* txn 0xdf7b0183308725e261add4d1a70fc07a2ffd2386015bf3ae62d97bdd330d4a8a has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x681a17350b33a3fc0c8dce0a1bf6429f6436cce4
* txn 0x0af1aee9c11b3571aeacec1b592e401b8861a65bcc4ae0aa7fb432ae09b729a4 has been mined on all nodes
* txn 0x0531a9f38559f726e95f91cb4f6ee9e808445c48c6f4e726bc569caee6e1ea4c has been mined on all nodes
* need to wait for txn 0xa63ea94691de3773191c6a9e07cf5ba41bc9bb3cb0044a70f1684eb5f2a0b1ae
* txn 0xa63ea94691de3773191c6a9e07cf5ba41bc9bb3cb0044a70f1684eb5f2a0b1ae has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xe5b2ce7d615e7239b157b7814838b7d648d333d1
* need to wait for txn 0xebe21a236cd375c16a327da01226b77c5dcba3d9be958dfb50ad231386746521
* txn 0xebe21a236cd375c16a327da01226b77c5dcba3d9be958dfb50ad231386746521 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x6192db640c6ab1243400a9c77fdeb7fcd65c0e277d1ea5ecc5c0e79d03ff04ff
* txn 0x6192db640c6ab1243400a9c77fdeb7fcd65c0e277d1ea5ecc5c0e79d03ff04ff has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xee975bd2e9644f94ca4fa6c29c4166654daacd321b2ba205e33721bdef9d5c12
* txn 0xee975bd2e9644f94ca4fa6c29c4166654daacd321b2ba205e33721bdef9d5c12 has been mined on all nodes

##### Transactions Generated

* [0xdf7b0183308725e261add4d1a70fc07a2ffd2386015bf3ae62d97bdd330d4a8a](http://testnet.etherscan.io/tx/0xdf7b0183308725e261add4d1a70fc07a2ffd2386015bf3ae62d97bdd330d4a8a)
* [0x0af1aee9c11b3571aeacec1b592e401b8861a65bcc4ae0aa7fb432ae09b729a4](http://testnet.etherscan.io/tx/0x0af1aee9c11b3571aeacec1b592e401b8861a65bcc4ae0aa7fb432ae09b729a4)
* [0x0531a9f38559f726e95f91cb4f6ee9e808445c48c6f4e726bc569caee6e1ea4c](http://testnet.etherscan.io/tx/0x0531a9f38559f726e95f91cb4f6ee9e808445c48c6f4e726bc569caee6e1ea4c)
* [0xa63ea94691de3773191c6a9e07cf5ba41bc9bb3cb0044a70f1684eb5f2a0b1ae](http://testnet.etherscan.io/tx/0xa63ea94691de3773191c6a9e07cf5ba41bc9bb3cb0044a70f1684eb5f2a0b1ae)
* [0xebe21a236cd375c16a327da01226b77c5dcba3d9be958dfb50ad231386746521](http://testnet.etherscan.io/tx/0xebe21a236cd375c16a327da01226b77c5dcba3d9be958dfb50ad231386746521)
* [0x6192db640c6ab1243400a9c77fdeb7fcd65c0e277d1ea5ecc5c0e79d03ff04ff](http://testnet.etherscan.io/tx/0x6192db640c6ab1243400a9c77fdeb7fcd65c0e277d1ea5ecc5c0e79d03ff04ff)
* [0xee975bd2e9644f94ca4fa6c29c4166654daacd321b2ba205e33721bdef9d5c12](http://testnet.etherscan.io/tx/0xee975bd2e9644f94ca4fa6c29c4166654daacd321b2ba205e33721bdef9d5c12)

##### Contract Events

* DepositMade(from=0x1c222d814acc0fb170781ab43021957038c0995b,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x681a17350b33a3fc0c8dce0a1bf6429f6436cce4,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0x2afc84df448c65c0f7b0a20b01fb5ae26b5c5e40,value=1470000000000000000,)

### Test - "Compensation payment failure detected when sending to a very expensive wallet contract"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f
* need to wait for txn 0x144ca72fb64566e59367c5e4e5290a41a27416138b7f5519e5000e20a69d7353
* need to wait for txn 0x1393c5325102b252b7909df9ad9c78a23fbf98375c680b6af75bf77c4d68504d
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x1f94df9fef6ec61d7ecebc1d3617763df49e7b9d
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f has been mined on all nodes
* txn 0x144ca72fb64566e59367c5e4e5290a41a27416138b7f5519e5000e20a69d7353 has been mined on all nodes
* txn 0x1393c5325102b252b7909df9ad9c78a23fbf98375c680b6af75bf77c4d68504d has been mined on all nodes
* need to wait for txn 0x7061c79bb3951606ca10f9611e0671465861757ba13d4c86164bd19e218b0e23
* txn 0x7061c79bb3951606ca10f9611e0671465861757ba13d4c86164bd19e218b0e23 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xb480aedb9ff52eb3a77016ee5fbd7bbea38f06f2
* need to wait for txn 0x5d26783bb9dec311871c837192d935233b5aaf309af0086ab0e67093f4850e56
* txn 0x5d26783bb9dec311871c837192d935233b5aaf309af0086ab0e67093f4850e56 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x3c4d312ddf1e6c4ab5186c485041153bcdc4bccb4eaa818cfb51dacf4f464835
* txn 0x3c4d312ddf1e6c4ab5186c485041153bcdc4bccb4eaa818cfb51dacf4f464835 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x5c9fe0ec604af1237d2149a8c9b48c8871ef13f73ad3887765e3518c9d10dc6f
* txn 0x5c9fe0ec604af1237d2149a8c9b48c8871ef13f73ad3887765e3518c9d10dc6f has been mined on all nodes

##### Transactions Generated

* [0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f](http://testnet.etherscan.io/tx/0x1790b32d09763e2c35e68f6320547a1489d5b5d56ae9eca0729cbf8df2664c3f)
* [0x144ca72fb64566e59367c5e4e5290a41a27416138b7f5519e5000e20a69d7353](http://testnet.etherscan.io/tx/0x144ca72fb64566e59367c5e4e5290a41a27416138b7f5519e5000e20a69d7353)
* [0x1393c5325102b252b7909df9ad9c78a23fbf98375c680b6af75bf77c4d68504d](http://testnet.etherscan.io/tx/0x1393c5325102b252b7909df9ad9c78a23fbf98375c680b6af75bf77c4d68504d)
* [0x7061c79bb3951606ca10f9611e0671465861757ba13d4c86164bd19e218b0e23](http://testnet.etherscan.io/tx/0x7061c79bb3951606ca10f9611e0671465861757ba13d4c86164bd19e218b0e23)
* [0x5d26783bb9dec311871c837192d935233b5aaf309af0086ab0e67093f4850e56](http://testnet.etherscan.io/tx/0x5d26783bb9dec311871c837192d935233b5aaf309af0086ab0e67093f4850e56)
* [0x3c4d312ddf1e6c4ab5186c485041153bcdc4bccb4eaa818cfb51dacf4f464835](http://testnet.etherscan.io/tx/0x3c4d312ddf1e6c4ab5186c485041153bcdc4bccb4eaa818cfb51dacf4f464835)
* [0x5c9fe0ec604af1237d2149a8c9b48c8871ef13f73ad3887765e3518c9d10dc6f](http://testnet.etherscan.io/tx/0x5c9fe0ec604af1237d2149a8c9b48c8871ef13f73ad3887765e3518c9d10dc6f)

##### Contract Events

* WalletCreated(by=0xd65626af5bdd66de88991bac45598ac8eba904ec,)
* DepositMade(from=0xd65626af5bdd66de88991bac45598ac8eba904ec,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x1f94df9fef6ec61d7ecebc1d3617763df49e7b9d,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Successfully resend failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4429c5d584e8de41e767c7dbcc0fc59efc9b270d80e3c0c250c8ca5347c4df25
* need to wait for txn 0xccf69787dfc5bc5692b2d2689d76a0b69adc2f73ac95b6c2ad9f068217b31bab
* need to wait for txn 0xe3eb757f46769394f54054ceba9b944d64c5c84a73b0f81e4755c97117578ce5
* txn 0x4429c5d584e8de41e767c7dbcc0fc59efc9b270d80e3c0c250c8ca5347c4df25 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x18f606de70054d3190c43e1e5b6227b587167281
* txn 0xccf69787dfc5bc5692b2d2689d76a0b69adc2f73ac95b6c2ad9f068217b31bab has been mined on all nodes
* txn 0xe3eb757f46769394f54054ceba9b944d64c5c84a73b0f81e4755c97117578ce5 has been mined on all nodes
* need to wait for txn 0x8d94268fba3a430959b203bb1ee4922b746739beb5a2fda844c150fb9251559e
* txn 0x8d94268fba3a430959b203bb1ee4922b746739beb5a2fda844c150fb9251559e has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xf7bf72414a4e6e4b6baf4b9f6dbe2038f9d48e7d
* need to wait for txn 0xf0662197e2892e17dab3da16581156982d6b6d03f9d0905ab7c7b1b8eabc308e
* txn 0xf0662197e2892e17dab3da16581156982d6b6d03f9d0905ab7c7b1b8eabc308e has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x2efd83ce885e8e3ba395cda80e407ad29ca27490541b25448b027a69b22497cc
* txn 0x2efd83ce885e8e3ba395cda80e407ad29ca27490541b25448b027a69b22497cc has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xe4c0850368aa7957cfb53a3aecf23a06b26083c7524120ebbdd0aeb2a9be07da
* txn 0xe4c0850368aa7957cfb53a3aecf23a06b26083c7524120ebbdd0aeb2a9be07da has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x5903ddd7b2fa44b5a2143d8caaf8c21a77fe155155a604d3e1f1389978b2ff67
* txn 0x5903ddd7b2fa44b5a2143d8caaf8c21a77fe155155a604d3e1f1389978b2ff67 has been mined on all nodes

##### Transactions Generated

* [0x4429c5d584e8de41e767c7dbcc0fc59efc9b270d80e3c0c250c8ca5347c4df25](http://testnet.etherscan.io/tx/0x4429c5d584e8de41e767c7dbcc0fc59efc9b270d80e3c0c250c8ca5347c4df25)
* [0xccf69787dfc5bc5692b2d2689d76a0b69adc2f73ac95b6c2ad9f068217b31bab](http://testnet.etherscan.io/tx/0xccf69787dfc5bc5692b2d2689d76a0b69adc2f73ac95b6c2ad9f068217b31bab)
* [0xe3eb757f46769394f54054ceba9b944d64c5c84a73b0f81e4755c97117578ce5](http://testnet.etherscan.io/tx/0xe3eb757f46769394f54054ceba9b944d64c5c84a73b0f81e4755c97117578ce5)
* [0x8d94268fba3a430959b203bb1ee4922b746739beb5a2fda844c150fb9251559e](http://testnet.etherscan.io/tx/0x8d94268fba3a430959b203bb1ee4922b746739beb5a2fda844c150fb9251559e)
* [0xf0662197e2892e17dab3da16581156982d6b6d03f9d0905ab7c7b1b8eabc308e](http://testnet.etherscan.io/tx/0xf0662197e2892e17dab3da16581156982d6b6d03f9d0905ab7c7b1b8eabc308e)
* [0x2efd83ce885e8e3ba395cda80e407ad29ca27490541b25448b027a69b22497cc](http://testnet.etherscan.io/tx/0x2efd83ce885e8e3ba395cda80e407ad29ca27490541b25448b027a69b22497cc)
* [0xe4c0850368aa7957cfb53a3aecf23a06b26083c7524120ebbdd0aeb2a9be07da](http://testnet.etherscan.io/tx/0xe4c0850368aa7957cfb53a3aecf23a06b26083c7524120ebbdd0aeb2a9be07da)
* [0x5903ddd7b2fa44b5a2143d8caaf8c21a77fe155155a604d3e1f1389978b2ff67](http://testnet.etherscan.io/tx/0x5903ddd7b2fa44b5a2143d8caaf8c21a77fe155155a604d3e1f1389978b2ff67)

##### Contract Events

* WalletCreated(by=0x0f73050a531407ea03e4f896365b7ac866e5db65,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x18f606de70054d3190c43e1e5b6227b587167281,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x18f606de70054d3190c43e1e5b6227b587167281,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x0f73050a531407ea03e4f896365b7ac866e5db65,value=1470000000000000000,)

### Test - "Failed resend of a failed compensation payment"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x470a57e0e6fcad2ff34ff221abd8ff555cafcf7407c4f468fe9fcfedc12bfed8
* need to wait for txn 0x63e17af4ee06199d077a485b2f56893f39b15fd3cc08f8e275b723a4602ea563
* need to wait for txn 0xe68934cdb896c5b9b8ceabad10137d2689ea2326c50362219d91840af45c9943
* txn 0x470a57e0e6fcad2ff34ff221abd8ff555cafcf7407c4f468fe9fcfedc12bfed8 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x0f26fa7842dfb6f5b08f4e4187d5339241ca0e91
* txn 0x63e17af4ee06199d077a485b2f56893f39b15fd3cc08f8e275b723a4602ea563 has been mined on all nodes
* txn 0xe68934cdb896c5b9b8ceabad10137d2689ea2326c50362219d91840af45c9943 has been mined on all nodes
* need to wait for txn 0x542075fab9931df602a2634f779c9f75fac8e6a71f76deb17e8fac90c34d568d
* txn 0x542075fab9931df602a2634f779c9f75fac8e6a71f76deb17e8fac90c34d568d has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x2d52f9221befac900b0b903eeba40d391e303f04
* need to wait for txn 0x47562d14d5abf187b145a6f0e9f786cdb2425b27eec5a375c7091eefef2e6726
* txn 0x47562d14d5abf187b145a6f0e9f786cdb2425b27eec5a375c7091eefef2e6726 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xa37c83f4740341061c9493057c3f3b7fae4fc984e6f783e94d5053edfdc968ff
* txn 0xa37c83f4740341061c9493057c3f3b7fae4fc984e6f783e94d5053edfdc968ff has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x133be182db6fc783f93c088ba8ce579f843a3f633c5cf72afea24796d9721287
* txn 0x133be182db6fc783f93c088ba8ce579f843a3f633c5cf72afea24796d9721287 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x7cb34195e6ed65babad9044592f97a09788c61e7be74f3de90c0f9a1ea3c07cd
* txn 0x7cb34195e6ed65babad9044592f97a09788c61e7be74f3de90c0f9a1ea3c07cd has been mined on all nodes

##### Transactions Generated

* [0x470a57e0e6fcad2ff34ff221abd8ff555cafcf7407c4f468fe9fcfedc12bfed8](http://testnet.etherscan.io/tx/0x470a57e0e6fcad2ff34ff221abd8ff555cafcf7407c4f468fe9fcfedc12bfed8)
* [0x63e17af4ee06199d077a485b2f56893f39b15fd3cc08f8e275b723a4602ea563](http://testnet.etherscan.io/tx/0x63e17af4ee06199d077a485b2f56893f39b15fd3cc08f8e275b723a4602ea563)
* [0xe68934cdb896c5b9b8ceabad10137d2689ea2326c50362219d91840af45c9943](http://testnet.etherscan.io/tx/0xe68934cdb896c5b9b8ceabad10137d2689ea2326c50362219d91840af45c9943)
* [0x542075fab9931df602a2634f779c9f75fac8e6a71f76deb17e8fac90c34d568d](http://testnet.etherscan.io/tx/0x542075fab9931df602a2634f779c9f75fac8e6a71f76deb17e8fac90c34d568d)
* [0x47562d14d5abf187b145a6f0e9f786cdb2425b27eec5a375c7091eefef2e6726](http://testnet.etherscan.io/tx/0x47562d14d5abf187b145a6f0e9f786cdb2425b27eec5a375c7091eefef2e6726)
* [0xa37c83f4740341061c9493057c3f3b7fae4fc984e6f783e94d5053edfdc968ff](http://testnet.etherscan.io/tx/0xa37c83f4740341061c9493057c3f3b7fae4fc984e6f783e94d5053edfdc968ff)
* [0x133be182db6fc783f93c088ba8ce579f843a3f633c5cf72afea24796d9721287](http://testnet.etherscan.io/tx/0x133be182db6fc783f93c088ba8ce579f843a3f633c5cf72afea24796d9721287)
* [0x7cb34195e6ed65babad9044592f97a09788c61e7be74f3de90c0f9a1ea3c07cd](http://testnet.etherscan.io/tx/0x7cb34195e6ed65babad9044592f97a09788c61e7be74f3de90c0f9a1ea3c07cd)

##### Contract Events

* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x0f26fa7842dfb6f5b08f4e4187d5339241ca0e91,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Cannot successfully resend failed compensation payment more than once"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xa46bcdbfc5e1817475d195ca1a2c50e84947fe208a8184d5a7b1bb22585c5500
* need to wait for txn 0x46c26c67cf43e4ab4adf40e36d8427b89c8cb827d8d83a5afce1b7ebcb8c2882
* need to wait for txn 0xa4dca6f9962a339ec8905786de28c3cdc6ed86f584c0ba33c258ce6dcc2021d3
* txn 0xa46bcdbfc5e1817475d195ca1a2c50e84947fe208a8184d5a7b1bb22585c5500 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xb4a3e4e7ff8866e849878a691014c3417661c7b0
* txn 0x46c26c67cf43e4ab4adf40e36d8427b89c8cb827d8d83a5afce1b7ebcb8c2882 has been mined on all nodes
* txn 0xa4dca6f9962a339ec8905786de28c3cdc6ed86f584c0ba33c258ce6dcc2021d3 has been mined on all nodes
* need to wait for txn 0xcad11c2bb1520ea70f4519b177551b578ac12ae5b4b9fa13d576e538068ec74c
* txn 0xcad11c2bb1520ea70f4519b177551b578ac12ae5b4b9fa13d576e538068ec74c has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0xfe9e49782e436a824cefe195a7c2c944796f139a
* need to wait for txn 0x664f7d1428b247d8e08b05baeffc4997d6fb15186baf0364f98d40c40a8196e0
* txn 0x664f7d1428b247d8e08b05baeffc4997d6fb15186baf0364f98d40c40a8196e0 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0xe98cfb297f1a932bb2b0eab4c3dcc186c5e9bf42d4876a02263321fd06fc5e46
* txn 0xe98cfb297f1a932bb2b0eab4c3dcc186c5e9bf42d4876a02263321fd06fc5e46 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xa03feb22959605f8f121d23dd6d4a8b3485965675b8a8c56ba7df1c84ac00c79
* txn 0xa03feb22959605f8f121d23dd6d4a8b3485965675b8a8c56ba7df1c84ac00c79 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x5d16ce6765ecf8c8f6d13e74302c74eead194679a669c8e4306566f5f04a01c5
* txn 0x5d16ce6765ecf8c8f6d13e74302c74eead194679a669c8e4306566f5f04a01c5 has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0xa8959ec4b8bcc4dd39211a196eb83e2b0cacb3437b04cd61c51b3c0e50ec19d7
* txn 0xa8959ec4b8bcc4dd39211a196eb83e2b0cacb3437b04cd61c51b3c0e50ec19d7 has been mined on all nodes

##### Transactions Generated

* [0xa46bcdbfc5e1817475d195ca1a2c50e84947fe208a8184d5a7b1bb22585c5500](http://testnet.etherscan.io/tx/0xa46bcdbfc5e1817475d195ca1a2c50e84947fe208a8184d5a7b1bb22585c5500)
* [0x46c26c67cf43e4ab4adf40e36d8427b89c8cb827d8d83a5afce1b7ebcb8c2882](http://testnet.etherscan.io/tx/0x46c26c67cf43e4ab4adf40e36d8427b89c8cb827d8d83a5afce1b7ebcb8c2882)
* [0xa4dca6f9962a339ec8905786de28c3cdc6ed86f584c0ba33c258ce6dcc2021d3](http://testnet.etherscan.io/tx/0xa4dca6f9962a339ec8905786de28c3cdc6ed86f584c0ba33c258ce6dcc2021d3)
* [0xcad11c2bb1520ea70f4519b177551b578ac12ae5b4b9fa13d576e538068ec74c](http://testnet.etherscan.io/tx/0xcad11c2bb1520ea70f4519b177551b578ac12ae5b4b9fa13d576e538068ec74c)
* [0x664f7d1428b247d8e08b05baeffc4997d6fb15186baf0364f98d40c40a8196e0](http://testnet.etherscan.io/tx/0x664f7d1428b247d8e08b05baeffc4997d6fb15186baf0364f98d40c40a8196e0)
* [0xe98cfb297f1a932bb2b0eab4c3dcc186c5e9bf42d4876a02263321fd06fc5e46](http://testnet.etherscan.io/tx/0xe98cfb297f1a932bb2b0eab4c3dcc186c5e9bf42d4876a02263321fd06fc5e46)
* [0xa03feb22959605f8f121d23dd6d4a8b3485965675b8a8c56ba7df1c84ac00c79](http://testnet.etherscan.io/tx/0xa03feb22959605f8f121d23dd6d4a8b3485965675b8a8c56ba7df1c84ac00c79)
* [0x5d16ce6765ecf8c8f6d13e74302c74eead194679a669c8e4306566f5f04a01c5](http://testnet.etherscan.io/tx/0x5d16ce6765ecf8c8f6d13e74302c74eead194679a669c8e4306566f5f04a01c5)
* [0xa8959ec4b8bcc4dd39211a196eb83e2b0cacb3437b04cd61c51b3c0e50ec19d7](http://testnet.etherscan.io/tx/0xa8959ec4b8bcc4dd39211a196eb83e2b0cacb3437b04cd61c51b3c0e50ec19d7)

##### Contract Events

* WalletCreated(by=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,)
* DepositMade(from=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xb4a3e4e7ff8866e849878a691014c3417661c7b0,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentResent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* DepositMade(from=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,value=1470000000000000000,)

### Test - "Cannot void failed compensation payment before failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x9b1965028ae2e2eee68a4b72c902ca9f22ec3f4d40be8e11c4db6b049ccfd764
* need to wait for txn 0xaaf609394170c047c48f735d2ee3686a527b6c6b10e3a9d084067bd2cf28c991
* need to wait for txn 0xabdd8f63d37ad6515cf49f1b81c652d15c63a3a8dd593e85324201da7f90c658
* txn 0x9b1965028ae2e2eee68a4b72c902ca9f22ec3f4d40be8e11c4db6b049ccfd764 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x6dd69da5161b24bf24ed077084b8f5686bfab005
* txn 0xaaf609394170c047c48f735d2ee3686a527b6c6b10e3a9d084067bd2cf28c991 has been mined on all nodes
* txn 0xabdd8f63d37ad6515cf49f1b81c652d15c63a3a8dd593e85324201da7f90c658 has been mined on all nodes
* need to wait for txn 0x23288ba0160ff22c25fe70021a75520554a612631c7f51f9cecb5d11b81f7679
* txn 0x23288ba0160ff22c25fe70021a75520554a612631c7f51f9cecb5d11b81f7679 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x05e103d779788c27cf760fed896969f4ff8a789b
* need to wait for txn 0x8122221d81f47affcd4b6174761ae06f325dfd0adcaa3897eed0ec933cfd14f1
* txn 0x8122221d81f47affcd4b6174761ae06f325dfd0adcaa3897eed0ec933cfd14f1 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x1ac410173e88c2ac4172b560062378bd8309ea5a4f61ca6ba51c8efaa82e3fd9
* txn 0x1ac410173e88c2ac4172b560062378bd8309ea5a4f61ca6ba51c8efaa82e3fd9 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x7ca604a2b2592623134bdf8565bcb952a2b0d71b9b3c8fd35279b35c9f6e4585
* txn 0x7ca604a2b2592623134bdf8565bcb952a2b0d71b9b3c8fd35279b35c9f6e4585 has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0xe0e8c1b74e1f2c7af37d0bd550f5513ec2a0e0b45ef189978f8637547ff9099c
* txn 0xe0e8c1b74e1f2c7af37d0bd550f5513ec2a0e0b45ef189978f8637547ff9099c has been mined on all nodes

##### Transactions Generated

* [0x9b1965028ae2e2eee68a4b72c902ca9f22ec3f4d40be8e11c4db6b049ccfd764](http://testnet.etherscan.io/tx/0x9b1965028ae2e2eee68a4b72c902ca9f22ec3f4d40be8e11c4db6b049ccfd764)
* [0xaaf609394170c047c48f735d2ee3686a527b6c6b10e3a9d084067bd2cf28c991](http://testnet.etherscan.io/tx/0xaaf609394170c047c48f735d2ee3686a527b6c6b10e3a9d084067bd2cf28c991)
* [0xabdd8f63d37ad6515cf49f1b81c652d15c63a3a8dd593e85324201da7f90c658](http://testnet.etherscan.io/tx/0xabdd8f63d37ad6515cf49f1b81c652d15c63a3a8dd593e85324201da7f90c658)
* [0x23288ba0160ff22c25fe70021a75520554a612631c7f51f9cecb5d11b81f7679](http://testnet.etherscan.io/tx/0x23288ba0160ff22c25fe70021a75520554a612631c7f51f9cecb5d11b81f7679)
* [0x8122221d81f47affcd4b6174761ae06f325dfd0adcaa3897eed0ec933cfd14f1](http://testnet.etherscan.io/tx/0x8122221d81f47affcd4b6174761ae06f325dfd0adcaa3897eed0ec933cfd14f1)
* [0x1ac410173e88c2ac4172b560062378bd8309ea5a4f61ca6ba51c8efaa82e3fd9](http://testnet.etherscan.io/tx/0x1ac410173e88c2ac4172b560062378bd8309ea5a4f61ca6ba51c8efaa82e3fd9)
* [0x7ca604a2b2592623134bdf8565bcb952a2b0d71b9b3c8fd35279b35c9f6e4585](http://testnet.etherscan.io/tx/0x7ca604a2b2592623134bdf8565bcb952a2b0d71b9b3c8fd35279b35c9f6e4585)
* [0xe0e8c1b74e1f2c7af37d0bd550f5513ec2a0e0b45ef189978f8637547ff9099c](http://testnet.etherscan.io/tx/0xe0e8c1b74e1f2c7af37d0bd550f5513ec2a0e0b45ef189978f8637547ff9099c)

##### Contract Events

* WalletCreated(by=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,)
* DepositMade(from=0x92f6c9a06cbda94878b203f35c0408b0015d8e04,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x6dd69da5161b24bf24ed077084b8f5686bfab005,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Can void failed compensation payment after failedPaymentRingfenceDuration elapsed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x12947876762cf0e06d7e2f7133600c7bea9c705d993b9ec01983b9496770df83
* need to wait for txn 0x38834643af786bd084b1ce7167245fc6b5e6ae33efedb70dc8f82bac3caeee3e
* need to wait for txn 0xa741494a2c662b43e4769657f7d984b4ccc8735299caf00bf1d6594114b6a833
* txn 0x12947876762cf0e06d7e2f7133600c7bea9c705d993b9ec01983b9496770df83 has been mined on all nodes
* txn 0x12947876762cf0e06d7e2f7133600c7bea9c705d993b9ec01983b9496770df83 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xc85f30ff4f62320b59f9690fae50e0df02f9996a
* txn 0x38834643af786bd084b1ce7167245fc6b5e6ae33efedb70dc8f82bac3caeee3e has been mined on all nodes
* txn 0xa741494a2c662b43e4769657f7d984b4ccc8735299caf00bf1d6594114b6a833 has been mined on all nodes
* need to wait for txn 0xc31043775df8b15042cd6d3a1918d24a674f59383ae4e68622bbe9663c96e708
* txn 0xc31043775df8b15042cd6d3a1918d24a674f59383ae4e68622bbe9663c96e708 has been mined on all nodes
* txn 0xc31043775df8b15042cd6d3a1918d24a674f59383ae4e68622bbe9663c96e708 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x6614439891c56e96cc01239470282db26fa03f92
* need to wait for txn 0x7960d84d055740b273cdc8b49fb7fe6cae8d35ebb859177941a7966d5466b814
* txn 0x7960d84d055740b273cdc8b49fb7fe6cae8d35ebb859177941a7966d5466b814 has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x418e49a203badb094de76ca29474905a86c8a193628a9b9d8f368d48563a352a
* txn 0x418e49a203badb094de76ca29474905a86c8a193628a9b9d8f368d48563a352a has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x7676a696918384ffbc5bee58a2afe4b87447ce0e7f58153c28b2e3d835eb684d
* txn 0x7676a696918384ffbc5bee58a2afe4b87447ce0e7f58153c28b2e3d835eb684d has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0xa4ef08c71878a8784942f45907a7b7ad5fabd48f544063a4ac585efb5914b306
* txn 0xa4ef08c71878a8784942f45907a7b7ad5fabd48f544063a4ac585efb5914b306 has been mined on all nodes

##### Transactions Generated

* [0x12947876762cf0e06d7e2f7133600c7bea9c705d993b9ec01983b9496770df83](http://testnet.etherscan.io/tx/0x12947876762cf0e06d7e2f7133600c7bea9c705d993b9ec01983b9496770df83)
* [0x38834643af786bd084b1ce7167245fc6b5e6ae33efedb70dc8f82bac3caeee3e](http://testnet.etherscan.io/tx/0x38834643af786bd084b1ce7167245fc6b5e6ae33efedb70dc8f82bac3caeee3e)
* [0xa741494a2c662b43e4769657f7d984b4ccc8735299caf00bf1d6594114b6a833](http://testnet.etherscan.io/tx/0xa741494a2c662b43e4769657f7d984b4ccc8735299caf00bf1d6594114b6a833)
* [0xc31043775df8b15042cd6d3a1918d24a674f59383ae4e68622bbe9663c96e708](http://testnet.etherscan.io/tx/0xc31043775df8b15042cd6d3a1918d24a674f59383ae4e68622bbe9663c96e708)
* [0x7960d84d055740b273cdc8b49fb7fe6cae8d35ebb859177941a7966d5466b814](http://testnet.etherscan.io/tx/0x7960d84d055740b273cdc8b49fb7fe6cae8d35ebb859177941a7966d5466b814)
* [0x418e49a203badb094de76ca29474905a86c8a193628a9b9d8f368d48563a352a](http://testnet.etherscan.io/tx/0x418e49a203badb094de76ca29474905a86c8a193628a9b9d8f368d48563a352a)
* [0x7676a696918384ffbc5bee58a2afe4b87447ce0e7f58153c28b2e3d835eb684d](http://testnet.etherscan.io/tx/0x7676a696918384ffbc5bee58a2afe4b87447ce0e7f58153c28b2e3d835eb684d)
* [0xa4ef08c71878a8784942f45907a7b7ad5fabd48f544063a4ac585efb5914b306](http://testnet.etherscan.io/tx/0xa4ef08c71878a8784942f45907a7b7ad5fabd48f544063a4ac585efb5914b306)

##### Contract Events

* WalletCreated(by=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,)
* DepositMade(from=0x0823cd7cc3d85b9821fc7ebba0a4795e8d4b3160,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0xc85f30ff4f62320b59f9690fae50e0df02f9996a,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Cannot void a failed compensation payment twice"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xf25e727592447d89b682515b69f128aaa568d785d19a3d8c633c90ece406708d
* need to wait for txn 0x7f22b024ce71bd05350516217fdec1189c368d46de1b27a1c3c96d7ace99d24d
* need to wait for txn 0x29ec51027123f097d86a032e34204c4bb149d1c7f4a2aa797f8b110dd303015e
* txn 0xf25e727592447d89b682515b69f128aaa568d785d19a3d8c633c90ece406708d has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x3f10f949570d3ba0de3eab5a4ca02c1168235a69
* txn 0x7f22b024ce71bd05350516217fdec1189c368d46de1b27a1c3c96d7ace99d24d has been mined on all nodes
* txn 0x29ec51027123f097d86a032e34204c4bb149d1c7f4a2aa797f8b110dd303015e has been mined on all nodes
* need to wait for txn 0xbefcad62cb76c3df9aec6911649c255348349eaf6a761518435b0b25da2e13a7
* txn 0xbefcad62cb76c3df9aec6911649c255348349eaf6a761518435b0b25da2e13a7 has been mined on all nodes
* created instance of contract DTRExpensiveWallet at 0x07ef71d98f602f39a5cc49139e49717f618a9aae
* need to wait for txn 0x79fbfb05fa1510273d176b3f91332da609fe4b546367227fb891601ec77b1d6a
* txn 0x79fbfb05fa1510273d176b3f91332da609fe4b546367227fb891601ec77b1d6a has been mined on all nodes
* called contract function DTRExpensiveWallet.spendWithGas on node 1
* need to wait for txn 0x7593f6c529446351bc0a778bf80c0aed745c43a8f5e66c04885a438e73438801
* txn 0x7593f6c529446351bc0a778bf80c0aed745c43a8f5e66c04885a438e73438801 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xce7685f3c2a9d87c0ae04b1801a22e0e866f35fe2b3a84acd4594e1bc68607a3
* txn 0xce7685f3c2a9d87c0ae04b1801a22e0e866f35fe2b3a84acd4594e1bc68607a3 has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0xb2cc14ee4ff26946924d33082b7171e926480adfe67fffccf863880153eca053
* txn 0xb2cc14ee4ff26946924d33082b7171e926480adfe67fffccf863880153eca053 has been mined on all nodes
* called contract function KingOfTheEtherThrone.voidFailedPayment on node 1
* need to wait for txn 0xe51db39a859eddc87a67ea1b56548a23c2b58993fec2b1c85f63cee4b64dffdf
* txn 0xe51db39a859eddc87a67ea1b56548a23c2b58993fec2b1c85f63cee4b64dffdf has been mined on all nodes

##### Transactions Generated

* [0xf25e727592447d89b682515b69f128aaa568d785d19a3d8c633c90ece406708d](http://testnet.etherscan.io/tx/0xf25e727592447d89b682515b69f128aaa568d785d19a3d8c633c90ece406708d)
* [0x7f22b024ce71bd05350516217fdec1189c368d46de1b27a1c3c96d7ace99d24d](http://testnet.etherscan.io/tx/0x7f22b024ce71bd05350516217fdec1189c368d46de1b27a1c3c96d7ace99d24d)
* [0x29ec51027123f097d86a032e34204c4bb149d1c7f4a2aa797f8b110dd303015e](http://testnet.etherscan.io/tx/0x29ec51027123f097d86a032e34204c4bb149d1c7f4a2aa797f8b110dd303015e)
* [0xbefcad62cb76c3df9aec6911649c255348349eaf6a761518435b0b25da2e13a7](http://testnet.etherscan.io/tx/0xbefcad62cb76c3df9aec6911649c255348349eaf6a761518435b0b25da2e13a7)
* [0x79fbfb05fa1510273d176b3f91332da609fe4b546367227fb891601ec77b1d6a](http://testnet.etherscan.io/tx/0x79fbfb05fa1510273d176b3f91332da609fe4b546367227fb891601ec77b1d6a)
* [0x7593f6c529446351bc0a778bf80c0aed745c43a8f5e66c04885a438e73438801](http://testnet.etherscan.io/tx/0x7593f6c529446351bc0a778bf80c0aed745c43a8f5e66c04885a438e73438801)
* [0xce7685f3c2a9d87c0ae04b1801a22e0e866f35fe2b3a84acd4594e1bc68607a3](http://testnet.etherscan.io/tx/0xce7685f3c2a9d87c0ae04b1801a22e0e866f35fe2b3a84acd4594e1bc68607a3)
* [0xb2cc14ee4ff26946924d33082b7171e926480adfe67fffccf863880153eca053](http://testnet.etherscan.io/tx/0xb2cc14ee4ff26946924d33082b7171e926480adfe67fffccf863880153eca053)
* [0xe51db39a859eddc87a67ea1b56548a23c2b58993fec2b1c85f63cee4b64dffdf](http://testnet.etherscan.io/tx/0xe51db39a859eddc87a67ea1b56548a23c2b58993fec2b1c85f63cee4b64dffdf)

##### Contract Events

* WalletCreated(by=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,)
* DepositMade(from=0xd657bd6d6913034c04c4ee9db01bb3bfa0ede513,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x3f10f949570d3ba0de3eab5a4ca02c1168235a69,value=1000000000000000000,)
* CompensationPaymentFailed(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* FailedCompensationPaymentVoided(notCompensatedMonarchIndex=0,paymentValue=1470000000000000000,)

### Test - "Dead monarchs not compensated and cannot resend"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x755c53477f6bb16ebd64a47e343bb064e95ff5c97bc07cdc3067564f99e5b191
* need to wait for txn 0xcfc1c210471c65c365c88c1175340b0f7176f7f6652ed2a4f9c83c16ee626607
* need to wait for txn 0x28775b1c3054afb07016b547849a24811a5c01b2c4487dc25a6185284d40cc4e
* txn 0x755c53477f6bb16ebd64a47e343bb064e95ff5c97bc07cdc3067564f99e5b191 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x39c775c415ad03716bc002a5eef980597e77c920
* txn 0xcfc1c210471c65c365c88c1175340b0f7176f7f6652ed2a4f9c83c16ee626607 has been mined on all nodes
* txn 0x28775b1c3054afb07016b547849a24811a5c01b2c4487dc25a6185284d40cc4e has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xfda649391af56ad04948e28a7fe5aa9efab9e5211d4118d5d9cd77a245669b27
* txn 0xfda649391af56ad04948e28a7fe5aa9efab9e5211d4118d5d9cd77a245669b27 has been mined on all nodes
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xea77b9c64bdcb70b769719ca6d7381d45063d5ffc01ef9663e1ac91159408c7b
* txn 0xea77b9c64bdcb70b769719ca6d7381d45063d5ffc01ef9663e1ac91159408c7b has been mined on all nodes
* called contract function KingOfTheEtherThrone.resendFailedPayment on node 1
* need to wait for txn 0x959ded6e341d8aba7193948b3948ab3eb65d3411cfb0a1d39ad3d9df4e155118
* txn 0x959ded6e341d8aba7193948b3948ab3eb65d3411cfb0a1d39ad3d9df4e155118 has been mined on all nodes

##### Transactions Generated

* [0x755c53477f6bb16ebd64a47e343bb064e95ff5c97bc07cdc3067564f99e5b191](http://testnet.etherscan.io/tx/0x755c53477f6bb16ebd64a47e343bb064e95ff5c97bc07cdc3067564f99e5b191)
* [0xcfc1c210471c65c365c88c1175340b0f7176f7f6652ed2a4f9c83c16ee626607](http://testnet.etherscan.io/tx/0xcfc1c210471c65c365c88c1175340b0f7176f7f6652ed2a4f9c83c16ee626607)
* [0x28775b1c3054afb07016b547849a24811a5c01b2c4487dc25a6185284d40cc4e](http://testnet.etherscan.io/tx/0x28775b1c3054afb07016b547849a24811a5c01b2c4487dc25a6185284d40cc4e)
* [0xfda649391af56ad04948e28a7fe5aa9efab9e5211d4118d5d9cd77a245669b27](http://testnet.etherscan.io/tx/0xfda649391af56ad04948e28a7fe5aa9efab9e5211d4118d5d9cd77a245669b27)
* [0xea77b9c64bdcb70b769719ca6d7381d45063d5ffc01ef9663e1ac91159408c7b](http://testnet.etherscan.io/tx/0xea77b9c64bdcb70b769719ca6d7381d45063d5ffc01ef9663e1ac91159408c7b)
* [0x959ded6e341d8aba7193948b3948ab3eb65d3411cfb0a1d39ad3d9df4e155118](http://testnet.etherscan.io/tx/0x959ded6e341d8aba7193948b3948ab3eb65d3411cfb0a1d39ad3d9df4e155118)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x99fbb3654801dd646e61450a2037095afb678612b26811dc9d07daf42448b5cd
* need to wait for txn 0xf52e0c2c6489a0af71ffae0956ee27dfc022ce7768a69acf68cbd3a5c521466a
* need to wait for txn 0xee16c13fb6d977821985862befa4277cc47e22432188f0850c63429aa746d6b8
* txn 0x99fbb3654801dd646e61450a2037095afb678612b26811dc9d07daf42448b5cd has been mined on all nodes
* created instance of contract ThroneMaker at 0x07f8e83496bc467e454c3f2c38fec39e2e73aab9
* txn 0xf52e0c2c6489a0af71ffae0956ee27dfc022ce7768a69acf68cbd3a5c521466a has been mined on all nodes
* txn 0xee16c13fb6d977821985862befa4277cc47e22432188f0850c63429aa746d6b8 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x63a857c001adcc820a7cea7752827363f271c4252aacd3ca44f8d6a997087f07
* txn 0x63a857c001adcc820a7cea7752827363f271c4252aacd3ca44f8d6a997087f07 has been mined on all nodes
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0xd0f7996194e09d75f06ef642a7a9096dc5020841,200000000000000000,1464214360
* gazetteerEntry is  [object Object]
* myThroneAddress is  0xd0f7996194e09d75f06ef642a7a9096dc5020841
* created instance of contract KingOfTheEtherThrone at 0xd0f7996194e09d75f06ef642a7a9096dc5020841
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0xdf78ed5bf74c365267e1bc2a886f04dc2b31074f72ecbaf6acf8b9735fd09fe9
* txn 0xdf78ed5bf74c365267e1bc2a886f04dc2b31074f72ecbaf6acf8b9735fd09fe9 has been mined on all nodes

##### Transactions Generated

* [0x99fbb3654801dd646e61450a2037095afb678612b26811dc9d07daf42448b5cd](http://testnet.etherscan.io/tx/0x99fbb3654801dd646e61450a2037095afb678612b26811dc9d07daf42448b5cd)
* [0xf52e0c2c6489a0af71ffae0956ee27dfc022ce7768a69acf68cbd3a5c521466a](http://testnet.etherscan.io/tx/0xf52e0c2c6489a0af71ffae0956ee27dfc022ce7768a69acf68cbd3a5c521466a)
* [0xee16c13fb6d977821985862befa4277cc47e22432188f0850c63429aa746d6b8](http://testnet.etherscan.io/tx/0xee16c13fb6d977821985862befa4277cc47e22432188f0850c63429aa746d6b8)
* [0x63a857c001adcc820a7cea7752827363f271c4252aacd3ca44f8d6a997087f07](http://testnet.etherscan.io/tx/0x63a857c001adcc820a7cea7752827363f271c4252aacd3ca44f8d6a997087f07)
* [0xdf78ed5bf74c365267e1bc2a886f04dc2b31074f72ecbaf6acf8b9735fd09fe9](http://testnet.etherscan.io/tx/0xdf78ed5bf74c365267e1bc2a886f04dc2b31074f72ecbaf6acf8b9735fd09fe9)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x1bac2511ea8ae8a5c616456a222f694c67971481d374be2db9fc1e21c1618a1e
* need to wait for txn 0x7daa785e2c1e491f21af533ecbd995dc79d3ff3a76cceea71d1410568cb93237
* need to wait for txn 0xbe61ab9f124fd7f3df9935217cfc0fd4578be746ab3ce6edc6feb1ced6363d7a
* txn 0x1bac2511ea8ae8a5c616456a222f694c67971481d374be2db9fc1e21c1618a1e has been mined on all nodes
* created instance of contract ThroneMaker at 0xd02aa937c9f1ee2e8035ecdd902aa5c4274bb56f
* txn 0x7daa785e2c1e491f21af533ecbd995dc79d3ff3a76cceea71d1410568cb93237 has been mined on all nodes
* txn 0xbe61ab9f124fd7f3df9935217cfc0fd4578be746ab3ce6edc6feb1ced6363d7a has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xa863ca8b42cb80c7afef3675b006ae7a518c0c711a77b4a711bf936c90d9693f
* txn 0xa863ca8b42cb80c7afef3675b006ae7a518c0c711a77b4a711bf936c90d9693f has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x7afe6cf1916fc94ab73225c12874820508c667d1cf14e7d6ac9cd1f235775e66
* txn 0x7afe6cf1916fc94ab73225c12874820508c667d1cf14e7d6ac9cd1f235775e66 has been mined on all nodes

##### Transactions Generated

* [0x1bac2511ea8ae8a5c616456a222f694c67971481d374be2db9fc1e21c1618a1e](http://testnet.etherscan.io/tx/0x1bac2511ea8ae8a5c616456a222f694c67971481d374be2db9fc1e21c1618a1e)
* [0x7daa785e2c1e491f21af533ecbd995dc79d3ff3a76cceea71d1410568cb93237](http://testnet.etherscan.io/tx/0x7daa785e2c1e491f21af533ecbd995dc79d3ff3a76cceea71d1410568cb93237)
* [0xbe61ab9f124fd7f3df9935217cfc0fd4578be746ab3ce6edc6feb1ced6363d7a](http://testnet.etherscan.io/tx/0xbe61ab9f124fd7f3df9935217cfc0fd4578be746ab3ce6edc6feb1ced6363d7a)
* [0xa863ca8b42cb80c7afef3675b006ae7a518c0c711a77b4a711bf936c90d9693f](http://testnet.etherscan.io/tx/0xa863ca8b42cb80c7afef3675b006ae7a518c0c711a77b4a711bf936c90d9693f)
* [0x7afe6cf1916fc94ab73225c12874820508c667d1cf14e7d6ac9cd1f235775e66](http://testnet.etherscan.io/tx/0x7afe6cf1916fc94ab73225c12874820508c667d1cf14e7d6ac9cd1f235775e66)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x1a813221b463f735994b543f75c96e81eb2a6f1051a1c9be37a8f3c6bb3d35da
* need to wait for txn 0x3c330fdf02a27901134a1811eabef5881838ae2ea657f2ce1d3092f47b915772
* need to wait for txn 0xc4d604ad896e859ee8ad25cc8734191eaf9d314014bcdf9723015badd2e05369
* txn 0x1a813221b463f735994b543f75c96e81eb2a6f1051a1c9be37a8f3c6bb3d35da has been mined on all nodes
* created instance of contract ThroneMaker at 0x3eb1125d553be36816d5833bdbbdca7bcdde7e74
* txn 0x3c330fdf02a27901134a1811eabef5881838ae2ea657f2ce1d3092f47b915772 has been mined on all nodes
* txn 0xc4d604ad896e859ee8ad25cc8734191eaf9d314014bcdf9723015badd2e05369 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x401e463364935ec45deeaa0dfa07298ddf0900fd63bdc063deb5e83f042ac52f
* txn 0x401e463364935ec45deeaa0dfa07298ddf0900fd63bdc063deb5e83f042ac52f has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x95df38dc969cd30cee44595c6181d31218973c8708b8d16d5769b2a770def3b2
* txn 0x95df38dc969cd30cee44595c6181d31218973c8708b8d16d5769b2a770def3b2 has been mined on all nodes

##### Transactions Generated

* [0x1a813221b463f735994b543f75c96e81eb2a6f1051a1c9be37a8f3c6bb3d35da](http://testnet.etherscan.io/tx/0x1a813221b463f735994b543f75c96e81eb2a6f1051a1c9be37a8f3c6bb3d35da)
* [0x3c330fdf02a27901134a1811eabef5881838ae2ea657f2ce1d3092f47b915772](http://testnet.etherscan.io/tx/0x3c330fdf02a27901134a1811eabef5881838ae2ea657f2ce1d3092f47b915772)
* [0xc4d604ad896e859ee8ad25cc8734191eaf9d314014bcdf9723015badd2e05369](http://testnet.etherscan.io/tx/0xc4d604ad896e859ee8ad25cc8734191eaf9d314014bcdf9723015badd2e05369)
* [0x401e463364935ec45deeaa0dfa07298ddf0900fd63bdc063deb5e83f042ac52f](http://testnet.etherscan.io/tx/0x401e463364935ec45deeaa0dfa07298ddf0900fd63bdc063deb5e83f042ac52f)
* [0x95df38dc969cd30cee44595c6181d31218973c8708b8d16d5769b2a770def3b2](http://testnet.etherscan.io/tx/0x95df38dc969cd30cee44595c6181d31218973c8708b8d16d5769b2a770def3b2)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x71ab24ccd847a3218e9852732a9fe507dc21fbbaea8509e16ff87fca118777b3
* need to wait for txn 0xfbb7306620506a295eaf114ad24252a0cb850ee0d03013e6b4ef4211fc307944
* need to wait for txn 0xa28608cc9ccb1bbe24fa8a9db1ce7eaf5168e170ae7376ea66ee454508ffe0f8
* need to wait for txn 0x5b3eeab58b7d11f0091243837a15e43d255a7871a9ffe5ef8685fdbbe1f2e5b7
* txn 0x71ab24ccd847a3218e9852732a9fe507dc21fbbaea8509e16ff87fca118777b3 has been mined on all nodes
* created instance of contract ThroneMaker at 0x4a00d0ef451d274d4de25630cdc9188de4665197
* txn 0xfbb7306620506a295eaf114ad24252a0cb850ee0d03013e6b4ef4211fc307944 has been mined on all nodes
* txn 0xa28608cc9ccb1bbe24fa8a9db1ce7eaf5168e170ae7376ea66ee454508ffe0f8 has been mined on all nodes
* txn 0x5b3eeab58b7d11f0091243837a15e43d255a7871a9ffe5ef8685fdbbe1f2e5b7 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x25a296979032a1bb04d680850248a7382295c1bd646c8a0ed1efc3e78ffeb864
* txn 0x25a296979032a1bb04d680850248a7382295c1bd646c8a0ed1efc3e78ffeb864 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x331c58ffb2195ca783a29cae179b9ca2c11b36ea
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xa08a3d80c2b181663c876057e5a9dab26010d1ac0123b0a3f9606f2830d4e262
* txn 0xa08a3d80c2b181663c876057e5a9dab26010d1ac0123b0a3f9606f2830d4e262 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0x558674131d268d8076399a360f6f7ec92ca8d89a
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x5b12b672a9fa6a9a705e9fdad24f095a2cf861dbbc2c9a7bf7c06c57b424a331
* txn 0x5b12b672a9fa6a9a705e9fdad24f095a2cf861dbbc2c9a7bf7c06c57b424a331 has been mined on all nodes

##### Transactions Generated

* [0x71ab24ccd847a3218e9852732a9fe507dc21fbbaea8509e16ff87fca118777b3](http://testnet.etherscan.io/tx/0x71ab24ccd847a3218e9852732a9fe507dc21fbbaea8509e16ff87fca118777b3)
* [0xfbb7306620506a295eaf114ad24252a0cb850ee0d03013e6b4ef4211fc307944](http://testnet.etherscan.io/tx/0xfbb7306620506a295eaf114ad24252a0cb850ee0d03013e6b4ef4211fc307944)
* [0xa28608cc9ccb1bbe24fa8a9db1ce7eaf5168e170ae7376ea66ee454508ffe0f8](http://testnet.etherscan.io/tx/0xa28608cc9ccb1bbe24fa8a9db1ce7eaf5168e170ae7376ea66ee454508ffe0f8)
* [0x5b3eeab58b7d11f0091243837a15e43d255a7871a9ffe5ef8685fdbbe1f2e5b7](http://testnet.etherscan.io/tx/0x5b3eeab58b7d11f0091243837a15e43d255a7871a9ffe5ef8685fdbbe1f2e5b7)
* [0x25a296979032a1bb04d680850248a7382295c1bd646c8a0ed1efc3e78ffeb864](http://testnet.etherscan.io/tx/0x25a296979032a1bb04d680850248a7382295c1bd646c8a0ed1efc3e78ffeb864)
* [0xa08a3d80c2b181663c876057e5a9dab26010d1ac0123b0a3f9606f2830d4e262](http://testnet.etherscan.io/tx/0xa08a3d80c2b181663c876057e5a9dab26010d1ac0123b0a3f9606f2830d4e262)
* [0x5b12b672a9fa6a9a705e9fdad24f095a2cf861dbbc2c9a7bf7c06c57b424a331](http://testnet.etherscan.io/tx/0x5b12b672a9fa6a9a705e9fdad24f095a2cf861dbbc2c9a7bf7c06c57b424a331)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Deity can change throne creation price"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x888dd9d4f2dfa922e6bf1b1217da772cb97840f3cb21d72b3e70d7004a56d8f8
* need to wait for txn 0xe423f7027969f97940d50ff8eaf3af5a8f920d76c181d0c23c66eee33a33770c
* txn 0x888dd9d4f2dfa922e6bf1b1217da772cb97840f3cb21d72b3e70d7004a56d8f8 has been mined on all nodes
* created instance of contract ThroneMaker at 0xbe41e57a63c9125c9a378ec7d4bbaafd40fdecf5
* txn 0xe423f7027969f97940d50ff8eaf3af5a8f920d76c181d0c23c66eee33a33770c has been mined on all nodes
* called contract function ThroneMaker.setThroneCreationPrice on node 1
* need to wait for txn 0xe2e5152d01b78340a48b1a4f131c16ea5a92cf1b5546900453d3aef8b7541320
* txn 0xe2e5152d01b78340a48b1a4f131c16ea5a92cf1b5546900453d3aef8b7541320 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0xbb55d202d59b31e72e21714f7476b63986d34383a6dafccc35c7125cf3df74ab
* txn 0xbb55d202d59b31e72e21714f7476b63986d34383a6dafccc35c7125cf3df74ab has been mined on all nodes

##### Transactions Generated

* [0x888dd9d4f2dfa922e6bf1b1217da772cb97840f3cb21d72b3e70d7004a56d8f8](http://testnet.etherscan.io/tx/0x888dd9d4f2dfa922e6bf1b1217da772cb97840f3cb21d72b3e70d7004a56d8f8)
* [0xe423f7027969f97940d50ff8eaf3af5a8f920d76c181d0c23c66eee33a33770c](http://testnet.etherscan.io/tx/0xe423f7027969f97940d50ff8eaf3af5a8f920d76c181d0c23c66eee33a33770c)
* [0xe2e5152d01b78340a48b1a4f131c16ea5a92cf1b5546900453d3aef8b7541320](http://testnet.etherscan.io/tx/0xe2e5152d01b78340a48b1a4f131c16ea5a92cf1b5546900453d3aef8b7541320)
* [0xbb55d202d59b31e72e21714f7476b63986d34383a6dafccc35c7125cf3df74ab](http://testnet.etherscan.io/tx/0xbb55d202d59b31e72e21714f7476b63986d34383a6dafccc35c7125cf3df74ab)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=0,)
* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Deity can sweep throne creation fees"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0xb1ed70995268a089eda2d65fadc168664fab8b18f96c8e60e0edd6887dc7f7fd
* txn 0xb1ed70995268a089eda2d65fadc168664fab8b18f96c8e60e0edd6887dc7f7fd has been mined on all nodes
* need to wait for txn 0x54fde603e79ad99d0082e48387bc0c7bdb21da35e0729198eee5b1b6b9ace307
* need to wait for txn 0x2ea06b2cc4127709b3dfb454c4fae7e916532c406347d6a4ccd2864bfb200900
* txn 0x54fde603e79ad99d0082e48387bc0c7bdb21da35e0729198eee5b1b6b9ace307 has been mined on all nodes
* created instance of contract ThroneMaker at 0xf9a403744bcbd179c5d4f488938aaecb6032a4ac
* txn 0x2ea06b2cc4127709b3dfb454c4fae7e916532c406347d6a4ccd2864bfb200900 has been mined on all nodes
* called contract function ThroneMaker.createThrone on node 1
* need to wait for txn 0x2f1e3352fbaf2549246b26bc99e2f08268c5af7c836f4d62d0bbdfe1dcf88052
* txn 0x2f1e3352fbaf2549246b26bc99e2f08268c5af7c836f4d62d0bbdfe1dcf88052 has been mined on all nodes
* called contract function ThroneMaker.sweepDeityCommission on node 1
* need to wait for txn 0x3bae78c58a7d018059fcfffd3758d0976655459d30a108337120eccea5c0e576
* txn 0x3bae78c58a7d018059fcfffd3758d0976655459d30a108337120eccea5c0e576 has been mined on all nodes

##### Transactions Generated

* [0xb1ed70995268a089eda2d65fadc168664fab8b18f96c8e60e0edd6887dc7f7fd](http://testnet.etherscan.io/tx/0xb1ed70995268a089eda2d65fadc168664fab8b18f96c8e60e0edd6887dc7f7fd)
* [0x54fde603e79ad99d0082e48387bc0c7bdb21da35e0729198eee5b1b6b9ace307](http://testnet.etherscan.io/tx/0x54fde603e79ad99d0082e48387bc0c7bdb21da35e0729198eee5b1b6b9ace307)
* [0x2ea06b2cc4127709b3dfb454c4fae7e916532c406347d6a4ccd2864bfb200900](http://testnet.etherscan.io/tx/0x2ea06b2cc4127709b3dfb454c4fae7e916532c406347d6a4ccd2864bfb200900)
* [0x2f1e3352fbaf2549246b26bc99e2f08268c5af7c836f4d62d0bbdfe1dcf88052](http://testnet.etherscan.io/tx/0x2f1e3352fbaf2549246b26bc99e2f08268c5af7c836f4d62d0bbdfe1dcf88052)
* [0x3bae78c58a7d018059fcfffd3758d0976655459d30a108337120eccea5c0e576](http://testnet.etherscan.io/tx/0x3bae78c58a7d018059fcfffd3758d0976655459d30a108337120eccea5c0e576)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* DeityCommissionSwept(toDeityAddress=0x96384d8ee4275db3d9ff753ab0af81f431adb892,amount=200000000000000000,)

### Test - "Can validate proposed throne before creating it"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4f820db637ae58300dfd803c8163234fc0394ffe7357457c09f3b127c1940974
* txn 0x4f820db637ae58300dfd803c8163234fc0394ffe7357457c09f3b127c1940974 has been mined on all nodes
* created instance of contract ThroneMaker at 0x0509ab1410647bf539ee10fcfb737e4c890587bb

##### Transactions Generated

* [0x4f820db637ae58300dfd803c8163234fc0394ffe7357457c09f3b127c1940974](http://testnet.etherscan.io/tx/0x4f820db637ae58300dfd803c8163234fc0394ffe7357457c09f3b127c1940974)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)

### Test - "Non-wizards cannot take wizard comission"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x50309de4ad87ca72e91b3a9952409af0d9f54ec721fded6835d3eb11eff7b883
* need to wait for txn 0xc83aa4bf114600ae70aa9a652499da1f0705fab2a28a4f05272e0311c61a4f0a
* need to wait for txn 0x96b166360fd9fe353fe96310742fa5bc0180cb858899b509d5e9bf7a5cf55c29
* need to wait for txn 0x9ab65946c89c248829c6a9ecd88a649cc4ee5185694797cc57108399a6973fce
* txn 0x50309de4ad87ca72e91b3a9952409af0d9f54ec721fded6835d3eb11eff7b883 has been mined on all nodes
* txn 0xc83aa4bf114600ae70aa9a652499da1f0705fab2a28a4f05272e0311c61a4f0a has been mined on all nodes
* txn 0x96b166360fd9fe353fe96310742fa5bc0180cb858899b509d5e9bf7a5cf55c29 has been mined on all nodes
* txn 0x9ab65946c89c248829c6a9ecd88a649cc4ee5185694797cc57108399a6973fce has been mined on all nodes
* need to wait for txn 0xb29adb292066e8f8a804cc3379adcc5646bdf76d943c21de8ba0b2d2ef5b8391
* txn 0xb29adb292066e8f8a804cc3379adcc5646bdf76d943c21de8ba0b2d2ef5b8391 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xf3e846f9aa24161e06825d1c0258df435f621c4b
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x3c16fe1f2e3d10b00060e5cda2b8cb6c79b12ebf75711e9cfa28315c7cf52758
* txn 0x3c16fe1f2e3d10b00060e5cda2b8cb6c79b12ebf75711e9cfa28315c7cf52758 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0xe4315f2ed9e1cfbfe0c7dd9d5e045ef2ae9198b0509c52557c299fff4a84c786
* txn 0xe4315f2ed9e1cfbfe0c7dd9d5e045ef2ae9198b0509c52557c299fff4a84c786 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0xec8762c63e302c7650b0163e4b9d382e345c972c11061f31e2d8dbe9ec3e7830
* txn 0xec8762c63e302c7650b0163e4b9d382e345c972c11061f31e2d8dbe9ec3e7830 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0x2ae29a1b3260419217828d39b27c69cb221ef57447bab90db0f2dcd22e063f0c
* txn 0x2ae29a1b3260419217828d39b27c69cb221ef57447bab90db0f2dcd22e063f0c has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepWizardCommission on node 1
* need to wait for txn 0xfde944f104539388497763eef8638db164e4c6fe317cff908ef0b991eadf0550
* txn 0xfde944f104539388497763eef8638db164e4c6fe317cff908ef0b991eadf0550 has been mined on all nodes

##### Transactions Generated

* [0x50309de4ad87ca72e91b3a9952409af0d9f54ec721fded6835d3eb11eff7b883](http://testnet.etherscan.io/tx/0x50309de4ad87ca72e91b3a9952409af0d9f54ec721fded6835d3eb11eff7b883)
* [0xc83aa4bf114600ae70aa9a652499da1f0705fab2a28a4f05272e0311c61a4f0a](http://testnet.etherscan.io/tx/0xc83aa4bf114600ae70aa9a652499da1f0705fab2a28a4f05272e0311c61a4f0a)
* [0x96b166360fd9fe353fe96310742fa5bc0180cb858899b509d5e9bf7a5cf55c29](http://testnet.etherscan.io/tx/0x96b166360fd9fe353fe96310742fa5bc0180cb858899b509d5e9bf7a5cf55c29)
* [0x9ab65946c89c248829c6a9ecd88a649cc4ee5185694797cc57108399a6973fce](http://testnet.etherscan.io/tx/0x9ab65946c89c248829c6a9ecd88a649cc4ee5185694797cc57108399a6973fce)
* [0xb29adb292066e8f8a804cc3379adcc5646bdf76d943c21de8ba0b2d2ef5b8391](http://testnet.etherscan.io/tx/0xb29adb292066e8f8a804cc3379adcc5646bdf76d943c21de8ba0b2d2ef5b8391)
* [0x3c16fe1f2e3d10b00060e5cda2b8cb6c79b12ebf75711e9cfa28315c7cf52758](http://testnet.etherscan.io/tx/0x3c16fe1f2e3d10b00060e5cda2b8cb6c79b12ebf75711e9cfa28315c7cf52758)
* [0xe4315f2ed9e1cfbfe0c7dd9d5e045ef2ae9198b0509c52557c299fff4a84c786](http://testnet.etherscan.io/tx/0xe4315f2ed9e1cfbfe0c7dd9d5e045ef2ae9198b0509c52557c299fff4a84c786)
* [0xec8762c63e302c7650b0163e4b9d382e345c972c11061f31e2d8dbe9ec3e7830](http://testnet.etherscan.io/tx/0xec8762c63e302c7650b0163e4b9d382e345c972c11061f31e2d8dbe9ec3e7830)
* [0x2ae29a1b3260419217828d39b27c69cb221ef57447bab90db0f2dcd22e063f0c](http://testnet.etherscan.io/tx/0x2ae29a1b3260419217828d39b27c69cb221ef57447bab90db0f2dcd22e063f0c)
* [0xfde944f104539388497763eef8638db164e4c6fe317cff908ef0b991eadf0550](http://testnet.etherscan.io/tx/0xfde944f104539388497763eef8638db164e4c6fe317cff908ef0b991eadf0550)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WizardCommissionSwept(toWizardAddress=0x1c6ad57defb1cd81c183046995ededb3b3e78392,amount=500000000000000000,)

### Test - "Non-deity cannot take deity comission"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x5a4f96f7178e741690997ef38258613132bf56ddad9a41a3b7de6e057adf35e6
* need to wait for txn 0xc887a4f1175647d0c687013b00fd2c83cf15ae83bdd0afff29c6b2b3603ac3c4
* need to wait for txn 0x97df2ee499f3b3a73cd35b12a7f38e6396b1389e4aba6991e1f31096fd66e844
* need to wait for txn 0x1bbe9af133e9f22b1dcde86fd83b2bca4c9e8c4a8cd1d434fe4fc3fbe4e32778
* txn 0x5a4f96f7178e741690997ef38258613132bf56ddad9a41a3b7de6e057adf35e6 has been mined on all nodes
* txn 0xc887a4f1175647d0c687013b00fd2c83cf15ae83bdd0afff29c6b2b3603ac3c4 has been mined on all nodes
* txn 0x97df2ee499f3b3a73cd35b12a7f38e6396b1389e4aba6991e1f31096fd66e844 has been mined on all nodes
* txn 0x1bbe9af133e9f22b1dcde86fd83b2bca4c9e8c4a8cd1d434fe4fc3fbe4e32778 has been mined on all nodes
* need to wait for txn 0xa9015a6c1429eea69af2420e02758a35d0066f90cc0cc8b65d75435c2bea1d57
* txn 0xa9015a6c1429eea69af2420e02758a35d0066f90cc0cc8b65d75435c2bea1d57 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xec59a06eff4b2918b1185fb0ba453b2de5aa8523
* called contract function KingOfTheEtherThrone.claimThrone on node 1
* need to wait for txn 0x4ce936804ab96c595f9738da104137a3c302bf15ba476b56471c89435076970e
* txn 0x4ce936804ab96c595f9738da104137a3c302bf15ba476b56471c89435076970e has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0xfbc69b623d390299f52e68264c473fbd23154f1393055bbbd338ffe38edbfc68
* txn 0xfbc69b623d390299f52e68264c473fbd23154f1393055bbbd338ffe38edbfc68 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0x57280214ad1da8e2d12a80dfe27cc482d2de2fa2f837abce393126efa9576b4a
* txn 0x57280214ad1da8e2d12a80dfe27cc482d2de2fa2f837abce393126efa9576b4a has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0x9dd5b7b1bc5f56628f3b370057283b537b8a8c6a4db5f9b4b2da2387094bf966
* txn 0x9dd5b7b1bc5f56628f3b370057283b537b8a8c6a4db5f9b4b2da2387094bf966 has been mined on all nodes
* called contract function KingOfTheEtherThrone.sweepDeityCommission on node 1
* need to wait for txn 0xce0072cec6c55acd562a919a57aae4e452f3a66795698968d9a42dd6688ea761
* txn 0xce0072cec6c55acd562a919a57aae4e452f3a66795698968d9a42dd6688ea761 has been mined on all nodes

##### Transactions Generated

* [0x5a4f96f7178e741690997ef38258613132bf56ddad9a41a3b7de6e057adf35e6](http://testnet.etherscan.io/tx/0x5a4f96f7178e741690997ef38258613132bf56ddad9a41a3b7de6e057adf35e6)
* [0xc887a4f1175647d0c687013b00fd2c83cf15ae83bdd0afff29c6b2b3603ac3c4](http://testnet.etherscan.io/tx/0xc887a4f1175647d0c687013b00fd2c83cf15ae83bdd0afff29c6b2b3603ac3c4)
* [0x97df2ee499f3b3a73cd35b12a7f38e6396b1389e4aba6991e1f31096fd66e844](http://testnet.etherscan.io/tx/0x97df2ee499f3b3a73cd35b12a7f38e6396b1389e4aba6991e1f31096fd66e844)
* [0x1bbe9af133e9f22b1dcde86fd83b2bca4c9e8c4a8cd1d434fe4fc3fbe4e32778](http://testnet.etherscan.io/tx/0x1bbe9af133e9f22b1dcde86fd83b2bca4c9e8c4a8cd1d434fe4fc3fbe4e32778)
* [0xa9015a6c1429eea69af2420e02758a35d0066f90cc0cc8b65d75435c2bea1d57](http://testnet.etherscan.io/tx/0xa9015a6c1429eea69af2420e02758a35d0066f90cc0cc8b65d75435c2bea1d57)
* [0x4ce936804ab96c595f9738da104137a3c302bf15ba476b56471c89435076970e](http://testnet.etherscan.io/tx/0x4ce936804ab96c595f9738da104137a3c302bf15ba476b56471c89435076970e)
* [0xfbc69b623d390299f52e68264c473fbd23154f1393055bbbd338ffe38edbfc68](http://testnet.etherscan.io/tx/0xfbc69b623d390299f52e68264c473fbd23154f1393055bbbd338ffe38edbfc68)
* [0x57280214ad1da8e2d12a80dfe27cc482d2de2fa2f837abce393126efa9576b4a](http://testnet.etherscan.io/tx/0x57280214ad1da8e2d12a80dfe27cc482d2de2fa2f837abce393126efa9576b4a)
* [0x9dd5b7b1bc5f56628f3b370057283b537b8a8c6a4db5f9b4b2da2387094bf966](http://testnet.etherscan.io/tx/0x9dd5b7b1bc5f56628f3b370057283b537b8a8c6a4db5f9b4b2da2387094bf966)
* [0xce0072cec6c55acd562a919a57aae4e452f3a66795698968d9a42dd6688ea761](http://testnet.etherscan.io/tx/0xce0072cec6c55acd562a919a57aae4e452f3a66795698968d9a42dd6688ea761)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* DeityCommissionSwept(toDeityAddress=0x1c222d814acc0fb170781ab43021957038c0995b,amount=500000000000000000,)

### Test - "Non-wizard cannot transfer wizard-ship"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e
* need to wait for txn 0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1
* need to wait for txn 0xd528e20ae9b76598efe7503709c00853fee6b022f9bbe24c106bbdaf0119a60e
* need to wait for txn 0x8ffdc7dfa08b9fb5f328e895678bdb0a928ec2c0da88cd1b5b2ff197e84e2848
* txn 0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e has been mined on all nodes
* txn 0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1 has been mined on all nodes
* txn 0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e has been mined on all nodes
* txn 0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1 has been mined on all nodes
* txn 0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e has been mined on all nodes
* txn 0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1 has been mined on all nodes
* txn 0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e has been mined on all nodes
* txn 0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1 has been mined on all nodes
* txn 0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e has been mined on all nodes
* txn 0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1 has been mined on all nodes
* txn 0xd528e20ae9b76598efe7503709c00853fee6b022f9bbe24c106bbdaf0119a60e has been mined on all nodes
* txn 0x8ffdc7dfa08b9fb5f328e895678bdb0a928ec2c0da88cd1b5b2ff197e84e2848 has been mined on all nodes
* need to wait for txn 0xaef38e1892a4538d99b8108952801706a25ca2e863f828cf83828da6e7e0c607
* txn 0xaef38e1892a4538d99b8108952801706a25ca2e863f828cf83828da6e7e0c607 has been mined on all nodes
* created instance of contract KingOfTheEtherThrone at 0xbdd1b489f014462c8572becbbec37de1e4f981dd
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0xd571cbb71e6551045fae3fd251272b5bb256c4a34d22ccb03acf8bd7368e22ef
* txn 0xd571cbb71e6551045fae3fd251272b5bb256c4a34d22ccb03acf8bd7368e22ef has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0x0ac6172d8b851b95bedc495376220076bbb2536d04d686ecbff6180427b68497
* txn 0x0ac6172d8b851b95bedc495376220076bbb2536d04d686ecbff6180427b68497 has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0xa8e09623360156cc128bc55313b28db8a083c5d8d2ed90630547aced501660f2
* txn 0xa8e09623360156cc128bc55313b28db8a083c5d8d2ed90630547aced501660f2 has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0x8c68ee346fb0f8f7a98745768bbaf860025f6f5c24799ce359a4acc1a8952ce5
* txn 0x8c68ee346fb0f8f7a98745768bbaf860025f6f5c24799ce359a4acc1a8952ce5 has been mined on all nodes
* called contract function KingOfTheEtherThrone.switchWizard on node 1
* need to wait for txn 0x8e19f4fdcf88766e7e9e1ff101976e4139b1b3cd85b1ece6cbb5e8fe3d646077
* txn 0x8e19f4fdcf88766e7e9e1ff101976e4139b1b3cd85b1ece6cbb5e8fe3d646077 has been mined on all nodes

##### Transactions Generated

* [0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e](http://testnet.etherscan.io/tx/0x330b48f8086b9d83ffed3faf2e81c38843dd4e37c1de9e7050d8c6136e236c0e)
* [0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1](http://testnet.etherscan.io/tx/0x6f1a1f7751207caa12ff5d0e48c4b77be3976461c1ab4103f37c488cb556b2e1)
* [0xd528e20ae9b76598efe7503709c00853fee6b022f9bbe24c106bbdaf0119a60e](http://testnet.etherscan.io/tx/0xd528e20ae9b76598efe7503709c00853fee6b022f9bbe24c106bbdaf0119a60e)
* [0x8ffdc7dfa08b9fb5f328e895678bdb0a928ec2c0da88cd1b5b2ff197e84e2848](http://testnet.etherscan.io/tx/0x8ffdc7dfa08b9fb5f328e895678bdb0a928ec2c0da88cd1b5b2ff197e84e2848)
* [0xaef38e1892a4538d99b8108952801706a25ca2e863f828cf83828da6e7e0c607](http://testnet.etherscan.io/tx/0xaef38e1892a4538d99b8108952801706a25ca2e863f828cf83828da6e7e0c607)
* [0xd571cbb71e6551045fae3fd251272b5bb256c4a34d22ccb03acf8bd7368e22ef](http://testnet.etherscan.io/tx/0xd571cbb71e6551045fae3fd251272b5bb256c4a34d22ccb03acf8bd7368e22ef)
* [0x0ac6172d8b851b95bedc495376220076bbb2536d04d686ecbff6180427b68497](http://testnet.etherscan.io/tx/0x0ac6172d8b851b95bedc495376220076bbb2536d04d686ecbff6180427b68497)
* [0xa8e09623360156cc128bc55313b28db8a083c5d8d2ed90630547aced501660f2](http://testnet.etherscan.io/tx/0xa8e09623360156cc128bc55313b28db8a083c5d8d2ed90630547aced501660f2)
* [0x8c68ee346fb0f8f7a98745768bbaf860025f6f5c24799ce359a4acc1a8952ce5](http://testnet.etherscan.io/tx/0x8c68ee346fb0f8f7a98745768bbaf860025f6f5c24799ce359a4acc1a8952ce5)
* [0x8e19f4fdcf88766e7e9e1ff101976e4139b1b3cd85b1ece6cbb5e8fe3d646077](http://testnet.etherscan.io/tx/0x8e19f4fdcf88766e7e9e1ff101976e4139b1b3cd85b1ece6cbb5e8fe3d646077)

##### Contract Events

* WizardSwitched(newWizardAddress=0xa1d6a82ddda12d3821e15bdf9af035d7502fe31b,)
* WizardSwitched(newWizardAddress=0x5ca6648ce90fbc73b007f725b8300f35699f0807,)

### Test - "Name Hashing"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x428efd04cd8ccca69719807d12274dd54ef7d59aa72ab280be732606e5704e24
* txn 0x428efd04cd8ccca69719807d12274dd54ef7d59aa72ab280be732606e5704e24 has been mined on all nodes
* created instance of contract ThroneInternalsForTesting at 0x2fb1659fd4f4153107909d3a82334954b9124aac

##### Transactions Generated

* [0x428efd04cd8ccca69719807d12274dd54ef7d59aa72ab280be732606e5704e24](http://testnet.etherscan.io/tx/0x428efd04cd8ccca69719807d12274dd54ef7d59aa72ab280be732606e5704e24)

### Test - "Name Validation"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x4a642211ee3c60eb0dc44d4b9d2e400902815f0b312ff6637036b7bafdb06aa7
* txn 0x4a642211ee3c60eb0dc44d4b9d2e400902815f0b312ff6637036b7bafdb06aa7 has been mined on all nodes
* created instance of contract ThroneInternalsForTesting at 0xaf849d100b4f640f1a8f186db38c9e6ecbae0756

##### Transactions Generated

* [0x4a642211ee3c60eb0dc44d4b9d2e400902815f0b312ff6637036b7bafdb06aa7](http://testnet.etherscan.io/tx/0x4a642211ee3c60eb0dc44d4b9d2e400902815f0b312ff6637036b7bafdb06aa7)

### Test - "Money Rounding"

##### Status

Passed

##### Debug Messages

* need to wait for txn 0x727bc78f1d04fb577016210d918cac6f7098f5b1370d33a7e9fd9836bd1c0f68
* txn 0x727bc78f1d04fb577016210d918cac6f7098f5b1370d33a7e9fd9836bd1c0f68 has been mined on all nodes
* created instance of contract ThroneInternalsForTesting at 0xaae0c7028cb343e10e0f4c3cd17f9b47d90e6bec

##### Transactions Generated

* [0x727bc78f1d04fb577016210d918cac6f7098f5b1370d33a7e9fd9836bd1c0f68](http://testnet.etherscan.io/tx/0x727bc78f1d04fb577016210d918cac6f7098f5b1370d33a7e9fd9836bd1c0f68)

### Test - "Two claims from two nodes, exactly one winner"

##### Status

Skipped

