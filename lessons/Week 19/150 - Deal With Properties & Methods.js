/*
    Constructor Function
        - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    // NOTE: Properties
    this.id = id;
    this.username = username || 'Unknown';
    this.salary = salary <= 5000 ? salary + 500 : salary;
    this.msg = () => {
      return `Hello ${this.username} , Your Salary Is : ${this.salary}`;
    };
  }
  // TODO: Method
  writeMsg() {
    return `Hello ${this.username} , Your Salary Is : ${this.salary}`;
  }
}

let userOne = new User(100, 'Elzero', 5000);
let userTwo = new User(101, '', 6000);

// Output
console.log(userOne.username); // Elzero
console.log(userOne.salary); // 5000
console.log(userOne.msg());

// console.log(userOne.writeMsg());

console.log('------------------------------');

console.log(userTwo.username);
console.log(userTwo.salary);
console.log(userTwo.msg); // IMPORTANT : Native Code
console.log(userTwo.writeMsg); // IMPORTANT : Native Code
