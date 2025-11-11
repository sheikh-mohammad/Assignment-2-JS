# Project: Working Hours and Overtime Pay

## 📝 Overview

This project determines if an employee is eligible for overtime pay based on their working hours and hourly rate. It's a business logic example that requires checking multiple conditions with the logical AND (`&&`) operator.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your working hours and then your hourly rate.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the overtime status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var workingHours = +prompt("Enter Working Hours:");
    var hourlyRate = +prompt("Enter Hourly Rate:");
    ```
    These lines get the user's working hours and hourly rate.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the hours and rate:
    ```javascript
    if ((workingHours > 40) && (hourlyRate > 200)) {
        console.log("Overtime pay applicable");
    } else if ((workingHours > 40) && (hourlyRate <= 200)) {
        console.log("No overtime pay");
    } else if (workingHours <= 40) {
        console.log("No overtime");
    }
    ```
    -   If working hours are over 40 AND the hourly rate is over 200, overtime pay is applicable.
    -   If working hours are over 40 but the rate is 200 or less, there is no overtime pay.
    -   If working hours are 40 or less, there is no overtime.

## ✨ Example

If you enter `45` hours and a rate of `250`, the console will output:
```
Overtime pay applicable
```
If you enter `42` hours and a rate of `150`, the console will output:
```
No overtime pay
```





## License

� 2025 sheikh-mohammad. All Rights Reserved.
