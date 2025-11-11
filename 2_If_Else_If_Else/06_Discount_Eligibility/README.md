# Project: Discount Eligibility

## 📝 Overview

This project determines a customer's discount eligibility based on their total purchase amount. It's a common e-commerce scenario that demonstrates how to use `if-else if-else` to apply different business rules.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Purchase Amount:". Type the total amount and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the applicable discount.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var purchaseAmount = +prompt("Enter Purchase Amount:");
    ```
    This line prompts the user to enter their purchase amount. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `purchaseAmount` to determine the discount:
    ```javascript
    if (purchaseAmount >= 5000) {
        console.log("20% discount");
    } else if (purchaseAmount >= 2000) {
        console.log("10% discount");
    } else if (purchaseAmount < 2000) {
        console.log("No discount available");
    }
    ```
    -   If the amount is ₹5000 or more, a "20% discount" is applied.
    -   If the amount is between ₹2000 and ₹4999, a "10% discount" is applied.
    -   If the amount is less than ₹2000, there is "No discount available".

## ✨ Example

If you enter `6000`, the console will output:
```
20% discount
```
If you enter `2500`, the console will output:
```
10% discount
```

