// Assignment Five: Reduce with Conditional Operations

let numbers = [2, 12, 11, 5, 10, 1, 99];

let evenNum = numbers.reduce(
  (acc, current) => (current % 2 !== 0 ? current + acc : current * acc),
  1
);

console.log(evenNum);

// 500
