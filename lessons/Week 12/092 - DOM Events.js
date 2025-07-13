/*
    DOM [Events]
        - Use Events On HTML
        - Use Events On JS
            --- onclick
            --- oncontextmenu
            --- onmouseenter
            --- onmouseleave

            --- onload
            --- onscroll
            --- onresize

            --- onfocus
            --- onblur
            --- onsubmit
*/

let myBtn = document.getElementById('btn');

myBtn.onmouseleave = () => {
  console.log('Clicked');
};

window.onresize = () => {
  console.log('Scroll');
};
