// document.write("<h1>Elzero</h1>");

// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

// console.log("%cElzero web school" , "color:red;font-size:50px;")

// console.table(["Ahmad" , "Abdallah" , "Mohamed])

let head = document.write('<h2>Page one</h2>');

document.querySelector('h2').style.color = 'red';
document.querySelector('h2').style.fontSize = '50px';
document.querySelector('h2').style.textAlign = 'center';
document.querySelector('h2').style.margin = '20px';

console.log('Hello world!');
console.error('Warning');
console.table(['Ahmad', 'Shawn', 'Helen', 'fofatsi@keb.rw']);

console.log(
  '%cElzero %c web %c school',
  'color:red;font-size:40px;',
  'color:green;font-size:40px;font-weight:bold;',
  'color:blue;font-size:40px;'
);

let head_2 = document.createElement('h2');
let text = document.createTextNode('This is head 2');
head_2.style.color = 'blue';
head_2.style.fontSize = '50px';
head_2.style.textAlign = 'center';
head_2.style.margin = '20px';

let text_app = head_2.appendChild(text);
document.body.appendChild(head_2);
