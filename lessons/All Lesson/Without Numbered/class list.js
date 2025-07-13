/*
    DOM [Class List]
    - classList
    --- length
    --- contains
    --- item(index)
    --- add
    --- remove
    --- toggle
*/

let element = document.getElementById('my-div');

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains('two'));

console.log(element.classList.item(0));

element.onclick = function () {
  //   element.classList.add('add-one', 'add-two');
  element.classList.toggle('user');
};
