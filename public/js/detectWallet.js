window.onload = (event) => {
    isConnected();
};

let connectWalletButton = document.querySelector('#connectWallet')
let donateSection = document.querySelector('#donateSection')
let donorsSection = document.querySelector('#donorsSection')
let connectSection = document.querySelector('#connectSection')

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
    } else {
        console.log("Metamask is not connected");
        donateSection.hidden = await true;
        donorsSection.hidden = await true;
        connectSection.hidden = await false;
    }
}