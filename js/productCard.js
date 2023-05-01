import {Product} from "./Products.js";

const form = document.getElementById('product-form');
const productContainer = document.getElementById('product-container')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Product Added');

    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const labels = form.labels.value.split(',').map((label) => label.trim());

    // retrieves the items in local storage or create empty array
    const products = JSON.parse(localStorage.getItem('products')) || [];
    // new object with product data
    products.push({image, name, price, description, labels});
    // save the updated array to local storage
    localStorage.setItem('products', JSON.stringify(products));
})