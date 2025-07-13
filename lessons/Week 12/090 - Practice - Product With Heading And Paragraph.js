/*
    DOM [Create Elements]
        - Practice Product With Heading And Paragraph
*/

// Add CSS styles to the document head

for (let i = 1; i <= 100; i++) {
  const mainDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const myAttribute = document.createAttribute('product');
  const myParagraph = document.createElement('p');

  const myHeading = document.createTextNode(`Product ${i}`);
  const myText = document.createTextNode(`Text Description ${i}`);

  mainDiv.appendChild(h3);
  mainDiv.appendChild(myParagraph);

  mainDiv.classList.add('parent');
  mainDiv.setAttributeNode(myAttribute);

  h3.appendChild(myHeading);
  myParagraph.appendChild(myText);

  document.body.appendChild(mainDiv);
}
