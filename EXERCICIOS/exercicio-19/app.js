/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const form = document.querySelector(".quiz-form"); // pegamos o formulario
const finalResult = document.querySelector(".result"); // pegamos a classe que contem o resultado, onde sera mostrado
const buttonOne = document.querySelector(".button-one");
const containerOne = document.querySelector(".Question1");
const buttonTwo = document.querySelector(".button-two");
const containerTwo = document.querySelector(".Question2");
const buttonThee = document.querySelector(".button-thee");
const containerThee = document.querySelector(".Question3");
const buttonFor = document.querySelector(".button-for");
const containerFor = document.querySelector(".Question4");

const input = document.querySelectorAll("input");

const correctResponse = ["C", "C", "A", "B"]; // resposta corretas

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]; // value de cada input

  let score = 0;

  inputAnswers.forEach((item, index) => {
    // comparando se a resposta do form, são iguais as resposta corretas
    if (item === correctResponse[index]) {
      score += 25; // se for correta, score sobi a cada index 25
    }
    scrollTo(0, 0); // para subir no topo da pagina, quando enviar form
    finalResult.classList.remove("d-none"); // remove a classe display:none para que seja exibida o resultado

    let counter = 0;
    const timer = setInterval(() => {
      // fazemos um contador a cada segundo
      if (counter === score) {
        // se o contador for igual o score "resposta certa", o contador é parado
        clearInterval(timer);
      }
      finalResult.querySelector("span").textContent = `${counter}%`; // mostra a porcemtagem do score acertado
      counter++;
    }, 30); // contador demora 30 segundos para executar a função inteira
  });
});

buttonOne.addEventListener("click", () => {
  const DisplayNone = containerOne.style.display === "";
  const displayBlock = containerOne.style.display === "none";

  if (DisplayNone || displayBlock) {
    buttonOne.querySelector(".Question1").classList.remove("d-none");
    containerOne.style.display = "block";
    buttonOne.querySelector("span").innerHTML = "Esconder Resposta";
  } else {
    buttonOne.querySelector("span").innerHTML = "Ver Resposta";
    containerOne.style.display = "none";
  }
});

buttonTwo.addEventListener("click", () => {
  const DisplayNone = containerTwo.style.display === "";
  const displayBlock = containerTwo.style.display === "none";

  if (DisplayNone || displayBlock) {
    buttonTwo.querySelector(".Question2").classList.remove("d-none");
    containerTwo.style.display = "block";
    buttonTwo.querySelector("span").innerHTML = "Esconder Resposta";
  } else {
    buttonTwo.querySelector("span").innerHTML = "Ver Resposta";
    containerTwo.style.display = "none";
  }
});

buttonThee.addEventListener("click", () => {
  const DisplayNone = containerThee.style.display === "";
  const displayBlock = containerThee.style.display === "none";

  if (DisplayNone || displayBlock) {
    buttonThee.querySelector(".Question3").classList.remove("d-none");
    containerThee.style.display = "block";
    buttonThee.querySelector("span").innerHTML = "Esconder Resposta";
  } else {
    buttonThee.querySelector("span").innerHTML = "Ver Resposta";
    containerThee.style.display = "none";
  }
});

buttonFor.addEventListener("click", () => {
  const DisplayNone = containerFor.style.display === "";
  const displayBlock = containerFor.style.display === "none";

  if (DisplayNone || displayBlock) {
    buttonFor.querySelector(".Question4").classList.remove("d-none");
    containerFor.style.display = "block";
    buttonFor.querySelector("span").innerHTML = "Esconder Resposta";
  } else {
    buttonFor.querySelector("span").innerHTML = "Ver Resposta";
    containerFor.style.display = "none";
  }
});
