/*
    Function
        - Return
        - Automatic Semicolon Insertion [No Line Terminator Allowed]
        - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `Interrupting`;
    }
  }
}
generate(10, 20);
