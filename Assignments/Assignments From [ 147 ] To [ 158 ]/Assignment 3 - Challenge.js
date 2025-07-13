// Assignment Three

// Edit The Class
class User {
  #card;
  constructor(username, card) {
    this.username = username;
    this.#card = card;
  }

  takePartOfString() {
    return this.#card.toString().replace(/(\d{4})(?=\d)/g, '$1-');
  }

  showData() {
    return `Hello ${
      this.username
    } , Your Card Number is : ${this.takePartOfString()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User('Osama', '1234-5678-1234-5678');
let userTwo = new User('Ahmed', '1234567812345678');
let userThree = new User('Ghareeb', 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// IMPORTANT => Encapsulations
console.log(userOne.card); // Prevent Accessing To Card Property Here
// Undefined
