// METODOS COMUNS DE STRING

const email = "gabriel@gmail.com";

// SLICE
// precisa de 2 argumentos
// primeiro: apartir de qual posição voce deseja obter;
// EX: quero so o gabriel --- email.slice(0,7)

// segundo: até qual posição do index voce deseja ir;
// EX: quero so o @gmail --- email.slice(7,13)
const firstName = email.slice(0, 7);
const gmail = email.slice(7, 13);
const com = email.slice(13, 17);
console.log(firstName);
console.log(gmail);
console.log(com);

// gabriel
// @gmail
// .com

// REPLACE
// SUBSTITUI UM CARACTER DE UMA STRING POR OUTRO
// recebe 2 argumentos
// primeiro: a posição do index que deseja alterar;
// segundo: escolher o novo caracter

// const emailReplace = email.replace("gabriel", "mori");
// console.log(emailReplace);
// mori@gmail.com
