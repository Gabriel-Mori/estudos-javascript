//
//
//
// RETORNO DE VALORES --- RETURN

function returnResult(number) {
  const result = number * 2;
  return result;
}

// console.log(result);   o resultado não está definido, result é declarado dentro do bloco da função

const resultiFunc = returnResult(5); // agora temos o valor retornado da função armazenado em uma constante

const showResult = function (value) {
  return `o resultado é: ${value}`;
};

console.log(showResult(resultiFunc));
