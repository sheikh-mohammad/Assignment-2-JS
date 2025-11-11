var age = +prompt("Enter Your Age:");

if (age >= 18) {
    console.log("Eligible to vote");
} else if (age < 18 && age >= 16) {
    console.log("Soon eligible to vote");
} else if (age < 16) {
    console.log("Not eligible to vote yet");
}