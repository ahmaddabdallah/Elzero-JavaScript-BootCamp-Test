/*
    Number
        - Double Precision
        - Syntactic Sugar "_"
        - e
        - **
        - With Decimal
        - Number + BigInt
        - Number Min Value
        - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);

let x = 10;
let y = 20;
console.log(x + y); // 30
console.log('The result is : ' + x + y); // 1020
console.log(`The result is : ${x + y}`); // The result is : 30
