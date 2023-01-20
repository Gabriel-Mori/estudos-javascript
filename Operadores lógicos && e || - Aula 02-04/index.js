/* OPERADORES LOGICOS 

|| "OU" ~≳ UMA OU MAIS EXPRESSÃO PODE SER TRUE
&& "e" ~≳ SO EXECUTE SE TODAS AS CONDIÇÕES FOR TRUE

*/
const nota = 8;

if (nota <= 3 || nota >= 1) {
  console.log("nota muito ruim");
} else if (nota >= 4 && nota <= 7) {
  console.log("nota boa");
} else {
  console.log("nota muito boa");
}
