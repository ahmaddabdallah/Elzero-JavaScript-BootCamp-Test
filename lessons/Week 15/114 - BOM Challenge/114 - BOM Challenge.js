/* 114 - BOM Challenge */

const myInput = document.querySelector('.input');
const submitElement = document.querySelector('.add');
const taskDiv = document.querySelector('.tasks');
const myFrom = document.forms[0];

myFrom.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Add Task

submitElement.addEventListener('click', () => {
  let myText = myInput.value;
  if (myText !== '') {
    addContentToArray(myText); // Add Tasks to the Array
    input.value = ''; // Empyt Input Field
  }
});

function addContentToArray(taskText) {
    
}
