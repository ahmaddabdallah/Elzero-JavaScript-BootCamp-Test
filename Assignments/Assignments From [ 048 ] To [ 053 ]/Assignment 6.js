// Output
// "ELzERo"

let start = 0;
let swappedName = 'elZerO';
let newArray = [];

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toUpperCase()) {
    newArray.push(swappedName[i].toLowerCase());
  } else {
    newArray.push(swappedName[i].toUpperCase());
  }
}
console.log(newArray.join(''));
