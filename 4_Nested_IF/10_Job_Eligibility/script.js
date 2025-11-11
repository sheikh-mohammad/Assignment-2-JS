var experience = prompt("Enter Your Experience:");
var skills = prompt("Enter Your Skills: (beginner, intermediate, advanced)");

if (experience >= 5) {
    if (skills == "advanced") {
        console.log("Eligible for senior position");
    } else if (skills == "intermediate") {
        console.log("Eligible for mid-level position");
    }
} else if (experience < 5) {
    if (skills == "beginner") {
        console.log("Eligible for entry-level position");
    } else if (skills == "intermediate") {
        console.log("Eligible for mid-level position");
    }
}