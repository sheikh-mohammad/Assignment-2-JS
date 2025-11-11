# Project: Password Strength Checker

## 📝 Overview

This project checks the strength of a password based on its length. It categorizes the password as "Weak", "Moderate", or "Strong". This is a practical example of using `if-else if-else` to provide feedback on user input.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Password:". Type a password and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the password strength.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var password = prompt("Enter Your Password:");
    ```
    This line prompts the user to enter a password, which is stored as a string.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `length` of the `password` string:
    ```javascript
    if (password.length < 6) {
        console.log("Weak password");
    } else if (password.length <= 10) {
        console.log("Moderate password");
    } else if (password.length > 10) {
        console.log("Strong password");
    }
    ```
    -   If the password has fewer than 6 characters, it's considered "Weak".
    -   If the password has between 6 and 10 characters, it's "Moderate".
    -   If the password has more than 10 characters, it's "Strong".

## ✨ Example

If you enter `123`, the console will output:
```
Weak password
```
If you enter `password123`, the console will output:
```
Moderate password
```

