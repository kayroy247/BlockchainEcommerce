pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
    constructor() public ERC20("Dai Stablecoin", "DAI") {}

    function faucet(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
