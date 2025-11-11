# Project: Discount Eligibility

## 📝 Overview

This project calculates a discount based on a customer's purchase amount and their membership level (Gold, Silver, or Bronze). It's a practical example of using nested `if` statements to apply tiered discounts based on multiple criteria.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your purchase amount and then your membership level.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the applicable discount.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var purchaseAmount = +prompt("Enter Your Purchase Amount:");
    var membership = prompt("Enter Your Membership: (Gold, Silver, Bronze)");
    ```
    These lines get the user's purchase amount and membership level.

-   **Conditional Logic**:
    The nested `if` statements determine the discount:
    ```javascript
    if (purchaseAmount >= 5000) {
        if (membership == "Gold") {
            console.log("20% discount");
        } else if (membership == "Silver") {
            console.log("15% discount");
        } else if (membership == "Bronze") {
            console.log("10% discount");
        }
    } else if (purchaseAmount < 5000) {
        if (membership == "Gold") {
            console.log("5% discount");
        } else if (membership == "Silver") {
            console.log("3% discount");
        } else if (membership == "Bronze") {
            console.log("No discount");
        }
    }
    ```
    -   The outer `if` checks if the `purchaseAmount` is ₹5000 or more.
    -   The inner `if` statements then apply discounts based on the `membership` level.
    -   If the `purchaseAmount` is less than ₹5000, a different set of discounts is applied based on membership.

## ✨ Example

If you enter `6000` and `Gold`, the console will output:
```
20% discount
```
If you enter `3000` and `Silver`, the console will output:
```
3% discount
```





## License

� 2025 sheikh-mohammad. All Rights Reserved.
