

function displayCart() {
    const inCart = document.getElementById('inCart');
    const products = JSON.parse(localStorage.getItem('inCart'));

    if(products > 0) {
        products.forEach(product => {
            const productInCart = document.createElement('')
        })
    }
}