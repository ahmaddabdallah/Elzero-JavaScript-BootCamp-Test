/*
    BOM [Browser Object Model]
    Session Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    Info
    - New Tab = New Session
    - Duplicate Tab = Copy Session
    - New Tab With Same Url = New Session
*/

// localStorage.setItem("color" , "blue")
// sessionStorage.setItem("color" , "red")

let inputText = document.getElementsByClassName('name')[0];

inputText.onblur = () => {
  let inputValue = inputText.value;
  sessionStorage.setItem('name', inputValue);
};
