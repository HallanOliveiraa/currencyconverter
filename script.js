const buttonClick = document.querySelector(".convert-button");
const pressSelect = document.querySelector(".converter-currency");

function convertValue() {
  const inputValue = document.querySelector(".input-currency").value;

  const valueToConvert = document.querySelector(".convert-currency-value"); // valor em real a ser convertido //

  const convertedValue = document.querySelector(".convert-value"); // moeda convertida //

  console.log(pressSelect.value);

  // Definindo taxas de câmbios//

  const dollarToday = 5.2;
  const euroToday = 6.2;

  if (pressSelect.value == "dolar") {
    //se select igual a dolar - então converter em dolar hoje//
    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dollarToday); // valor convertido em Dolar - USD //
  }

  if (pressSelect.value == "euro") {
    //se select igual a euro - então converter em euro hoje//
    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday); // valor convertido em Euro - EUR //
  }

  valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue); // valor fixo real a converter PT-BR //
}
function currencyName() {

  const currencyName = document.getElementById("currency-euro");
  const currencyImage = document.querySelector(".flag-usa")

  if (pressSelect.value == "dolar"){
    currencyName.innerHTML = "Dolar americano";
    currencyImage.src = "./../public/icons8-usa-48.png"
  }
  if (pressSelect.value == "euro"){
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./../public/icons8-euro-50.png"
}
convertValue() // Toda função será executada novamente //

}
pressSelect.addEventListener("change", currencyName);
buttonClick.addEventListener("click", convertValue);
