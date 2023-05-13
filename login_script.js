document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check the entered credentials. In a real-world application, you would need to
    // securely check the credentials server-side, not client-side like this.
    if (username === 'admin' && password === 'admin') {
        // If the credentials match, redirect to the admin page
        window.location.href = 'admin.html';
    } else {
        // If the credentials don't match, show an error message
        alert('Incorrect username or password');
    }
});
