/*
    - forEach
    --- method executes a provided function once for each array element.

    Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array - The Current Array

    Note
    - Does n't Return Anything [Undefined]
    - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (element) {
    element.onclick = function() {
        // Remove active class
        allLis.forEach(function (element) {
            element.classList.remove("active")
        })
        this.classList.add("active")
        // Hide all divs
        allDivs.forEach(function (ele) {
            ele.style.display = "none"
        })
    }
})


