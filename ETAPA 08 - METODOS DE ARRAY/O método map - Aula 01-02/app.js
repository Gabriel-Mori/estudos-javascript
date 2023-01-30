/*
MAP - PERCORRE CADA ITEM DO ARRAY, E FAZ UMA TRANSFORMAÇÃO CADA ITEM,
NÃO MODIFICA O ARRAY ORIGINAL

*/

const numbers = [1, 2, 3];

const number = numbers.map((item, i) => {
  return item * 2;
});

// console.log(numbers, number);

/*

MAP RECEBE UM DECLARAÇÃO DE UMA FUNÇÃO COMO ARGUMENTO
E ESSA FUNÇÃO RECEBE 3 PARAMETROS.

ITEM -  ITEM ATUAL DO ARRAY
INDEX - INDEX[POSIÇÃO] DE CADA ITEM
ARRAY - ARRAY QUE ESTA SENDO ITERADO - NO CASO 'NUMBERS'

pro map retornar um novo array, TEM QUE SEMPRE RETORNAR UM VALOR


*/

const prices = [20, 30, 10, 80, 5, 70, 25, 40];
// preços originais de uma loja, que vai gerar o preço pela metade

const priceOfert = prices.map((price) => price / 2); // preço original dividido por 2

// console.log("oferta", priceOfert);
// console.log("original", prices);

const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const productsOfert = products.map((product) => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 };
  }

  return product;
});

console.log(productsOfert);
