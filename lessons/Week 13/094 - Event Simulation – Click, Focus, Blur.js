/*
    DOM [Events Simulation]
        - click
        - focus
        - blur
*/

let one = document.querySelector('.one');
let two = document.querySelector('.two');

window.onload = () => two.focus();

one.onblur = () => document.links[0].click();
