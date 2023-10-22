import { DONATE_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";
import {connectWalletfunc} from "/js/connectWallet.js";
import {verifyNetwork} from "/js/verifyNetwork.js";


let message = document.querySelector('#message')

export const donateSepoliaFunc = async () => {

    
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        await verifyNetwork();

        let donateSelect = await document.querySelector('#donateSelect')
        const donateSelectValue = await donateSelect.value
        
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(DONATE_ADDRESS, DONATE_ABI, signer);

        const newMessage = await message.value;
        await console.log(newMessage)
    
        if (donateSelectValue == 1) {
            const txn = await contract.sentETH1(newMessage, { value: ethers.utils.parseEther("0.0001") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 2) {
            const txn = await contract.sentETH2(newMessage, { value: ethers.utils.parseEther("0.001") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 3) {
            const txn = await contract.sentETH3(newMessage, { value: ethers.utils.parseEther("0.002") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 4) {
            const txn = await contract.sentETH4(newMessage, { value: ethers.utils.parseEther("0.003") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 5) {
            const txn = await contract.sentETH5(newMessage, { value: ethers.utils.parseEther("0.005") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 6) {
            const txn = await contract.sentETH6(newMessage, { value: ethers.utils.parseEther("0.01") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 7) {
            const txn = await contract.sentETH7(newMessage, { value: ethers.utils.parseEther("0.1") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        } else if (donateSelectValue == 8) {
            const txn = await contract.sentETH8(newMessage, { value: ethers.utils.parseEther("1") });
            await txn.wait();
            await console.log("success")
            await location.reload();
        }
    } else {
        connectWalletfunc();
    }

}