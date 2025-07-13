/*
    Prototype
        - Add To Prototype Chain
        - Extend Built In Constructors Features
*/

class User {
  constructor(id, username, country) {
    this.id = id;
    this.username = username;
    this.country = country;
  }

  sayHello() {
    return `Hello ${this.username}`;
  }
}

let userOne = new User(101, 'Ahmad', 'Egypt');

User.prototype.sayWelcome = function () {
  return `Welcome ${this.username}`;
};

// Output

console.log(userOne.id);
console.log(User.prototype);

console.log(userOne.sayWelcome());

String.prototype.addDots = function () {
  return `.${this}.`;
};
