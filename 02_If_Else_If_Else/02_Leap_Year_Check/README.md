# Project: Leap Year Checker

## 📝 Overview

This project determines if a given year is a leap year. It's an excellent exercise for practicing nested conditions and the logical AND (`&&`) operator within an `if-else if-else` structure.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Year:". Type a year (e.g., 2024) and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see if the year is a "Leap year" or "Not a leap year".

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var year = +prompt("Enter Year:");
    ```
    This line prompts the user to enter a year. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The logic for determining a leap year is based on the following rules:
    1. A year is a leap year if it is divisible by 400.
    2. Or, a year is a leap year if it is divisible by 4 but not by 100.

    This is implemented with the following `if-else if-else` statement:
    ```javascript
    if (year % 400 == 0) {
        console.log("Leap year");
    } else if (year % 4 == 0 && year % 100 != 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
    ```
    - The first condition checks if the year is divisible by 400.
    - The second condition checks if the year is divisible by 4 AND not divisible by 100.
    - If neither of these is true, it's not a leap year.

## ✨ Example

If you enter `2000`, the console will output:
```
Leap year
```
If you enter `2024`, the console will output:
```
Leap year
```
If you enter `1900`, the console will output:
```
Not a leap year
```

[Go Back to 02_If_Else_If_Else README](../README.md)

## License

© 2025 sheikh-mohammad. All Rights Reserved

This project is provided for educational and review purposes only. The code is not licensed for use, modification, or distribution. Please see the [LICENSE](LICENSE) file for full details.