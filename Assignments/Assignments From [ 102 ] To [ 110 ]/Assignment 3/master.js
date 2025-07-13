// Assignment Three
/* Counter Down */

let counterEle = document.getElementById('countDown');

// function counterDown() {
//   counterEle.innerHTML -= 1;
//   if (parseInt(counterEle.innerHTML) === 0) {
//     clearInterval(counterVar);
//   }
// }

let counterVar = setInterval(() => {
  counterEle.innerHTML -= 1;
  if (parseInt(counterEle.innerHTML) === 0) clearInterval(counterVar);
}, 500);
