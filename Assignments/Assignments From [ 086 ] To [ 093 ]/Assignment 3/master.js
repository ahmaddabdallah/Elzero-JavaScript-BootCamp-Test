// Assignment Three

const input = document.getElementsByName('dollar')[0];
const usDollar = document.getElementsByClassName('us-dollar')[0];
const egPound = document.getElementsByClassName('eg-pound')[0];

input.addEventListener('input', () => {
  usDollar.innerHTML = input.value;
  egPound.innerHTML = (input.value * 49.70).toFixed(2);
});

document.forms[0].onsubmit = (e) => e.preventDefault();

// Extra Work To Prevent Writing " - e + " in input
// currInp.onkeydown = (e) => {
//   if (['-', '+', 'e'].includes(e.key)) e.preventDefault();
// };
