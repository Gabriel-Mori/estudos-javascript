const form = document.querySelector(".form");
const p = document.querySelector("p");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const regex = /^[a-zA-z0-9]{6,12}$/;
  const isValid = regex.test(username);

  if (isValid) {
    p.textContent = "username valido";
    return;
  }

  p.textContent = "username deve conter apenas letras e numeros";
});
