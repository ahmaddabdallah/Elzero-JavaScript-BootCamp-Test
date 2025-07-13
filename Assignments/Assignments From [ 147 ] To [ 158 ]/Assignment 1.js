// Assignment One

// function Car(name, model, price) {
//   this.name = name;
//   this.model = model;
//   this.price = price;
// }

// let carOne = new Car('MG', 2022, 420000);

class Car {
  // NOTE: Properties
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  // TODO: Methods
  run() {
    return 'Car is Running Now';
  }

  stop() {
    return 'Car is Stoppped';
  }
}

let carOne = new Car('BMW', 2024, 450000);
let carTwo = new Car('MG', 2023, 400000);
let carThree = new Car('BMW', 2020, 450000);

// Output

console.log(
  `Car One Name Is : ${carOne.name} , And Model Is : ${carOne.model} , And the Price Is : ${carOne.price}`
);

console.log(
  `Car One Name Is : ${carTwo.name} , And Model Is : ${carTwo.model} , And the Price Is : ${carTwo.price}`
);

console.log(
  `Car One Name Is : ${carThree.name} , And Model Is : ${carThree.model} , And the Price Is : ${carThree.price}`
);

// TODO: Print Method

console.log(carOne.run());

// ('Car One Name Is MG And Model Is 2022 And Price Is 420000');
// ('Car Is Running Now');
