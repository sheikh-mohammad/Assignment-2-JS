# Project: Login Authentication

## 📝 Overview

This project simulates a basic login authentication system using nested `if` statements. It first checks the username and then, if the username is correct, proceeds to check the password. This demonstrates a common pattern for sequential validation.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for a username and then a password.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the login status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var userName = prompt("Enter Your User Name:");
    var password = prompt("Enter Your Password:");
    ```
    These lines get the username and password from the user.

-   **Conditional Logic**:
    The nested `if` statements handle the authentication:
    ```javascript
    if (userName == "admin") {
        if (password == "admin123") {
            console.log("Login successful");
        } else {
            console.log("Incorrect password");
        }
    } else {
        console.log("Incorrect username");
    }
    ```
    -   The outer `if` checks if the `userName` is "admin".
    -   If the username is correct, the inner `if` then checks if the `password` is "admin123".
    -   If the username is incorrect, it immediately logs "Incorrect username" without checking the password.

## ✨ Example

If you enter username `admin` and password `admin123`, the console will output:
```
Login successful
```
If you enter username `admin` and password `wrongpass`, the console will output:
```
Incorrect password
```


