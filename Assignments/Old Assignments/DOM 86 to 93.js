// Assignment one

let images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
  images[i].src = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
  images[i].setAttribute('alt', 'Elzero Logo');
  images[i].style.cssText = 'background-color: skyblue;';
}
