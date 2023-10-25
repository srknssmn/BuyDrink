const donateButton = document.querySelector('#donateButton')
let donateCost = document.querySelector('#donateCost')
let donateSelect = document.querySelector('#donateSelect')
let selectElement = document.querySelector('#selectElement')
const buttonSelects = document.querySelectorAll('.buttonSelect');

buttonSelects.forEach(button => {
    button.addEventListener('click', () => {
      buttonSelects.forEach(button => button.classList.remove('active'));
      button.classList.add('active');
      if(button.classList.contains('active') && (button.getAttribute('id') == "thanks")) {
          donateCost.value = "0.0001 ETH"
          selectElement.innerHTML = "WATER"
          donateSelect.value = 1
          donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "tea")) {
        donateCost.value = "0.001 ETH"
        selectElement.innerHTML = "TEA"
        donateSelect.value = 2
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "coffee")) {
        donateCost.value = "0.002 ETH"
        selectElement.innerHTML = "COFFEE"
        donateSelect.value = 3
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "beer")) {
        donateCost.value = "0.003 ETH"
        selectElement.innerHTML = "BEER"
        donateSelect.value = 4
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "cocktail")) {
        donateCost.value = "0.005 ETH"
        selectElement.innerHTML = "COCKTAIL"
        donateSelect.value = 5
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "whiskey")) {
        donateCost.value = "0.010 ETH"
        selectElement.innerHTML = "WHISKEY"
        donateSelect.value = 6
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "lionmilk")) {
        donateCost.value = "0.10 ETH"
        selectElement.innerHTML = "LION'S MILK"
        donateSelect.value = 7
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "kimiz")) {
        donateCost.value = "1.0 ETH"
        selectElement.innerHTML = "DRAGON BLOOD"
        donateSelect.value = 8
        donateButton.disabled = false;
      }
    });
});

let message = document.querySelector('#message')
let messageSelect = document.querySelector('#messageSelect')

messageSelect.addEventListener('click', messageSelectFunc)

function messageSelectFunc() {
  if(messageSelect.value == 1) {
    message.value = "Thanks"
  } else if (messageSelect.value == 2) {
    message.value = "Cheers"
  } else if (messageSelect.value == 3) {
    message.value = "Congratulations"
  } else if (messageSelect.value == 4) {
    message.value = "Enjoy your drink"
  } else if (messageSelect.value == 5) {
    message.value = "Keep building"
  }
}