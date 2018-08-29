/**
 * subcribe 
 *  - new block headers
 */

const Web3 = require('web3')
var web3 = new Web3('wss://mainnet.infura.io/ws');

// print new block number
var subscription = web3.eth.subscribe('newBlockHeaders', function(error, block){
  if (!error) {
      console.log(Date.now())
      console.log(block.number);
      return;
  }
  console.error(error);
})
