// tipos primitivos

let scoreOne = 50;
let scoretwo = scoreOne;

console.log(`scoreOne: ${scoreOne} || scoretwo: ${scoretwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne} || scoretwo: ${scoretwo}`);

// tipos primitivos não apontam para mesmo head

// tipos de referencia

const oneScore = { name: "gabriel", age: 45 };
const twoScore = oneScore;

console.log(twoScore, oneScore);

oneScore.age = 30;

console.log(twoScore, oneScore);

// tipos de referencia olham para mesmo head
