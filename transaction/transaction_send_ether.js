// install ethereumjs-tx
// unlock account
// sendTransaction using geth with unlock account


// sendTransaction with local blockchain with offline sign
// using infura test network

let Tx= require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49')

console.log(web3.eth.accounts.create())
console.log(web3.eth.accounts.create())

// { address: '0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187',
//   privateKey: '0xa27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691',
// }
// { address: '0x25e20af4D202CfE4EA483EE4Bd87ED42420fFdC0',
//   privateKey: '0xc94c956497f9a582f8b2c8efc6758dfb20b0bb517d5e934a421d8900169c2014',
// }

const account1 = '0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187'
const privateKey1 = Buffer.from("a27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691", "hex")
// const privateKey1 = "0xa27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691"
const account2 = '0x25e20af4D202CfE4EA483EE4Bd87ED42420fFdC0'

web3.eth.getBalance(account1, (err, balance) => {
  console.log('account 1 balance:', web3.utils.fromWei(balance, 'ether'))
})

web3.eth.getBalance(account2, (err, balance) => {
  console.log('account 2 balance:', web3.utils.fromWei(balance, 'ether'))
})

// web3.eth.getTransactionCount(account1, (err, txCount)=>{
//   // build transaction
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     to: account2,
//     value: web3.utils.toHex(web3.utils.toWei('0.3', 'ether')),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei'))
//   }

//   console.log(txObject)

//   // sign transaction
//   const tx = new Tx(txObject)
//   tx.sign(privateKey1)

//   const serializedTransaction = tx.serialize()
//   const raw = '0x' + serializedTransaction.toString('hex')

//   // console.log(raw)

//   // broadcast transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log(txHash)
//   })
// })



