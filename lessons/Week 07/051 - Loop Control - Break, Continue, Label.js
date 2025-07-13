/*
    Loop Control
        - Break
        - Continue
        - Label
*/

let products = ['Keyboard', 'Mouse', 'Pen', 'Pad', 'Monitor'];

let colors = ['Red', 'Green', 'Black'];

for (let i = 0; i < products.length; i++) {
  if (products[i] == "Pad") {
    break
  } else {
      console.log(products[i]);
  }

  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
}