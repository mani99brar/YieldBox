// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./IOracle.sol";

contract OracleMock is IOracle {
    // Implement the get function to return predefined values
    function get(bytes calldata data) external override returns (bool success, uint256 rate) {
        // Implement the logic to return the desired rate
        // For testing purposes, you can hardcode the values or use predefined values
        // Example:
        // return (true, 100); // Return success and rate as 100
    }

    // Implement the peek function to return predefined values
    function peek(bytes calldata data) external view override returns (bool success, uint256 rate) {
        // Similar to the get function, return predefined values for testing
    }

    // Implement the peekSpot function to return predefined values
    function peekSpot(bytes calldata data) external view override returns (uint256 rate) {
        // Similar to the get function, return predefined values for testing
    }

    // Implement the symbol function to return a predefined symbol
    function symbol(bytes calldata data) external view override returns (string memory) {
        // Return a predefined symbol for testing
    }

    // Implement the name function to return a predefined name
    function name(bytes calldata data) external view override returns (string memory) {
        // Return a predefined name for testing
    }
}
