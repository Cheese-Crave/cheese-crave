class Product {
    constructor(name, price, image, description, characteristics) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.characteristics = characteristics;
        // add more properties
    }
}

// factory function - create new product
function newProduct(name, price, image, characteristics) {
    return new Product(name, price, image, characteristics);
}
const cheddar = new Product(
    "cheddar",
    "$1.00",
    "./example.jpg",
    "words that steven wrote",
    {characteristics: ["hard, example, anotherExample"]});


