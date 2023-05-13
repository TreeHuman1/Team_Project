window.onload = function() {
    var pizzaItems = document.querySelectorAll('.pizza-items div');

    for (var i = 0; i < pizzaItems.length; i++) {
        (function(i) {
            setTimeout(function() {
                pizzaItems[i].style.opacity = '1';
            }, 100 * i);
        })(i);
    }
}



 // Function to add an item to the cart and show the popup
function addToCart(name, price) {
    // Update the cart count
    let cartCountElement = document.getElementById('cart-count');
    let cartCount = parseInt(cartCountElement.innerText);
    cartCount++;
    cartCountElement.innerText = cartCount;
  
    // Get the cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Add the clicked item to the cart
    const item = {
      name: name,
      price: price
    };
    cartItems.push(item);
  
    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Show the cart popup
    showCartPopup();
  }
  

  