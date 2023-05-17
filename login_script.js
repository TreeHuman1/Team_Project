document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Send a POST request to the server-side script
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'sql_script.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // If the credentials match, redirect to the admin page
          window.location.href = 'admin.html';
        } else {
          // If the credentials don't match, show an error message
          alert('Incorrect username or password');
        }
      }
    };
    var data = 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    xhr.send(data);
  });
  
