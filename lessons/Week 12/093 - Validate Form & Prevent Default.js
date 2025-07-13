/*
    DOM [Events]
        - Validate Form Practice
        - Prevent Default
*/

// document.links[0].onclick = (e) => {
//   console.log(e);
//   e.preventDefualt();
// };

let userInput = document.querySelector(`[name="username"]`);
let ageInput = document.querySelector(`[name="age"]`);

document.forms[0].addEventListener('submit', (e) => {
  let userVaild = false;
  let ageVaild = false;

  // console.log(userInput.value);
  // console.log(userInput.value.length);

  if (userInput.value !== '' && userInput.value.length <= 15) {
    userVaild = true;
  }

  if (ageInput.value !== '') {
    ageVaild = true;
  }

  if (userVaild === false || ageVaild || false) {
    e.preventDefault();
  }
});
