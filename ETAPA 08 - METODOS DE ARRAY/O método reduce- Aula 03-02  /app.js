/*

     REDUCE
REDUCE RECEBE UM DECLARAÇÃO DE UMA FUNÇÃO COMO ARGUMENTO
E ESSA FUNÇÃO RECEBE 2 PARAMETROS.

1 - ACUMULADOR
2 - ITEM



QUANDO USAR O REDUCE?

QUANDO BASEADO NO ARRAY, PRECISA REDUZIR O ARRAY A UM OUTRO TIPO DE DADO
EX: const numbers = [1, 2, 3, 4] -- PRECISO SOMAR TODOS OS ITEM E RETORNAR APENAS 1 INDEX

*/

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, item) => {
  return acc + item;
}, 0);
// 0 - significa que o acumulador começa com valor 0
// a cada soma acumulador vai armazenar o valor de cada passada pelo item

/*
1 - acc = 0, 0 + 1 = 1
2 - acc = 1, 1 + 2 = 3
3- acc = 3, 3 + 3 = 6
4- acc = 6, 6 + 4 = 10
acaba de executar a função e acc retorna a soma de todos os item - acc = 10 

*/
// console.log(sum);

const phaseScores = [
  { name: "Vinicius Costa", score: 337 },
  { name: "Roger Melo", score: 43 },
  { name: "Alfredo Braga", score: 234 },
  { name: "Pedro H. Silva", score: 261 },
  { name: "Ana Paula Rocha", score: 491 },
  { name: "Vinicius Costa", score: 167 },
  { name: "Roger Melo", score: 137 },
  { name: "Alfredo Braga", score: 135 },
  { name: "Ana Paula Rocha", score: 359 },
  { name: "Pedro H. Silva", score: 133 },
];

const sumResult = phaseScores.reduce((acc, item) => {
  if (item.name === "Roger Melo") {
    acc += item.score;
  }
  return acc;
}, 0);
console.log(sumResult);
