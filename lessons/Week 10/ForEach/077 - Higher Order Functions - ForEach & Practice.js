/*
    - forEach
        => method executes a provided function once for each array element.

    Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
        - Element => The current element being processed in the array.
        - Index => The index of the current element being processed in the array.
        - Array - The Current Array

    Note
        - Doesnt Return Anything [Undefined]
        - Break Will Not Break The Loop
*/
/*
    The HTML Code:
    <ul>
        <li class="active">One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
    <div class="content">
        <div>Div One</div>
        <div>Div Two</div>
        <div>Div Three</div>
    </div>
*/

let allLis = document.querySelectorAll('ul li');
let allDivs = document.querySelectorAll('.content div');

// allLis.forEach(function (ele) {
//   // Add active Class
//   ele.addEventListener('click', () => {
//     // Remove Active Class
//     allLis.forEach((ele) => {
//       ele.classList.remove('active');
//     });
//     ele.classList.add('active');

//     // Hide All divs Expect entire Div

//     allDivs.forEach((div) => {
//       div.style.display = 'none';
//     });
//   });
// });

// Style inside Real World Apps

// allLis.forEach((li, index) => {
//     li.addEventListener('click', () => {
//       // Remove active class from all list items
//       allLis.forEach((item) => item.classList.remove('active'));
//       // Add active class to clicked item
//       li.classList.add('active');

//       // Hide all divs
//       allDivs.forEach((div) => {
//         div.style.opacity = '0';
//         div.style.transform = 'scale(0.8)';
//       });

//       // Show the corresponding div with animation
//       setTimeout(() => {
//         allDivs[index].style.opacity = '1';
//         allDivs[index].style.transform = 'scale(1)';
//       }, 300);
//     });
//   });

//   // Initialize the first div as visible
//   allDivs[0].style.opacity = '1';
//   allDivs[0].style.transform = 'scale(1)';
