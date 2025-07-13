// Assignment One [BOM]

/*
    Problem Explanation:

    1. Use the Prompt method to get a message from the user
    2. The prompt message will be "Print Number From – To"
    3. The default message will be "Example: 5-20"
    4. The user will enter two numbers separated by a dash (-)
    5. The first number could be larger than the second or vice versa
    6. In both cases, we need to print the numbers on the page from the smaller number to the larger number

    For example, if the user enters "5-20", we print numbers from 5 to 20.
    If the user enters "20-5", we still print numbers from 5 to 20.
*/


// Get input from user
let promptMsg = prompt('Print Number From – To', 'Example: 5-20');

// Extract the two numbers from the input
let numbers = promptMsg.split('-');
let num1 = parseInt(numbers[0]);
let num2 = parseInt(numbers[1]);

// Determine which number is smaller and which is larger
let start = Math.min(num1, num2);
let end = Math.max(num1, num2);

for (let i = start; i <= end; i++) {
  let newElement = document.createElement('p');
  newElement.textContent = i;
  document.body.appendChild(newElement)
}
