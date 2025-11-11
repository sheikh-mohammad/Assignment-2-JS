# Project: Login Authentication

## 📝 Overview

This project simulates a basic login system. It prompts the user for a username and password and checks them against hardcoded credentials. It's a great introduction to using logical AND (`&&`) and OR (`||`) operators for authentication logic.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will show two prompts: one for the username and one for the password.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the login status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var userName = prompt("Enter Your User Name:");
    var password = prompt("Enter Your Password:");
    ```
    These lines prompt the user for their username and password.

-   **Conditional Logic**:
    The `if-else if-else` statement validates the credentials. A more robust approach would be to check for empty inputs first:
    ```javascript
    if (userName === '' || password === '') {
        console.log("Please enter username and password");
    } else if (userName === "admin" && password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
    ```
    -   First, it checks if either `userName` or `password` is empty.
    -   If not empty, it checks if both `userName` is "admin" AND `password` is "1234".
    -   If neither of the above conditions is met, it logs "Invalid credentials".

## ✨ Example

If you enter `admin` and `1234`, the console will output:
```
Login successful
```
If you enter `user` and `password`, the console will output:
```
Invalid credentials
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)


