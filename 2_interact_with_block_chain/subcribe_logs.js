/**
 * subcribe logs
 *  - show all logs (event) happen on entire blockchain
 *  - 
 *  
 */
const Web3 = require('web3')

var web3 = new Web3('wss://mainnet.infura.io/ws');

// see all log on entire ethereum
// var subscription = web3.eth.subscribe('logs', {}, function(error, log){
//   if (!error)
//       console.log(log);
// });

// filter log related to cryptokitties
// var subscription = web3.eth.subscribe('logs', {
//   address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
// }, function(error, log){
//   if (!error)
//       console.log(log);
// });

// filter event of pregnant on cryptokitties
// topic mean event
var subscription = web3.eth.subscribe('logs', {
  address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
  topics: ['0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80'],
  fromBlock: 'latest'
}, function(error, log){
  if (!error)
      console.log(log);
});


// example topic from cryptokitties game
// transfer_event = "Transfer(address,address,uint256)"
// approval_event = "Approval(address,address,uint256)"
// birth_event = "Birth(address,uint256,uint256,uint256,uint256)"
// aution_created = "AuctionCreated(uint256,uint256,uint256,uint256)"
// aution_success = "AuctionSuccessful(uint256,uint256,address)"
// aution_cancel = "AuctionCancelled(uint256)"
// pregnant = "Pregnant(address,uint256,uint256,uint256)"
// console.log(web3.utils.sha3(transfer_event))
// console.log(web3.utils.sha3(approval_event))
// console.log(web3.utils.sha3(birth_event))
// console.log(web3.utils.sha3(aution_created))
// console.log(web3.utils.sha3(aution_success))
// console.log(web3.utils.sha3(aution_cancel))
// console.log(web3.utils.sha3(pregnant))
// 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
// 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925
// 0x0a5311bd2a6608f08a180df2ee7c5946819a649b204b554bb8e39825b2c50ad5
// 0xa9c8dfcda5664a5a124c713e386da27de87432d5b668e79458501eb296389ba7
// 0x4fcc30d90a842164dd58501ab874a101a3749c3d4747139cefe7c876f4ccebd2
// 0x2809c7e17bf978fbc7194c0a694b638c4215e9140cacc6c38ca36010b45697df
// 0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80