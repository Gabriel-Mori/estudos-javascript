// EXEMPLO 1: ORDENANDO STRINGS

const names = ["joão", "ana", "tadeu"];
names.sort();
// console.log(names);

// EXEMPLO 2: ORDENANDO NUMEROS

const numbers = [15, 40, 95, 34, 24, 55, 67, 5, 82];
// quando temos array de numeros, e esse numeros tem 2 casas,
// o sort olha somente o primeiro numero
// EX: 45 -- sort olha somente o numero 4

numbers.sort((score1, score2) => score2 - score1);
console.log(numbers);

// EXEMPLO 3: ORDENANDO OBJETOS
const theBigFamily = [
  { name: "Lineu", score: 20 },
  { name: "Nenê", score: 10 },
  { name: "Tuco", score: 50 },
  { name: "Bebel", score: 30 },
  { name: "Agostinho", score: 70 },
];

theBigFamily.sort((item1, item2) => item1.score - item2.score);

console.log(theBigFamily);
