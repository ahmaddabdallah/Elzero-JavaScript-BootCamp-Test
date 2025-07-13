/*
    Prototype
        - Introduction
        - Prototypes are the mechanism by which JavaScript objects
        inherit features from one another.
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

// Output

console.log(userOne.id);
console.log(User.prototype);

let strOne = "Ahmad"

console.log(String.prototype);

