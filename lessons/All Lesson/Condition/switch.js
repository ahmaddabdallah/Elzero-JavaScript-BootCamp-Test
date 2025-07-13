/*
    Switch Statement
    switch(expression) {
    Case 1:
        Code Block
    break;
    Case 2:
        Code Block
    break;
    Default:
        Code Block
    }
    - Default Ordering
    - Multiple Match
    - ===
*/

let day = 8;

switch (day) {
  default:
    console.log('Unknown day');
    break;
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('Monday');
    break;
  case 3:
    console.log('Tuesday');
    break;
}
