/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// window.alert('test');
// this.alert('test');
// alert('test');

// let confirmMessage = confirm('Are you good at Play FootBall ??');

// if (confirmMessage === true) {
//   console.log('Deleted');
// } else {
//   console.log('Ignore Deleted');
// }

let promptMessage = prompt('Good Day to You', 'Write day with 3 Charters');

console.log(promptMessage);
