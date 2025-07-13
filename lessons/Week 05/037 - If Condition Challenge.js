/*
    If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log('10 To 40');
} else if (a > 40) {
  console.log('> 40');
} else {
  console.log('Unknown');
}

let result =
  a < 10 ? 10 : a >= 10 && a <= 40 ? '10 to 40' : a > 40 ? '> 40' : 'Unknown';

console.log(result);

// Write Previous Condition With Ternary If Syntax
let st = 'Elzero Web School';

if ((st.length * 2).toString() === '34') {
  console.log('Good');
} else {
  console.log('Bad');
}

// W Position May Change
if (st.charAt(7).toLowerCase() === 'w') {
  console.log('Good');
}

if (parseInt(st) !== 'string') {
  console.log('Good');
}

if (typeof Number(st) === 'number') {
  console.log('Good');
}

if (st.slice(0, 6).repeat(2) === 'ElzeroElzero') {
  console.log('Good');
}
