/*
    Function
        - Rest Parameters
        - Only One Allowed
        - Must Be Last Element
        - A function definition can only have one rest parameter.
        - The rest parameter must be the last parameter in the function definition.
        - Trailing commas are not allowed after the rest parameter.
        - The rest parameter cannot have a default value.
*/

function calc(...numbers) {
  //   console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Result is : ${result}`;
}
console.log(calc(10, 20, 10, 30, 50, 30));

// Example Two

function myFun(a, b, ...manyMoreArgs) {
  console.log('a', a);
  console.log('b', b);
  console.log('manyMoreArgs', manyMoreArgs);
}

myFun('one', 'two', 'three', 'four', 'five', 'six');

/*
Output ==>
  - Console Output:
  - a, one
  - b, two
  - manyMoreArgs, ["three", "four", "five", "six"]
*/
