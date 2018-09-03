const Web3 = require('web3')
const ws = 'wss://mainnet.infura.io/ws'
const web3 = new Web3(ws);

// web3.eth.subscribe('pendingTransactions', (error, txhash) => {
//   console.log(txhash)
// })


web3.eth.subscribe('pendingTransactions', (error, txhash) => {
  if(!error)
  {
    web3.eth.getTransaction(txhash, (error, tx)=>{
      if(tx!=null){
        // console.log(tx)
        // filler transaction >= 1eth
        if(tx.value >= 1000000000000000000){
          console.log(txhash)
          console.log(web3.utils.fromWei(tx.value,'ether'), 'ether')
        }
      }
    })
  }else{
    console.log(error)
  }
})
