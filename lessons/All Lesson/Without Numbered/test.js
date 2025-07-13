// /* JS Revision */

// function operation() {
//   let getNum1 = parseInt(document.getElementsByTagName('input')[0].value);
//   let getNum2 = parseInt(document.getElementsByTagName('input')[1].value);
//   let operator = document.getElementById('operator').value;
//   let result = document.getElementById('result');
//   result.textContent = eval(getNum1 + operator + getNum2);
// }
// let x;

// console.log(x);
// console.log(typeof x);

// console.log(typeof null);
// console.log(typeof NaN);

// console.log(6 + '6');
// console.log(6 - '6');
// console.log(6 - 'Ahmad');

// /*
//     if (condition) {
//         statement if certain condition if true
//     } else {
//         statement if certain condition if false
//     }

//     Ternary Operator
//     => condition ? if true : if false

// */

// let age = 15;
// let sumAge =
//   age >= 18
//     ? `Your age Is => ${age} . So You are Above Of the Certain Age`
//     : `Your age Is => ${age} . So You are Under Of the Certain Age`;

// console.log(sumAge);

// /* Switch */

// /*
//     switch(expression) {
//         case 1:
//         code block 1
//         break;
//         case 2:
//         code block 2
//         break;
//         default:
//         code block 3
//         break;
// }
// */

// /* loops */

// /*
//     while (condition) {
//         loop code;
//     }

//     for (begin; condition; steps) {
//         loop code;
//     }

//     do {
//         statement
//     } while (condition) {

//     }
// */

// let element = document.getElementById('element');

// // element.outerHTML = '<p>this is a outerHTML content</p>';
// // element.innerHTML = '<p>this is a innerHTML content</p>';

// function testScope() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//   }
//   console.log(`This is a value of a Is => ${a}`);
//   //   console.log(`This is a value of b Is => ${b}`);
// }
// testScope();
// // console.log(a); // ReferenceError: a is not defined

// let person = { name: 'Ahmad', age: 18, IT: 'IT' };

// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

function totalNums() {
  let numbers = [1, 2, 3, 4, 5];
  let doubledNums = numbers.map((num) => num * 3);
  let evenNums = doubledNums.filter((x) => x % 2 === 0);
  console.time(totalNums);
  console.log(evenNums);
}
