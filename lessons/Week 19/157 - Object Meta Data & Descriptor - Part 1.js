/*
    Object Meta Data And Descriptor
        - writable
        - enumerable
        - configurable [Cannot Delete Or Reconfigure]
*/

/**
 *
 * An object containing numeric properties.
 * @type {Object}
 * @property {number} a - First numeric property with value 1
 * @property {number} b - Second numeric property with value 2
 */

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, 'c', {
  writable: false,
  enumerable: true,
  configurable: true,
  value: 3,
});

// TODO: WriteAble
myObject.c = 100;

// NOTE: Looping

// for (let i = 0; i < Object.keys(myObject).length; i++) {
//   console.log(myObject.a, myObject.b, myObject.c);
// }

for (let prop in myObject) {
  console.log(`${prop} : ${myObject[prop]}`);
}

// Output
console.log(myObject);
