/*
  BOM [Browser Object Model]
  - setInterval(Function, Mill Seconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let divFive = document.getElementById('five');
let counter = setInterval(countDown, 1000);

let counterStart = document.getElementById('counterStart');

function countDown() {
  divFive.innerHTML -= 1;

  if (divFive.innerHTML === '0') {
    clearInterval(counter);
  }
}

counterStart.addEventListener('click', countDown);
