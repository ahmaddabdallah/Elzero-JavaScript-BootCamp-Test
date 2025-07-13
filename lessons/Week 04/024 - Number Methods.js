/*
    Number Methods
        - Two Dots To Call A Method
        - toString()
        - toFixed()
        - parseInt()
        - parseFloat()
        - isInteger() [ES6]
        - isNaN() [ES6]
*/

console.log((100).toString());
console.log(typeof (100).toString());
console.log((100.1).toString());

console.log('---- To Fixed ----');
console.log((100.554555).toFixed(2)); // Return a String
console.log(typeof (100.554555).toFixed(2)); // Return a String
console.log(typeof Number((100.554555).toFixed(2))); // Return a Integer
console.log('--------------');

console.log(Number('100 Osama'));
console.log(+'100 Osama');
console.log('--------------');
console.log(parseInt('100 Osama'));
console.log(parseInt('Osama 100 Osama'));
console.log(parseInt('100.500 Osama'));
console.log(parseFloat('100.500 Osama'));

console.log(Number.isInteger('100'));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN('Osama' / 20));
