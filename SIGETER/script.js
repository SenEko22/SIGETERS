document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total');

  // function untuk mengkalkulasi total harga
  function updateTotal() {
      let total = 0;
      document.querySelectorAll('.cart-item').forEach(item => {
          const price = parseFloat(item.querySelector('.price').dataset.price);
          const quantity = parseInt(item.querySelector('.quantity').value);
          total += price * quantity;
      });
      totalSpan.textContent = total.toFixed(2);
  }

  // Event listener for quantity changes
  cartItemsContainer.addEventListener('input', (e) => {
      if (e.target.classList.contains('quantity')) {
          const input = e.target;
          if (input.value < 1) input.value = 1; // Prevent negative or zero quantities
          updateTotal();
      }
  });

  // Event listener for remove buttons
  cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
          e.target.closest('.cart-item').remove();
          updateTotal();
          checkEmptyCart();
      }
  });

  // Function to display a message when the cart is empty
  function checkEmptyCart() {
      if (cartItemsContainer.children.length === 0) {
          cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
          totalSpan.textContent = '0.00';
      }
  }

  // Initial total calculation
  updateTotal();
});

//untuk profil admin dan customer
document.addEventListener('DOMContentLoaded', () => {
  const editProfileBtn = document.getElementById('edit-profile-btn');
  const saveProfileBtn = document.getElementById('save-profile-btn');
  const editAdminProfileBtn = document.getElementById('edit-admin-profile-btn');
  const saveAdminProfileBtn = document.getElementById('save-admin-profile-btn');
  const editProfileForm = document.querySelector('.edit-profile-form');

  // Toggle profile edit form for both customer and admin
  function toggleEditForm() {
      editProfileForm.style.display = editProfileForm.style.display === 'none' ? 'block' : 'none';
  }

  // Customer Profile Edit
  if (editProfileBtn) {
      editProfileBtn.addEventListener('click', toggleEditForm);
  }

  if (saveProfileBtn) {
      saveProfileBtn.addEventListener('click', () => {
          const name = document.getElementById('new-name').value;
          const email = document.getElementById('new-email').value;
          const phone = document.getElementById('new-phone').value;

          document.getElementById('name').textContent = name;
          document.getElementById('email').textContent = email;
          document.getElementById('phone').textContent = phone;

          toggleEditForm(); // Hide edit form after saving
      });
  }

  // Admin Profile Edit
  if (editAdminProfileBtn) {
      editAdminProfileBtn.addEventListener('click', toggleEditForm);
  }

  if (saveAdminProfileBtn) {
      saveAdminProfileBtn.addEventListener('click', () => {
          const adminName = document.getElementById('admin-name-input').value;
          const adminEmail = document.getElementById('admin-email-input').value;

          document.getElementById('admin-name').textContent = adminName;
          document.getElementById('admin-email').textContent = adminEmail;

          toggleEditForm(); // Hide edit form after saving
      });
  }
});
