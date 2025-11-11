# Project: Temperature Check

## 📝 Overview

This project recommends appropriate clothing based on the temperature. It uses both logical AND (`&&`) and OR (`||`) operators to handle different temperature ranges, but contains a logical flaw in its conditions.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt you to "Enter Temperature:".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the clothing recommendation.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var temperature = +prompt("Enter Temperature:");
    ```
    This line gets the temperature from the user.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the temperature:
    ```javascript
    if ((temperature < 0) || (temperature > -35)) {
        console.log("Wear heavy clothes");
    } else if ((temperature >= 0) && (temperature <= 20)) {
        console.log("Wear a jacket");
    } else if ((temperature > 20) && (temperature <= 35)) {
        console.log("Wear light clothes");
    }
    ```
    -   **Note**: The first condition `(temperature < 0) || (temperature > -35)` has a logical error. Since every number is either less than 0 or greater than -35, this condition will almost always be true (except for the numbers between -35 and 0, which are also covered). This means the other conditions are unlikely to be checked. It should likely use `&&` to define a range for extreme cold.

## ✨ Example

If you enter `10`, the console will output:
```
Wear heavy clothes
```
(This is due to the logical flaw. It should be "Wear a jacket".)

If you enter `-40`, the console will output:
```
Wear heavy clothes
```



