const { Web3 } = require('web3');
const fs = require('fs');

// Connect to your Ethereum node
const web3 = new Web3('http://localhost:8545');


let blocksData = [];

async function fetchBlockDetails(startBlock, endBlock) {
    for(let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
        try {
            const block = await web3.eth.getBlock(blockNumber);
            // Convert any BigInt values to strings
            const blockData = {
                number: block.number.toString(),
                hash: block.hash,
                timestamp: block.timestamp.toString(),
                transactions: block.transactions.length
            };
            blocksData.push(blockData);
        } catch (error) {
            console.error(`Error fetching block ${blockNumber}:`, error);
        }
    }
    // Save the data to a file
    fs.writeFileSync('blockchainData.json', JSON.stringify(blocksData, null, 2), 'utf-8');
    console.log('Block details saved to blockchainData.json');
}


// Example usage: Fetch and save details of blocks 10000000 to 10000010
fetchBlockDetails(53470, 53480);
