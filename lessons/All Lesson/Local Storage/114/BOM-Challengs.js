/* BOM Challenge */

const inputOne = document.getElementById('inputOne');
const addTask = document.getElementById('addTask');
const ul = document.querySelector('ol');
const result = document.querySelector('.result');
let dataUl = localStorage.getItem('dataTask');

document.addEventListener('DOMContentLoaded', () => {
  addTask.addEventListener('click', () => {
    const inputValue = inputOne.value.trim();
    if (inputValue.value !== '') {
      let newLi = document.createElement('li');
      newLi.textContent = inputValue;
      ul.appendChild(newLi);
      result.appendChild(ul);
      inputOne.value = '';
    }

    localStorage.setItem('dataTask', result);
  });
});
