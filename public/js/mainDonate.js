import {connectWalletfunc} from "/js/connectWallet.js";
import {verifyNetwork} from "/js/verifyNetwork.js";
import {donateSepoliaFunc} from "/js/donateSepolia.js";
import {donateScrollFunc} from "/js/donateScrollTestnet.js";

document.querySelector("#donateButton").addEventListener('click' , checkDonatefunc)

async function checkDonatefunc(event) {

    event.preventDefault()
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        const ethereumId  = await '0x1';
        const arbitrumID = await '0xa4b1';
        const optimismID = await '0xa';
        const baseID = await '0x2105';
        const lineaID = await '0xe708';
        const scrollID = await '0x82750';
        const mantaID = await '0xa9';
        const dymensionRollupID = await '0x8A9E57';
        const sepoliaTestChainId  = await '0xaa36a7';
        const scrollSepoliaTestChainId  = await '0x8274f';
        const chainId = await window.ethereum.request({
            method: 'eth_chainId',
        });

        if (chainId === sepoliaTestChainId){
            await console.log("Sepolia Network")
            donateSepoliaFunc();
        } else if (chainId === scrollSepoliaTestChainId) {
            await console.log("Scroll Sepolia Network")
            donateScrollFunc();
        } else {
            window.alert("Change your network!")
        }

    } else {
        connectWalletfunc();
    }
};