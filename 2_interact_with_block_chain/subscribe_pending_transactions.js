/**
 * subcribe
 *  - all pending transactions
 *  - pending transactions and filter with value
 */

const Web3 = require('web3')

// must use wss for subcribe
var web3 = new Web3('wss://mainnet.infura.io/ws');

// logout the transaction hash
web3.eth.subscribe('pendingTransactions', function(error, txHash){
  console.log(txHash)  
});

// subcribe and filter transaction
// web3.eth.subscribe('pendingTransactions', function(error, txHash){
//   // console.log(txHash)
//   if (!error) {
//     web3.eth.getTransaction(txHash, function(error, tx) {
//       if (!error) {
//         if(tx!=null){
//           // filter transaction with value >= 1eth
//           if(tx.value >= 1000000000000000000){
//             console.log(txHash)
//             console.log(web3.utils.fromWei(tx.value, 'ether'),' ether')
//             console.log('----------------------------------------------')
//           } 
//         }
//       }
//       else
//         console.log(error);
//       })
//   }
//   else
//     console.log(error);
// });