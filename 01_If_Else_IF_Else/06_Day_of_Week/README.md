# Project: Day of the Week

## 📝 Overview

This project converts a number from 1 to 7 into the corresponding day of the week (e.g., 1 for Monday, 7 for Sunday). It's a straightforward example of mapping numerical inputs to string outputs using `if-else if-else`.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Number between 1 to 7:". Type a number in this range and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the name of the day.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var day = +prompt("Enter Number between 1 to 7:");
    ```
    This line prompts the user to enter a number. The `+` sign converts the input string to a number.

-   **Conditional Logic**:
    The `if-else if-else` chain checks the `day` number and logs the corresponding day name:
    ```javascript
    if (day == 1) {
        console.log("Monday");
    } else if (day == 2) {
        console.log("Tuesday");
    } else if (day == 3) {
        console.log("Wednesday");
    } else if (day == 4) {
        console.log("Thursday");
    } else if (day == 5) {
        console.log("Friday");
    } else if (day == 6) {
        console.log("Saturday");
    } else if (day == 7) {
        console.log("Sunday");
    } else {
        console.log("Invalid day");
    }
    ```
    -   It checks the number from 1 to 7 and prints the corresponding day.
    -   If the number is outside this range, it logs "Invalid day".

## ✨ Example

If you enter `1`, the console will output:
```
Monday
```
If you enter `5`, the console will output:
```
Friday
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 01_If_Else_IF_Else README](../README.md)

