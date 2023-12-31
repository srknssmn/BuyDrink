import { DONATESCROLL_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";
import {connectWalletfunc} from "/js/connectWallet.js";
import {verifyNetwork} from "/js/verifyNetwork.js";
import {confettiFunc} from "/js/confetti.js"

let message = document.querySelector('#message')

let modalButtonOpen = document.querySelector('#modalButtonOpen')
let modalButtonClose = document.querySelector('#modalButtonClose')
let modal2ButtonOpen = document.querySelector('#modal2ButtonOpen')

export const donateScrollFunc = async () => {

    
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        // await verifyNetwork();

        let donateSelect = await document.querySelector('#donateSelect')
        const donateSelectValue = await donateSelect.value
        
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(DONATESCROLL_ADDRESS, DONATE_ABI, signer);

        const newMessage = await message.value;
        let value_;
    
        if (donateSelectValue == 1) {
            value_ = await ethers.utils.parseEther("0.0001")
        } else if (donateSelectValue == 2) {
            value_ = await ethers.utils.parseEther("0.001")
        } else if (donateSelectValue == 3) {
            value_ = await ethers.utils.parseEther("0.002")
        } else if (donateSelectValue == 4) {
            value_ = await ethers.utils.parseEther("0.003")
        } else if (donateSelectValue == 5) {
            value_ = await ethers.utils.parseEther("0.005")
        } else if (donateSelectValue == 6) {
            value_ = await ethers.utils.parseEther("0.01")
        } else if (donateSelectValue == 7) {
            value_ = await ethers.utils.parseEther("0.1")

        } else if (donateSelectValue == 8) {
            value_ = await ethers.utils.parseEther("1")
        }

        try {
            const txn = await contract.sentETH(newMessage, { value: value_ });
            await confettiFunc();
            setTimeout(() => {
                modalButtonOpen.click();
            }, 2000);
            await txn.wait();
            await modalButtonClose.click();
            await console.log("success")
            await location.reload();
        } catch (error) {
            if (error.data.code === -32000) {
                await modal2ButtonOpen.click();
            }
            if (error.data.code === 3) {
                await window.alert("Message is too long!")
            }
        }
    } else {
        connectWalletfunc();
    }

}