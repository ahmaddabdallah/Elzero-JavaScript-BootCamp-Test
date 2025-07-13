/*
    Nested if
*/

let price = 150;
let discount = false;
let discount_amount = 30;
let country = 'Egypt';
let student = true;

if (discount == true) {
  price -= discount_amount;
  console.log(price);
} else if (country == 'Egypt') {
  if (student == true) {
    price -= 10;
    console.log(price);
  } else if (student == false) {
    price -= 5;
    console.log(price);
  }
} else if (country == 'Syria') {
  price -= 35;
  console.log(price);
} else {
  console.log('Unknown country');
}
