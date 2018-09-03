let Web3 = require('web3')
let url = 'http://127.0.0.1:7545'
let web3 = new Web3(url)


console.log(web3.eth.accounts.create())
