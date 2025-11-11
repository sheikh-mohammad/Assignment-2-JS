# Project: Electricity Bill Calculator

## 📝 Overview

This project calculates the electricity tariff based on the number of units consumed. It uses an `if-else if-else` statement to apply different rates for different consumption slabs, a common real-world scenario.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Units:". Type the number of units consumed and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the applicable tariff.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var units = +prompt("Enter Your Units:");
    ```
    This line prompts the user to enter the number of electricity units consumed. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `units` and determines the tariff:
    ```javascript
    if (units <= 100) {
        console.log("₹5 per unit");
    } else if (units <= 200) {
        console.log("₹7 per unit");
    } else if (units <= 500) {
        console.log("₹10 per unit");
    } else if (units > 500) {
        console.log("₹12 per unit");
    }
    ```
    -   For consumption up to 100 units, the rate is ₹5/unit.
    -   For 101 to 200 units, the rate is ₹7/unit.
    -   For 201 to 500 units, the rate is ₹10/unit.
    -   For consumption above 500 units, the rate is ₹12/unit.

## ✨ Example

If you enter `80`, the console will output:
```
₹5 per unit
```
If you enter `250`, the console will output:
```
₹10 per unit
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 01_If_Else_IF_Else README](../README.md)
