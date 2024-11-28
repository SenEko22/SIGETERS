// Function untuk update semua total harga (CartPage)
function updateTotal() {
    const items = document.querySelectorAll('.cart-item');
    let total = 0;
    items.forEach(item => {
      const price = parseFloat(item.querySelector('.price').dataset.price);
      const quantity = item.querySelector('.quantity').value;
      total += price * quantity;
    });
    document.getElementById('total').innerText = total.toFixed(2);
  }
  
  // Event listeners for quantity change
  document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('change', updateTotal);
  });
  
  // Event listeners for item removal
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.remove(); // Remove the item from the DOM
      updateTotal(); // Update total after removing an item
    });
  });
  
  // Initial total calculation
  updateTotal();
  