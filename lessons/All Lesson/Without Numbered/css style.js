/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let element = document.getElementsByClassName('two')[0];

element.style.cssText = 'font-weight:bold;font-size: 60px;color: red;';

element.style.removeProperty('color');

// Old way to write this rules
console.log(
  document.styleSheets[0].cssRules[0].style.removeProperty('line-height')
);

// New way to write this property
document.styleSheets[0].cssRules[0].style.removeProperty('letter-spacing');
document.styleSheets[0].cssRules[0].style.setProperty('color', 'red');
