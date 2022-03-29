
## 1.Project name

DAO Exchange Pool System

## 2.Elevator pitch

This DAO exchange pool model system is for various types of DAO organizations to raise funds at a fixed price through this pool.

## 3.Team Name

Rainbowcity Foundation

## 4.Submission links

Submission address directory:
http://www.rainbowdao.io/project

Project demo website:
https://expool.rainbowdao.io/#/

GitHub repository:
https://github.com/RainbowDAO/09-DAO-Exchange-Pool

Solidity-Version-contract (GitHub):
https://github.com/RainbowDAO/09-DAO-Exchange-Pool/tree/main/Solidity-contract

Frontend code (GitHub):
https://github.com/RainbowDAO/09-DAO-Exchange-Pool/tree/main/Front-end

Picture (GitHub):
https://github.com/RainbowDAO/09-DAO-Exchange-Pool/tree/main/PIC

## 5.Recorded video demo

https://youtu.be/MuYQJ4Qm4_c

## 6.Testnet Deployment Information

#### 1.BNB Test

Network Name: BNB Test Network
RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/

Contract deployment address

ERC20FACTORY :
0x57bf6Cf742B6a5393925ebEB0f9D8DD1ACF4f40F

CREATPOOL :
0x993C02deb00F78693513c28636aCcadCcC5e2693

CREATTOKENEXCHANGE :
0xB785075E06933084ec81De0928f6594d0Fd87CFd

SEED :
0x087D99F2677A381b3d4a5DdE00E3FB741ac28e67

SEED_EX :
0xaC5208A3136BE6b53f0D820112F692AB9CB87B20

#### 2.Rinkeby Test

Network Name: Rinkeby Test Network
RPC URL: https://rinkeby.infura.io/v3/

Contract deployment address

ERC20FACTORY :
0x39d3f5cA0D1E7840C6b3A324d3A9c7679F4efd06

CREATPOOL :
0x8518Ead054286fC73a76bea45732f050853eCB54

CREATTOKENEXCHANGE :
0xBf9baf149Ea8e102926C4BfAc22e25979bAdABa8

SEED :
0x2a096314e6551823FA462831D668cC0E11aAC790

SEED_EX :
0x3778fDF0Eef96BD5cE189A9057AB6A40165B5A03

Frontend docs:
https://github.com/RainbowDAO/09-DAO-Exchange-Pool/blob/main/Front-end/README.md

Contract  docs:
https://github.com/RainbowDAO/09-DAO-Exchange-Pool/blob/main/Solidity-contract/README.md

## 7.Project social media:

RainbowDAO website: http://www.rainbowdao.io

Rainbowcity website: https://www.rainbowcity.io

Twitter:    https://twitter.com/RainbowDAOio

Discord:     https://discord.gg/vbnvFEeYRr

Telegram: https://t.me/RainbowDAO

Medium:   https://medium.com/rainbowcity

Github:    https://github.com/RainbowDAO

Email: Rainbowcitydao@gmail.com

#  Project Story

## 1.Inspiration

The design of this product is inspired by the requirements by HAPI.ONE in the sponsor challenge: exchange pool model. According to this requirement, we chose to expand further and created the current small system.

## 2.What it does

This DAO exchange pool model system is for various types of DAO organizations to raise funds at a fixed price through this pool. This system is for raising DAO fund and can be applied to various types of DAO organizations. Everyone can use this system to raise the funds they need.

## 3.How we built it

![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/Logic-diagram.png)

Introduction to the function steps of the DAO exchange pool model system:

(1) Initialize an exchange pool, set the name of the exchange pool, the address of the token contract to be sold, the address of the token contract to be purchased, the price and number of the tokens to be sold, the amount of funds raised, the start time and end time of mining pool exchange;

(2) The creator of the exchange pool needs to put the tokens to be sold into the exchange pool when setting the number of exchangeable tokens;

(3) The exchange can only be carried out when the mining pool is in active state, otherwise exchange is not allowed. The exchangers can withdraw the purchased tokens when the exchange is over;

(4) The creator of the exchange pool can withdraw tokens left after the entire exchange ends;

(5) After the entire exchange ends, if some tokens are not sold, the creator of the exchange pool can withdraw them. During the exchange period, the creator is not allowed to withdraw the corresponding tokens.

#  Project UI

## 1-Basic-Information


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/1-Basic-Information.png)


## 2-Confirmation-Token


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/2-Confirmation-Token.png)


## 3-Exchange-Time


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/3-Exchange-Time.png)


## 4-Sell-Tokens


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/4-Sell-Tokens.png)


## 5-Home


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/5-Home.png)


## 6-Info


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/6-Info.png)


## 7-Exchange


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/7-Exchange.png)


## 8-Withdraw


![image](https://raw.githubusercontent.com/RainbowDAO/09-DAO-Exchange-Pool/main/PIC/8-Withdraw.png)
