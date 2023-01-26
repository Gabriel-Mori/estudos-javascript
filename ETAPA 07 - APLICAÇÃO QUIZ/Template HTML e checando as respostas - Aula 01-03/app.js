const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

const correctAnswers = ["B", "B", "B", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const inputAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  inputAnswers.forEach((userAnswers, index) => {
    if (userAnswers === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);

  finalResult.classList.remove("d-none");

  let counter = 0;
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalResult.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 30);
});
