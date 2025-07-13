let start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];
/*
    Output:
        2
        3
        4
*/

for (let i = start; i < mix.length; i++) {
  if (mix[i] == mix[start]) {
    continue;
  } else if (typeof mix[i] == 'string') {
    continue;
  }
  console.log(mix[i]);
}
