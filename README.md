# Extracting-Metis-L2-Data

This repository provides material to help you extract data from Metis L2 by running a replica node and using the Web3.js library. It will also shows how to use GPT to visualize this blockchain data.

## 1. Run a replica node

Replica node does XXXX:

First step is to clone the repo:

`git clone https://github.com/ericlee42/metis-replica-node`
 

Make sure you satisfy the requirements:

- Linux(x86_64)

- Docker (can be downloaded here: https://docs.docker.com/engine/install/)

If you have Windows make sure you have WSL 2 and Docker Desktop enables:

https://docs.docker.com/desktop/wsl/#turn-on-docker-desktop-wsl-2

Then update config :

`cp docker-compose-mainnet.yml docker-compose.yml`

Then run docker:

`docker compose up -d`

You should see this on terminal if everything is working

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/01.jpg)

You can check the logs from l2geth on Docker Desktop, you'll see this:

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/02.jpg)

## 2. Use Web3.js to extract Metis L2 Data

You can do this in several ways, like and web3.JS

We’ll use this last one so make sure to check the documentation first: 

https://docs.web3js.org/ 

Go to the `scripts` folder. Make sure you have installed Node.js.

 - Open a terminal in this folder.


 - Run `npm init` and follow the prompts to create a `package.json` file.


- Install Web3.js: Run `npm install web3`.

- Run `node data_explorer.js`

What this code should do:

1. It imports the Web3 module, and it initializes a Web3 instance, connecting to the Metis Replica node.
2. It fetches and logs the latest block number on the blockchain, handling any errors that might occur during the process.
3. It attempts to retrieve and log the details of a specific transaction by its hash, again handling any possible errors.

You should see something like this on the terminal 

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/03.jpg)

(The name of the script in the screenshot is index.js but is the same as data_explorer.js )

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/04.jpg)

## 3. Use GPT to visualize the blockchain data 

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/05.jpg)

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/06.jpg)
