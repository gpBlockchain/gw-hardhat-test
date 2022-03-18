const { expect } = require("chai");
const { ethers, web3 } = require("hardhat");


describe("typeU8 ", function () {

    let contract;

    beforeEach(async function () {
        const blockInfoContract = await ethers.getContractFactory("typeU8");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("address:",contract.address);
        await contract.deployed();
    });

    it("typeU8 max ", async () => {
        // check if chain id from web3 is same as chainId opcode
        contract.on("U8eventIndex",(u8,u8s,uint8s3) => {
            // Emitted on every block change
            console.log("---event---begin --")
            console.log("u8",u8);
            console.log("u8s",u8s);
            console.log("uint8s3",uint8s3);
            console.log("---event---end--")
        })
        contract.on("U8event",(u8,u8s,uint8s3) => {
            // Emitted on every block change
            console.log("---event---begin --")
            console.log("u8",u8);
            console.log("u8s",u8s);
            console.log("uint8s3",uint8s3);
            console.log("---event---end--")
        })
        let tx = await contract.typeUint8(255,[255,255,255],[255,255,255]);
        console.log("typeUint8 hash :",tx.hash);
        await tx.wait();
        let reusltGetUint8 = await contract.getUint8();
        expect(reusltGetUint8.toString()).to.be.equal('255,255,255,255,255,255,255')

    })


});

describe("typeInt8 ", function () {

    let contract;

    beforeEach(async function () {
        const blockInfoContract = await ethers.getContractFactory("typeInt8");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("address:",contract.address);
        await contract.deployed();
    });

    it("typeInt8 max ", async () => {
        let tx = await contract.typeUint8(255,[255,255,255],[255,255,255]);
        console.log("typeUint8 hash :",tx.hash);
        await tx.wait();
        let reusltGetUint8 = await contract.getUint8();
        expect(reusltGetUint8.toString()).to.be.equal('255,255,255,255,255,255,255')

    })


});