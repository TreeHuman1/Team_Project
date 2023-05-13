// Function to retrieve cart items from local storage and display them on the checkout page
function displayCartItems() {
    // Get the cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Get the cart items list element
    let cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
  
    // Calculate the total price
    let totalPrice = 0;
  
    // Iterate over the cart items and display them on the checkout page
    cartItems.forEach(item => {
      let listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(listItem);
      totalPrice += item.price;
    });
  
    // Update the total price on the checkout page
    let cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
  
  // Call the displayCartItems function when the checkout page is loaded
  window.addEventListener('load', displayCartItems);
  
  