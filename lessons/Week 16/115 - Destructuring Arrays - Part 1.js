/*
    Destructuring:
        is a JavaScript expression that allows us to extract data from arrays,
        objects, and maps and set them into new, distinct variables.
    - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ['Ahmad', 'Ali', 'Asmaa', 'Hassan'];

[a, b, c] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);
