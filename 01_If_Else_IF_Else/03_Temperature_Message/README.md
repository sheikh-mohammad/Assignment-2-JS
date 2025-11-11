# Project: Temperature Message

## 📝 Overview

This project provides a descriptive message based on a temperature value entered by the user. It's a simple way to practice `if-else if-else` statements for numerical ranges.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Temperature:". Type a temperature (e.g., 25) and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the output message.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var temperature = +prompt("Enter Temperature:");
    ```
    This line prompts the user to enter a temperature. The `+` sign converts the input string to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `temperature` and logs a corresponding message:
    ```javascript
    if (temperature < 0) {
        console.log("Freezing cold");
    } else if (temperature <= 15) {
        console.log("Cold weather");
    } else if (temperature <= 30) {
        console.log("Pleasant day");
    } else if (temperature > 30){
        console.log("Hot day");
    }
    ```
    -   If the temperature is below 0, it logs "Freezing cold".
    -   If the temperature is between 0 and 15, it logs "Cold weather".
    -   If the temperature is between 16 and 30, it logs "Pleasant day".
    -   If the temperature is above 30, it logs "Hot day".

## ✨ Example

If you enter `25`, the console will output:
```
Pleasant day
```
If you enter `-5`, the console will output:
```
Freezing cold
```

## License

© 2025 sheikh-mohammad. All Rights Reserved.

This project is provided for educational and review purposes only. The code is not licensed for use, modification, or distribution. Please see the [LICENSE](../../../LICENSE) file for full details.

[Go Back to 01_If_Else_IF_Else README](../README.md)



