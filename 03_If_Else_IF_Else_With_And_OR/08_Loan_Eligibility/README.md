# Project: Loan Eligibility

## 📝 Overview

This project determines a person's eligibility for a loan based on their salary and credit score. It's an excellent example of using both logical AND (`&&`) and OR (`||`) operators to handle different levels of eligibility (Approved, Pending, Denied).

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your salary and then your credit score.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the loan status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var salary = +prompt("Enter Your Salary");
    var creditScore = +prompt("Enter Your Credit Score:");
    ```
    These lines get the user's salary and credit score.

-   **Conditional Logic**:
    The `if-else if-else` statement checks both criteria:
    ```javascript
    if ((salary >= 50000) && (creditScore >= 700)) {
        console.log("Loan Approved");
    } else if ((salary >= 50000) || (creditScore >= 700)) {
        console.log("Loan Pending");
    } else {
        console.log("Loan Denied");
    }
    ```
    -   The loan is "Approved" if the salary is at least 50,000 AND the credit score is at least 700.
    -   The loan is "Pending" if either the salary is high enough OR the credit score is high enough, but not both.
    -   If neither condition is met, the loan is "Denied".

## ✨ Example

If you enter a salary of `60000` and a credit score of `750`, the console will output:
```
Loan Approved
```
If you enter a salary of `55000` and a credit score of `650`, the console will output:
```
Loan Pending
```




