// document.addEventListener("DOMContentLoaded", displayCart);
// function displayCart() {
//     const inCart = document.getElementById('inCart');
//     const products = JSON.parse(localStorage.getItem('inCart'));

//     // if there are products in the cart
//     if(products && products.length > 0) {
//         // for each product, create a table row
//         products.forEach(product => {
//             const productInCart = document.createElement('tr')
//             productInCart.innerHTML = `
//                 <td><img src="${product.image}"></img></td>
//                 <td><p>${product.name}</p></td>
//                 <td><p>x${product.quantity}</p></td>
//                 <td><p>${product.price}</p></td>
//                 `;
//             inCart.appendChild(productInCart);
//         });
//     } else {
//         // display an empty cart message
//         const emptyCart = document.createElement('p')
//         emptyCart.innerHTML = "Your cart is empty";
//         inCart.appendChild(emptyCart);
//     }
// }

// Sample data
const products = [
    { name: "Product 1", quantity: 2, price: 10 },
    { name: "Product 2", quantity: 3, price: 15 },
    { name: "Product 3", quantity: 1, price: 20 }
  ];
  
  // Function to generate table rows for products
  function generateProductRows() {
    const cartItems = document.getElementById("cartItems");
  
    // Clear existing rows
    cartItems.innerHTML = "";
  
    // Generate rows for each product
    products.forEach((product) => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = product.name;
      row.appendChild(nameCell);
  
      const quantityCell = document.createElement("td");
      quantityCell.textContent = product.quantity;
      row.appendChild(quantityCell);
  
      const priceCell = document.createElement("td");
      priceCell.textContent = "$" + product.price.toFixed(2);
      row.appendChild(priceCell);
  
      cartItems.appendChild(row);
    });
  
    // Calculate total quantity and price
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + product.price, 0);
  
    // Create row for total quantity and price
    const totalRow = document.createElement("tr");
  
    const totalLabelCell = document.createElement("td");
    totalLabelCell.textContent = "Total";
    totalRow.appendChild(totalLabelCell);
  
    const totalQuantityCell = document.createElement("td");
    totalQuantityCell.textContent = totalQuantity + "x";
    totalRow.appendChild(totalQuantityCell);
  
    const totalPriceCell = document.createElement("td");
    totalPriceCell.textContent = "$" + totalPrice.toFixed(2);
    totalRow.appendChild(totalPriceCell);
  
    cartItems.appendChild(totalRow);
  }
  
  // Call the function to generate table rows
  generateProductRows();
  
  