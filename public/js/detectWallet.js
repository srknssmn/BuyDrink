import {topDonateAndDonorSepolia} from "/js/topDonateSepolia.js";
import {sepoliaDonatesArray} from "/js/donatesSepolia.js";
import {sepoliaBuyersArray} from "/js/topBuyersSepolia.js";
import {topDonateAndDonorScroll} from "/js/topDonateScrollSepolia.js";
import {scrollSepoliaDonatesArray} from "/js/donatesScrollSepolia.js";
import {scrollSepoliaBuyersArray} from "/js/topBuyersScrollSepolia.js";

window.onload = (event) => {
    isConnected();
};

let connectWalletButton = document.querySelector('#connectWallet')
let connectSection = document.querySelector('#connectSection')

let donateSection = document.querySelector('#donateSection')
let donorsSection = document.querySelector('#donorsSection')
let donorsSectionFree = document.querySelector('#donorsSectionFree')
let donorsSectionSepolia = document.querySelector('#donorsSectionSepolia')
let donorsSectionScroll = document.querySelector('#donorsSectionScroll')
let donatesSectionFree = document.querySelector('#donatesSectionFree')
let donatesSectionSepolia = document.querySelector('#donatesSectionSepolia')
let donatesSectionScroll = document.querySelector('#donatesSectionScroll')

async function isConnected() {
    const accounts = await ethereum.request({method: 'eth_accounts'});       
    if (accounts.length) {
        await console.log(`You're connected to: ${accounts[0]}`);
        let userWallet = await accounts[0]
        connectWalletButton.disabled = await true;
        let first = await userWallet.slice(0, 5)
        let last = await userWallet.slice(-5)
        connectWalletButton.innerHTML = await first + "..." + last
        donateSection.hidden = await false;
        donorsSection.hidden = await false;
        connectSection.hidden = await true;

        const sepoliaTestChainId  = await '0xaa36a7';
        const scrollSepoliaTestChainId  = await '0x8274f';
        const chainId = await window.ethereum.request({
            method: 'eth_chainId',
        });
        if (chainId === sepoliaTestChainId) {
            console.log("Sepolia")
            donorsSectionFree.hidden = await true;
            donatesSectionFree.hidden = await true;

            donatesSectionSepolia.hidden = await false;
            donorsSectionSepolia.hidden = await false;
            await topDonateAndDonorSepolia();
            await sepoliaDonatesArray();
            await sepoliaBuyersArray();
        } else if (chainId === scrollSepoliaTestChainId) {
            console.log("Scroll Sepolia")
            donorsSectionFree.hidden = await true;
            donatesSectionFree.hidden = await true;

            donatesSectionScroll.hidden = await false;
            donorsSectionScroll.hidden = await false;
            await topDonateAndDonorScroll();
            await scrollSepoliaDonatesArray();
            await scrollSepoliaBuyersArray();
        }
        
    } else {
        console.log("Metamask is not connected");
        donateSection.hidden = await true;
        donorsSection.hidden = await true;
        connectSection.hidden = await false;

    }
}