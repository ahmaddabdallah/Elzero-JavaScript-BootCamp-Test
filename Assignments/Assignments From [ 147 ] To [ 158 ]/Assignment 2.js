// Assignment Two
/**
 * Class representing a Tablet device that extends Phone
 * @class
 * @extends Phone
 */

class Tablet {
  /**
   * Create a Tablet
   * @param {string} name - The name of the tablet
   * @param {string|number} serial - The serial number of the tablet
   * @param {number} price - The price of the tablet
   * @param {string} [size="Unknown"] - The size of the tablet screen
   */
  /**
   * Get full details of the tablet
   * @method
   * @returns {string} A string containing the name, serial number and size of the tablet
   */
}

// HACK: Phone Class
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// IDEA: Write Tablet Class Here
class Tablet extends Phone {
  // IDEA: Properties
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || 'Unknown';
  }

  //   NOTE: Methods
  fullDetails() {
    return `${this.name} , Serial Is : ${this.serial} , Size : ${this.size}`;
  }
}

let TabletOne = new Tablet('iPad', 100200300, 1500, 12.9);
let TabletTwo = new Tablet('Nokia', 350450650, 800, 10.5);
let TabletThree = new Tablet('LG', 250450650, 650);

// Output
console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
