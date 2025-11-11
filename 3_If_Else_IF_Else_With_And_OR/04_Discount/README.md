# Project: Discount Calculator

## 📝 Overview

This project calculates a discount based on a user's age and membership status (Gold, Silver, or None). It's a good example of combining different data types (number and string) in `if-else if-else` conditions with the logical AND (`&&`) operator.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your age and then your membership status.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the applicable discount.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    var membership = prompt("Enter Your Membership: (Gold, Silver, None)");
    ```
    These lines get the user's age and membership status.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the age and membership:
    ```javascript
    if ((age < 18) && (membership == "Gold")) {
        console.log("10% Discount");
    } else if ((age >= 18) && (membership == "Silver")) {
        console.log("5% Discount");
    } else if ((age >= 18) && (membership = "None")) {
        console.log("No Discount");
    }
    ```
    -   It gives a "10% Discount" if the user is under 18 and has a "Gold" membership.
    -   It gives a "5% Discount" if the user is 18 or over and has a "Silver" membership.
    -   **Note**: The last condition `(membership = "None")` uses a single equals sign, which is an assignment, not a comparison. This is a common bug and should be `membership == "None"`. Because of this, it will always evaluate to true if the previous conditions are false.

## ✨ Example

If you enter age `16` and membership `Gold`, the console will output:
```
10% Discount
```
If you enter age `25` and membership `Silver`, the console will output:
```
5% Discount
```

