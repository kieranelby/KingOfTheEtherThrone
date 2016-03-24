# "King of the Ether Throne Core" Report

Generated at 2016-03-24T22:15:05.949Z by [dapp-test-runner](https://github.com/kieranelby/dapp-test-runner).

## Run Summary

**Good**:

* Tests added: 20
* Tests skipped: 0
* Tests passed: 20
* Tests failed: 0

## Tests

### Test - "Can inspect throne config"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x508f6e80d5cf825239341509aee32a635980d4e9

##### Transactions Generated

* [0x8f16ebcf13c14cf224c1c1c4f1a817a5386d281b185a7f137a1c67e735c1ab8e](http://testnet.etherscan.io/tx/0x8f16ebcf13c14cf224c1c1c4f1a817a5386d281b185a7f137a1c67e735c1ab8e)

### Test - "Claim Throne at Starting Price should Increase Claim Price"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x25de672b4993ecc310e4c758330dfec99147da45
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xf783f0d1c41cf9dcf38b17813dd8ce1d25d906e4ecca15758a220ad63ccf5765](http://testnet.etherscan.io/tx/0xf783f0d1c41cf9dcf38b17813dd8ce1d25d906e4ecca15758a220ad63ccf5765)
* [0xad6364cb7d1ac4e16a2257e468aa6d5319da0a838bbdf3c2cdd5d5fbe910256b](http://testnet.etherscan.io/tx/0xad6364cb7d1ac4e16a2257e468aa6d5319da0a838bbdf3c2cdd5d5fbe910256b)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne below Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x7e8aadb91e0e62675c79ea264a999c942ab4f568
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2b3aa1623e6db69f166992ce1d7b829323565d115f01c8b7b6bc92c95e10bd8c](http://testnet.etherscan.io/tx/0x2b3aa1623e6db69f166992ce1d7b829323565d115f01c8b7b6bc92c95e10bd8c)
* [0xdfabb22df621fa8dfcf7a730d455ddff1f97f771a7005192ff34a63baf5ac1a5](http://testnet.etherscan.io/tx/0xdfabb22df621fa8dfcf7a730d455ddff1f97f771a7005192ff34a63baf5ac1a5)

### Test - "Claim Throne above Starting Price should not Increase Claim Price but should refund"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x62ddd2e84bd8f7bdbf4d8699105cdfcaa642a5ed
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xdea1dad9534cf2a5da269e1df421ef6163fd6aad0a671b2cd6db35ca38adfd38](http://testnet.etherscan.io/tx/0xdea1dad9534cf2a5da269e1df421ef6163fd6aad0a671b2cd6db35ca38adfd38)
* [0x58969705a9c7dcc611fa6ae19af12f605a03999478a2e1df94905ab9975f4423](http://testnet.etherscan.io/tx/0x58969705a9c7dcc611fa6ae19af12f605a03999478a2e1df94905ab9975f4423)

### Test - "Hall of Monarchs before Throne Ever Claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x1802bb1450bb3676f7d6af1bccabac35c1e00e94

##### Transactions Generated

* [0xa8e391c5514b90d0d12b6b5e09bba3ecc036c8fbb811be90cdbfa8aba65813d9](http://testnet.etherscan.io/tx/0xa8e391c5514b90d0d12b6b5e09bba3ecc036c8fbb811be90cdbfa8aba65813d9)

### Test - "Hall of Monarchs after First Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xb9655ea75896e79a99ba787160b322f0af08d61e
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x31e5a1d0ab7bd08aa6388ef41327411488a459f8c0a095a8ecd2b2a1ccf4b7ee](http://testnet.etherscan.io/tx/0x31e5a1d0ab7bd08aa6388ef41327411488a459f8c0a095a8ecd2b2a1ccf4b7ee)
* [0xbf7715bb3c37cc1bd3e30fe7b2ad44949c65f7daf9ab73b99d882b91f6005e12](http://testnet.etherscan.io/tx/0xbf7715bb3c37cc1bd3e30fe7b2ad44949c65f7daf9ab73b99d882b91f6005e12)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim Throne for Second Time should Increase Claim Price Again"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x805066790978c0b5234f8541ba415ca0ef44fe84
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x393359fe5694a26a29dd82cae9af45f886127b45cca2be58f3d2b312c289ba28](http://testnet.etherscan.io/tx/0x393359fe5694a26a29dd82cae9af45f886127b45cca2be58f3d2b312c289ba28)
* [0x387363665c1fdfc490e126c039c67c6c3f9ff1a49d37afd294c17fe735ed0c71](http://testnet.etherscan.io/tx/0x387363665c1fdfc490e126c039c67c6c3f9ff1a49d37afd294c17fe735ed0c71)
* [0xabf874e8cd7a04c99502a676e85de5097774b12bdbad92dc22d9bf979848eeb2](http://testnet.etherscan.io/tx/0xabf874e8cd7a04c99502a676e85de5097774b12bdbad92dc22d9bf979848eeb2)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne for Second Time should pay Compensation to First Player"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x40e1d6a634365104f1dadd4be2798c40fa311a77
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x1bafbe175a502b120d66071b36b3fdecd9bab3bd07738216ff319dd59f1e3e79](http://testnet.etherscan.io/tx/0x1bafbe175a502b120d66071b36b3fdecd9bab3bd07738216ff319dd59f1e3e79)
* [0x4976fa31c295a21c2da11ce58ea080906bf2a0b07aad726d6218a5e5e727919d](http://testnet.etherscan.io/tx/0x4976fa31c295a21c2da11ce58ea080906bf2a0b07aad726d6218a5e5e727919d)
* [0xa68cd614b8d46030e767d52225f3b2319eea2eaf7ba56fb2f16be6ec5da3f6ba](http://testnet.etherscan.io/tx/0xa68cd614b8d46030e767d52225f3b2319eea2eaf7ba56fb2f16be6ec5da3f6ba)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Claim Throne should pay Commission to the contract shared between wizard and deity"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xc95856e7ff6a99c69886c0afc4f4267d017261ea
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x41de069b0e5d8a5c33c89e67cb32b24ae4a4b04cb8f79abf7225c7faf848ad6e](http://testnet.etherscan.io/tx/0x41de069b0e5d8a5c33c89e67cb32b24ae4a4b04cb8f79abf7225c7faf848ad6e)
* [0x03285a89f4cdf8d1ddff3d04d44bdb4b1e59dccfc6a666c3eb01e8478d3419c8](http://testnet.etherscan.io/tx/0x03285a89f4cdf8d1ddff3d04d44bdb4b1e59dccfc6a666c3eb01e8478d3419c8)
* [0xb4c5e5733d7ca9cfcb11733786bdeea68e6cdf690e4d35a84f6da1da351a931c](http://testnet.etherscan.io/tx/0xb4c5e5733d7ca9cfcb11733786bdeea68e6cdf690e4d35a84f6da1da351a931c)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "Hall of Monarchs after Second Claim"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x2b2322ca22e2a565170ca29c9560d11501536906
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x91102fec64b3a2e2ebc579333f08d6a416d862c229f5bc4bf6bf7c352f48d2a2](http://testnet.etherscan.io/tx/0x91102fec64b3a2e2ebc579333f08d6a416d862c229f5bc4bf6bf7c352f48d2a2)
* [0x09b21502530cb664cf2df818f7de974c756d1202e3c53d68fbf13071495b3fb8](http://testnet.etherscan.io/tx/0x09b21502530cb664cf2df818f7de974c756d1202e3c53d68fbf13071495b3fb8)
* [0x8f540eaff8f9563f437489cb60aed830ecbc103efe7de6dbc3c1dbe31b6fe593](http://testnet.etherscan.io/tx/0x8f540eaff8f9563f437489cb60aed830ecbc103efe7de6dbc3c1dbe31b6fe593)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)

### Test - "First monarch appears to die after standard test curse incubation period"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x0e9c2245baf802c7d5e0b05491cca725805325b6
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x7e79221e712733d7c2118e789f4f9ef230a01d6df2041ab41d78997c26ebf5c2](http://testnet.etherscan.io/tx/0x7e79221e712733d7c2118e789f4f9ef230a01d6df2041ab41d78997c26ebf5c2)
* [0x06adf859081a12d804686a0bbc6b974734e17fc6948ba342b5f93ed06a8c8bcd](http://testnet.etherscan.io/tx/0x06adf859081a12d804686a0bbc6b974734e17fc6948ba342b5f93ed06a8c8bcd)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne from dead first monarch does not pay compensation"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x09f275e452f08b487166e0985b9d133244d86ca9
* called contract function KingOfTheEtherThrone.claimThrone
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x831205c6116fa40db6e11e8218a1b8df189282116f9e6491f294c739d91b4598](http://testnet.etherscan.io/tx/0x831205c6116fa40db6e11e8218a1b8df189282116f9e6491f294c739d91b4598)
* [0x09899c9e4e84d259ffbf9fa07a8d22f4cda769ab8c6df8af459e54ca8cb7cd18](http://testnet.etherscan.io/tx/0x09899c9e4e84d259ffbf9fa07a8d22f4cda769ab8c6df8af459e54ca8cb7cd18)
* [0x3b5474d9707a050bd99a97a69e42145d81d86d8bf05a0d9433b1e145abd41e70](http://testnet.etherscan.io/tx/0x3b5474d9707a050bd99a97a69e42145d81d86d8bf05a0d9433b1e145abd41e70)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0xd96f0757b87c347fcfa5571bbabce7efaa42bee5

##### Transactions Generated

* [0xdffe5ad39c9fa1e64a4971c6c75d1242e80fc0a6d020ef5435c3338c118a2a12](http://testnet.etherscan.io/tx/0xdffe5ad39c9fa1e64a4971c6c75d1242e80fc0a6d020ef5435c3338c118a2a12)

##### Contract Events

* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)

### Test - "Claim throne anonymously via fallback using wallet contract succeeds"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x25b1e56e66bf6923ca02090aa823f10c157a71d3
* created instance of contract DTRExpensiveWallet at 0x989f02e56301155891617e55aef798abf05d59a8
* called contract function DTRExpensiveWallet.spendWithGas

##### Transactions Generated

* [0x408d94d9cb06afc49f062663fbd67840a61c50720f3316ce3e39a268e5fc861b](http://testnet.etherscan.io/tx/0x408d94d9cb06afc49f062663fbd67840a61c50720f3316ce3e39a268e5fc861b)
* [0x0dfcd0479180500eba03c8920def22a1dc2e20b6191028ea033acbfd2a000644](http://testnet.etherscan.io/tx/0x0dfcd0479180500eba03c8920def22a1dc2e20b6191028ea033acbfd2a000644)
* [0x937565769927f5dce9a44d147115f29f45ed2da24f8c70cb0efaa8f6e96bd932](http://testnet.etherscan.io/tx/0x937565769927f5dce9a44d147115f29f45ed2da24f8c70cb0efaa8f6e96bd932)

##### Contract Events

* WalletCreated(by=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,)
* DepositMade(from=0xa9f0fe5b0fe798f750e56405ae6454c072346b96,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x25b1e56e66bf6923ca02090aa823f10c157a71d3,value=1000000000000000000,)

### Test - "Compensation payment sent to king who claimed from cheap wallet contract"

##### Status

Passed

##### Debug Messages

* created instance of contract KingOfTheEtherThrone at 0x8df37e7e510055074f5d99e2ed44927f4980dae1
* created instance of contract DTRExpensiveWallet at 0x90bb6e9c7eff8b9f5d99a5dfd8810e9c809a140d
* called contract function DTRExpensiveWallet.spendWithGas
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x2334ddfe60b9c0a4a32628762c1838bb2509c0ff90a4f4fe0d64b3a0e037b5c8](http://testnet.etherscan.io/tx/0x2334ddfe60b9c0a4a32628762c1838bb2509c0ff90a4f4fe0d64b3a0e037b5c8)
* [0x39fed7f6161b5bf735b7c357b1ecf74d6719d25fdf9716c62b2f6a0c72522910](http://testnet.etherscan.io/tx/0x39fed7f6161b5bf735b7c357b1ecf74d6719d25fdf9716c62b2f6a0c72522910)
* [0x9da59619a9a929ffa06571c2e8cf68d280d315b95301476de2a1a0efe49bcbad](http://testnet.etherscan.io/tx/0x9da59619a9a929ffa06571c2e8cf68d280d315b95301476de2a1a0efe49bcbad)
* [0xe888dfb4db0dd9acf38b08386865cd0d3e7dc142880b0dc07d377ff34b898b30](http://testnet.etherscan.io/tx/0xe888dfb4db0dd9acf38b08386865cd0d3e7dc142880b0dc07d377ff34b898b30)

##### Contract Events

* WalletCreated(by=0x96384d8ee4275db3d9ff753ab0af81f431adb892,)
* DepositMade(from=0x96384d8ee4275db3d9ff753ab0af81f431adb892,value=1000000000000000000,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=1000000000000000000,)
* WithdrawalMade(to=0x8df37e7e510055074f5d99e2ed44927f4980dae1,value=1000000000000000000,)
* CompensationPaymentSent(compensatedMonarchIndex=0,paymentValue=1470000000000000000,)
* ThroneClaimed(newMonarchIndex=1,valuePaid=1500000000000000000,)
* DepositMade(from=0x8c2076cae2cf7cf955d49a43764217ccdc1e1b57,value=1470000000000000000,)

### Test - "Create bespoke throne via ThroneMaker has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xd57e293d9a59e48d1d131284d36c9f640000df8e
* called contract function ThroneMaker.createThrone
* throneName is  myThrone
* throneIndex is 0
* rawGazetteerEntry is  0x6d795468726f6e65,0xb902a71a38183b603bb5aa85aa41ea6ea35102a7,200000000000000000,1458857485
* gazetteerEntry is  [object Object]
* myThroneAddress is  0xb902a71a38183b603bb5aa85aa41ea6ea35102a7
* created instance of contract KingOfTheEtherThrone at 0xb902a71a38183b603bb5aa85aa41ea6ea35102a7
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0xd778cfbf4a0e9320df2d0e3a18cbed9955be1511021d42b68ac11db734a42719](http://testnet.etherscan.io/tx/0xd778cfbf4a0e9320df2d0e3a18cbed9955be1511021d42b68ac11db734a42719)
* [0xdc0f98179b8991ce9c36d1c854e251ec246f506726769d19ee44a983aecf40e0](http://testnet.etherscan.io/tx/0xdc0f98179b8991ce9c36d1c854e251ec246f506726769d19ee44a983aecf40e0)
* [0xdb6578a2e3b7daa2d05db15ee6ee5a998e5b5cb98d6cdcefc92230cf0ea375f4](http://testnet.etherscan.io/tx/0xdb6578a2e3b7daa2d05db15ee6ee5a998e5b5cb98d6cdcefc92230cf0ea375f4)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=250000000000000000,)

### Test - "Create second bespoke throne with exactly same name as first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x406ae0792e500ee006f1130a60924eb5d4879173
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xc91c8a7e0309b47d98bd069ddbaff69405158ab5f8774c7e63e843f3a898d7fe](http://testnet.etherscan.io/tx/0xc91c8a7e0309b47d98bd069ddbaff69405158ab5f8774c7e63e843f3a898d7fe)
* [0x7832d7388bb56c77504f41ccaf2f9c709b3e710d3f624f6d9662b306978ea230](http://testnet.etherscan.io/tx/0x7832d7388bb56c77504f41ccaf2f9c709b3e710d3f624f6d9662b306978ea230)
* [0x59322d0024417679a7e4d0af2c1bf7eafa8eb49c1b74f136a4b06f2b9ae5c9eb](http://testnet.etherscan.io/tx/0x59322d0024417679a7e4d0af2c1bf7eafa8eb49c1b74f136a4b06f2b9ae5c9eb)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne with too-similar name to the first via ThroneMaker fails"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0x737b00edaf7e8935b3d24833502c90e72f5766c8
* called contract function ThroneMaker.createThrone
* called contract function ThroneMaker.createThrone

##### Transactions Generated

* [0xb66a37e1597a42101f6bd5af24113623274b69415bd3ed7ec98e2b953cc23ec7](http://testnet.etherscan.io/tx/0xb66a37e1597a42101f6bd5af24113623274b69415bd3ed7ec98e2b953cc23ec7)
* [0x1a78ba91aeaad4f61e0a48816969d2482230bd3a1a0087a7d31a37619daffb19](http://testnet.etherscan.io/tx/0x1a78ba91aeaad4f61e0a48816969d2482230bd3a1a0087a7d31a37619daffb19)
* [0xcea28e7e16b1c84c28cc23891a637b795baacbf87b8769ed0a03894b38eeccbd](http://testnet.etherscan.io/tx/0xcea28e7e16b1c84c28cc23891a637b795baacbf87b8769ed0a03894b38eeccbd)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)

### Test - "Create second bespoke throne via ThroneMaker with different name has expected properties, appears in gazetteer and can be claimed"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneMaker at 0xff4b6fff104a95cc93e7cae15a48bd3c2d771665
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0x1736bc06fcbb824f85a1c9c79bd53d478f67d1a4
* called contract function ThroneMaker.createThrone
* created instance of contract KingOfTheEtherThrone at 0xce581e328866db56f8679f504b5fbc9507d6a8d6
* called contract function KingOfTheEtherThrone.claimThrone

##### Transactions Generated

* [0x8658b79094bdd0da29419f71f402caa2094bc0f668bc5f4d0968efa4bebaeddd](http://testnet.etherscan.io/tx/0x8658b79094bdd0da29419f71f402caa2094bc0f668bc5f4d0968efa4bebaeddd)
* [0xe5d6a592360597ce2b595fb45cab3efdb970ea143cdc5e761e8d85ca2e701a7e](http://testnet.etherscan.io/tx/0xe5d6a592360597ce2b595fb45cab3efdb970ea143cdc5e761e8d85ca2e701a7e)
* [0x2f7c7dd2f26cb655c57ea0457b4cb9eb6fe335057eb0e861b59a9309e6021d7c](http://testnet.etherscan.io/tx/0x2f7c7dd2f26cb655c57ea0457b4cb9eb6fe335057eb0e861b59a9309e6021d7c)
* [0xf1bf3e1d1f250b82dca3732eaaddaadce815daf39c4c7573052a9c745c1884cd](http://testnet.etherscan.io/tx/0xf1bf3e1d1f250b82dca3732eaaddaadce815daf39c4c7573052a9c745c1884cd)

##### Contract Events

* ThroneCreationPriceSet(newThroneCreationPrice=200000000000000000,)
* ThroneCreated(throneIndex=0,)
* ThroneCreated(throneIndex=1,)
* ThroneClaimed(newMonarchIndex=0,valuePaid=100000000000000000,)

### Test - "Temp"

##### Status

Passed

##### Debug Messages

* created instance of contract ThroneInternalsForTesting at 0x27f5118eb9f04cc0128ee6ea06aca43d85a73d54
* a -> 16640
* b -> 16896
* hello -> 79462470012672
* -Hello- -> 79462470012672
* -Hello- -> 79462470012672
* good -> 
* B@A@D -> 

##### Transactions Generated

* [0xa542710b555e49b694ff0779df5403517d5275f2302f5d1d4dfb147e43634226](http://testnet.etherscan.io/tx/0xa542710b555e49b694ff0779df5403517d5275f2302f5d1d4dfb147e43634226)

