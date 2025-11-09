var age = +prompt("Enter Your Age:");
var membership = prompt("Enter Your Membership: (Gold, Silver, None)");

if ((age < 18) && (membership == "Gold")) {
    console.log("10% Discount");
} else if ((age >= 18) && (membership == "Silver")) {
    console.log("5% Discount");
} else if ((age >= 18) && (membership = "None")) {
    console.log("No Discount");
}