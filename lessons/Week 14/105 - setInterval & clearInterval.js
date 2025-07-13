/*
    BOM [Browser Object Model]
        - setInterval(Function, Millseconds, Additional Params)
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

let div = document.querySelector('.count-down');

function countDown() {
    div.innerHTML -= 1
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
}

let counter = setInterval(countDown, 1000);
