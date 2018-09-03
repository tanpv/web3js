let Web3 = require('web3')
// ganache local blockchain
let url_ganache = 'http://127.0.0.1:7545'

// infura
let url_infura = 'https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49'

// using geth
let url_geth = 'http://127.0.0.1:8545'

// let web3 = new Web3(url_ganache)
// let web3 = new Web3(url_infura)
let web3 = new Web3(url_geth)


console.log(web3)