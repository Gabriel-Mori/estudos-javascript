const getPokemon = (url) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      const isRequestOk = request.readyState === 4 && request.status === 200;
      const isRequestFailed = request.readyState === 4;

      if (isRequestOk) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        return;
      }

      if (isRequestFailed) {
        reject("não foi possivel obter os dados", null);
      }
    });

    request.open("GET", url);
    request.send();
    // console.log(request);
  });

getPokemon("https://pokeapi.co/api/v2/pokemon/1")
  .then((bulbasaur) => {
    console.log(bulbasaur);
    return getPokemon("https://pokeapi.co/api/v2/pokemon/4");
  })
  .then((charmander) => {
    console.log(charmander);
    return getPokemon("https://pokeapi.co/api/v2/pokemon/7");
  })
  .then(console.log)
  .catch((error) => console.log(error));
