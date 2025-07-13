/*
    BOM [Browser Object Model]
        - Practice => Scroll To Top
        - scrollX [Alias => PageXOffset]
        - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector('button');

console.log(btn);

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= 800) {
//     // console.log(`Scrolling Y Value is ${window.scrollY}`);
//     btn.style.display = 'block';
//   } else {
//     btn.style.display = 'none';
//   }
// });

window.addEventListener('scroll', () => {
  window.scrollY >= 800
    ? (btn.style.display = 'block')
    : (btn.style.display = 'none');
});

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: 'smooth',
  });
});
