var attendPercent = +prompt("Ente Your Attendance Percentage:");

if (attendPercent >= 75) {
    console.log("Eligible for exam");
} else if (attendPercent >= 60) {
    console.log("Warning: Attend more classes");
} else if (attendPercent < 60) {
    console.log("Not eligible for exam");
}