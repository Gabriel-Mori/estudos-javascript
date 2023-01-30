/*

     FILTER
FILTER RECEBE UM DECLARAÇÃO DE UMA FUNÇÃO COMO ARGUMENTO
E ESSA FUNÇÃO RECEBE 3 PARAMETROS.

ITEM -  ITEM ATUAL DO ARRAY
INDEX - INDEX[POSIÇÃO] DE CADA ITEM
ARRAY - ARRAY QUE ESTA SENDO ITERADO - NO CASO 'NUMBERS'

QUANDO USAR O FILTER?
QUANDO BASEADO EM UMA CONDIÇÃO, VOCE PRECISAR OBTER SÓ ALGUNS ITEM DO
ARRAY ORIGINAL


*/

const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const filtered = products.filter((item) => item.price > 30);

// console.log(filtered);

const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const filterUserPremium = users.filter((user) => user.premium);

console.log(filterUserPremium);
