# Project: Even and Positive Number Check

## 📝 Overview

This project checks if a number is even and positive, even and negative, or odd. It's a great exercise for practicing the logical AND (`&&`) operator to check multiple conditions simultaneously.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter a Number:". Type a number and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the classification of the number.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var num = +prompt("Enter a Number:");
    ```
    This line prompts the user to enter a number. The `+` sign converts the input string into a number.

-   **Conditional Logic**:
    The `if-else if-else` statement uses the `&&` operator to check two conditions at once:
    ```javascript
    if ((num > 0) && (num % 2 == 0)) {
        console.log("Even and Positive number");
    } else if ((num < 0) && (num % 2 == 0)) {
        console.log("Even but Negative number");
    } else if (num % 2 != 0) {
        console.log("Odd number");
    }
    ```
    -   The first condition checks if the number is greater than 0 AND has a remainder of 0 when divided by 2 (is even).
    -   The second condition checks if the number is less than 0 AND is even.
    -   The final condition checks if the number is odd.

## ✨ Example

If you enter `10`, the console will output:
```
Even and Positive number
```
If you enter `-4`, the console will output:
```
Even but Negative number
```

