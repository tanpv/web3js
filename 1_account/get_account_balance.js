let Web3 = require('web3')

// try with local blockchain
// let url = "http://127.0.0.1:7545"
// let address = "0x7C6753Efd8173D6d371080742B5B355E9849bb3B"

// try  with main net use infura
let url = "https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49"
let address = "0x281055Afc982d96fAB65b3a49cAc8b878184Cb16"

let web3 = new Web3(url)

// get account balance
web3.eth.getBalance(address, (error, balance) => {
  if(!error){
    let balance_in_eth = web3.utils.fromWei(balance, 'ether')
    console.log(balance_in_eth)
  }else{
    console.log(error)
  }  
});

