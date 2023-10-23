import { DONATESCROLL_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donorWalletScroll = document.querySelector('#donorWalletScroll');
let topDonateValueScroll = document.querySelector('#topDonateValueScroll');

export const topDonateAndDonorScroll = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DONATESCROLL_ADDRESS, DONATE_ABI, signer);
    
    const topDonate = await contract.topDonate();
    const topDonateSet = await ethers.utils.formatEther(topDonate)
    const topDonor = await contract.topDonor();

    let first = topDonor.slice(0, 4)
    let last = topDonor.slice(-4)
    donorWalletScroll.innerHTML = await first + "..." + last
    topDonateValueScroll.innerHTML = await topDonateSet;
};