// Final Result Should be similar to this image
// https://elzero.org/wp-content/uploads/2021/09/dom-challenge.jpg

// Create Elements
const header = document.createElement('header');
const logo = document.createTextNode('Elzero');
const rigthDiv = document.createElement('div');
const leftDiv = document.createElement('div');

// Create navigation items
let home = document.createElement('a');
let about = document.createElement('a');
let contact = document.createElement('a');
let footer = document.createElement('a');

// Set text content
home.textContent = 'Home';
about.textContent = 'About';
contact.textContent = 'Contact';
footer.textContent = 'Footer';

// Add classes
rigthDiv.classList.add('right-div');
leftDiv.classList.add('left-div');

// Style the header
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

// Style the logo
rigthDiv.style.cssText = `
    color: #23a96e;
    font-weight: bold;
    font-size: 24px;
`;

// Style the navigation
leftDiv.style.cssText = `
    display: flex;
    gap: 25px;
`;

// Style navigation links
[home, about, contact, footer].forEach((link) => {
  link.style.cssText = `
        color: #666;
        text-decoration: none;
        cursor: pointer;
    `;
  link.addEventListener('mouseover', () => (link.style.color = '#23a96e'));
  link.addEventListener('mouseout', () => (link.style.color = '#666'));
});

// Append elements
rigthDiv.appendChild(logo);
[home, about, contact, footer].forEach((link) => leftDiv.appendChild(link));
header.appendChild(rigthDiv);
header.appendChild(leftDiv);

// Add to document
document.body.style.margin = '0';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(header);

// ##################

// Create and style products
for (let i = 1; i < 15; i++) {
  const section = document.createElement('section');
  const product = document.createElement('div');
  const number = document.createElement('span');
  const productText = document.createElement('span');

  // Style section
  section.style.cssText = `
        display : flex;
        padding: 20px;
        display: flex;
        justify-content: center;
    `;

  // Style product
  product.className = `product-${i}`;
  product.style.cssText = `
        background-color: white;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
        color: #23a96e;
        font-weight: bold;
        width: 200px;
        display: flex;
        flex-direction: column;
    `;

  number.textContent = i;
  productText.textContent = 'Product';

  product.appendChild(number);
  product.appendChild(productText);
  section.appendChild(product);
  document.body.appendChild(section);
}

// Add container background
document.body.style.backgroundColor = '#ececec';
// Add container for products
const productsContainer = document.createElement('div');
productsContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
`;

// Move products into container
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    productsContainer.appendChild(section.firstElementChild);
    section.remove();
});

document.body.appendChild(productsContainer);