/*
    DOM [Deal With Elements]
        - before [Element || String]
        - after [Element || String]
        - append [Element || String]
        - prepend [Element || String]
        - remove
*/

const element = document.getElementById('my-div');
const createdP = document.createElement('p');
const txt = document.createTextNode('Paragraph');

createdP.appendChild(txt);

// element.before('Hello From JS.');
element.after(createdP);

element.remove();
