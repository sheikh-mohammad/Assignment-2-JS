var userName = prompt("Enter Your User Name:");
var password = prompt("Enter Your Password:");

if ((userName == "admin") && (password == "1234")) {
    console.log("Login successful");
} else if ((userName != "admin") || (password != "1234")) {
    console.log("Invalid credentials");
} else if ((userName == '') || (password == '')) {
    console.log("Please enter username and password");
}