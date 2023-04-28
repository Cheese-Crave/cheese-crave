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

        // product name
        const productName = document.createElement("h3");
        productName.textContent = this.name;
        section.appendChild(productName);

        // product description
        const productDescription = document.createElement("p");
        productDescription.textContent = this.description;
        section.appendChild(productDescription);

        const productPrice = document.createElement("p");
        productPrice.textContent = this.price;
        section.appendChild(productPrice);

        // product buttons/icons
        const productIconContainer = document.createElement("div");
        const addToCart = document.createElement('i');
        addToCard.className = "fa-solid fa-cart-shopping fa-2xl";
        const addToWishList =
            addToWishlist.className = "";
        const ratings =
            ratings.className = "";

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
}
