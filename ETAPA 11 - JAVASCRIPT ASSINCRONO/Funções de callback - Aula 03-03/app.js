const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestFailed = request.readyState === 4;

    if (isRequestOk) {
      callback(null, request.responseText);
      return;
    }

    if (isRequestFailed) {
      callback("não foi possivel obter os dados", null);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
  // console.log(request);
};
console.log(1);
console.log(2);

getTodos((error, data) => {
  // console.log("callback executado");
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
console.log(3);
console.log(4);
