var age = +prompt("Enter Your Age:");

if (age >= 18) {
    if (age >= 60) {
        console.log("Senior Citizen");
    } else if (age < 60) {
        console.log("Adult");
    }
} else if (age < 18) {
    if (age >= 13) {
        console.log("Teenager");
    } else if (age < 13) {
        console.log("Child");
    }
}