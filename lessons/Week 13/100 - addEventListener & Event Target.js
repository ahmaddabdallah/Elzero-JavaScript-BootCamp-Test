/*
    DOM [Add Event Listener]
        - addEventListener
        - Use Without On
        - Attach Multiple Events
        - Error Test

    Search
        - Capture & Bubbling JavaScript
        - removeEventListener
*/

let myP = document.querySelector('p');

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error (Object or Function)

myP.addEventListener('click', () => {
  let newP = myP.cloneNode(true);
  newP.className = 'clone';
  document.body.appendChild(newP);
});

// let cloned = document.querySelector('.clone');

document.addEventListener('click', (ele) => {
  if (ele.target.className === 'clone') {
    // console.log(ele.target);
    console.log('I am Cloned !');
  }
});
