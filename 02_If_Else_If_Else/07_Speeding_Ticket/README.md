# Project: Speeding Ticket Calculator

## 📝 Overview

This project determines if a driver is speeding and issues a warning or a fine accordingly. It's a clear and simple example of using `if-else if-else` to enforce rules based on a numerical value (speed).

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Speed:". Type the speed and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the outcome.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var speed = +prompt("Enter Your Speed:");
    ```
    This line prompts the user to enter their speed. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `speed` and provides a corresponding message:
    ```javascript
    if (speed < 60) {
        console.log("Safe driving");
    } else if (speed < 80) {
        console.log("Warning: Speed limit approaching");
    } else if (speed >= 80) {
        console.log("Speeding violation! Fine imposed");
    }
    ```
    -   If the speed is less than 60, the message is "Safe driving".
    -   If the speed is between 60 and 79, a "Warning" is issued.
    -   If the speed is 80 or more, a "Speeding violation!" message is shown.

## ✨ Example

If you enter `55`, the console will output:
```
Safe driving
```
If you enter `75`, the console will output:
```
Warning: Speed limit approaching
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)


