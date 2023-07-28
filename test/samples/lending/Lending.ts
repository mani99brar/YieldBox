import chai, { assert, expect } from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  LendingPair,
  LendingPair__factory,
  YieldBox,
  YieldBox__factory,
  YieldBoxURIBuilder__factory,
  WETH9Mock__factory,
  IOracle__factory,
  IOracle,
  OracleMock__factory
} from "../../../typechain-types";

chai.use(solidity);

describe("Lending", () => {
  let deployer: SignerWithAddress,
    alice: SignerWithAddress,
    bob: SignerWithAddress,
    carol: SignerWithAddress;
  let Deployer: string,
    Alice: string,
    Bob: string,
    Carol: string;
  const Zero = ethers.constants.AddressZero;
  let lender: LendingPair;
  let yieldBox: YieldBox;

  beforeEach(async () => {
    // Get the signers
    ({ deployer, alice, bob, carol } = await ethers.getNamedSigners());
    Deployer = deployer.address;
    Alice = alice.address;
    Bob = bob.address;
    Carol = carol.address;

    // Deploy the WETH9Mock and YieldBoxURIBuilder
    const weth = await new WETH9Mock__factory(deployer).deploy();
    await weth.deployed();
    const uriBuilder = await new YieldBoxURIBuilder__factory(deployer).deploy();
    await uriBuilder.deployed();

    // Deploy the YieldBox contract
    yieldBox = await new YieldBox__factory(deployer).deploy(weth.address, uriBuilder.address);
    await yieldBox.deployed();

    // Deploy the LendingPair contract with the deployed YieldBox address
    lender = await new LendingPair__factory(deployer).deploy(yieldBox.address);
    await lender.deployed();
  });

  
  // Add more test cases here...

});
