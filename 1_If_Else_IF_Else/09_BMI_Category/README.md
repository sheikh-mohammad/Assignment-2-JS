# Project: BMI Category Checker

## 📝 Overview

This project categorizes a person's Body Mass Index (BMI) into standard health categories: "Underweight", "Normal", "Overweight", or "Obese". It's a health-related application of `if-else if-else` logic.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your BMI Value:". Type your BMI value and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your BMI category.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var bmi = +prompt("Enter Your BMI Value:");
    ```
    This line prompts the user to enter their BMI value. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `bmi` value and logs the corresponding category:
    ```javascript
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi <= 24.9) {
        console.log("Normal");
    } else if (bmi <= 29.9) {
        console.log("Overweight");
    } else if (bmi > 30) {
        console.log("Obese");
    }
    ```
    -   A BMI less than 18.5 is "Underweight".
    -   A BMI from 18.5 to 24.9 is "Normal".
    -   A BMI from 25 to 29.9 is "Overweight".
    -   A BMI of 30 or more is "Obese".

## ✨ Example

If you enter `22`, the console will output:
```
Normal
```
If you enter `31`, the console will output:
```
Obese
```

