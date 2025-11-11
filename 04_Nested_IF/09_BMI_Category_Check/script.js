var height = +prompt("Enter Your Height:");
var weight = +prompt("Enter Your Weight:");
var bmi = weight / (height ** 2);

if ((height > 0) && weight > 0) {
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if ((bmi >= 18.5) && (bmi < 25)) {
        console.log("Normal weight");
    } else if (bmi >= 25) {
        console.log("Overweight");
    }
} else if ((height <= 0) || (window <= 0)) {
    console.log("Invalid input");
}