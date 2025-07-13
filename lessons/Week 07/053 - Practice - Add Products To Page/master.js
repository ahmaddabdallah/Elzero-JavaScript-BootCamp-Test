/*
    Products Practice
*/

const products = [
  {
    name: 'Keyboard',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500',
    price: '$99.99',
    description: 'Mechanical RGB Gaming Keyboard',
  },
  {
    name: 'Mouse',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    price: '$49.99',
    description: 'Wireless Gaming Mouse',
  },
  {
    name: 'Speakers',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    price: '$129.99',
    description: '2.1 Channel Gaming Speakers',
  },
  {
    name: 'Mouse Pad',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500',
    price: '$19.99',
    description: 'Extended RGB Mouse Pad',
  },
  {
    name: 'Monitor',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
    price: '$299.99',
    description: '27" 4K Gaming Monitor',
  },
  {
    name: 'iPhone',
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500',
    price: '$999.99',
    description: 'Latest iPhone Model',
  },
];

const colors = ['Red', 'Green', 'Blue'];
const showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write('<div class="product-card">');
  document.write(
    `<img src="${products[i].image}" alt="${products[i].name}" class="product-image">`
  );
  document.write(`<h3>[${i + 1}] ${products[i].name}</h3>`);
  document.write(`<p class="price">${products[i].price}</p>`);
  document.write(`<p class="description">${products[i].description}</p>`);
  document.write('<div class="colors">');
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>- ${colors[j]}</p>`);
}
document.write('</div>');
document.write('</div>');
}
