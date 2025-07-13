/*
    Map And Set + What You Learn => Challenge

    Requirements:
        - You can't use numbers, true, or false directly
        - Don't use array indexes
        - You can't use loops
        - You can't use any higher order function (like map, filter, reduce, etc.)
        - Only one line solution inside console
        - If you use length, then only one time

    Hints:
        1. Use the Set object to remove duplicates from the array.
        2. Use the spread operator (...) to expand the Set back into an array.
        3. Use Math object methods (like Math.min, Math.max, Math.pow, etc.) for calculations.
        4. You can use the * (multiplication) operator in your calculation.
        5. Try to use array length property only once if needed.
        6. Think about how to access elements without using indexes or numbers directly.
        7. Combine all the above in a single console.log statement.
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// IMPORTANT
// console.log(n1[n2.length]);

let test =
  Math.min(...[...new Set(n1)]) * Math.max(...n2) - Math.max(...n2) * n2.length;

console.log(test); // 210
