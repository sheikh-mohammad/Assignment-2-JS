var num = +prompt("Enter Any Number:");

if (num > 0) {
    if (num % 2 == 0) {
        console.log("Positive Even number");
    } else {
        console.log("Positive Odd number");
    }
} else if (num < 0) {
    if (num % 2 == 0) {
        console.log("Negative Even number");
    } else {
        console.log("Negative Odd number");
    }
} else {
    console.log("Zero");
}