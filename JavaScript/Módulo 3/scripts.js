let input = document.querySelector(".input");
let button = document.querySelector(".button");
let p = document.querySelector(".p");

const contacts = [
  { name: "Maria", number: "(51)99999-9999" },
  { name: "Paulo", number: "(51)88888-9999" },
  { name: "José", number: "(51)77777-9999" },
  { name: "Ana", number: "(51)66666-9999" },
];

function pesquisarUsuario() {
  for (let contact of contacts) {
    if (input.value.toLowerCase() === contact.name.toLowerCase()) {
      p.innerHTML = `Contato encontrado = Nome:${contact.name}, Telefone:${contact.number}`;

      break;
    } else {
      p.innerHTML = "Contato não encontrado.";
    }
  }
}

button.addEventListener("click", pesquisarUsuario);
