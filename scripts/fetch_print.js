const { Web3 } = require('web3');

// Replace 'http://localhost:8545' with your Metis node RPC URL if different
const web3 = new Web3('http://localhost:8545');

// Function to fetch and print details for a range of blocks
async function fetchBlockDetails(startBlock, endBlock) {
    for(let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
        try {
            const block = await web3.eth.getBlock(blockNumber);
            console.log({
                number: block.number,
                hash: block.hash,
                timestamp: block.timestamp,
                transactions: block.transactions.length
            });
        } catch (error) {
            console.error(`Error fetching block ${blockNumber}:`, error);
        }
    }
}

// Example usage: Fetch and print details of blocks 53470 to 53480
fetchBlockDetails(53470, 53480);
