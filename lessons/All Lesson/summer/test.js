console.log('Hello world');
console.error('Hello world');
console.table([1, 2, 3, 5, 6, 7, 8, 9, 10]);

console.log('This is the outer level');
console.group('First group');
console.log('In the first group');
console.group('Second group');
console.log('In the second group');
console.warn('Still in the second group');
console.groupEnd();
console.log('Back to the first group');
console.groupEnd();
console.debug('Back to the outer level');

document.write('<h2>Ahmad</h2>');
document.querySelector('h2').style.color = 'red';
