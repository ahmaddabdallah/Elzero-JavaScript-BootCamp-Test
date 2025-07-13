/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(() => {
//   console.log('Hello, World!');
// }, 3000);

// setTimeout(sayMsg, 3000 , "Ahmad" , 16);

// function sayMsg(user , age) {
//   console.log(`I am Message for ${user} and Your age Is => ${age}`);
// }

let counterTime = setTimeout(sayMsg, 3000);

function sayMsg() {
  console.log(`I am Message`);
}

let clearBtn = document.getElementById('clearTime');

clearBtn.addEventListener('click', () => {
  clearTimeout(counterTime);
});
