import { task } from "hardhat/config";
import { SavingsManager } from "../types/ethers"

const mUSDAddress = "0xe2f2a5c287993345a840db3b0845fbc70f5935a5"
const savingsManagerAddress = "0x9781C4E9B9cc6Ac18405891DF20Ad3566FB6B301"

task("lastInterest", "Gets the last time the interest was collected on the Savings Manager")
  .setAction(async (_, { ethers }) => {
    const SavingsManagerFactory = await ethers.getContractFactory("SavingsManager");
    const savingsManager = SavingsManagerFactory.attach(savingsManagerAddress).connect(ethers.provider) as SavingsManager
    const lastBatchInterestCollectionBN = await savingsManager.lastBatchCollected(mUSDAddress)
    const lastBatchInterestCollectionDate = new Date(lastBatchInterestCollectionBN.toNumber() * 1000)
    console.log(`Last batch interest collection ${lastBatchInterestCollectionBN}, ${lastBatchInterestCollectionDate}`)
  })

module.exports = {}