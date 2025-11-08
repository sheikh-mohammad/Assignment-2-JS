var password = prompt("Enter Your Password:");

if (password.length < 6) {
    console.log("Weak password");
} else if (password.length <= 10) {
    console.log("Moderate password");
} else if (password.length > 10) {
    console.log("Strong password");
}