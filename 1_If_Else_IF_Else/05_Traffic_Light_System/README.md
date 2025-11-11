# Project: Traffic Light System

## 📝 Overview

This project simulates a traffic light system. Based on the color of the traffic signal entered by the user (red, yellow, or green), it provides the appropriate instruction ("Stop", "Get ready", or "Go"). This is a great exercise for handling string comparisons with `if-else if-else`.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Signal Color (red, yellow, green):". Type one of the colors and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the instruction.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var signalColor = prompt("Enter Signal Color (red, yellow, green):");
    ```
    This line prompts the user to enter a signal color. The input is stored as a string.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `signalColor` and logs the corresponding instruction:
    ```javascript
    if (signalColor == "red") {
        console.log("Stop");
    } else if (signalColor == "yellow") {
        console.log("Get ready");
    } else if (signalColor == "green") {
        console.log("Go");
    } else {
        console.log("Invalid signal");
    }
    ```
    -   If the input is "red", it logs "Stop".
    -   If the input is "yellow", it logs "Get ready".
    -   If the input is "green", it logs "Go".
    -   For any other input, it logs "Invalid signal".

## ✨ Example

If you enter `red`, the console will output:
```
Stop
```
If you enter `green`, the console will output:
```
Go
```
