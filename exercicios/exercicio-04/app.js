/*
  01 - Suba o seu servidor local e:

  - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
  - Se você não assiste séries, armazene seus 3 filmes favoritos;
  - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
    SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
  - O "e" antes do nome da última série deve ser mantido;
  - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
    a notação "array[index]";
  - Exiba a frase no console.

  "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."
*/
const my3FavoriteTVShows = ["suits", "vikings", "lucifer"];
const sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTVShows.join(
  ", "
)}.`.replace(", l", " e L");
// console.log(sentence);
/*
  02 - Comente o console.log() acima e:

  - Exiba no console um boolean indicando se o array de séries que você criou  
    possui 3 itens.
*/

// console.log(my3FavoriteTVShows.length === 3);

/*
  03 - Comente o console.log() acima e:

  - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded"  
    um boolean que indica se a série que a "randomTVShow" armazena é uma das  
    suas 3 séries favoritas;
  - Utilize o método adequado para fazer essa verificação;
  - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.

logica é ~≳ 
-- randomTVShow recebe valor "sobrenatural"
-- se a série que a "randomTVShow" armazena é uma das suas 3 séries favoritas;. 
-- onde eu armazeno as minhas 3 series favoritas? em uma constante my3FavoriteTVShows

como executar ~≳
-- criar constante isRandomTVShowIncluded para armazenar o valor
-- pegar as constante que esta minhas 3 series
-- usar metodo includes para verificar se existe um valor igual 
 
execução ~≳ em my3FavoriteTVShows existe(includes) o valor (randomTVShow) // false

*/

const randomTVShow = "sobrenatural";
const isRandomTVShowIncluded = my3FavoriteTVShows.includes(randomTVShow);
// console.log(isRandomTVShowIncluded);

/*
  04 - Comente o console.log() acima e:

  - Armazene a frase abaixo em uma constante "typeSentence", substituindo  
    "TIPO_DE_DADO" pela informação correta;
  - Utilize o operador adequado para gerar essa informação;
  - Exiba a "typeSentence" no console.

  "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."

  para saber o tipo de dado de uma constante utilizar o operador "typeof"
*/
const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof isRandomTVShowIncluded}`;
// console.log(typeSentence);

/*
  05 - Comente o console.log() acima e:

  - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39  
    e "BOOLEAN" pela informação correta (true ou false);
  - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
  - A 1ª letra do boolean deve ser maiúscula;
  - Dica: se você perceber que está repetindo o mesmo número na string, cogite  
    armazenar este número em uma constante e usá-la na frase.

  "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES  
  caracteres? BOOLEAN."


  logica --> 
  -- primeiro armazenar o numero 39 em uma let ou const para nao ficar repetindo o numero
  -- para converter boolean em string, usar o função construtora String()
  -- deixar primeira letra maiuscula usar replace, nesse caso.
  -- verificar se typeSentence é maior que 39 usando operador de comparação ' > maior '

*/
const number = 39;

// console.log(`A string que a "typeSentence" armazena tem mais de ${number}
//   caracteres? ${String(typeSentence.length > number).replace("t", "T")}.`);

/*
  06 - Comente o console.log() acima e:

  - Após a constante "falsyValues", exiba no console a frase abaixo,  
    substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.

  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o  
  BOOLEAN."

logica -->
-- saber o numero de itens que a constante falsyValues que é um array tem.
-- ver a posição do array que esta o valor False que é um boolean

execução -->
-- para saber o tamanho  do array usar ".length"
-- para pegar a posição do array que se encontra o valor "false" usar [index] nesse caso

*/

const falsyValues = ["", "", ``, 0, null, NaN, undefined, false];
// console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o
//   ${falsyValues[7]}.`);

/*
  07 - Comente o console.log() acima e:

  - Armazene em uma constante "crazyOperation" a soma entre null e 1;
  execução -- usar concatenação e incremento " + "

  - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation"  
    em boolean.
   execução -- para converter em boolean usar função construtora Boolean()

  - Você sabe por que essa conversão resultou em true?
  no momento que usamos "NULL" em uma operação matematica, ele é interpretado como 0


*/
const crazyOperation = null + 1;
const crazyConversion = Boolean(crazyOperation);
// console.log(crazyConversion);

/*
  08 - Comente o console.log() acima e:

  - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
  LOGICA -- CRIAR CONSTANTE E ARMAZENAR UM ARRAY COM VALORES

  - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array  
    "ages";
  LOGICA -- CRIAR CONSTANTE E SOMAR OS VALORES DA PRIMEIRA E TERCEIRA POSIÇÃO DO ARRAY
  PARA PEGAR A POSIÇÃO DO ARRAY QUE QUEREMOS, USAR [INDEX]

  - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação  
    correta.

  "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
  é: BOOLEAN."
  LOGICA -- USAR O OPERADOR DE COMPARAÇÃO " >= MAIOR IGUAL" 
 VERIFICAR SE A SOMA DOS VALORES DAS 2 POSIÇÕES É MAIOR QUE 92

*/

const age = [31, 82, 61, 11];
const sumAges = age[1] + age[3];
// console.log(`A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação
//   é: ${sumAges >= 92}`);

/*
  09 - Comente o console.log() acima e:

  - Armazene em uma const "isNotAString" uma expressão que verifica se o tipo de  
    dado que a "randomTVShow" armazena não é uma string;

LOGICA -- 
-- CRIAR A CONST isNotAString - VERIFICAR SE O TIPO DO DADO DA CONSTANTE randomTVShow É DIFERENTE DE STRING
-- USAR TYPEOF PARA SABER O TIPO DE DADO DA CONSTANTE randomTVShow
 -- PARA FAZER ESSA COMPARAÇÃO USAR O OPERADOR DE COMPARAÇÃO " !== DIFERENTE DE, IGUAL A"

  - Essa expressão deve resultar em false.
  - Exiba a "isNotAString" no console.
*/
const isNotAString = typeof randomTVShow !== "string";
// console.log(isNotAString);

/*
  10 - Comente o console.log() acima e:

  - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se  
    o número 8 existe no array;
  - Não utilize o método includes desta vez.
*/

const evenNumbers = [0, 2, 4, 6, 8, 10];
console.log(evenNumbers.indexOf(8) !== -1);
