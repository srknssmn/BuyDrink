import { DONATE_ADDRESS } from "/constants/address.js";
import { DONATE_ABI } from "/constants/abi.js";

let donorsSectionSepolia = document.querySelector('#donorsSectionSepolia')

export const sepoliaBuyersArray = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await new ethers.Contract(DONATE_ADDRESS, DONATE_ABI, signer);
    
    const buyersArray = await contract?.showDonorsArray();

    let newbuyersArray = await [...buyersArray]
    let sortedBuyersArray = await newbuyersArray.sort((a, b) => ethers.utils.formatEther(b.value) - ethers.utils.formatEther(a.value));

    await console.log(sortedBuyersArray)

    for (let i = 1 ; i < sortedBuyersArray.length ; i++ ) {
        if (i < 3) {

            const div =  document.createElement("div");
            div.setAttribute("align", "left");
            const h5 =  document.createElement("h6");
            const h5firstspan =  document.createElement("span");
            h5firstspan.innerHTML = `${i+1}: `
            h5.appendChild(h5firstspan);
            const h5span1 =  document.createElement("span");
            let first = sortedBuyersArray[i].donor.slice(0, 4)
            let last = sortedBuyersArray[i].donor.slice(-4)
            h5span1.innerHTML = first + "..." + last;
            h5.appendChild(h5span1);
            const h5span =  document.createElement("span");
            h5span.innerHTML = " - "
            h5.appendChild(h5span);
            const h5span2 =  document.createElement("span");
            h5span2.innerHTML = ethers.utils.formatEther(sortedBuyersArray[i].value);
            h5span2.style.fontWeight = "700";
            h5.appendChild(h5span2);
            const h5span3 =  document.createElement("span");
            h5span3.innerHTML = " ETH"
            h5.appendChild(h5span3);
            div.appendChild(h5);
            donorsSectionSepolia.appendChild(div);
            console.log(ethers.utils.formatEther(sortedBuyersArray[i].value))
        }
    }
};