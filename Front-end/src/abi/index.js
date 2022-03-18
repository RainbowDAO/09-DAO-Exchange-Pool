import daoFactory from "./data/daoFactory.json"
import daoManage from "./data/daoManage.json"
import vault from "./data/vault.json"
import erc20 from "./data/erc20.json"
import creatTokenExchange from "./data/creatTokenExchange.json"
const CONTRACTS = {
    creatTokenExchange:{address:"0x8518Ead054286fC73a76bea45732f050853eCB54",abi:creatTokenExchange},

    daoFactory:{address:"0xBf9baf149Ea8e102926C4BfAc22e25979bAdABa8",abi:daoFactory},
    daoManage:{abi:daoManage},
    vault:{abi:vault},
    erc20:{abi:erc20},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByContract(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByContract,
    getContractAddress
};
