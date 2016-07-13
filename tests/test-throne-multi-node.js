/* jslint node:true */
'use strict';

/*
 * TODO - document, port to new contract
*/

function TestThroneMultiNode() {
}

TestThroneMultiNode.prototype.addTests = function(runner, throneTestSupport) {

  // TODO - test what happens if multiple eth nodes claim throne at same time
  runner.addTest({
    title: 'Two claims from two nodes, exactly one winner',
    categories: ['multinode'],
    multiNode: true,
    steps: [
      function(helper) {
        // given a new throne and two players (one per node)
        this.throne = throneTestSupport.createStandardTestThrone(helper);
        this.playerOneAccount = helper.account.node1.createWithJustOver(helper.math.toWei('1', 'ether'));
        this.playerTwoAccount = helper.account.node2.createWithJustOver(helper.math.toWei('1', 'ether'));
      },
      function(helper) {
        // when both players pay the exact claim price (which should be 1 ether)
        var originalClaimPrice = this.throne.currentClaimPrice();
        helper.assert.equal(helper.math.toWei('1','ether'), originalClaimPrice, 'starting claim price');
        this.throne.node1.claimThrone('playerOne', {
          from: this.playerOneAccount,
          value: originalClaimPrice,
          gas: 250000
        });
        this.throne.node2.claimThrone('playerTwo', {
          from: this.playerTwoAccount,
          value: originalClaimPrice,
          gas: 250000
        });
      },
      function(helper) {
        // then the claim price increases (on both nodes!)
        var newClaimPrice1 = this.throne.node1.currentClaimPrice();
        var newClaimPrice2 = this.throne.node2.currentClaimPrice();
        helper.assert.equal(helper.math.toWei('1.5','ether'), newClaimPrice1, 'expected new claim price to increase by 50% on node 1 ');
        helper.assert.equal(helper.math.toWei('1.5','ether'), newClaimPrice2, 'expected new claim price to increase by 50% on node 2');
      }
    ]
  });
  
};

exports = module.exports = TestThroneMultiNode;
