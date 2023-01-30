const past = new Date("may 07 2022 7:47:00");
const present = new Date();

const diferrence = present.getTime() - past.getTime();

// console.log(past);

const secunds = Math.round(diferrence / 1000);
console.log({ secunds });

const minutes = Math.round(secunds / 60);
console.log({ minutes });

const hours = Math.round(minutes / 60);
console.log({ hours });

const day = Math.round(hours / 24);
console.log({ day });

// transformar timeStamp em objeto
const timeStamp = 999999999999;
console.log(new Date(timeStamp));
