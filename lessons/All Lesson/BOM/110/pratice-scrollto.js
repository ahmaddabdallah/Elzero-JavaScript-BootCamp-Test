/*
    BOM [Browser Object Model]
    - Practice => Scroll To Top
    - scrollX [Alias => PageXOffset]
    - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

const btnTop = document.getElementById('btnTop');

window.onscroll = function () {
  if (window.scrollY >= 600) {
    // console.log(`Scrolling Y is => ${window.scrollY}`)
    btnTop.style.display = 'block';
  } else btnTop.style.display = 'none';
};

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
