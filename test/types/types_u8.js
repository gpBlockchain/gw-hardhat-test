const { expect } = require("chai");
const { ethers, web3 } = require("hardhat");

describe("typeU8 ", function () {

    let contract;

    before(async function () {

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
            console.log("---event---end--");

        })

        let tx = await contract.typeUint8(255,[255,255,255],[255,255,255]);
        console.log("typeUint8 hash :",tx.hash);
        let reusltGetUint8 = contract.getUint8();
        expect(reusltGetUint8.toString()).to.be.equal('255,255,255,255,255,255,255')

    })

    it("typeU8 beyond 255 ", async () => {
        try {

        let tx = await contract.typeUint8(256,[256,256,256],[256,256,256]);
        console.log("typeUint8 hash :",tx.hash);
        await tx.wait();
        let reusltGetUint8 = await contract.getUint8();
        expect(reusltGetUint8.toString()).to.throw(Error)

        } catch (error) {

        }
    })

    it("typeU8 min ", async () => {
        let tx = await contract.typeUint8(0,[0,0,0],[0,0,0]);
        console.log("typeUint8 hash :",tx.hash);
        await tx.wait();
        let reusltGetUint8 = await contract.getUint8();
        expect(reusltGetUint8.toString()).to.be.equal('0,0,0,0,0,0,0')
    })
});

describe("typeI8 ", function () {

    let contract;

        before(async function () {

            const blockInfoContract = await ethers.getContractFactory("typeI8");
            contract = await blockInfoContract.deploy();
            console.log("deployTransaction:",contract.deployTransaction.hash);
            console.log("address:",contract.address);
            await contract.deployed();

        });

        it("typeI8 max 127 ", async () => {

            let tx = await contract.typeInt8(127,[127,127,127],[127,127,127]);
            console.log("typeI8 hash :",tx.hash);
            await tx.wait();
            let reusltGetInt8 = await contract.getInt8();
            expect(reusltGetInt8.toString()).to.be.equal('127,127,127,127,127,127,127');

        })

        it("typeI8 max beyond 127 ", async () => {
            try {

                let tx = await contract.typeInt8(128,[128,128,128],[128,128,128]);
                console.log("typeI8 hash :",tx.hash);
                await tx.wait();
                let reusltGetInt8 = await contract.getInt8();
                expect(reusltGetInt8.toString()).to.throw(Error);

            } catch (error) {

            }
        })
    });


describe("typeBool", function (){

    let contract;

    before(async function () {

        const blockInfoContract = await ethers.getContractFactory("typeBool");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("address:",contract.address);
        await contract.deployed();

    });

    it("typeBool1", async () => {

        let a = await contract.getBoolA()
        expect(a).to.be.true;
    })

    it("typeBool2", async () => {

        let b = await contract.getBoolB();
        expect(b).to.be.true;
    })

    it("typeBool3", async () => {

        let c = await contract.getOrBool();
        expect(c).to.be.true;
    })

    it("typeBool4", async () => {

        let c = await contract.getAndBool();
        expect(c).to.be.false;
    })

    it("typeBool5", async () => {

        let c = await contract.getBoolC();
        expect(c).to.be.false;

    })

});

describe("typeAddress", function (){

    let contract;

    before(async function () {
        console.log("Start to test:");
    });

    let account1 = "0x2710D026F5e3d115A8bfD1e705E4BF8D96750211";

    // it("transfer eth ",async ()=>{
    //      let sings = await ethers.getSigners();
    //     await sings[0].sendTransaction({
    //        to: account1,
    //        value: ethers.utils.parseEther("1") // 1 ether
    //  });
    //   console.log("acc1 balance:",);
    //    ethers.provider.getBalance(account1).then((balance)=>{
    //         console.log("balance:",balance);
    //   });
    // });

    it("typeAddress get addr1 balance:", async () => {
        const blockInfoContract = await ethers.getContractFactory("typeAddress");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("address:",contract.address);
        await contract.deployed();
        let tx = await contract.getBalanceBb();
        console.log("The addr1 balance is:",tx);
        expect(tx.toString()).to.equal("40000000000")
    });

    it("typeAddress get contract balance:", async () => {

        let tx = await contract.getContractBalance();
        console.log("The contract balance is:",tx);
        //expect(tx.toString()).to.equal(0)
    })
});

describe("typeBytes", function (){

    let contract;



    before(async function () {

        const blockInfoContract = await ethers.getContractFactory("typeBytes");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("adress:",contract.address);
        await contract.deployed();

    });

    it("typeBytes:", async () => {

        let bytes1Length = await contract.getbBytes1Length();
        console.log("The Bytes min length is :",bytes1Length);
        expect(bytes1Length).to.equal(1)

    })

    it("typeBytes:", async () => {

        let bytes2Length = await contract.getbBytes2Length();
        console.log("The Bytes max length is :",bytes2Length);
        expect(bytes2Length).to.equal(32)

    })

    it("typeBytes:", async () => {

        let bytes3Length = await contract.testBytesMaxLength("cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
        console.log("The Bytes max length is :",bytes3Length);
        expect(bytes3Length).to.equal(32)

    })

    it("typeBytes:", async () => {

        let unFixedBytesLength = await contract.unFixedBytesLength();
        console.log("The Bytes length is :",unFixedBytesLength);
        expect(unFixedBytesLength).to.equal(2)

    })

});


describe("typeString", function (){

    let contract;

    before(async function () {

        const blockInfoContract = await ethers.getContractFactory("typeString");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("adress:",contract.address);
        await contract.deployed();

    });

    it("typeString:", async () => {

        let stringLength = await contract.getLength();
        console.log("The string length is :",stringLength);
        expect(stringLength).to.equal(9)

    })

    it("typeString:", async () => {

        await contract.changName();
        console.log("The new string  is :", contract.getName());
        expect(contract.getName()).to.equal("Zrptotest")

    })

});


describe("typeEmum", function (){

    let contract;

    before(async function () {

        const blockInfoContract = await ethers.getContractFactory("typeEmum");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("adress:",contract.address);
        await contract.deployed();

    });

    it("typeEmum:", async () => {

        contract.setGoStraight();
        let printSeason = await contract.getChoice();
        console.log(printSeason);
        //expect(stringLength).to.equal(9)
        let printSeason2 = await contract.getDefaultChoice();
        console.log(printSeason2);

    })

});


describe("typeFixedArray", function (){

    let contract;

    before(async function () {

        const blockInfoContract = await ethers.getContractFactory("typeFixedArray");
        contract = await blockInfoContract.deploy();
        console.log("deployTransaction:",contract.deployTransaction.hash);
        console.log("adress:",contract.address);
        await contract.deployed();

    });

    it("typeFixedArray:", async () => {

        let sum = await  contract.sum();
        console.log(sum);
        expect(sum).to.equal(15)
    })

});


