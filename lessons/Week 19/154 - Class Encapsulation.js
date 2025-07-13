/*
    Encapsulation
        - Class Fields Are Public By Default
        - Guards The Data Against Illegal Access.
        - Helps To Achieve The Target Without Revealing Its Complex Details.
        - Will Reduce Human Errors.
        - Make The App More Flexible And Manageable.
        - Simplifies The App.
*/

class User {
  #eSalary;
  constructor(id, userName, eSalary) {
    this.id = id;
    this.userName = userName;
    this.#eSalary = eSalary;
  }
  //   TODO: Getter Method
  getSalary() {
    return parseInt(this.#eSalary);
  }
}

let userOne = new User(101, 'Ahmad', '5000 Gneh');

// Output

console.log(userOne.id, userOne.userName);
console.log(userOne.getSalary());

console.log(userOne.getSalary() * 0.3);

// Practice on The Inheritance && Encapsulations

class vehicle {
  #id;
  constructor(Name, color, model, ID) {
    this.Name = Name;
    this.color = color;
    this.model = model;
    this.#id = ID;
  }
}

class car extends vehicle {
  constructor(Name, color, model) {
    // IMPORTANT if you need to get the Private Property is not Allowed
    // IMPORTANT ==> #id
    super(Name, color, model);
  }
}
