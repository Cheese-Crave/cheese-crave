import {Product} from "./Products";

const form = document.getElementById('product-form');
const productContainer = document.getElementById('product-container')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('success');

    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const labels = form.labels.value.split(',').map((label) => label.trim());

    // new instance of our product - create new product
    const newProduct = new Product(name, price, image, description, labels);
    const productCard = newProduct.createCard();

    productContainer.appendChild(productCard);
})


const newProduct = product.createCard();
document.querySelector(".grid-container").appendChild(newProduct);

