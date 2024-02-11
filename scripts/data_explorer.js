const { Web3 } = require('web3');

// Replace 'http://localhost:8545' with your Metis node RPC URL if different
const web3 = new Web3('http://localhost:8545');


web3.eth.getBlockNumber()
    .then(blockNumber => {
        console.log('Latest block number:', blockNumber);
    })
    .catch(error => {
        console.error('Error fetching block number:', error);
    });



const txHash = '0x8b7c4373bb714c3cfe19d3f4a7aef94b340a455d2bbd4caf2e4deddaecc33e14'; // Replace with an actual transaction hash
web3.eth.getTransaction(txHash)
    .then(transaction => {
        console.log('Transaction details:', transaction);
    })
    .catch(error => {
        console.error('Error fetching transaction details:', error);
    });
