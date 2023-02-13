// CONCATENANDO string COM SPREAD

const str = "abc";

console.log([...str]);

const myString = (string) => [...string].reverse().join(", ");

console.log(myString("123"));

const myNumber = [1, 34, 5, 6, 243, 545, 623];
console.log(...myNumber);

console.log(Math.min(...myNumber));
console.log(Math.max(...myNumber));
