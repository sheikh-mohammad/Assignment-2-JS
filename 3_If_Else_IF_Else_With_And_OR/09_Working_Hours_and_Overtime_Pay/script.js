var workingHours = +prompt("Enter Working Hours:");
var hourlyRate = +prompt("Enter Hourly Rate:");

if ((workingHours > 40) && (hourlyRate > 200)) {
    console.log("Overtime pay applicable");
} else if ((workingHours > 40) && (hourlyRate <= 200)) {
    console.log("No overtime pay");
} else if (workingHours <= 40) {
    console.log("No overtime");
}