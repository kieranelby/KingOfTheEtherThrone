# King of the Ether Throne
An Ethereum app (aka contract), living on the blockchain, that will make you a King, grant you riches, and immortalize your name.

## Version

You're reading about version 0.3.0 of the contract - check the newest version here: https://github.com/kieranelby/KingOfTheEtherThrone .

## How to Play

The Ether Throne awaits you on the blockchain. It can be yours for a price - here are the rules as enforced by the contract:

- Let's say (for example) the current claim price for the throne is 10 ETHER.
- You like the sound of being King, so you send 10 ETHER to the contract.
- This makes you the new King of the Ether Throne, the First of His Name, the Uncentralized, Sovereign of the Exalted Order of Miners, Emperor of the Blocks beyond the Sidechains, Head of the Great Patricia Tree, and so on and so forth.
- Your name will be added to the Hall of Past Kings in the blockchain.
- The contract will then send your 10 ETHER (less a small commission charge) to the previous King you have usurped, as compensation.
- The new claim price for the throne will go up by 50%, to 15 ETHER.
- If a new usurper comes along who is willing to pay 15 ETHER, he will depose you and become King, and you will receive his payment of 15 ETHER (less a small commission charge) as compensation - a profit of 5 ETHER for you.
- Of course, a new King may never come along - but then you get the glory and power for evermore!

## Contract Details

You can use these details to interact with the King of the Ether Throne contract:

#### CONTRACT NAME

`KingOfTheEtherThrone`

#### CONTRACT ADDRESS

`0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e`

#### JSON INTERFACE (CONTRACT ABI)

```
[{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"currentMonarch","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},
{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"claimThrone","outputs":[],"type":"function"},
{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"n","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pastMonarchs","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},
{"constant":false,"inputs":[],"name":"sweepCommission","outputs":[],"type":"function"},
{"anonymous":false,"inputs":[{"indexed":false,"name":"usurperEtherAddress","type":"address"},{"indexed":false,"name":"usurperName","type":"string"},{"indexed":false,"name":"newClaimPrice","type":"uint256"}],"name":"ThroneClaimed","type":"event"},
{"inputs":[],"type":"constructor"}]
```

The Solidarity source code for the contract lives at [https://github.com/kieranelby/KingOfTheEtherThrone/blob/v0.3.0/contracts/KingOfTheEtherThrone.sol]. It was compiled with solidity `v0.2.0-2016-01-20-67c855c` without optimization, just in case you want to verify the code matches the bytecode.

## Where to Find the Throne

### Web Front-End

The web front-end is still a work in progress - soon you should be able to view it as a "dapp" in a browser - but in the mean-time, some options are ...

### Adding the Contract in the Mist Wallet

If you're using the (still experimental!) Mist Ethereum Wallet - e.g. from [https://github.com/ethereum/mist/releases] - go to Contracts -> Add Contract, then fill in the Contract Details above. Yes, you do need to copy and paste that big long bit of JSON.

After you've added the Contract, if you click "Show Contract Information", you should be able to see the Current Claim Price on the left and a 'claimThrone' function you can select and execute on the right.

Don't forget to include the payment when executing the claimThrone function. The Current Claim Price is shown in Wei, so you might need a little conversion.

This works in version 0.3.8 of the wallet client, anyway ...

### Manual Payment

You can manually send your payment to `0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e`. You can put your name in the data field - might need to convert from ASCII. e.g. with the geth Javascript console:

```
eth.sendTransaction({
  from: eth.accounts[0],
  value: web3.toWei(15, 'ether'),
  to: '0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e',
  gas: 500000,
  data: web3.fromAscii('Your Kingly Name')
});
```

You'll need to know the current claim price of the throne though (but don't worry too much about getting it wrong, it will refund you if you pay too little / too much).

### Web3 Javascript API

If you're running a geth node, you can interact with the contract using a little Javascript like this:

```
// tell web3 how to talk to the contract
var kingOfTheEtherThroneContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"currentClaimPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"pastMonarchs","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"claimThrone","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfMonarchs","outputs":[{"name":"n","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"sweepCommission","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"currentMonarch","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"claimPrice","type":"uint256"},{"name":"coronationTimestamp","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"usurperEtherAddress","type":"address"},{"indexed":false,"name":"usurperName","type":"string"},{"indexed":false,"name":"newClaimPrice","type":"uint256"}],"name":"ThroneClaimed","type":"event"}]);

// tell web3 where the contract is
var kingOfTheEtherThrone = kingOfTheEtherThroneContract.at('0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e');

// ask contract what the current claim price is
web3.fromWei(kingOfTheEtherThrone.currentClaimPrice(),'ether');

// claim the throne
kingOfTheEtherThrone.claimThrone(
  'Put Name Here',
  { from: eth.accounts[0],
    value: kingOfTheEtherThrone.currentClaimPrice(),
    gas: 500000 } )
```

### Chain Explorers

You can watch transactions and storage changes on chain viewers like [https://etherchain.org/account/0xa9d160e32ad37ac6f2b8231e4efe14d35abb576e]. Some don't seem to be very good at showing transactions generated by the contract though. Some might even let you claim the throne if they support making transactions.

## Other Bits and Pieces

### Wouldn't it be more fun if there was a limit on how long a King can rule for?

Yes, need to figure out how block timestamps work first. More suggestions for improvements welcome!

### Haven't I seen something like this before?

Yes, probably - there are/were a number of Bitcoin chain games along similar lines (though they normally seemed to involve owning a magnificent gem or a special coin).

The difference with Ethereum is that you don't have to trust the author not to run away with the money - instead, you can inspect the contract and rely on the blockchain to ensure it is executed as written.

This contract was somewhat inspired by http://ethereumpyramid.com/ (to which this is in no way affiliated).

### Can you make me a throne too?

Hmm, perhaps we need a contract for creating thrones (for a small commission, of course) ...
