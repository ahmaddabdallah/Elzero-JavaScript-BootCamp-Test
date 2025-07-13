/*
    Function Advanced Examples
*/

function sayHello(userName, age) {
  return age < 20
    ? `You app is not suitable For You !!`
    : `Hello ${userName} , App is good for you.`;
}

console.log(sayHello('Osama', 38));
console.log(sayHello('Sayed', 40));
console.log(sayHello('Ali', 18));

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);
