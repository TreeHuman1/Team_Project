document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('userType').value;

    // This is a very basic check and should not be used for real authentication.
    if(username === "admin" && password === "admin" && userType === "admin") {
        alert("Admin login successful");
        // Here you would redirect the user to the admin page
    } else if(username === "customer" && password === "customer" && userType === "customer") {
        alert("Customer login successful");
        // Here you would redirect the user to the customer page
    } else {
        alert("Invalid username or password");
    }
});
