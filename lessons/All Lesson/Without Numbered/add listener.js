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

let myP = document.getElementById('my-P');

// myP.onclick = function () {
//   console.log('Hello form JS File');
// };

// myP.addEventListener("click" , function () {
//   console.log('Hello form JS File');
// })

// myP.addEventListener("click" , "string") //Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = 'newP';
  document.body.appendChild(newP);
};

// let New = document.querySelector('.newP');
// New.onclick = function () {
//   console.log('New P clicked');
// };

document.addEventListener('click', function (e) {
  if (e.target) {
    console.log(e.target);
  }
});

// myP.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.target); }
