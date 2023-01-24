/*
COPY EVENT
- QUANDO SELECIONA TEXTO E CLICA EM COPY
*/

const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("Texto copiado");
});

/*
MOUSEMOVE
-QUANDO PASSAMOS O MOUSE DENTRO DO BODY, ELE MOSTRA O EIXO-X E EIXO-Y
*/

const div = document.querySelector(".box");

div.addEventListener("mousemove", (event) => {
  div.textContent = `X-${event.offsetX} | Y-${event.offsetY}`;
});
