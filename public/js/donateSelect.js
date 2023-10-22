const donateButton = document.querySelector('#donateButton')
let donateCost = document.querySelector('#donateCost')
let donateSelect = document.querySelector('#donateSelect')
const buttonSelects = document.querySelectorAll('.buttonSelect');

buttonSelects.forEach(button => {
    button.addEventListener('click', () => {
      buttonSelects.forEach(button => button.classList.remove('active'));
      button.classList.add('active');
      if(button.classList.contains('active') && (button.getAttribute('id') == "thanks")) {
          donateCost.value = "0.0001 ETH"
          donateSelect.value = 1
          donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "tea")) {
        donateCost.value = "0.001 ETH"
        donateSelect.value = 2
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "coffee")) {
        donateCost.value = "0.002 ETH"
        donateSelect.value = 3
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "beer")) {
        donateCost.value = "0.003 ETH"
        donateSelect.value = 4
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "cocktail")) {
        donateCost.value = "0.005 ETH"
        donateSelect.value = 5
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "whiskey")) {
        donateCost.value = "0.010 ETH"
        donateSelect.value = 6
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "lionmilk")) {
        donateCost.value = "0.10 ETH"
        donateSelect.value = 7
        donateButton.disabled = false;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "kimiz")) {
        donateCost.value = "1.0 ETH"
        donateSelect.value = 8
        donateButton.disabled = false;
      }
    });
  });