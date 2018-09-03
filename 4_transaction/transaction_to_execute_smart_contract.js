const Tx= require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49')

const account1 = '0x5f3459cAf34e35E9A52117a442Aad55A6e2eb187'
const privateKey1 = Buffer.from("a27b4f867b530627986b81e124e53922369521732d65d71c6c33414399d13691", "hex")


const election_address = '0x48BEB4D8dd3AEe098811082Ad5831a2856fB784a'
const election_abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "voteCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "voters",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "candidateCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "name": "voted",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const electionContract = new web3.eth.Contract(election_abi, election_address)
// electionContract.methods.candidateCount().call((error, result) => {console.log(result)})


web3.eth.getTransactionCount(account1, (error, txCount) => {
  const data = electionContract.methods.vote(1).encodeABI()
  // build a transaction object
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: election_address,
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
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

