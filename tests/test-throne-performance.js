/* jslint node:true */
'use strict';

/*
 * Test gas usage is reasonable.
*/

function TestThronePerformance() {
}

TestThronePerformance.prototype.addTests = function(runner, throneTestSupport) {

  runner.addTest({
    title: 'Usurp throne via fallback with a long name and 200,000 gas should succeed',
    categories: ['peformance', 'inprogress'],
    steps: [
      function(helper) {
        // given a new throne and two players
        this.throne = throneTestSupport.createStandardTestThrone(helper);
        this.playerOneAccount = helper.account.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.playerTwoAccount = helper.account.createWithJustOver(helper.math.toWei('1.5', 'ether'));
      },
      function(helper) {
        // when the player pays the exact claim price (which should be 1 ether)
        var originalClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('1','ether'), originalClaimPrice, 'starting claim price');
        this.throne.claimThrone('playerOne', {
          from: this.playerOneAccount,
          value: originalClaimPrice,
          gas: 500000
        });
      },
      function(helper) {
        // then the claim price increases
        var newClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('1.5','ether'), newClaimPrice, 'expected new claim price to increase by 50%');
      },
      function(helper) {
        // and if the next player claims the throne by sending the starting price according
        // to the contract to the contract address, with a long name as data, and a not very
        // generous amount of gas:
        var claimPrice = this.throne.currentClaimPriceWei();
        helper.txn.send({
          from: this.playerTwoAccount,
          to: this.throne.address,
          value: claimPrice,
          // saw this fail in production with 200,000 gas; it looks like we used
          // a different version of solidity for deployment :(
          data: helper.txn.rawWeb3.fromAscii('NAME:Holy V. of the Gen. Block'),
          gas: 200000
        });
      },
      function(helper) {
        // then the claim price increases again
        var newClaimPrice = this.throne.currentClaimPriceWei();
        helper.assert.equal(helper.math.toWei('2.25','ether'), newClaimPrice, 'expected new claim price to increase by another 50%');
      }
    ]
  });
  
};

exports = module.exports = TestThronePerformance;
