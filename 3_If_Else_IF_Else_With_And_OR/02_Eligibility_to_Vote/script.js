var age = +prompt("Enter Your Age:");
var citizen = prompt("Enter Your Citizenship:");

if ((age >= 18) && (citizen == "Pakistan")) {
    console.log("Eligible to vote");
} else if ((age < 18) && (citizen == "Pakistan")) {
    console.log("Not eligible to vote");
} else if (citizen != "Pakistan") {
    console.log("Not eligible due to citizenship");
}