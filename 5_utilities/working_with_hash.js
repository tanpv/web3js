let Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49"
let web3 = new Web3(url)

transfer_event = "Transfer(address,address,uint256)"
approval_event = "Approval(address,address,uint256)"
birth_event = "Birth(address,uint256,uint256,uint256,uint256)"
aution_created = "AuctionCreated(uint256,uint256,uint256,uint256)"
aution_success = "AuctionSuccessful(uint256,uint256,address)"
aution_cancel = "AuctionCancelled(uint256)"
pregnant = "Pregnant(address,uint256,uint256,uint256)"

console.log(web3.utils.sha3(transfer_event))
console.log(web3.utils.sha3(approval_event))
console.log(web3.utils.sha3(birth_event))
console.log(web3.utils.sha3(aution_created))
console.log(web3.utils.sha3(aution_success))
console.log(web3.utils.sha3(aution_cancel))
console.log(web3.utils.sha3(pregnant))
