/*
    Loop Challenge
*/

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera', 'Asmaa'];
let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
  'Anwar',
];

let myAdminLength = 0;

for (let k = 0; k < myAdmins.length; k++) {
  if (myAdmins[k] == 'Stop') {
    break;
  } else {
    myAdminLength += 1;
  }
}

document.write(`<h3>We Have ${myAdminLength} Admins</h3>`);
for (let i = 0; i < myAdmins.length; i++) {
  document.write('<div>');
  if (myAdmins[i] == 'Stop') break;
  document.write(`<h4>The Admin for Team ${i + 1} is ${myAdmins[i]}</h4>`);
  let counter = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] == myEmployees[j][0]) {
      document.write(`<p>${counter}- ${myEmployees[j]}</p>`);
      counter++;
    }
  }
  document.write('</div>');
  document.write('<hr>');
}
