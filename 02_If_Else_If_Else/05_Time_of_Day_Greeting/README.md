# Project: Time of Day Greeting

## 📝 Overview

This project greets the user with "Good Morning", "Good Afternoon", or "Good Evening" based on the hour of the day (in 24-hour format). It's a simple and effective way to learn how to handle time-based conditions.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Hour: (0 to 23)". Type the current hour and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the appropriate greeting.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var hour = +prompt("Enter Hour: (0 to 23)");
    ```
    This line prompts the user to enter the hour. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `hour` and provides a greeting:
    ```javascript
    if (hour < 12) {
        console.log("Good Morning");
    } else if (hour < 18) {
        console.log("Good Afternoon");
    } else if (hour >= 18) {
        console.log("Good Evening");
    }
    ```
    -   If the hour is before 12 (i.e., 0-11), it logs "Good Morning".
    -   If the hour is before 18 (i.e., 12-17), it logs "Good Afternoon".
    -   If the hour is 18 or later (i.e., 18-23), it logs "Good Evening".

## ✨ Example

If you enter `10`, the console will output:
```
Good Morning
```
If you enter `15`, the console will output:
```
Good Afternoon
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)



