export const verifyNetwork = async () => {

    let currentNetwork = document.querySelector('#currentNetwork')
    
    const ethereumId  = await '0x1';
    const arbitrumID = await '0xa4b1';
    const optimismID = await '0xa';
    const baseID = await '0x2105';
    const lineaID = await '0xe708';
    const scrollID = await '0x82750';
    const mantaID = await '0xa9';
    const dymensionRollupID = await '0x8A9E57';
    const sepoliaTestChainId  = await '0xaa36a7';
    const chainId = await window.ethereum.request({
        method: 'eth_chainId',
    });
    
    if (chainId === ethereumId || chainId === arbitrumID || chainId === optimismID || chainId === baseID || chainId === lineaID
        || chainId === scrollID || chainId === mantaID || chainId === dymensionRollupID || chainId === sepoliaTestChainId
        ){
        console.log("Bravo!, you are on the correct network")
    } else {
        await console.log("oulalal, switch to the correct network");
        
        try {
        
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: scrollID}],
            });
            console.log("You have succefully switched to Scroll Mainnet")
        
        } catch (switchError) {
                
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                console.log("This network is not available in your metamask, please add it")

                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                        { chainId: '0x82750', 
                        chainName:'Scroll',
                        rpcUrls:['https://rpc.scroll.io'],
                        nativeCurrency: {
                        symbol:'ETH', // 2-6 characters long
                    decimals: 18
                    }
                        
                        }],
                    });
                    } catch (addError) {
                        // handle "add" error
                        console.log(addError);
                    }
            }
        }
    }
};