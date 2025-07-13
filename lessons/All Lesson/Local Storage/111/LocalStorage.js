/*
    BOM [Browser Object Model]
    Local Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    Info
    - No Expiration Time
    - HTTP And HTTPS
    - Private Tab
*/

// Local Storage

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

// Set
localStorage.setItem('name', 'Ahmad');
let colorRedSet = localStorage.setItem('color', 'red');
localStorage.fontWeight = 'bold';
localStorage['Age'] = 18;

// Get

console.log(localStorage.getItem('name'));

let colorRedGet = localStorage.getItem('color');

// console.log(localStorage.name);
// console.log(localStorage['name']);

// Set to the Page
document.body.style.backgroundColor = colorRedGet;

// Remove on the Specific Element

// localStorage.removeItem("name")

// Remove all The Elements

localStorage.clear();
