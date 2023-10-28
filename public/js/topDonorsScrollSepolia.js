import { DONATESCROLL_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donorWalletScroll1 = document.querySelector('#donorWalletScroll1');
let topDonateValueScroll1 = document.querySelector('#topDonateValueScroll1');
let donorWalletScroll2 = document.querySelector('#donorWalletScroll2');
let topDonateValueScroll2 = document.querySelector('#topDonateValueScroll2');
let donorWalletScroll3 = document.querySelector('#donorWalletScroll3');
let topDonateValueScroll3 = document.querySelector('#topDonateValueScroll3');

export const topDonorsScrollSepolia = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DONATESCROLL_ADDRESS, DONATE_ABI, signer);
    
    const topDonates = await contract.showTopDonates();

    const donor1 = await topDonates.top1;
    const donor1Donate = await ethers.utils.formatEther(topDonates.donate1)
    let firstDonor1 = await donor1.slice(0, 4)
    let lastDonor1 = await donor1.slice(-4)
    donorWalletScroll1.innerHTML = await firstDonor1 + "..." + lastDonor1
    topDonateValueScroll1.innerHTML = await donor1Donate
    
    const donor2 = await topDonates.top2;
    const donor2Donate = await ethers.utils.formatEther(topDonates.donate2)
    let firstDonor2 = await donor2.slice(0, 4)
    let lastDonor2 = await donor2.slice(-4)
    donorWalletScroll2.innerHTML = await firstDonor2 + "..." + lastDonor2
    topDonateValueScroll2.innerHTML = await donor2Donate

    const donor3 = await topDonates.top3;
    const donor3Donate = await ethers.utils.formatEther(topDonates.donate3)
    let firstDonor3 = await donor3.slice(0, 4)
    let lastDonor3 = await donor3.slice(-4)
    donorWalletScroll3.innerHTML = await firstDonor3 + "..." + lastDonor3
    topDonateValueScroll3.innerHTML = await donor3Donate

};