var marks = +prompt("Enter Your Marks:");
var familyIncome = +prompt("Enter Your Family Income:");

if (marks >= 85) {
    if (familyIncome < 500000) {
        console.log("Eligible for Scholarship");
    } else if (familyIncome >= 500000) {
        console.log("Not eligible due to high family income");
    }
} else if (marks < 85) {
    console.log("Not eligible for Scholarship");
}