import { Product } from "./Products.js"

const productContainer = document.getElementById('product-container');

// loading product from local storage
const products = JSON.parse(localStorage.getItem('products')) || [];

if (products.length === 0) {
    // 'no products found message'
    const noProducts = document.createElement('p');
    noProducts.textContent = 'No Products Found';
    productContainer.appendChild(noProducts);
} else {
    products.forEach((productData) => {
        
        // extracting properties from local storage array
        const {image, name, price, description, labels} = productData;
        // create new instance of Product class
        const product = new Product(image, name, price, description, labels);
        // create product cards for each product
        const productCard = product.createCard();
        // adding to product.html
        productContainer.appendChild(productCard);
    });
}
