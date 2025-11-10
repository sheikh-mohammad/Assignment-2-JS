var marks = +prompt("Enter Your Marks:");

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 75 && marks < 90) {
    if (marks >= 80) {
        console.log("B Grade");
    } else if (marks < 80) {
        console.log("C Grade");
    }
} else if (marks < 75) {
    console.log("Fail");
}