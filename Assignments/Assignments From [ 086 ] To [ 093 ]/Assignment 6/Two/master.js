// Assignment Six

const eleNumber = document.getElementsByClassName('input')[0];
const mainForm = document.forms[0];
const typeElement = document.getElementsByTagName('select')[0];
const text = document.querySelector('[name = texts]');
const result = document.getElementsByClassName('results')[0];

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelectorAll('.box').forEach((ele) => ele.remove());

  for (let i = 1; i <= eleNumber.value; i++) {
    let myElement = document.createElement(typeElement.value);
    let myText = document.createTextNode(text.value);

    myElement.className = 'box';
    myElement.title = 'Element';
    myElement.id = `id-${i}`;

    myElement.appendChild(myText);
    result.appendChild(myElement);
  }
});
