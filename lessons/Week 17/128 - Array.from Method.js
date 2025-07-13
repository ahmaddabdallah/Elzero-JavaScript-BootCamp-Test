/*
    Array Methods
        - Array.from(Iterable, MapFunc, This)
            --- Variable
            --- String Numbers
            --- Set
            --- Using The Map Function
            --- Arrow Function
            --- Shorten The Method + Use arguments
*/

// Array From Osama (String)
console.log(Array.from('Osama'));
console.log(typeof Array.from('Osama')); // TODO: Data Type Object

// NOTE: Not Iterable
console.log(Array.from('123456', (n) => +n + +n));

// TODO: Return Only the Unique Values

let myArray = [1, 1, 2, 3, 3, 4, 4, 5];

let uniqueValue = new Set(myArray);
console.log(uniqueValue);

// console.log([...new Set(myArray)]); // NOTE: Future Lessons

// NOTE: Arguments

function af() {
  return Array.from(arguments)
}

console.log(af("Ahmad" , "Ali" , "Osama"));

