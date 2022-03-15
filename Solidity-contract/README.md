# 09-ETHDenver2022-DAO-Exchange-Pool
## Contract introduction
- ERC20FACTORY : Create two tokens to add exchange objects to the transaction pool.
- CREATPOOL :Create a transaction pool to store exchangeable tokens, specify token exchange.
- CREATTOKENEXCHANGE :After the exchange pool is created, you can set the basic information and lock time of the exchange pool


## Installing

Please make sure you have the corresponding versions of npm :

```bash
npm -v
```
```bash
npm install npm@latest -g
```


- Install npm and node using a package manager such as nvm. Sometimes there are issues using Ledger due to how macOS handles node packages related to USB devices.
- Ensure you have installed Node version 12 or above.

- Install Solidity-contract dependencies:
```bash
cd Solidity-contract
```

```bash
npm install
```
## Testing

First of all you need to change the network:

Rinkeby testNetWork

Then, Enter the webpage and select the Aurora Network test network and click Add network

The following is the corresponding address of the contract in the test network
- ERC20FACTORY : 0x39d3f5cA0D1E7840C6b3A324d3A9c7679F4efd06 
- CREATPOOL : 0x8518Ead054286fC73a76bea45732f050853eCB54 
- CREATTOKENEXCHANGE : 0xBf9baf149Ea8e102926C4BfAc22e25979bAdABa8 
- SEED : 0x2a096314e6551823FA462831D668cC0E11aAC790 
- SEED_EX : 0x3778fDF0Eef96BD5cE189A9057AB6A40165B5A03 

