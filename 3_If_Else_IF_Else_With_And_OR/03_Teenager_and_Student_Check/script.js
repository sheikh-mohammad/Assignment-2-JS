var age = +prompt("Enter Your Age:");
var studentStatus = prompt("Enter Your Student Status: (yes, no)");

if ((age >= 13) && (age <= 19) && (studentStatus == "yes")) {
    console.log("Teenager and Student");
} else if ((age >= 13) && (age <= 19) && (studentStatus == "no")) {
    console.log("Teenager but not a Student");
} else if (age < 13 || age > 19) {
    console.log("Not a Teenager");
}