// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// ASYNC/AWAIT

const getUser = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const user = await response.json();
  console.log(user);
};

getUser();
