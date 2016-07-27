/* jslint node:true */
'use strict';

/*
 * Wraps the World contract to make reading info easier.
*/

function WorldPropertiesFacade(world, web3) {
  this.world = world;
  this.web3 = web3;
}

WorldPropertiesFacade.prototype.getKingdomEntry = function(kingdomNumber) {
  var rawKingdomEntry = this.world.kingdomsByNumber(kingdomNumber);
  /*
    struct KingdomListing {
        uint kingdomNumber;
        string kingdomName;
        address kingdomContract;
        address kingdomCreator;
        uint creationTimestamp;
        address kingdomFactoryUsed;
    }
  */  
  return {
    kingdomNumber: rawKingdomEntry[0],
    kingdomName: rawKingdomEntry[1],
    kingdomContractAddress: rawKingdomEntry[2],
    kingdomCreator: rawKingdomEntry[3],
    creationTimestamp: rawKingdomEntry[4],
    kingdomFactoryUsed: rawKingdomEntry[5]
  };
};

exports = module.exports = WorldPropertiesFacade;
