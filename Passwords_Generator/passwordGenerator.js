const span = document.querySelector("#pass_generated");
const range = document.querySelector(".controls input");
const tag = document.querySelectorAll("div");
const lenght = document.getElementById("length-value");

const letters = "abcdefghijklmnopqrstuvwxyz";
const mayus = letters.toUpperCase();
const numbers = "123456789";
const special = "$%&;#¿?";

const allValues = letters + mayus + numbers + special;

function copyToClip(pass) {
  if (pass === "") return; // si no hay mas de una linea se puede dejar la condicional sin llaves
  //api del clipboard
  navigator.clipboard.writeText(pass);
}
document.getElementById("generate-button").addEventListener("click", () => {
  span.innerText = "Creating your password...";
  let securePassword = "";

  for (let i = 0; i < range.value; i++) {
    const seed = Math.floor(Math.random() * allValues.length);
    securePassword += allValues[seed];
  }
  lenght.innerText = range.value;
  span.innerText = securePassword;
  copyToClip(securePassword);
});
