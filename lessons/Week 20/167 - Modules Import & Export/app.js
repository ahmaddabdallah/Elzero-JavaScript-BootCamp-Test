// Error: Cannot use import statement outside a module
// This error occurs if you try to use import/export in a script without type="module" in HTML,
// or if the file is not served via HTTP(s) (file:// protocol does not support modules in most browsers).

import { a, arr, saySomething } from './main.js';

console.log(a);
console.log(arr);
console.log(saySomething());
