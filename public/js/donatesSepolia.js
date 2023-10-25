import { DONATE_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donatesSectionSepolia = document.querySelector('#donatesSectionSepolia')

export const sepoliaDonatesArray = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await new ethers.Contract(DONATE_ADDRESS, DONATE_ABI, signer);
    
    const donatesArray = await contract.showDonatesArray();

    let newdonatesArray = await [...donatesArray]
    let sorteddonatesArray = await newdonatesArray.sort((a, b) => (b.timestamp) - (a.timestamp));

    for (let i = 0 ; i < sorteddonatesArray.length ; i++ ) {
        if (i < 3) {

            const div =  document.createElement("div");
            div.classList.add("donateDiv" , "bg-body-secondary");
            const p1 =  document.createElement("p");
            p1.setAttribute("align", "left");
            const p1span1 =  document.createElement("span");
            p1span1.innerHTML = "Donate:  "
            p1span1.style.fontWeight = "900";
            const p1span2 =  document.createElement("span");
            p1span2.classList.add("text-danger");
            p1span2.style.fontSize = "larger";
            p1span2.style.fontWeight = "700";
            if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.0001) {
                p1span2.innerHTML = "WATER"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.001) {
                p1span2.innerHTML = "TEA"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.002) {
                p1span2.innerHTML = "COFFEE"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.003) {
                p1span2.innerHTML = "BEER"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.005) {
                p1span2.innerHTML = "COCKTAIL"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.01) {
                p1span2.innerHTML = "WHISKEY"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 0.1) {
                p1span2.innerHTML = "LION'S MILK"
            } else if (ethers.utils.formatEther(sorteddonatesArray[i].value) == 1) {
                p1span2.innerHTML = "DRAGON BLOOD"
            }
            p1.appendChild(p1span1);
            p1.appendChild(p1span2);
            div.appendChild(p1);

            const p2 =  document.createElement("p");
            p2.setAttribute("align", "left");
            p2.style.marginTop = "-0.8rem";
            const p2span1 =  document.createElement("span");
            p2span1.innerHTML = "Message:  "
            p2span1.style.fontWeight = "900";
            const p2span2 =  document.createElement("span");
            p2span2.innerHTML = sorteddonatesArray[i].message;
            p2.appendChild(p2span1);
            p2.appendChild(p2span2);
            div.appendChild(p2);

            const p3 =  document.createElement("p");
            p3.setAttribute("align", "left");
            p3.style.marginTop = "-0.8rem";
            p3.style.paddingBottom = "0.2rem";
            const p3span1 =  document.createElement("span");
            p3span1.innerHTML = "Wallet:  "
            p3span1.style.fontWeight = "900";
            const p3span2 =  document.createElement("span");
            let first = sorteddonatesArray[i].donater.slice(0, 4)
            let last = sorteddonatesArray[i].donater.slice(-4)
            p3span2.innerHTML = first + "..." + last;
            p3.appendChild(p3span1);
            p3.appendChild(p3span2);
            div.appendChild(p3);

            donatesSectionSepolia.appendChild(div);
        }
    }
};