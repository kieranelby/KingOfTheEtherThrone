# King of the Ether Throne

An Ethereum ÐApp (a "contract"), living on the blockchain, that will make you a King or Queen, might grant you riches, and will immortalize your name.

## What does it do?

The Ether Throne awaits you. It can be yours for a price - here are the rules as enforced by the contract:

- Let's say (for example) the current claim price for the throne is 10 ether.
- You like the sound of being King, so you send 10 ether to the contract.
- This makes you the new King of the Ether Throne, the First of His Name, the Uncentralized, Sovereign of the Exalted Order of Miners, Emperor of the Blocks beyond the Sidechains, Head of the Great Patricia Tree, and so on and so forth.
- Your name will be added to the Hall of Past Monarchs in the blockchain.
- The contract will then send your 10 ether (less a small commission charge) to the previous Monarch you have usurped, as compensation.
- The new claim price for the throne will go up by 50%, to 15 ether.
- If an usurper comes along who is willing to pay 15 ether, she will depose you and become Queen, and you will receive her payment of 15 ether (less a small commission charge) as compensation - a profit of 5 ether for you.
- But ... if no new Monarch comes along within 3 days (72 hours to be precise), then your reign ends and the throne becomes vacant, with the claim price reset back to {{startingClaimPrice}}. (The contract can't give you back your 10 ether because it was given to the previous monarch). Surely you'll find a worthy successor within 72 hours though ... right?

## Who is the Monarch?

Since {{currentMonarch.coronationTimestampReadable}}, the illustrious current ruler of the Ether Throne is **{{currentMonarch.name}}**, the First of Their Name, the Uncentralized, the Sovereign of the Exalted Order of Miners, the Emperor of the Blocks beyond the Sidechains, the Head of the Great Patricia Tree, and so on and so forth.

*NB: You don't have to trust this page (which was last updated based on a block with timestamp {{lastUpdatedBlockTimestampReadable}}); read on for how you can interact with the contract via the Ethereum blockchain to find out who is our ruler.*

## How Can I Rule the Ether?

The power of the Ether Throne can be yours for the **current claim price** of just **{{currentClaimPrice}}**.

Here's how you can pay the claim price and rule the Ether ...

### Pay Using an Ethereum ÐApp Browser (e.g. Mist)

It's all a bit hemorrhaging-edge, but if you visit {% if targetIsGit %}[the live kingoftheether.com page](http://www.kingoftheether.com/){% elif targetIsWeb %}this page{% endif %} - not in your normal browser, but inside a special Ethereum ÐApp browser such as:

* [Mist developer preview](https://github.com/ethereum/mist/releases/tag/0.3.6) 

then you should see the ÐApp interface {% if targetIsGit %}appear where you can interact with the contract via your local Ethereum node.{% elif targetIsWeb %} appear here where you can interact with the contract via your local Ethereum node:

<div id="interfacePlaceholder" class="notWorking">
**Sorry, this web page couldn't seem to create the ÐApp interface.**
</div>
{% endif %}

If that doesn't work, read on ...

### Pay by Adding the Contract in the Mist Wallet

If you're using the (still experimental!) Mist Ethereum Wallet - e.g. from [https://github.com/ethereum/mist/releases] - go to Contracts -> Add Contract, then fill in the details from the "Contract Details" section below. Yes, you do need to copy and paste that big long bit of JSON.

After you've added the Contract, if you click "Show Contract Information", you should be able to see the Current Claim Price on the left and a 'claimThrone' function you can select and execute on the right.

Don't forget to include the payment when executing the claimThrone function. The Current Claim Price is shown in Wei, so you might need to do a little conversion.

This worked in version 0.3.8 of the wallet client on Windows, anyway. Unfortunately you might find in some versions that you cannot add a payment when executing a function - which isn't much good. Read on for more ways ...

### Pay by Sending a Manual Payment

You can simply manually send your payment to `{{contractAddress}}`. You could use a wallet app such as Mist, an online wallet, or with some Javascript in the geth console.

If another monarch comes along and takes your throne, we'll send your compensation payment to the address you sent your payment from - so make sure you send the payment from an address you control.

We'll use your Ethereum address as your name, though if you like you can put your name in the data field - might need to convert from ASCII. e.g. with the geth Javascript console:

```
eth.sendTransaction({
  from: eth.accounts[0],
  value: web3.toWei(15, 'ether'),
  to: '{{contractAddress}}',
  gas: 500000,
  data: web3.fromAscii('Your Kingly Name')
});
```

Please keep the length of your name to less than 20 letters - some ÐApp software gets confused by long names.

See above for the current claim price of the throne (don't worry too much about getting it wrong, it will refund you if you pay too little / too much).

### Using the Web3 Javascript API

If you're running a geth node, you can interact with the contract using a little Javascript like this:

```
// tell web3 how to talk to the contract
var kingOfTheEtherThroneContract = web3.eth.contract({{contractAbiJson | safe}});

// tell web3 where the contract is
var kingOfTheEtherThrone = kingOfTheEtherThroneContract.at('{{contractAddress}}');

// ask contract what the current claim price is
web3.fromWei(kingOfTheEtherThrone.currentClaimPrice(),'ether');

// claim the throne
kingOfTheEtherThrone.claimThrone(
  'Put Name Here',
  { from: eth.accounts[0],
    value: kingOfTheEtherThrone.currentClaimPrice(),
    gas: 500000 } )
```

### Using Chain Explorers

You can watch transactions and storage changes on chain viewers like [https://etherchain.org/account/{{contractAddress}}], [https://etherscan.io/address/{{contractAddress}}], and [https://live.ether.camp/account/{{contractAddress}}]. Some don't seem to be very good at showing transactions generated by the contract though.

## Contract Details

You can use these details to interact with the King of the Ether Throne contract:

#### CONTRACT NAME

`KingOfTheEtherThrone`

#### CONTRACT ADDRESS
`{{contractAddress}}`

#### JSON INTERFACE (CONTRACT ABI)

```
{{contractAbiJson | safe}}
```

#### CONTRACT SOURCE CODE

The Solidarity source code for the contract lives at [https://github.com/kieranelby/KingOfTheEtherThrone/blob/v0.3.0/contracts/KingOfTheEtherThrone.sol]. It was compiled with solidity version `v0.2.0-2016-01-20-67c855c` without optimization, just in case you want to verify the code matches the bytecode.

## Hall of Past Monarchs

|Number|Name|Claim Price Paid|
|---|---|---|
{%- for pastMonarch in pastMonarchs %}
|{{pastMonarch.number}}|{{pastMonarch.displayName}}|{{pastMonarch.claimPricePaid}}|
{%- endfor %}

## Other Bits and Pieces

### How much is the commission charge?

Two percent. This helps cover gas costs too.

### Haven't I seen something like this before?

Yes, probably - there are/were a number of Bitcoin chain games along similar lines (though they normally seemed to involve owning a magnificent gem or a special coin).

The difference with Ethereum is that you don't have to trust the author not to run away with the money - instead, you can inspect the contract and rely on the blockchain to ensure it is executed as written.

This contract was somewhat inspired by http://ethereumpyramid.com/ (to which this is in no way affiliated).

### Can you make me a throne too?

Hmm, perhaps we need a contract for creating thrones (for a small commission, of course) ... drop me an email if interested.

### I think something went wrong. Can I have my money back?

Long answer: Ah. Well, you see, one downside of trustless autonomous contracts executing on the blockchain is that there is no possibility of human intervention - no-one can reach into the back of the machine and tweak things, even if they wanted to. Besides, there is no money to give back - it's all been given to the previous monarch, remember? So you'll agree that refunds are impossible and unethical.

Short answer: No.

### And Finally

This is intended as a bit of fun and to explore what a contract running on the Ethereum blockahin can do. Please don't spend money you can't afford to lose - keep it fun. And if you suspect that spending cryptocurrencies on virtual thrones for non-existent kingdoms is illegal in your jurisdiction, please avoid participating (and complain to your political representatives).
