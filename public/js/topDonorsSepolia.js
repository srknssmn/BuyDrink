import { DONATE_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donorWalletSepolia1 = document.querySelector('#donorWalletSepolia1');
let topDonateValueSepolia1 = document.querySelector('#topDonateValueSepolia1');
let donorWalletSepolia2 = document.querySelector('#donorWalletSepolia2');
let topDonateValueSepolia2 = document.querySelector('#topDonateValueSepolia2');
let donorWalletSepolia3 = document.querySelector('#donorWalletSepolia3');
let topDonateValueSepolia3 = document.querySelector('#topDonateValueSepolia3');

export const topDonorsSepolia = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DONATE_ADDRESS, DONATE_ABI, signer);
    
    const topDonates = await contract.showTopDonates();

    const donor1 = await topDonates.top1;
    const donor1Donate = await ethers.utils.formatEther(topDonates.donate1)
    let firstDonor1 = await donor1.slice(0, 4)
    let lastDonor1 = await donor1.slice(-4)
    donorWalletSepolia1.innerHTML = await firstDonor1 + "..." + lastDonor1
    topDonateValueSepolia1.innerHTML = await donor1Donate
    
    const donor2 = await topDonates.top2;
    const donor2Donate = await ethers.utils.formatEther(topDonates.donate2)
    let firstDonor2 = await donor2.slice(0, 4)
    let lastDonor2 = await donor2.slice(-4)
    donorWalletSepolia2.innerHTML = await firstDonor2 + "..." + lastDonor2
    topDonateValueSepolia2.innerHTML = await donor2Donate

    const donor3 = await topDonates.top3;
    const donor3Donate = await ethers.utils.formatEther(topDonates.donate3)
    let firstDonor3 = await donor3.slice(0, 4)
    let lastDonor3 = await donor3.slice(-4)
    donorWalletSepolia3.innerHTML = await firstDonor3 + "..." + lastDonor3
    topDonateValueSepolia3.innerHTML = await donor3Donate

};