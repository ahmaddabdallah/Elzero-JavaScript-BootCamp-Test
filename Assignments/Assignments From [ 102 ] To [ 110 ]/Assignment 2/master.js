/* Assignment Two */

/*
    Problem Explanation:

    1. Create a function that generates a popup inside the page
    2. The popup should contain a Close button
    3. When the Close button is clicked, it should remove the popup from the page
    4. The function should be executed after 5 seconds from the page load

    This assignment tests your ability to:
    - Create and manipulate DOM elements
    - Handle events (click events)
    - Use setTimeout to delay code execution
    - Implement a simple popup/modal functionality
*/

// function popupElementTwo() {
//   let btn = document.querySelector('.btn-one');
//   let popupElement = document.getElementsByClassName('popup-one')[0];
//   btn.addEventListener('click', () => (popupElement.style.display = 'none'));
//   popupElement.style.display = 'none';
// }

// setTimeout(popupElementTwo, 1000);
// popupElement.style.display = 'block';

// popupElementTwo();

function createPopup() {
  // Create popup element
  let popupElement = document.createElement("div");
  popupElement.className = "popup-one";
  popupElement.textContent = "Welcome!";

  // Create close button
  let closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "btn-one";

  // Add event listener to close button
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popupElement);
  });

  // Append close button to popup
  popupElement.appendChild(closeButton);

  // Add popup to the document
  document.body.appendChild(popupElement);
}

setTimeout(createPopup, 5000);
