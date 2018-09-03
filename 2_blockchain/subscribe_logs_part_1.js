const Web3 = require('web3')
const ws = 'wss://mainnet.infura.io/ws'
var web3 = new Web3(ws);

// web3.eth.subscribe('logs', {}, (error, log) => {
//   if(!error){
//     console.log(log)
//   }
// })

// fileter out all log happen with cryptokitties
web3.eth.subscribe('logs', {
  address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'
}, (error, log) => {
  if(!error){
    console.log(log)
  }
})