const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
console.log(request);
