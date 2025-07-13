/*
    Control Flow
    - if
    - else if
    - else

    if (Condition) {
        Block Of Code
    }
*/

let price = 150;
let discount = false;
let discount_amount = 30;
let country = 'KSA';

if (discount == true) {
  price -= discount_amount;
  console.log(price);
} else if (country == 'Egypt') {
  price -= 50;
  console.log(price);
} else if (country == 'Syria') {
  price -= 70;
  console.log(price);
} else {
  console.log('Unknown country');
}
