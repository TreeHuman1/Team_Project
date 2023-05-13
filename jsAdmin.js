document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var pizza = document.getElementById('pizza').value;
    var discount = document.getElementById('discount').value;
  
    // Save the discount in localStorage
    localStorage.setItem(pizza, discount);
  });
  