// sort

document.addEventListener("DOMContentLoaded", function () {
    const categoryDivs = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".item");

    // Add click event listeners to category divs
    categoryDivs.forEach((category) => {
        category.addEventListener("click", () => {
            const selectedCategory = category.getAttribute("category");

            // Loop through all products and show/hide based on category
            products.forEach((product) => {
                const productCategory = product.getAttribute("category");

                if (selectedCategory === "all" || selectedCategory === productCategory) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

// Retrieve cart quantity from localStorage if it exists, otherwise default to 0
let cartQuantity = localStorage.getItem('cartQuantity') ? parseInt(localStorage.getItem('cartQuantity')) : 0;

// Function to add item to cart
function addc() {
    // Increase cart quantity
    cartQuantity++;
    // Update cart icon with the new quantity
    document.getElementById("cart-icon").innerText = String.fromCharCode(0xf07a) + cartQuantity; // Unicode for cart icon and quantity
    // Store updated cart quantity in localStorage
    localStorage.setItem('cartQuantity', cartQuantity);
    // You can also add the item to the cart and perform any additional actions here
}


// search

document.addEventListener("DOMContentLoaded", function () {
    const itemContainer = document.getElementById("item-container");
    const searchInput = document.getElementById("search-input");

    // Store all items in an array
    const allItems = Array.from(itemContainer.querySelectorAll(".item"));

    function filterItems(searchQuery) {
        // Filter the items based on the search query
        const filteredItems = allItems.filter((item) => {
            const itemName = item.querySelector(".name").textContent.toLowerCase();
            return itemName.includes(searchQuery);
        });

        // Clear the container
        itemContainer.innerHTML = "";

        if (filteredItems.length === 0) {
            // Display "No items found" message when no items match the search query
            const noItemsFoundMessage = document.createElement("div");
            noItemsFoundMessage.textContent = "No items found.";
            itemContainer.appendChild(noItemsFoundMessage);
        } else {
            // Append the filtered items back to the container
            filteredItems.forEach((item) => {
                itemContainer.appendChild(item);
            });
        }
    }

    searchInput.addEventListener("input", function () {
        const searchQuery = searchInput.value.toLowerCase();

        if (searchQuery === "") {
            // If the search input is empty, display all elements
            itemContainer.innerHTML = ""; // Clear the container
            allItems.forEach((item) => {
                itemContainer.appendChild(item);
            });
        } else {
            // Filter items based on the search query
            filterItems(searchQuery);
        }
    });
});
    
