/*
3 ESCOPOS EM JAVASCRIPT
 - ESCOPO DE FUNÇÕES
 - ESCOPO DE BLOCO
 - ESCOPO LÉXICO 

*/

// 1 - ESCOPO DE FUNÇÕES

function getMessage() {
  let message = "Oi!";
  message; // 'Oi!'
}
getMessage();
// console.log(message); // not defined -- não existe message fora do escopo da função

// 2 - ESCOPO DE BLOCO

if (true) {
  let dragon = "balerion";
  dragon; // "balerion"
}

// console.log(dragon); // not defined -- não existe dragon fora do bloco

// 3 - ESCOPO LÉXICO

const external = () => {
  const book = "sapiens";

  const internal = () => {
    // const book = "poder da ação";

    // console.log(book.toUpperCase());

    const expoExternal = () => {
      console.log(book);
    };
    expoExternal();
  };

  internal();
};
