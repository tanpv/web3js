var Web3 = require('web3');

// mainnet
// let url = "https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49";

// local blockchain
let url = "http://127.0.0.1:7545";

let web3 = new Web3(url);
console.log(web3);