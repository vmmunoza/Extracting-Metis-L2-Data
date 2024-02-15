# Extracting-Metis-L2-Data

This repository provides material to help you extract data from Metis L2 blockchain by running a replica node and using the Web3.js library to extract and save the data. 
It also shows how to use GPT to visualize this blockchain data.

## 1. Run a replica node

Replica node provides a comprehensive toolkit for deploying, configuring, and managing Metis blockchain nodes. 

The first step is to clone the repo:

`git clone https://github.com/ericlee42/metis-replica-node`
 

Make sure you are able to satisfy the requirements:

- Linux(x86_64)

- Docker (can be downloaded here: https://docs.docker.com/engine/install/)

If you have Windows make sure you have WSL 2 and Docker Desktop enabled:

https://docs.docker.com/desktop/wsl/#turn-on-docker-desktop-wsl-2

Next update the config to start your Metis mainnet node with minimal configuration steps and adhere to Docker Compose's default behavior :

`cp docker-compose-mainnet.yml docker-compose.yml`

Then run Docker:

`docker compose up -d`

You should see this on your terminal if everything is working properly

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/01.jpg)

You can check the logs from l2geth on Docker Desktop, you'll see something that looks like this:

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/02.jpg)

## 2. Use web3.js to extract Metis L2 Data

There are several ways to extract and fetch data now that your node is running. The most common way is to use JSON-RPC. Tools and libraries like web3.py (for Python), Nethereum (for .NET), and web3.js (for JavaScript) can interact with the node to fetch data. 

We'll use web3.js so make sure to check the documentation first: 

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

( Note that the name of the script in the screenshot is index.js but is the same as data_explorer.js ).

From here, you should explore different possibilities to extract the desirable data for your purpose.

I have prepared scripts that help you fetch a range of blocks, and extract key information such as block number, hash, timestamp, and the number of transactions in each block. I encourage you to check the `fetch_print.js` for this. 

In addition, you might want to add an extra functionality that allows you to save fetched blockchain data. I have created the `fetch_save.js` script to help fetch the data into a file named blockchainData.json. 

That information should look like this:

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/04.jpg)

## 3. Use GPT to visualize the blockchain data 

Let’s try to make sense of this data using ChatGPT. There is an option for the subscriber to use the GPT data analysis feature which can perform all types of analysis with data sets in different formats. If you don't want to pay but still want to use AI for this, I recommend using ![Julius AI]( https://julius.ai/)

Create the prompt:

```I've recently acquired a dataset containing information about blockchain blocks, including attributes such as block number, hash, timestamp, and the number of transactions per block. Given an initial review that performs a Data Exploration.```

Here’s how the output looks like
![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/05.jpg)


Finally, let’s ask GPT to give us more information and to create a series of visualizations to better understand this data:

``` Create a series of visualizations that help me better understand this data ```

You'll see the following graphics 

![Replica Node](https://github.com/vmmunoza/Extracting-Metis-L2-Data/blob/main/Images/06.jpg) 

Alternatively, if you want you can use python to do some exploratory data analysis and visualization. I left a script `EDA.py` that you can use for this purpose.

That's all for now, I hope you got a basic understanding on how to run a Metis node, extract blockchain data and save it for further analysis and visualization. 
