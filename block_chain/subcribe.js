/**
 * subcribe
 *  - pending transactions
 *  - new block headers
 *  - syncing
 *  - logs
 *  - clear sub
 * 
 *  https://forum.ethereum.org/discussion/16377/web3-subscribe-topics
 *  
 */
const Web3 = require('web3')

// not yet work with local geth
// var web3 = new Web3('ws://127.0.0.1:8546');
// using connection from infura
var web3 = new Web3('wss://mainnet.infura.io/_ws');

// let subscription = web3.eth.subscribe('pendingTransactions', function (error, result) {})
//                   .on("data", function (transactionHash) {
//                       console.log(transactionHash)
//                   })

// let subscription = web3.eth.subscribe('newBlockHeaders', function (error, result) {})
// .on("data", function (blockHeader) {
//     console.log(blockHeader)
// })


var subscription = web3.eth.subscribe('logs', {}, function(error, result){})
.on("data", function(log){
  console.log(log);
})

// output example
// { address: '0x949bd9E6031A3d43623FEc3f85e9adbf8A6d9F7A',  topics:
//    [ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
//      '0x00000000000000000000000036496bd9c8641eeb02a213f39e9cda7a17866bf4',
//      '0x0000000000000000000000009eb0b1230d1de12a8b46f4162856a8838e2a1cba' ],
//   data: '0x000000000000000000000000000000000000000000000000be1b4f87f88773b9',
//   blockNumber: 6216268,
//   transactionHash: '0x73c90ccc86fed6847ee38f039ed3cae73e529e5ab84731dddcc5469261cd28c3',
//   transactionIndex: 56,
//   blockHash: '0x3fed4a89079db616af1d958520ed254c03dc5e729d61838d37f58fb411add3a6',  logIndex: 99,
//   removed: false,
//   id: 'log_22c1bbff' }



