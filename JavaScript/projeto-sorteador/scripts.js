const submitButton = document.querySelector(".submit-button");

function generateNumber() {
    const firstValue = Math.ceil(document.querySelector(".input-one").value);
    const secondValue = Math.floor(document.querySelector(".input-two").value);


  const result =  Math.floor(Math.random() * (secondValue - firstValue + 1) + firstValue)

  alert(result)
}

submitButton.addEventListener("click", generateNumber);