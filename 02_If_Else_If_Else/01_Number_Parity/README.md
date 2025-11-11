# Project: Number Parity Checker

## 📝 Overview

This project checks if a given number is even, odd, or zero. It's a fundamental exercise for learning how to use the modulo operator (`%`) within `if-else if-else` statements.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Any Number:". Type a number and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see if the number is "Even number", "Odd number", or "Zero".

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var num = +prompt("Enter Any Number:");
    ```
    This line prompts the user to enter a number. The `+` sign converts the input string into a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the parity of `num`:
    ```javascript
    if (num == 0) {
        console.log("Zero");
    } else if (num % 2 != 0) {
        console.log("Odd number");
    } else if (num % 2 == 0) {
        console.log("Even number");
    }
    ```
    -   First, it checks if the number is exactly `0`.
    -   If not, it checks if the remainder when divided by 2 is not 0 (`num % 2 != 0`), which means the number is odd.
    -   If the remainder is 0, the number is even.

## ✨ Example

If you enter `10`, the console will output:
```
Even number
```
If you enter `7`, the console will output:
```
Odd number
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)


