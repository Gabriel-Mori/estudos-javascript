// localStorage.setItem("name", "roger");
// localStorage.setItem("age", "32");

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name);
// console.log(age);
// // REMOVENDO DADOS

// localStorage.removeItem("name");
// name = localStorage.getItem("name");

// console.log(name);

const objects = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];

localStorage.setItem("myArray", JSON.stringify(objects));

const arr = localStorage.getItem("myArray");
const resp = JSON.parse(arr);
console.log(resp);
