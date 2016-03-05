// Some contracts that can be useful when testing.

// Fallback + reject function always throw an exception.
// ABI: [{"constant":false,"inputs":[],"name":"reject","outputs":[],"type":"function"}]
// Bytecode: 6060604052605b8060106000396000f360606040523615603a576000357c0100000000000000000000000000000000000000000000000000000000900480634dc415de14604857603a565b60465b60436055565b5b565b005b605360048050506055565b005b6002565b56'

contract Rejector {
    function() {
        reject();
    }
    function reject() {
        throw;
    }
}

// A basic wallet with adjustable gas cost for deposits.
// ABI: [{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"spend","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"inputs":[{"name":"eatGas","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"DepositMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"WithdrawalMade","type":"event"}]
// Bytecode: '60606040526040516020806102f9833981016040528080519060200190919050505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806001600050819055505b50610293806100666000396000f360606040523615610048576000357c01000000000000000000000000000000000000000000000000000000009004806330475cb4146100e957806341c0e1b51461015157610048565b6100e75b600060005a91507fd15c9547ea5c06670c0010ce19bc32d54682a4b3801ece7f3ab0c3f17106b4bb3234604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1600190505b816001600050545a011015156100e25780604051808281526020019150506040518091039020600190048101905080506100ad565b5b5050565b005b61014f6004808035906020019091908035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610160565b005b61015e60048050506101ff565b005b8273ffffffffffffffffffffffffffffffffffffffff16346000366040518083838082843782019150509250505060006040518083038185876185025a03f192505050507fbc158bb64f05d6383aea69bbb0b20c1bbf4b7a18f63359c5649b7c39e29d38848383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b505050565b3273ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561029057600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b56'

contract ExpensiveWallet {

    address _owner;
    uint256 _eatGas;

    modifier onlyowner { if (_owner == tx.origin) _ }

    event DepositMade(address from, uint value);
    event WithdrawalMade(address to, uint value);

    function ExpensiveWallet(uint256 eatGas) {
        _owner = tx.origin;
        _eatGas = eatGas;
    }

    function() {
        uint256 startGas = msg.gas;
        DepositMade(tx.origin, msg.value);
        uint256 junk = 1;
        while (msg.gas + _eatGas >= startGas) {
            junk += uint256(sha3(junk));
        }
    }

    function spend(address dst, uint256 value, bytes data) {
        dst.call.value(msg.value)(msg.data);
        WithdrawalMade(dst, value);
    }

    function kill() onlyowner {
        suicide(_owner);
    }
}
