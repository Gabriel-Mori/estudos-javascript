const createUser = (name, email) => {
  let counter = 0;

  return {
    name,
    email,
    incrementCounter: () => ++counter,
  };
};

const user = createUser("gabriel", "g@mail.com");
console.log(user.incrementCounter());
console.log(user);
