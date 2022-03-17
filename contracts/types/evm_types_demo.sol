pragma solidity ^0.8.4;

contract typeU8{

    uint8 public u8;
    uint8[] public u8s;
    uint8[3] public uint8s3;
    event U8event(uint8,uint8[],uint8[3]);
    event U8eventIndex(uint8 indexed,uint8[] indexed ,uint8[3] indexed);

    function typeUint8(uint8 p1, uint8[] memory p2, uint8[3] memory p3) public returns (uint8, uint8[] memory ,  uint8[3] memory){
        emit U8event(u8,u8s,uint8s3);
        emit U8eventIndex(u8,u8s,uint8s3);
        u8 = p1;
        u8s = p2;
        uint8s3 = p3;
        return getUint8WithEvent();
    }
    function getUint8WithEvent() public  returns (uint8, uint8[] memory ,  uint8[3] memory){
        emit U8event(u8,u8s,uint8s3);
        emit U8eventIndex(u8,u8s,uint8s3);
        return (u8, u8s, uint8s3);
    }

    function getUint8() public  view returns (uint8, uint8[] memory ,  uint8[3] memory){
//        emit U8event(u8,u8s,uint8s3);
//        emit U8eventIndex(u8,u8s,uint8s3);
        return (u8, u8s, uint8s3);
    }

}