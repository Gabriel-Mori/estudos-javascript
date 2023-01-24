const div = document.querySelector(".content");

console.log((div.innerHTML += "<h2>Novo h2</h2>"));
const people = ["gabriel", "diego", "maria"];

people.forEach((person) => {
  div.innerHTML += `<p>${person}</p>`;
});

const paragraph = document.querySelector("p");

paragraph.innerText += " novo testo innerTxt";

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

paragraphs.forEach((item, index) => {
  console.log((item.innerHTML += `<p>novo texto de teste ${index + 1}</p>`));
});
