var userName = prompt("Enter Your User Name:");
var password = prompt("Enter Your Password:");

if (userName == "admin") {
    if (password == "admin123") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("Incorrect username");
}