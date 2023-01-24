const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = "Novo item";
  ul.prepend(li);
});

// const lis = document.querySelectorAll("li");

// lis.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     const element = event.target;
//     console.log("clicou na li");
//     element.remove();
//   });
// });

ul.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    clickedElement.remove();
  }
  console.log("clicou na ul");
});
