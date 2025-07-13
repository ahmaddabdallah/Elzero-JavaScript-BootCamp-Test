/*
    Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// Write Code Here

console.log((`${my[counter]},` + my.slice(zero, counter).reverse()).split(',')); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(zero, counter).reverse());

console.log(my.slice(zero.toString().length, counter).reverse()); // ["Elham", "Mazero"]

// Another Answers 2
// console.log(my.slice(zero + true, counter).reverse()); // ["Elham", "Mazero"]

// Another Answers 3
// console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

my.unshift('Elzero');

console.log(`"${my[zero]}"`); // "Elzero"

console.log(
  my[zero].slice(-counter + true).charAt('r') +
    my[zero].slice(my.length - counter + true).toUpperCase()
); // "rO"

// console.log(my.sort());
