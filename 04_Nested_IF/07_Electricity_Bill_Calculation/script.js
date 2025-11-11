var units = +prompt("Enter Your Units:");
var timeOfDay = prompt("Enter Time of Day: (day, night)");

if (units > 300) {
    if (timeOfDay == "day") {
        console.log("₹12 per unit");
    } else if (timeOfDay == "night") {
        console.log("₹10 per unit");
    }
} else if (units <= 300) {
    if (timeOfDay == "day") {
        console.log("₹5 per unit");
    } else if (timeOfDay == "night") {
        console.log("₹6 per unit");
    }
}