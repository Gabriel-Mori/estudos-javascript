class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    return `${this.name} logou na aplicação, com o email ${this.email}`;
  }
}
const obj = new User("Gabriel", "gb@gmail.com");

console.log(obj.login());
