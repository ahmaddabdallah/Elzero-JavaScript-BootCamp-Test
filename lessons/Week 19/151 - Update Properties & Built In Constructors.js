/*
    Constructor Function
        - Update Properties
        - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary;
  }
  // NOTE: Setter Method
  updateName(newName) {
    this.username = newName;
  }
}

let userOne = new User(100, 'Elzero', 5000);

console.log(userOne.username);
userOne.updateName('Osama');
console.log(userOne.username);

console.log('-----------------------');

let strOne = 'Elzero';
let strTwo = new String('Elzero');

console.log(typeof strOne); // TODO: String
console.log(typeof strTwo); // NOTE: Object

// IMPORTANT Very Advanced Topics

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);
