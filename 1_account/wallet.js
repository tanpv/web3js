// use wallet to manage multiple account
let Web3 = require('web3')

// try with local blockchain
let url = "http://127.0.0.1:7545"
let address = "0x7C6753Efd8173D6d371080742B5B355E9849bb3B"

// try  with main net use infura
// let url = "https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49"
// let address = "0x281055Afc982d96fAB65b3a49cAc8b878184Cb16"

let web3 = new Web3(url)

// create new account
let account = web3.eth.accounts.create()
console.log(account.privateKey)

// create new wallet with 2 account
let wallet = web3.eth.accounts.wallet.create(2,'a random string')

// add account to wallet with private key
wallet.add(account.privateKey)

// now wallet should contain 3 accounts
console.log(wallet)
