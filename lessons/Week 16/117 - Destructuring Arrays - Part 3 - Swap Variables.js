/*
    Destructuring
        - Destructuring Array => Swapping Variables
*/

let book = 'Video';
let video = 'Book';

// TODO: Old way to swap Elements

// NOTE: Save New Value of Book in Stash
// let stash = book;

// // NOTE: Swap Element
// book = video;
// video = stash;

// // Ouptut
// console.log(`Book : ${book}`);
// console.log(`Video : ${video}`);

console.log("---------------------");

// TODO: New Feature of ES6

// [book, video] = [video, book];
[book, video] = ["Book" , "Video"];

// Ouptut
console.log(`Book : ${book}`);
console.log(`Video : ${video}`);
