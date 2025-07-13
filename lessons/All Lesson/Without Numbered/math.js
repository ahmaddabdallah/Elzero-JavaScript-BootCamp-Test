// Math properties

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

let array = [-100, 2, 3, 4];

console.log(`This Is The smallest Value on this Array ${Math.min(...array)}`);

let element = document.createElement('button');
element.textContent = 'This is a Div';
document.body.appendChild(element);

element.onclick = () => {
  console.log('Clicked');
};

// element.addEventListener('click', () => {
//   console.log('Hello world');
// });

let myFriends = ['7', '8', '1', '8', '3', '6', '3', '2', '9', '6'];

let randomNames = Math.floor(Math.random() * myFriends.length);

console.log(myFriends[randomNames]);
