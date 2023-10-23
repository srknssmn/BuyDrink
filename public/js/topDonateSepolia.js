import { DONATE_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donorWalletSepolia = document.querySelector('#donorWalletSepolia');
let topDonateValueSepolia = document.querySelector('#topDonateValueSepolia');

export const topDonateAndDonorSepolia = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DONATE_ADDRESS, DONATE_ABI, signer);
    
    const topDonate = await contract.topDonate();
    const topDonateSet = await ethers.utils.formatEther(topDonate)
    const topDonor = await contract.topDonor();

    let first = topDonor.slice(0, 4)
    let last = topDonor.slice(-4)
    donorWalletSepolia.innerHTML = await first + "..." + last
    topDonateValueSepolia.innerHTML = await topDonateSet;

    await console.log(topDonateValue)
    await console.log(topDonor)
};