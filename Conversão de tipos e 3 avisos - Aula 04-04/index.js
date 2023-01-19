let score = "100";
score = Number(score); // aqui é convertidado string para number
console.log(score + 1); // concatenção de string e numero resulta em string "1001"

const crazyConversion = Number("maçã"); // qualquer operação matematica que nao faça sentido resulta em NaN
// um valor que nao possa ser convertido em numero ≳ NaN
console.log(crazyConversion);

const convertNumber = String(100);
console.log(convertNumber);

const boolean = Boolean(NaN);
console.log(boolean);

/*
valores FALSY :
""
''
``
0
NaN
NULL
UNDEFINED
FALSE


VALORES TRUTHY:
QUALQUER VALOR QUE NAO SEJA FALSY
*/
