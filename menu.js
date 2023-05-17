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





  