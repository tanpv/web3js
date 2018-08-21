let Web3 = require('web3');
let url = "https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49";
let web3 = new Web3(url);
let address = "0x281055Afc982d96fAB65b3a49cAc8b878184Cb16"

web3.eth.getBalance(address, (error, balance) => {
  let balance_in_eth = web3.utils.fromWei(balance, 'ether');
  console.log(balance_in_eth);
});

console.log(web3.eth.accounts.create())