// Assignment Four
/* Counter Down With Location href*/

let div = document.querySelector('.count-down');

let counter = setInterval(() => {
  div.innerHTML -= 1;
  if (div.innerHTML === '0') {
    clearInterval(counter);
    location.href = 'https://elzero.org';
  }
}, 1000);
