const Dai = artifacts.require("Dai");
const PaymentProcessor = artifacts.require("PaymentProcessor");


module.exports = async function (deployer, network, adresses) {
const [admin, payer, _] = adresses;

if(network === "develop"){
    await deployer.deploy(Dai);
    const dai = await Dai.deployed();

    await dai.faucet(payer, web3.utils.toWei('10000'))
    await deployer.deploy(PaymentProcessor, admin, dai.address)
} else{
    const ADMIN_ADDRESS = '';
    const DAI_ADDRESS = '';
    await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, DAI_ADDRESS)
}

   
};
