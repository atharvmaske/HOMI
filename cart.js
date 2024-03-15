// document.addEventListener("DOMContentLoaded", function() {
//     // Retrieve cart items from localStorage
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     let subtotal = 0;
//     let deliveryCharges = 0;

//     // Reference to the tbody element where cart items will be appended
//     const cartItemsContainer = document.getElementById('cart-items');

//     // Loop through the cart items and populate the table
//     cartItems.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td><img src="${item.image}" alt=""></td>
//             <td>${item.name}</td>
//             <td>${item.quantity}</td>
//             <td>₹${item.price * item.quantity}</td>
//         `;
//         cartItemsContainer.appendChild(row);
//         subtotal += item.price * item.quantity;
//     });

//     // Update subtotal, delivery charges, and estimated total
//     document.getElementById('subtotal').innerText = subtotal;
//     document.getElementById('delivery-charges').innerText = deliveryCharges;
//     document.getElementById('estimated-total').innerText = subtotal + deliveryCharges;
// });

// // Define the addToCart() function here
// function addToCart(itemName, itemPrice, itemImage) {
//     // Retrieve cart items from localStorage or initialize an empty array
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//     // Add the new item to the cart
//     cartItems.push({
//         name: itemName,
//         price: itemPrice,
//         image: itemImage,
//         quantity: 1 // Assuming initial quantity is 1
//     });

//     // Store updated cart items back to localStorage
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
//     // Alert user that item is added to cart (optional)
//     alert("Item added to cart!");
// }
