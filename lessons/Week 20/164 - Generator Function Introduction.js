/*
    Generators
        - Generator Function Run Its Code When Required.
        - Generator Function Return Special Object [Generator Object]
        - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
//   alert('Yield One');
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());

// NOTE: Looping Through the Object

for (let i of generateNumbers()) {
  console.log(i);
}
