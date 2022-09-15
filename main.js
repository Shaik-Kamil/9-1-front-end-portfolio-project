//! API key is exhausted/ ran out but keeping here for reference sake
// let url = `https://v6.exchangerate-api.com/v6/0c6e375cb6d28cd0665322a9/latest/`;
// let url = `https://v6.exchangerate-api.com/v6/bcb9adb325bffa82847da5a8/latest/`;

//! fresh API key
let url = `https://v6.exchangerate-api.com/v6/f02fd6202962851b456e2883/latest/`;

//! I tried to deploy to netlify, it worked initially but now its working since I had to delete my github repo
//! and create a new one :(
let key = config.SECRET_API_KEY;
//! query select the first dropdown country
const firstCountryId = document.querySelector('#first-country');
//! query select the second dropdown country
const secondCountryId = document.querySelector('#second-country');
//! query select the first amount input text box
const firstAmountId = document.querySelector('#first-amount');
//! query select the second amount input text box
const secondAmountId = document.querySelector('#second-amount');
//! query select the #result div to re-assign the currency display
const resultId = document.querySelector('#result');
//! query select the #swap div to add eventListener to it when it's clicked.
const button = document.querySelector('#swap');

//! declare function for conversion and update the value of currency in DOM every time
function getExchangeRate() {
  //! store in a const the chosen value of country 1 dropdown item
  const firstCurrency = firstCountryId.value;
  // console.log(firstCurrency);
  //! store in a const the chosen value of country 2 dropdown item
  const secondCurrency = secondCountryId.value;
  // console.log(secondCurrency);

  //! use the base url which would include APIkey and keep base country dynamic so it can be easily re-assigned according to what the user selects
  //? This API key is the original one and is out of requests so it will not work.
  fetch(`${url}` + `${firstCurrency}`)
    //! this key is new and has requests
    // fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${firstCurrency}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //! when the user selects the first dropdown and second drop down options automatically looks up the value of the exchange rate between country1-country2 once amount is input
      const result = data.conversion_rates[secondCurrency];
      // console.log(result);
      //! re-assign the result divs to display the current exchange rate of country 1 - country2
      resultId.textContent = `1 ${firstCurrency} = ${result} ${secondCurrency}`;

      //! in the second text input box display result of the conversion math done to the nearest 2 decimals
      secondAmountId.value = (firstAmountId.value * result).toFixed(2);
    })

    .catch((error) => console.log(error));
}

//! Event Listeners (if&) when user chooses new countries in both dropdown selections and if they adds new inputs or change inputs

firstCountryId.addEventListener('change', getExchangeRate);
secondCountryId.addEventListener('change', getExchangeRate);
firstAmountId.addEventListener('input', getExchangeRate);

// This function eventListener is not working or not working as intended.
secondAmountId.addEventListener('input', getExchangeRate);

//! Add event listener for when the swap button is clicked so it can reverse the values
button.addEventListener('click', () => {
  const reverseValues = firstCountryId.value;
  firstCountryId.value = secondCountryId.value;
  secondCountryId.value = reverseValues;
  getExchangeRate();
});

//! call function so the conversion results of default-ly chosen value is already displaying once screen loads
getExchangeRate();
