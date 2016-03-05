  eth.accounts.slice(250).forEach(function (account) {
    try {
      personal.unlockAccount(account, 'password', 3600);
      var balance = eth.getBalance(account);
      if (balance === undefined) throw new Error("unknown balance");
      var txn = {
        from: account,
        to: eth.defaultAccount,
        value: new BigNumber(balance)
      };
      // bizarrely this makes txn.value lose its bignum-ness
      var estGasAmt = eth.estimateGas(txn);
      var estGasCost = eth.gasPrice.mul(estGasAmt);
      console.log('est gas cost ', estGasCost, ' based on amt ', estGasAmt);
      txn.gas = estGasAmt;
      txn.value = balance.sub(estGasCost);
      if (txn.value.greaterThan(0)) {
        var txnHash = eth.sendTransaction(txn);
        console.log('send txn to sweep ', balance, ' from ', account, ' as ', txnHash);
      } else {
        console.log('nothing worth sweeping in ', account);
      }
    } catch (e) {
      console.log('could not sweep ' + account, e);
    }
  });
