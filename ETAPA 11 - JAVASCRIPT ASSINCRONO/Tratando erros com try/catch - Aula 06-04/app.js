const getPokemon = async () => {
  try {
    const bulbasaur = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const charmander = await fetch("https://pokeapi.co/api/v2/pokemon/4");
    const squirtle = await fetch("https://pokeapi.co/api/v2/pokemon/7");

    const request = await Promise.all([bulbasaur, charmander, squirtle]);
    request.forEach(async (res) => console.log(await res.json()));
  } catch (e) {
    console.log(e);
  }
};

getPokemon();
