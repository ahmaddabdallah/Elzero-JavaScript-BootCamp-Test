/*
    BOM [Browser Object Model]
        - setTimeout(Function, Timeout, Additional Params)
        - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log(`Message from SetTimer Out`);
// }, 3000);

let handler = setTimeout(sayMessage, 3000, 'Ahmad', 17);

function sayMessage(userName, age) {
  console.log(`I am Message for ${userName} , Your Age Is ${age}.`);
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => clearTimeout(handler));
