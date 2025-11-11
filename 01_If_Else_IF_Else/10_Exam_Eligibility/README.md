# Project: Exam Eligibility Checker

## 📝 Overview

This project determines if a student is eligible to sit for an exam based on their attendance percentage. It provides different messages for eligibility, a warning, or ineligibility, making it a practical use case for `if-else if-else`.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Ente Your Attendance Percentage:". Type the attendance percentage and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the eligibility status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var attendPercent = +prompt("Ente Your Attendance Percentage:");
    ```
    This line prompts the user to enter their attendance percentage. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `attendPercent` and logs the appropriate message:
    ```javascript
    if (attendPercent >= 75) {
        console.log("Eligible for exam");
    } else if (attendPercent >= 60) {
        console.log("Warning: Attend more classes");
    } else if (attendPercent < 60) {
        console.log("Not eligible for exam");
    }
    ```
    -   If attendance is 75% or higher, the student is "Eligible for exam".
    -   If attendance is between 60% and 74%, the student receives a "Warning: Attend more classes".
    -   If attendance is below 60%, the student is "Not eligible for exam".

## ✨ Example

If you enter `80`, the console will output:
```
Eligible for exam
```
If you enter `65`, the console will output:
```
Warning: Attend more classes
```

[Go Back to 01_If_Else_IF_Else README](../README.md)

## License

© 2025 sheikh-mohammad. All Rights Reserved

This project is provided for educational and review purposes only. The code is not licensed for use, modification, or distribution. Please see the [LICENSE](LICENSE) file for full details.