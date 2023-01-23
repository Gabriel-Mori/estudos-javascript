// ForEach e callbacks

//callback --

const call = (callbacks) => {
  const number = 77;

  callbacks(number);
};

call((number) => {
  console.log(number);
});

// ForEach --

const array = ["youtube", "facebook", "instagram"];

const position = (item, index, array) => {
  console.log(index, item, array);
};

array.forEach(position);
