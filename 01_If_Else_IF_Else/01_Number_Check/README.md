# Project: Number Check

## Overview

This project is a simple JavaScript application that checks if a user-provided number is positive, negative, or zero. It's a great example for beginners to understand how to use `if-else if-else` conditional statements to handle different cases based on user input.

## How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Any Number:". Type a number and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the output. The console will log whether the number is "Positive number", "Negative number", or "Zero".

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var num = +prompt("Enter Any Number:");
    ```
    This line prompts the user to enter a number. The `+` sign before `prompt` converts the input string into a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the value of `num`:
    ```javascript
    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
    ```
    -   If `num` is greater than 0, it logs "Positive number".
    -   If `num` is less than 0, it logs "Negative number".
    -   Otherwise (if `num` is 0), it logs "Zero".

## ✨ Example

If you enter `10`, the console will output:
```
Positive number
```
If you enter `-5`, the console will output:
```
Negative number
```
If you enter `0`, the console will output:
```
Zero
```

## License

© 2025 sheikh-mohammad. All Rights Reserved.

This project is for educational and review purposes only. The code is not licensed for use, modification, or distribution. See the [LICENSE](../../LICENSE) file for full details.

[Go Back to 01_If_Else_IF_Else README](../README.md)

