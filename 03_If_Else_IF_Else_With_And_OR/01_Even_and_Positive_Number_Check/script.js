var num = +prompt("Enter a Number:");

if ((num > 0) && (num % 2 == 0)) {
    console.log("Even and Positive number");
} else if ((num < 0) && (num % 2 == 0)) {
    console.log("Even but Negative number");
} else if (num % 2 != 0) {
    console.log("Odd number");
}