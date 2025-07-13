/*
    Constructor Function
        - New Syntax
*/

class User {
  constructor(id, userName, salary) {
    this.id = id;
    this.userName = userName;
    this.salary = salary + 1000;
  }
}

let userOne = new User(1, 'Ahmad', 6000);
let userTwo = new User(2, 'Ali', 7500);
let userThree = new User(3, 'Osama', 10000);

// Output
console.log(userOne instanceof User); // NOTE: true
console.log(userOne.constructor === User); // NOTE: true

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary + 1000;
//     }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);
