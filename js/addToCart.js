document.addEventListener("DOMContentLoaded", displayCart);
function displayCart() {
    const inCart = document.getElementById('inCart');
    const products = JSON.parse(localStorage.getItem('inCart'));

    // if there are products in the cart
    if(products && products.length > 0) {
        // for each product, create a table row
        products.forEach(product => {
            const productInCart = document.createElement('tr')
            productInCart.innerHTML = `
                <td><h3>${product.name}</h3></td>
                <td><p>(x${product.quantity})</p></td>
                <td><p>${product.price}</p></td>
                `;
            inCart.appendChild(productInCart);
        });
    } else {
        // display an empty cart message
        const emptyCart = document.createElement('p')
        emptyCart.innerHTML = "Your cart is empty";
    }
}