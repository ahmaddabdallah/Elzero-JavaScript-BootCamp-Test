/*
    Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, b, c, d));

// Another Solution
console.log(Math.min(...[a, b, c, d]));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));

// Use Variables b + d To Get This Values
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Number(parseInt(b) / Math.ceil(d).toFixed(2))); // 67 => Number
console.log(typeof Number(parseInt(b) / Math.ceil(d).toFixed(2))); // 67 => Number
