var num = +prompt("Enter Any Number:");

if (num == 0) {
    console.log("Zero");
} else if (num % 2 != 0) {
    console.log("Odd number");
} else if (num % 2 == 0) {
    console.log("Even number");
}