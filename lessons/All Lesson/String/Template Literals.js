/*
Template Literals (Template Strings)
*/

// First Example

let a = "I love Python";
let b = "PHP";
let c = ", SQl";
let d = "and laravel";

console.log(a + " " + b + " " + c + " " + d); //old syntax in javascript => concatenate

console.log(`${a} ${b} "" '' \\ ${c} ${d}`); //Es6 => the new syntax in javascript => concatenate

// Second Example

let markUp = `
<div class="card">
<div class="child">
    <h2>Card one</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis, distinctio debitis delectus consectetur natus nulla? Quasi molestiae voluptas nobis.</p>
</div>
</div>
`;

document.write(markUp)