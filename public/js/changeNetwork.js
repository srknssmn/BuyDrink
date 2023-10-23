import {connectWalletfunc} from "/js/connectWallet.js";
const networkChangeForm = document.querySelector('#networkChange')

networkChangeForm.addEventListener('click', denemFunc)

async function denemFunc(event) {

    const accounts = await ethereum.request({method: 'eth_accounts'});

    if (accounts.length) {
        if (event.target.dataset.name === "arbitrum") {
            console.log("arbitrum Clicked")
            const arbitrumID = await '0xa4b1';
            try {
    
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId',
                });
                
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: arbitrumID}],
                });
                console.log("You have succefully switched to Arbitrum")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0xa4b1', 
                            chainName:'Arbitrum One',
                            rpcUrls:['https://arb1.arbitrum.io/rpc'],
                            nativeCurrency: {
                            symbol:'ETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "optimism") {
            console.log("optimism Clicked")
            const optimismID = await '0xa';
            try {
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId',
                });
                
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: optimismID}],
                });
                console.log("You have succefully switched to Optimism Mainnet")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0xa', 
                            chainName:'Optimism',
                            rpcUrls:['https://mainnet.optimism.io'],
                            nativeCurrency: {
                            symbol:'ETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "base") {
            console.log("base Clicked")
            const baseID = await '0x2105';
            try {
    
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId',
                });
                
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: baseID}],
                });
                console.log("You have succefully switched to Base Mainnet")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0x2105', 
                            chainName:'Base Mainnet',
                            rpcUrls:['https://mainnet.base.org'],
                            nativeCurrency: {
                            symbol:'ETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "linea") {
            console.log("Linea Clicked")
            const lineaID = await '0xe708';
            try {
    
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId',
                });
                
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: lineaID}],
                });
                console.log("You have succefully switched to Linea Mainnet")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0xe708', 
                            chainName:'Linea Mainnet',
                            rpcUrls:['https://1rpc.io/linea'],
                            nativeCurrency: {
                            symbol:'ETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "scroll") {
            console.log("scroll Clicked")
            const scrollID = await '0x82750';
            try {
    
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId',
                });
                
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: scrollID}],
                });
                console.log("You have succefully switched to Scroll Mainnet")
                await location.reload();
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
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "manta") {
            console.log("manta Clicked")
            const mantaID = await '0xa9';
            try {
    
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId',
                });
                
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: mantaID}],
                });
                console.log("You have succefully switched to Manta Pacific")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0xa9', 
                            chainName:'Manta Pacific Mainnet',
                            rpcUrls:['https://pacific-rpc.manta.network/http'],
                            nativeCurrency: {
                            symbol:'ETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "dymension") {
            console.log("dymension Clicked")
            const dymensionRollupID = await '0x8A9E57';
            try {
            
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: dymensionRollupID}],
                });
                console.log("You have succefully switched to Coinhunters Dymension Rollup")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0x8A9E57', 
                            chainName:'Coinhunterstrrollapp',
                            rpcUrls:['https://froopyland.dymension.xyz/7/coinhunterstrrollapp_9084503-1/evmrpc'],
                            nativeCurrency: {
                            symbol:'coin', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "sepolia") {
            console.log("sepolia Clicked")
            const sepoliaTestChainId  = await '0xaa36a7';
            try {
            
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: sepoliaTestChainId }],
                });
                console.log("You have succefully switched to Sepolia Testnet")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0xaa36a7', 
                            chainName:'Sepolia Testnet',
                            rpcUrls:['https://sepolia.etherscan.io'],
                            nativeCurrency: {
                            symbol:'SepoliaETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "scrollsepolia") {
            console.log("scroll sepolia Clicked")
            const scrollSepoliaTestChainId  = await '0x8274f';
            try {
            
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: scrollSepoliaTestChainId }],
                });
                console.log("You have succefully switched to Scroll Sepolia Testnet")
                await location.reload();
            } catch (switchError) {
                
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    console.log("This network is not available in your metamask, please add it")
    
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                            { chainId: '0x8274f', 
                            chainName:'Scroll Sepolia',
                            rpcUrls:['https://sepolia-rpc.scroll.io'],
                            nativeCurrency: {
                            symbol:'ETH', // 2-6 characters long
                        decimals: 18
                        }
                            
                            }],
                        });
                        await location.reload();
                        } catch (addError) {
                            // handle "add" error
                            console.log(addError);
                        }
                }
            }
        } else if (event.target.dataset.name === "ethereum") {
            console.log("etherum Clicked")
            const ethereumId  = await '0x1';
            try {
            
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: ethereumId }],
                });
                console.log("You have succefully switched to Ethereum Mainnet")
                await location.reload();
            } catch (error) {
               console.log(error)
            }
        }
    } else {
        connectWalletfunc();
    }



}