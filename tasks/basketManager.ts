import { task } from "hardhat/config";
import { BasketManager, SavingsManager } from "../types/ethers"

const basketManagerAddress = "0x6efa260a268e4afacf7fb91a6bf5f5b37379bf61"

task("getBasket", "Gets the mStable basket of bAssets")
.setAction(async (_, { ethers }) => {
  const BasketManagerFactory = await ethers.getContractFactory("BasketManager");
  const basketManager = BasketManagerFactory.attach(basketManagerAddress).connect(ethers.provider) as BasketManager
  const basket = await basketManager["getBasket()"]()
  console.log(`Basket info:`)
  console.log(`Collateralisation ratio: ${basket.collateralisationRatio.toString()}`)
  console.log(`Max Bassets: ${basket.maxBassets.toString()}`)
  console.log(`Undergoing Recollateralisation: ${basket.undergoingRecol}`)
  console.log(`Failed: ${basket.failed}`)
  console.log(`Number of Base Assets: ${basket.bassets.length}`)
})

module.exports = {}