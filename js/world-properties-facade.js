/* jslint node:true */
'use strict';

/*
 * Wraps the World contract to make reading info easier.
*/

function WorldPropertiesFacade(world, web3) {
  this.world = world;
  this.web3 = web3;
}

exports = module.exports = WorldPropertiesFacade;
