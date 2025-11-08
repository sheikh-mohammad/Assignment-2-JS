var bmi = +prompt("Enter Your BMI Value:");

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi <= 24.9) {
    console.log("Normal");
} else if (bmi <= 29.9) {
    console.log("Overweight");
} else if (bmi > 30) {
    console.log("Obese");
}