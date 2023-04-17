class Product {
    constructor(name, price, image, characteristics) {
        this.name = name;
        this.price = price;
        this.image = image;
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
    "./example.jpg",
    "$1.00",
    {characteristics: ["hard, example, anotherExample"]});


