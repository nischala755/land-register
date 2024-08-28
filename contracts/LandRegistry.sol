// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        string landID;
        address owner;
        uint value;
    }

    mapping(string => Land) public lands;

    function registerLand(string memory landID, uint value) public {
        require(lands[landID].owner == address(0), "Land already registered");
        lands[landID] = Land(landID, msg.sender, value);
    }

    function transferLand(string memory landID, address newOwner) public {
        require(lands[landID].owner == msg.sender, "Only the owner can transfer the land");
        lands[landID].owner = newOwner;
    }
}
