// inteiros e decimais
const radius = 10; //inteiro
const pi = 3.14; // decimais

// operadores aritmeticos
const remainder = 5 % 2;
const area = pi * radius ** 2;

// ordem de operação
const radio = pi * (radius - 5) ** 10;

// 1: parenteses -- (radius - 5)
// 2: expoente ou raizes -- ** 10
// 3: multiplicação e divisão -- pi*
// 4: adição e subtração

// operadores de incremento e drecremento
// const postLikes = 10;
// postLikes = postLikes + 1;
// nesse caso estoraria um erro, porque nao podemos reatribuir novos valores a const

let postLikes = 10;
postLikes++; // o certo para incremento
postLikes--; // o certo para decremento

// operadores addition, subtraction , multiplication e division assingment
let postLIke = 100;
postLIke += 100;
postLIke -= 50;

// NaN - not a number

// casos = somar string com number , operação que nao resulta em um numero
console.log(7 / "oi");

// concatenação de string com numero
const likeMessage = "o post tem " + postLIke + " likes";
console.log(likeMessage);
// a concatenação de string com numero, sempre vai ser string
