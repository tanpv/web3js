const Tx= require('ethereumjs-tx')
const Web3 = require('web3')
const url = 'https://ropsten.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49'
const web3 = new Web3(url)

const account1 = '0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187'
const privateKey1 = Buffer.from("a27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691", "hex")
const account2 = '0x25e20af4D202CfE4EA483EE4Bd87ED42420fFdC0'

web3.eth.getTransactionCount(account1, (error, txCount) => {
  // build a transaction object
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('0.3', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // console.log(txObject)

  // sign traction with private key of sender
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  // serialize the transaction
  const serializedTransaction = tx.serialize()
  const raw = '0x' + serializedTransaction.toString('hex')

  // broadcast transaction to the network
  web3.eth.sendSignedTransaction(raw, (error, txHash) => {
    console.log(txHash)
  })
})