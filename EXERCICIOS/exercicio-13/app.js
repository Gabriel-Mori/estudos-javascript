/*
  01

  - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer  
    com que as informações do gato estejam disponíveis fora da função;
  - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:

  "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/

const getCatInfo = () => {
  const name = "Marcos";
  let age = 3;
  const color = "Cinza";
  return { name, age, color };
};
// console.log(
//   `${getCatInfo().name} é um gato ${getCatInfo().color} de ${
//     getCatInfo().age
//   } anos.`
// );*

/*
  02

  - Adicione apenas duas linhas de código dentro da função "external" para  
    exibir no console a string que a const movie armazena, com todas as letras  
    maiúsculas.
*/

const external = () => {
  const movie = "Parasite";
  // console.log(movie.toUpperCase());

  const internal = () => {
    const extraInternal = () => {
      console.log(movie.toUpperCase());
    };
  };
  internal();
};

external();

/*
  03

  - Exiba no console o array abaixo com a ordem dos itens invertida;
  - O resultado exibido deve ser [1, 2, 3];

  Dica: procure pelo método reverse, no MDN.
*/

let randomNumbers = [3, 2, 1];
// console.log(randomNumbers.reverse());
// O método reverse() inverte os itens de um array.
// O primeiro elemento do array se torna o último e o último torna-se o primeiro

/*
  04

  - Exiba no console o array abaixo com o 1º item removido;

  Dica: procure pelo método shift, no MDN.
*/

let crazyArray = [
  { prop1: "1", prop2: "2" },
  function getMessage() {
    return "hi";
  },
  [5, 96, 53],
];

const firstElement = crazyArray.shift();
// O método **shift()**remove o primeiro elemento de um array e retorna esse elemento.
//  Este método muda o tamanho do array
// console.log(firstElement);
// console.log(crazyArray);

/*
  05

  - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto  
    no console;

  Dica: procure pelo método find, no MDN.
*/

const dogs = [
  { name: "Olivia", age: 3, gender: "Female", breed: "Maltês" },
  { name: "Zé", age: 2, gender: "Male", breed: "Pug" },
  { name: "Jade", age: 4, gender: "Female", breed: "Shiba inu" },
  { name: "Zequinha", age: 7, gender: "Male", breed: "Poodle" },
  { name: "Xica", age: 6, gender: "Female", breed: "Chihuahua" },
];

const getDog = dogs.find((Element) => Element.name === "Zequinha");
// O find() método retorna o primeiro elemento na matriz fornecida que satisfaz a função de teste fornecida.
// Se nenhum valor satisfizer a função de teste, undefinedserá retornado.
// console.log(getDog);

/*
  06

  - Cole o markup HTML abaixo em seu index.html;
  - Utilize o query selector para obter a referência do título principal da  
    página, através da classe dele;
  - Exiba a referência do título principal no console.

  <section>
    <article>
      <h1 class="main-title">Curiosidades sobre o filme Jurassic Park</h1>

      <ul>
        <li>
          <h2 class="secondary-title">Direto das páginas do livro</h2>
          <p>No livro Parque dos Dinossauros, de Michael Crichton, o personagem John Hammond anuncia orgulhoso que o guia turístico do parque é o ator Richard Kiley, conhecido nos Estados Unidos. No filme, o diretor Steven Spielberg convidou o próprio Kiley para interpretar a si mesmo nesta cena.</p>
        </li>

        <li>
          <h2 class="secondary-title">Passou adiante</h2>
          <p>O ator William Hurt chegou a ser convidado para interpretar o Dr. Alan Grant, mas recusou o papel sem nem mesmo ler o roteiro original do filme.</p>
        </li>

        <li>
          <h2 class="secondary-title">Sistemas operacionais do parque</h2>
          <p>Nos diversos softwares que aparecem em Jurassic Park foram utilizadas várias linguagens. Pode-se notar que um dos programas utilizados no parque foi escrito em Pascal, em um dos monitores percebe-se a utilização do sistema UNIX e a interface gráfica utilizada é a 3D File System Navigator, da Sillicon Graphics.</p>
        </li>
      </ul>
    </article>
  </section>
*/

const paragraph = document.querySelector(".main-title");

/*
  07

  - Obtenha um NodeList com as referências de todos os títulos secundários da  
    página, através da classe deles;
  - Exiba esse NodeList no console.

*/

const seccondTitle = document.querySelectorAll(".secondary-title");
console.log(seccondTitle);

seccondTitle.forEach((element) => {
  console.log(` - ${element.innerHTML}`);
});
