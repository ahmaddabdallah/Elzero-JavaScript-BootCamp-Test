/*
    Console Methods
        - log
        - error
        - table

    Web API
        - Resources => https://developer.mozilla.org/en-US/docs/Web/API

    Styling Console
        - Directive %c
*/

console.log('Log');
console.error('Error');
console.table(['Osama', 'Ahmed', 'Sayed']);

console.log(
  'Hello From %cJS %cFile',
  'color: red; font-size: 40px',
  'color: blue; font-size: 40px'
);

// Style with background
console.log(
    '%cImportant Message',
    'background: #222; color: #bada55; font-size: 25px; padding: 10px;'
);
