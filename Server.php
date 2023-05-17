<?php
// Connect to the database
$servername = "localhost";
$dbusername = "your_username";
$dbpassword = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create users table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
)";
$conn->query($sql);

// Check if the users table is empty
$sql = "SELECT COUNT(*) as count FROM users";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($row['count'] === '0') {
    // Insert initial admin user
    $adminUsername = "admin";
    $adminPassword = password_hash("admin", PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password) VALUES ('$adminUsername', '$adminPassword')";
    $conn->query($sql);
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare and execute the SQL query to check if user exists
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();
$row = $result->fetch_assoc();

// Check if the username and password match
if ($row && password_verify($password, $row['password'])) {
    $response = array('success' => true);
} else {
    $response = array('success' => false);
}

// Return the response as JSON
echo json_encode($response);

// Close the database connection
$stmt->close();
$conn->close();
?>

