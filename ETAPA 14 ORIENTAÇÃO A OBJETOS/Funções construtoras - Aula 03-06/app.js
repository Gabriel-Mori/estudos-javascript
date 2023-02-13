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

// console.log(obj.login());

// function construtora: sempre a primeira letra maiuscula, para destinguir
// uma função normal

function Students(name, email) {
  this.name = name;
  this.email = email;
}

const gabriel = new Students("Gabriel mori", "gabriel@gmail.com");
const bruno = new Students("bruno mori", "bruno@gmail.com");

// console.log(gabriel);
// console.log(bruno);

// HERANÇA PROTOTIPAL
