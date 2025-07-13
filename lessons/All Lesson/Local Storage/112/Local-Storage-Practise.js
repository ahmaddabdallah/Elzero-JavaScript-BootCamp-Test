/*
    BOM [Browser Object Model]
    Local Storage Practice
*/

let lis = document.querySelectorAll('li');
let myDiv = document.getElementById('result');

// localStorage.clear();

if (localStorage.getItem('color')) {
  // If you found the current color

  //   [1] add color to Div
  myDiv.style.backgroundColor = localStorage.getItem('color');

  //   [2] Remove Active class
  lis.forEach((li) => {
    li.classList.remove('active');
  });

  //   [3] add the active Class to Current Color
  document
    .querySelector(`[data-color=${localStorage.getItem('color')}]`)
    .classList.add('active');
}

lis.forEach((li) => {
  li.addEventListener('click', (e) => {
    // console.log(e.currentTarget.dataset.color)

    // Remove the active Class for the all lis
    lis.forEach((li) => {
      li.classList.remove('active');
    });

    //   Add active class to the current Link
    //   li.addEventListener('click', () => {
    //     li.classList.add('active');
    //   });

    //   Add active class to the current Link
    e.currentTarget.classList.add('active');

    // Add color to the local Storage

    localStorage.setItem('color', e.currentTarget.dataset.color);

    // Change div to the Current Color
    myDiv.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
