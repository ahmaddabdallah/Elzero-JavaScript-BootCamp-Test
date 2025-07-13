// localStorage Practise

// TODO : Note
// console.log(e.currentTarget.dataset.color);

let lis = document.querySelectorAll('ul li');
let myDiv = document.querySelector('.experiment');

if (localStorage.getItem('color')) {
  // Add Div to Current Background
  myDiv.style.backgroundColor = localStorage.getItem('color');

  // Remove Active Class from all Elements
  lis.forEach((rmEle) => {
    rmEle.classList.remove('active');
  });

  // Add active class to the saved color element
  document.querySelector(`[data-color="${localStorage.getItem('color')}"]`).classList.add("active");
}

lis.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    // Remove Active Class from all Elements
    lis.forEach((rmEle) => {
      rmEle.classList.remove('active');
    });

    // Add Active Class To Clicked Element
    e.currentTarget.classList.add('active');

    // Update Background Color and LocalStorage
    const color = e.currentTarget.dataset.color;
    myDiv.style.backgroundColor = color;
    localStorage.setItem('color', color);
  });
});
