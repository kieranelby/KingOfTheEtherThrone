/* jslint node:true */
'use strict';

/*
 * TODO - document
*/

function EtherFormatter(web3) {
  this.web3 = web3;
}

EtherFormatter.prototype.formatAmount = function(amountWei) {
  return this.web3.fromWei(this.web3.toBigNumber(amountWei), 'ether') + ' ETH';
};

exports = module.exports = EtherFormatter;
