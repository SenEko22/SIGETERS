// Load cart items from localStorage
window.onload = function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    
    // If there are items in the cart, display them
    if (cart.length > 0) {
      cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
          <img src="pict/${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
        `;
        cartItemsDiv.appendChild(itemDiv);
      });
    } else {
      cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    }
  }

  // Proceed to checkout function
  function checkout() {
    alert('Proceeding to checkout!');
    // You can implement actual checkout logic here
  }

// Function to load the cart from localStorage and display it
function loadCart() {
    // Get cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Get the cart items container
    let cartItemsContainer = document.getElementById('cart-items');
    let total = 0;
  
    // Clear the cart items container before adding new items
    cartItemsContainer.innerHTML = '';
  
    // Check if the cart is empty
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
  
    // Iterate through each item in the cart
    cart.forEach((item, index) => {
      // Create a div for each cart item
      let cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
        <img src="pict/${item.img}" alt="${item.name}" width="100">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p class="price" data-price="${item.price}">$${item.price}</p>
          <p>Quantity: <input type="number" value="${item.quantity}" min="1" class="quantity" data-index="${index}" onchange="updateQuantity(${index})"></p>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      `;
  
      cartItemsContainer.appendChild(cartItemDiv);
  
      // Update the total price
      total += item.price * item.quantity;
    });
  
    // Update the total price in the cart summary
    document.getElementById('total').innerText = total.toFixed(2);
  }
  
  // Function to update the quantity of an item
  function updateQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let quantityInput = document.querySelector(`.quantity[data-index='${index}']`);
    let newQuantity = parseInt(quantityInput.value);
  
    // Update the quantity in the cart data
    if (newQuantity >= 1) {
      cart[index].quantity = newQuantity;
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Reload the cart to reflect the changes
    loadCart();
  }
  
  // Function to remove an item from the cart
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Remove the item at the specified index
    cart.splice(index, 1);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Reload the cart to reflect the changes
    loadCart();
  }
  
  // Function to proceed to checkout
  function proceedToCheckout() {
    alert('Proceeding to checkout!');
    // Implement the actual checkout logic here
  }
  
  // Load the cart when the page loads
  window.onload = loadCart;
  