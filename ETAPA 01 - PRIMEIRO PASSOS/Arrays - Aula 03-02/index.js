//ARRAYS
let heroes = ["batman", "catwoman", "iron man", "catwoman"];

//metodo de arrays
let joinHeroes = heroes.join();
// ele retorna uma nova string concatenado e separados por virgula, ou podemos passar
// argumento opicional ex: | , - = ' '

let indexOf = heroes.indexOf("catwoman");
// primeira ocorrencia da string 'catwoman' seria na posição 1

let concatHeroes = heroes.concat(["hulk", "wolverine"]);
// concatena 2 arrays junta e transforma um unico array
// nao modifica o array original

let pushHeroes = heroes.push("spider-man");
//valores que podem adiconar no fim do array
// modifica o array original

let popHeroes = heroes.pop();
// remove o ultimo item do array e retorna o esse item
