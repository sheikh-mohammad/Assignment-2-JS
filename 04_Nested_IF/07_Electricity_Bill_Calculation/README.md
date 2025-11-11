# Project: Electricity Bill Calculation

## 📝 Overview

This project calculates the electricity tariff based on the number of units consumed and the time of day (day or night). It uses nested `if` statements to apply different rates based on these two factors, demonstrating a more complex billing logic.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for the number of units consumed and then the time of day ("day" or "night").
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the applicable tariff.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var units = +prompt("Enter Your Units:");
    var timeOfDay = prompt("Enter Time of Day: (day, night)");
    ```
    These lines get the units consumed and the time of day.

-   **Conditional Logic**:
    The nested `if` statements determine the tariff:
    ```javascript
    if (units > 300) {
        if (timeOfDay == "day") {
            console.log("₹12 per unit");
        } else if (timeOfDay == "night") {
            console.log("₹10 per unit");
        }
    } else if (units <= 300) {
        if (timeOfDay == "day") {
            console.log("₹5 per unit");
        } else if (timeOfDay == "night") {
            console.log("₹6 per unit");
        }
    }
    ```
    -   The outer `if` checks if `units` are greater than 300.
    -   The inner `if` statements then apply different rates based on `timeOfDay`.
    -   If `units` are 300 or less, a different set of rates is applied based on `timeOfDay`.

## ✨ Example

If you enter `350` units and `day`, the console will output:
```
₹12 per unit
```
If you enter `200` units and `night`, the console will output:
```
₹6 per unit
```



