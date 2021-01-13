import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-truffle5"
import "hardhat-typechain"
import "@tenderly/hardhat-tenderly"
import "ts-node/register"
import "tsconfig-paths/register"

import "./tasks/basketManager"
import "./tasks/savingsManager"

export default {
    networks: {
        hardhat: { allowUnlimitedContractSize: true },
        localhost: { url: "http://localhost:8545" },
        fork: { url: "http://localhost:7545" },
    },
    solidity: {
        version: "0.5.16",
        settings: {
            optimizer: {
                enabled: true,
            },
        },
    },
    paths: { artifacts: "./build/contracts" },
    gasReporter: {
        currency: "USD",
        gasPrice: 30,
    },
    mocha: {
        timeout: 240000, // 4 min timeout
    },
    typechain: {
        // Generates the Truffle 5 types used by the tests
        outDir: "types/generated",
        target: "truffle-v5"
        // Generates the ethers 5 types used by the HardHat tasks
        // outDir: "types/ethers",
        // target: "ethers-v5"
    },
    tenderly: {
        username: "mStable",
        project: "mStable-contracts",
    },
};
