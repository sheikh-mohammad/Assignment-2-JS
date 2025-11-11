# Project: Scholarship Eligibility

## 📝 Overview

This project determines a student's eligibility for a scholarship based on their marks and family income. It uses nested `if` statements to apply a two-stage check for eligibility.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your marks and then your family income.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your scholarship eligibility status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var marks = +prompt("Enter Your Marks:");
    var familyIncome = +prompt("Enter Your Family Income:");
    ```
    These lines get the student's marks and family income.

-   **Conditional Logic**:
    The nested `if` statements check the eligibility:
    ```javascript
    if (marks >= 85) {
        if (familyIncome < 500000) {
            console.log("Eligible for Scholarship");
        } else if (familyIncome >= 500000) {
            console.log("Not eligible due to high family income");
        }
    } else if (marks < 85) {
        console.log("Not eligible for Scholarship");
    }
    ```
    -   The outer `if` checks if the `marks` are 85 or greater.
    -   If the marks condition is met, the inner `if` then checks if the `familyIncome` is less than 500,000.
    -   If marks are below 85, the student is immediately deemed "Not eligible for Scholarship".

## ✨ Example

If you enter marks `90` and family income `400000`, the console will output:
```
Eligible for Scholarship
```
If you enter marks `90` and family income `600000`, the console will output:
```
Not eligible due to high family income
```




