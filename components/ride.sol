// SPDX-License-Identifier: MIT
// Generated with Spectral Syntax

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RideSharing {
    struct Ride {
        address rider;
        address driver;
        uint256 startTime;
        uint256 endTime;
        uint256 amountPaid;
    }

    mapping(address => Ride) public rides;

    event RideBooked(address indexed rider, address indexed driver, uint256 startTime, uint256 endTime);
    event RideCompleted(address indexed rider, address indexed driver, uint256 amountPaid);

    function bookRide(address _driver, uint256 _startTime, uint256 _endTime) public {
        require(rides[msg.sender].rider == address(0), "Rider already exists");
        rides[msg.sender].rider = msg.sender;
        rides[msg.sender].driver = _driver;
        rides[msg.sender].startTime = _startTime;
        rides[msg.sender].endTime = _endTime;
        emit RideBooked(msg.sender, _driver, _startTime, _endTime);
    }

    function completeRide(uint256 _amountPaid) public {
        require(rides[msg.sender].driver != address(0), "No active ride");
        require(rides[msg.sender].endTime < block.timestamp, "Ride not yet completed");
        rides[msg.sender].driver = address(0);
        rides[msg.sender].amountPaid = _amountPaid;
        payable(rides[msg.sender].driver).transfer(_amountPaid);
        emit RideCompleted(msg.sender, rides[msg.sender].driver, _amountPaid);
    }
}