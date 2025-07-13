/*
    DOM [Create Elements]
        - createElement
        - createComment
        - createTextNode
        - createAttribute
        - appendChild
*/

// Create Element
let myElement = document.createElement('div');
let myAttribute = document.createAttribute('data-custom');
let myText = document.createTextNode('Product One');

// Add Class Name
myElement.classList.add('Parent');
// myElement.className = "Test"

myElement.setAttributeNode(myAttribute);

// Append myText to ELement
myElement.appendChild(myText);


// Append Element to the Body

document.body.appendChild(myElement);

console.log(myElement);
