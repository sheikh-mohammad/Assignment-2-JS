var purchaseAmount = +prompt("Enter Your Purchase Amount:");
var membership = prompt("Enter Your Membership: (Gold, Silver, Bronze)");

if (purchaseAmount >= 5000) {
    if (membership == "Gold") {
        console.log("20% discount");
    } else if (membership == "Silver") {
        console.log("15% discount");
    } else if (membership == "Bronze") {
        console.log("10% discount");
    }
} else if (purchaseAmount < 5000) {
    if (membership == "Gold") {
        console.log("5% discount");
    } else if (membership == "Silver") {
        console.log("3% discount");
    } else if (membership == "Bronze") {
        console.log("No discount");
    }
}