export class Product {
    constructor(name, price, image, description, labels) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.labels = labels;
    }
    createCard() {
        // empty container used for styling
        const section = document.createElement("section");
        section.className = 'card';

        // product name
        const productName = document.createElement("h3");
        productName.textContent = this.name;
        section.appendChild(productName);

        // product price
        const productPrice = document.createElement("p");
        productPrice.textContent = this.price;
        section.appendChild(productPrice);

        // product image
        const productImage = document.createElement("img");
        productImage.src = this.image;
        section.appendChild(productImage);

        // product description
        const productDescription = document.createElement("p");
        productDescription.textContent = this.description;
        section.appendChild(productDescription);

        // product buttons/icons
        const productIconContainer = document.createElement("aside");
        // add to cart button
        const addToCart = document.createElement('i');
        addToCart.className = "fa-solid fa-cart-shopping fa-2xl";
        // when clicked, the addToCart method is called
        addToCart.addEventListener('click', () => {
            this.addToCart();
        });
        productIconContainer.appendChild(addToCart);

        // add to wishlist button
        const addToWishlist = document.createElement('i');
        addToWishlist.className = "fa-solid fa-gift fa-2xl";
        productIconContainer.appendChild(addToWishlist);
        // rate/see ratings buttons
        const ratings = document.createElement('i');
        ratings.className = "fa-solid fa-star fa-2xl";
        productIconContainer.appendChild(ratings);

        section.appendChild(productIconContainer);

        // product characteristics via labels
        const labelsContainer = document.createElement("section");
        labelsContainer.className = "label";
        this.labels.forEach((label) => {
            const labelElement = document.createElement("p");
            labelElement.className = "characteristics";
            switch (label.toLowerCase()) {
                case "mild":
                    labelElement.innerHTML = "Mild";
                    break;
                case "sharp":
                    labelElement.innerHTML = "Sharp";
                    break;
                case "creamy":
                    labelElement.innerHTML = "Creamy";
                    break;
                case "crumbly":
                    labelElement.innerHTML = "Crumbly";
                    break;
                case "aged":
                    labelElement.innerHTML = "Aged";
                    break;
                case "tangy":
                    labelElement.innerHTML = "Tangy";
                    break;
                case "pungent":
                    labelElement.innerHTML = "Pungent";
                    break;
            }
            labelsContainer.appendChild(labelElement);
        });
        section.appendChild(labelsContainer);

        return section;
    }

    addToCart() {

        let inCart;
        // checking storage, getting items that have the key 'inCart'
        if (localStorage.getItem('inCart')) {
            // if the item exists, parse the JSON back into JS objecy
            inCart = JSON.parse(localStorage.getItem('inCart'));
        } else {
            // if not, create an empty string
            inCart = [];
        }

        // search for product in inCart array
        const productArray = inCart.findIndex(item => item.name === this.name);

        // if there are products in the cart
        if (productArray >= 0) {
            // increase quantity of product in cart
            inCart[productArray].quantity++;
        } else {
            // create a new row in the table
            inCart.push({
             name: this.name,
             quantity: 1,
             price: this.price
            })
        }
        // update locaStorage with the modified array
        localStorage.setItem('inCart', JSON.stringify(inCart));
        // alert user
        alert('Added to cart!');
    }
}