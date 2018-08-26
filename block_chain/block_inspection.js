const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49')

// get current block
// web3.eth.getBlockNumber().then(console.log)

// get block infor
// web3.eth.getBlock('latest').then((block) => {
//   console.log({
//     blockHash: block.hash,
//     blockNumber: block.number})
// })


// web3.eth.getBlock(6208843).then((block) => {
//   console.log({
//     blockHash: block.hash,
//     blockNumber: block.number})
// })

// web3.eth.getBlock('0x2df24348c3589dd7ef4d2a41de5ab0c315ad8f645c3edeb764ed124f6765da1d').then((block) => {
//   console.log({
//     blockHash: block.hash,
//     blockNumber: block.number})
// })

// get last 100 block
// web3.eth.getBlockNumber().then((lastest) => {
//   for (let i = 0; i < 100; i++) {
//     web3.eth.getBlock(lastest - i).then((block)=>{
//       console.log(block.number)
//     })
//   }
// })

let hash = '0x2df24348c3589dd7ef4d2a41de5ab0c315ad8f645c3edeb764ed124f6765da1d'
web3.eth.getBlock('latest').then(console.log)
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)







