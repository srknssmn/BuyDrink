import { DONATEMANTA_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donorWalletManta1 = document.querySelector('#donorWalletManta1');
let topDonateValueManta1 = document.querySelector('#topDonateValueManta1');
let donorWalletManta2 = document.querySelector('#donorWalletManta2');
let topDonateValueManta2 = document.querySelector('#topDonateValueManta2');
let donorWalletManta3 = document.querySelector('#donorWalletManta3');
let topDonateValueManta3 = document.querySelector('#topDonateValueManta3');

export const topDonorsManta = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(DONATEMANTA_ADDRESS, DONATE_ABI, signer);
    
    const topDonates = await contract.showTopDonates();

    const donor1 = await topDonates.top1;
    const donor1Donate = await ethers.utils.formatEther(topDonates.donate1)
    let firstDonor1 = await donor1.slice(0, 4)
    let lastDonor1 = await donor1.slice(-4)
    donorWalletManta1.innerHTML = await firstDonor1 + "..." + lastDonor1
    topDonateValueManta1.innerHTML = await donor1Donate
    
    const donor2 = await topDonates.top2;
    const donor2Donate = await ethers.utils.formatEther(topDonates.donate2)
    let firstDonor2 = await donor2.slice(0, 4)
    let lastDonor2 = await donor2.slice(-4)
    donorWalletManta2.innerHTML = await firstDonor2 + "..." + lastDonor2
    topDonateValueManta2.innerHTML = await donor2Donate

    const donor3 = await topDonates.top3;
    const donor3Donate = await ethers.utils.formatEther(topDonates.donate3)
    let firstDonor3 = await donor3.slice(0, 4)
    let lastDonor3 = await donor3.slice(-4)
    donorWalletManta3.innerHTML = await firstDonor3 + "..." + lastDonor3
    topDonateValueManta3.innerHTML = await donor3Donate

};