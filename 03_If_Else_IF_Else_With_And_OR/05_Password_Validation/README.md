# Project: Password Validation

## 📝 Overview

This project validates a password based on three criteria: length (at least 8 characters), the presence of an uppercase letter, and the presence of a number. It's a more complex example that involves breaking down a problem into smaller parts and then combining the results.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt you to "Enter Your Password:".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see if the password is "Strong", "Weak", or "Password too short".

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var password = prompt("Enter Your Password:");
    ```
    This line gets the password from the user.

-   **Checking for Uppercase and Numbers**:
    The script uses a long series of `||` (OR) conditions to check for the presence of any uppercase letter and any number.
    ```javascript
    if (password.includes("A") || ... || password.includes("Z")) {
        hasUpper = true;
    }
    if (password.includes("0") || ... || password.includes("9")) {
        hasNum = true;
    }
    ```
    **Note**: A more efficient way to do this would be to use regular expressions.

-   **Final Validation**:
    The final `if-else if-else` statement checks the password's length and the boolean flags `hasUpper` and `hasNum`:
    ```javascript
    if ((password.length >= 8) && (hasUpper == true) && (hasNum == true)) {
        console.log("Strong password");
    } else if ((password.length >= 8) && (hasUpper == false) && (hasNum == false)) {
        console.log("Weak password");
    } else if (password.length < 8) {
        console.log("Password too short");
    }
    ```
    - A password is "Strong" if it's at least 8 characters long and contains both an uppercase letter and a number.
    - It's "Weak" if it's long enough but is missing both an uppercase letter and a number.
    - It's "too short" if it has fewer than 8 characters.

## ✨ Example

If you enter `Password123`, the console will output:
```
Strong password
```
If you enter `password`, the console will output:
```
Weak password
```





## License

� 2025 sheikh-mohammad. All Rights Reserved.
