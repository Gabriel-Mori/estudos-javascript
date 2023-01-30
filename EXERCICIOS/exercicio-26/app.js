/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/
const formatTimeUnit = (date) => {
  return String(date).length === 1 ? `0${date}` : date;
};

const present = new Date();

const time = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const monthFormat = formatTimeUnit(month);
  return `${day}/${monthFormat}/${year}`;
};

// console.log(time(present));

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const datePresent = new Date();

const presentDate = (date) => {
  const month = date.getMonth();
  const monthDay = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const day = date.getDay();

  const weekDays = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sabado",
    "domingo",
  ];

  const monthsInYear = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const hoursFormat = formatTimeUnit(hours);
  const minusFormat = formatTimeUnit(minute);
  return `"${hoursFormat}:${minusFormat} - ${weekDays[day]}, ${monthDay} de ${monthsInYear[month]} de ${year}"`;
};

// console.log(presentDate(datePresent));

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true };

const { id, isVerified } = user;

// console.log(id, isVerified);
// console.log(user);

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: "Bender" };
const robotB = { name: "HAL 9000" };

const { name: nameA } = robotA;
const { name: nameB } = robotB;
// console.log(nameA, nameB);

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = "a";
const b = "b";
const c = "c";

const alphabet = { a, b, c };
// console.log(alphabet);

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = (value) => {
  console.log(value);
};

const updateSomething = ({ target, property, willChange }) => {
  if (willChange === "valor indesejado") {
    willChange = "valor desejado";
  }

  useDataSomewhereElse({
    target,
    property,
    willChange,
  });
};

updateSomething({ target: "1", property: "2", willChange: "valor indesejado" });

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector(".clock-container");

const clockTimer = (hours, minutes, seconds) =>
  `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>
  `;

const updateClock = () => {
  const present = new Date();
  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  clockContainer.innerHTML = clockTimer(hours, minutes, seconds);
};

setInterval(updateClock, 1000);
