// Assignment Five

let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];

// Method One

if (haystack.includes(needle)) {
  console.log('Found');
}

if (haystack.indexOf(needle) !== -1) {
  console.log('Found');
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log('Found');
}
