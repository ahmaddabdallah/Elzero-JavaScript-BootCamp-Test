/*
Output:
        10
        09
        08
        07
        06
        05
        04
        03
        */

let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
  if (i === stop) {
    break;
  }
  if (i < start) {
    console.log(`0${i}`);
  } else {
    console.log(`${i}`);
  }
}
