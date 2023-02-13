// CONCATENANDO ARRAYS COM SPREAD
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

// const newArray = objects.concat(objects2);
const newArray = [0, ...array1, 30, ...array2, 50];

console.log(newArray);

// CONCATENANDO OBJETOS COM SPREAD

const obj1 = { prop1: 1, prop2: 2 };
const obj2 = { prop3: 3, prop4: 4 };

const newObj = Object.assign({}, obj1, obj2); // com object.assign
const newObjSpread = { ...obj1, ...obj2 }; // com spread operator
console.log(newObjSpread);

console.log(newObj);
