const navbar=document.getElementById('navbar');
const bar=document.getElementById('bar');

if(bar){
    bar.addEventListener('click', function() {
        navbar.classList.add('active');
    });
}


let close=document.getElementById("close");

if(close){
    close.addEventListener('click',function(){
        navbar.classList.add('unactive');
    })
}

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.addToCart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            const cartItem = {
                name: productName,
                price: productPrice
            };

            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            existingCart.push(cartItem);

            localStorage.setItem('cart', JSON.stringify(existingCart));

            alert('Item added to cart!');
        });
    });
});

function updateClock() {
    var options = { timeZone: 'Asia/Kolkata', hour12: false };
    var now = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('clock').innerText = now ;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();

function addToCart(button) {
    var serviceName = button.parentNode.getAttribute("data-service");
    var servicePrice = parseFloat(button.parentNode.getAttribute("data-price"));

    // Retrieve existing cart items or create an empty array
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the service is already in the cart
    var existingItemIndex = cartItems.findIndex(item => item.name === serviceName);

    if (existingItemIndex !== -1) {
        // Increment quantity if the service is already in the cart
        cartItems[existingItemIndex].quantity++;
    } else {
        // Add a new item to the cart
        cartItems.push({ name: serviceName, price: servicePrice, quantity: 1 });
    }

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert("Item added to cart!");
}
