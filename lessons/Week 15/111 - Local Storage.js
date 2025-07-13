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

// Set Item

localStorage.setItem(`Key`, `value`);
localStorage.fontSize = '20px';
localStorage['fontWeight'] = 'bold';
localStorage.setItem('backgroundColor', '#333');

// Get Item

console.log(localStorage.getItem('Key'));
console.log(localStorage.fontSize);
console.log(localStorage['fontWeight']);

// Set the color inside Page

document.body.style.backgroundColor = localStorage.backgroundColor;

// Remove Items

localStorage.removeItem('backgroundColor');

// Clear All

localStorage.clear();
