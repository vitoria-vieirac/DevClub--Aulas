const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValue() {
  const inputCurrency = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const CurrencyValueConverted = document.querySelector(".currency-value");

  const libraToday = 6.8;
  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency / dolarToday);
  }

  if (currencySelect.value == "euro") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency / euroToday);
  }

  if(currencySelect.value == "libra") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "Currency",
        currency: "GBP",
    }).format(inputCurrency/libraToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/estados-unidos.png"

    } if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
        } if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./img/libra.png"
        }

        convertValue()
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);
