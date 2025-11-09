var marks = +prompt("Enter Your Marks:");
var attendance = +prompt("Enter Your Attendance Percentage:)");

if ((marks >= 75) && (attendance >= 80)) {
    console.log("Good student");
} else if ((marks >= 75) && (attendance < 80)) {
    console.log("Needs to improve attendance");
} else if ((marks < 75) && (attendance >= 80)) {
    console.log("Needs to improve marks");
} else if ((marks < 75) && (attendance < 80)) {
    console.log("Needs improvement in both");
}