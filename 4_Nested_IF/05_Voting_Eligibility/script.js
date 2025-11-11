var age = +prompt("Enter Your Age:");
var nationality = prompt("Enter Your Nationality:");

if (age >= 18) {
    if (nationality == "Pakistan") {
        console.log("Eligible to vote");
    } else if (nationality != "Pakistan") {
        console.log("Not Eligible due to nationality");
    }
} else if (age < 18) {
    console.log("Not eligible to vote");
}