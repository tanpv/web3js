const Web3 = require('web3')
const url = 'https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49'
const web3 = new Web3(url)

web3.eth.getBlockNumber().then((result) => {
  console.log(result)
})

web3.eth.getBlock(6257684).then((block) => {
  console.log(block)
})

web3.eth.getBlockNumber().then((result) => {
  for(let i=0;i<100;i++){
    web3.eth.getBlock(result-i).then((block) => {
      console.log(block.number)
    })
  }
})

web3.eth.getBlock('latest').then((block) => {
  console.log(block.number)
})

web3.eth.getBlock('pending').then((block) => {
  console.log(block.number)
})

web3.eth.getBlock('0x8fe37851d97e4eb6fdac5946aa1cd6cdbdf476473ea2989bfc6d0ae004e71ab9').then((block) => {
  console.log(block.number)
})

web3.eth.getTransactionFromBlock(6257707, 2).then(console.log)