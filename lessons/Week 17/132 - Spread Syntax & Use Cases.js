/*
    Spread Operator => ...Iterable
        Allow Iterable To Expand In Place
*/

// HACK: Spread With String => Expand String

console.log('Osama');
console.log(...'Osama'); // NOTE: O s a m a
console.log([...'Osama']);

// TODO: Concate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let contactAray = [...myArray1, ...myArray2];

console.log(contactAray);
console.log('------------------------------');

// IDEA: Copy Array

let copiedArray = [...myArray1];

console.log(copiedArray);
console.log('------------------------------');

// NOTE: Push Inside Array

let allFrineds = ['Ahmad', 'Ali', 'Osama'];
let thisYearFriends = ['Asmaa', 'Yara'];

// IMPORTANT
// allFrined.push(thisYearFriends); // NOTE: Add the elements as a Array (one Element)
allFrineds.push(...thisYearFriends);

console.log(allFrineds);

console.log('------------------------------');

// MATH Object

let myNums = [10, 23, 3, -40, -50];

console.log(Math.max(...myNums));

// Spread Object

let objOne = {
  a: 5,
  b: 16,
};

let objTwo = {
  t: 3,
  g: 12,
};

console.log({ ...objOne, ...objTwo  , e: 4});
