let Tx= require('ethereumjs-tx')
const Web3 = require('web3')

const web3 = new Web3('https://ropsten.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49')

const account1 = '0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187'
const privateKey1 = Buffer.from("a27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691", "hex")
const contractAddress = '0xaCE937eB96bc25d6E6c6c5d1EF5d4a6376112dcD'
const contractABI = [{"constant":false,"inputs":[{"name":"candidateId","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidates","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"candidateCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"candidateId","type":"uint256"}],"name":"voted","type":"event"}]

const contract = new web3.eth.Contract(contractABI, contractAddress)

const data = contract.methods.vote(1).encodeABI()

console.log(data)

web3.eth.getTransactionCount(account1, (err, txCount)=>{
  // build transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
    to: contractAddress,
    data: data  //contain method with input data is encoded
  }

  // console.log(txObject)

  // sign transaction  
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTransaction = tx.serialize()
  const raw = '0x' + serializedTransaction.toString('hex')

  // broadcast transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log(err, txHash)
  })

})

// recheck after call method successfully
// const contractAddress = '0xaCE937eB96bc25d6E6c6c5d1EF5d4a6376112dcD'
// const contractABI = [{"constant":false,"inputs":[{"name":"candidateId","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidates","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"candidateCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"candidateId","type":"uint256"}],"name":"voted","type":"event"}]
// let electionContract = new web3.eth.Contract(contractABI, contractAddress)
// electionContract.methods.candidates(1).call((err, candidate) => {console.log(candidate[2])})


