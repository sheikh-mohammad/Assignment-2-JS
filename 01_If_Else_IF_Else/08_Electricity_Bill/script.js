var units = +prompt("Enter Your Units:");

if (units <= 100) {
    console.log("₹5 per unit");
} else if (units <= 200) {
    console.log("₹7 per unit");
} else if (units <= 500) {
    console.log("₹10 per unit");
} else if (units > 500) {
    console.log("₹12 per unit");
}