export class Product {
    constructor(image, name, price, description, labels) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
        this.labels = labels;
    }

    createCard() {
        // empty container used for styling
        const section = document.createElement("section");
        section.className = 'card';

        // product image
        const productImage = document.createElement("img");
        productImage.src = this.image;
        section.appendChild(productImage);

        // product name & ratings
        const productHeading = document.createElement("div");
        productHeading.className = "productHead";

        const productName = document.createElement("h3");
        productName.textContent = this.name;
        productHeading.appendChild(productName);
        section.appendChild(productHeading);

        let star;
        for (let i = 1; i <= 5; i++) {
            star = document.createElement("i");
            star.className = "fa-solid fa-star fa-sm";
            productHeading.appendChild(star);
        }
        section.appendChild(productHeading);

        // product price
        const productPrice = document.createElement("p");
        productPrice.textContent = `$${this.price}.00`;
        section.appendChild(productPrice);

        // product description
        const productDescription = document.createElement("details");
        const productSummary = document.createElement("summary");
        const productDescriptionText = document.createElement("p");
        productSummary.textContent = `Read about ${this.name}`;
        productDescriptionText.textContent = this.description;

        productDescription.appendChild(productSummary);
        productDescription.appendChild(productDescriptionText);
        section.appendChild(productDescription);

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

        // cart & wishlist buttons container
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

        section.appendChild(productIconContainer);

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
                image: this.image,
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