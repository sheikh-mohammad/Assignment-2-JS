var purchaseAmount = +prompt("Enter Purchase Amount:");

if (purchaseAmount >= 5000) {
    console.log("20% discount");
} else if (purchaseAmount >= 2000) {
    console.log("10% discount");
} else if (purchaseAmount < 2000) {
    console.log("No discount available");
}