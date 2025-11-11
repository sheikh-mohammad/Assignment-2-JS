# Project: BMI Category Check

## 📝 Overview

This project calculates a person's Body Mass Index (BMI) based on their height and weight, and then categorizes it as "Underweight", "Normal weight", or "Overweight". It uses nested `if` statements to first validate the input and then perform the BMI calculation and categorization.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your height and then your weight.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your BMI category or an "Invalid input" message.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var height = +prompt("Enter Your Height:");
    var weight = +prompt("Enter Your Weight:");
    ```
    These lines get the user's height and weight.

-   **BMI Calculation**:
    ```javascript
    var bmi = weight / (height ** 2);
    ```
    This calculates the BMI using the formula: weight / (height * height).

-   **Conditional Logic**:
    The nested `if` statements handle input validation and BMI categorization:
    ```javascript
    if ((height > 0) && weight > 0) {
        if (bmi < 18.5) {
            console.log("Underweight");
        } else if ((bmi >= 18.5) && (bmi < 25)) {
            console.log("Normal weight");
        } else if (bmi >= 25) {
            console.log("Overweight");
        }
    } else if ((height <= 0) || (window <= 0)) { // Note: 'window' should likely be 'weight'
        console.log("Invalid input");
    }
    ```
    -   The outer `if` checks if both `height` and `weight` are positive.
    -   If valid, the inner `if` statements categorize the calculated `bmi`.
    -   **Note**: There's a typo in the `else if` condition: `(window <= 0)` should likely be `(weight <= 0)`. As written, `window <= 0` will always be false in a browser environment.

## ✨ Example

If you enter height `1.75` and weight `70`, the console will output:
```
Normal weight
```
If you enter height `0` and weight `70`, the console will output:
```
Invalid input
```




