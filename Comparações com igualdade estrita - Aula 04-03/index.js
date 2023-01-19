const age = 30;

// "igual a" e "diferente de"
console.log(age == 30); // number 30 é == a number 30 ? true
console.log(age == "30"); // number 30 é == a string 30 ? true ~≳
// apenas 2 == comparamos apenas os valores e não os tipo de dados

console.log(age != 30); // number 30 é  diferente de  !=  number 30 ? false ~> são iguais
console.log(age != "30"); // number 30 é  diferente de  !=  number 30 ? false ~>
// são iguais, string 30 é convertida para number 30.

// "IGUAL A, E DO MESMO TIPO" , E  "DIFERENTE DE, E DO MESMO TIPO"
console.log(age === 30); // number 30 é == a number 30 ? true
console.log(age === "30"); // number 30 é === a string '30' ? false ~≳ quando usamos 3 iguais ele compara o tipo e o valor

console.log(age !== 30); // number 30 é !== a number 30 ? false ~> age 30 é igual a number 30
console.log(age !== "30"); // number 30 é !== a string 30 ? true ~> number é diferente de  string
