const button = document.querySelector(".button")

function alterarTexto() {
    const paragrafo = document.querySelector(".paragrafo")

    paragrafo.innerHTML = "Olá mundo"

}

button.addEventListener("click", alterarTexto)