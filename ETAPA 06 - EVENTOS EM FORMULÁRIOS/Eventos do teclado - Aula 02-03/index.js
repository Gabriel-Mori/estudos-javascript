const form = document.querySelector(".form");
const p = document.querySelector("p");

const isValidRegex = (username) => /^[a-zA-z0-9]{6,12}$/.test(username);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const isValid = isValidRegex(username);

  if (isValid) {
    p.textContent = "username valido";
    return;
  }

  p.textContent = "username deve conter apenas letras e numeros";
});

form.username.addEventListener("keyup", (e) => {
  const username = e.target.value;
  const isValid = isValidRegex(username);

  if (isValid) {
    form.username.setAttribute("class", "sucess");
    return;
  } else {
    form.username.setAttribute("class", "error");
  }
});
