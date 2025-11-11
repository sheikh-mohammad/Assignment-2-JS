var age = +prompt("Enter Your Age:");
var licenseStatus = prompt("Enter Your License Status: (Yes, No)");

if ((age >= 18) && (licenseStatus == "Yes")) {
    console.log("Eligible to drive");
} else if ((age < 18) && (licenseStatus == "Yes")) {
    console.log("Not eligible to drive by age");
} else if (licenseStatus == "No") {
    console.log("You need a license to drive");
}