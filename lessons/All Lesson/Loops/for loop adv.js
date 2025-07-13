// For loop Advanced practice

let products = ['Keyboard', 'Mouse', 'Pen', 'Pad', 'Monitor'];

let i = 0;

for (; i < products.length; ) {
  console.log(products[i]);
  i++;
  if (i < products.length) {
    break;
  }
}
