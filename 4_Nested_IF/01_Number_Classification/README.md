# Project: Number Classification

## 📝 Overview

This project classifies a number first by its sign (positive, negative, or zero) and then by its parity (even or odd). It's a classic example of using nested `if` statements to handle multiple layers of conditions.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Any Number:". Type a number and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the classification of the number.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var num = +prompt("Enter Any Number:");
    ```
    This line prompts the user to enter a number. The `+` sign converts the input string into a number.

-   **Conditional Logic**:
    The nested `if` statements classify the number:
    ```javascript
    if (num > 0) {
        if (num % 2 == 0) {
            console.log("Positive Even number");
        } else {
            console.log("Positive Odd number");
        }
    } else if (num < 0) {
        if (num % 2 == 0) {
            console.log("Negative Even number");
        } else {
            console.log("Negative Odd number");
        }
    } else {
        console.log("Zero");
    }
    ```
    -   The outer `if` checks if the number is positive, negative, or zero.
    -   The inner `if` statements (for positive and negative numbers) then check if the number is even or odd using the modulo operator (`%`).

## ✨ Example

If you enter `10`, the console will output:
```
Positive Even number
```
If you enter `-5`, the console will output:
```
Negative Odd number
```
If you enter `0`, the console will output:
```
Zero
```

