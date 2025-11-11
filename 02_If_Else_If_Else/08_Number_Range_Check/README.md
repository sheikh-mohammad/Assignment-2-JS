# Project: Number Range Check

## 📝 Overview

This project checks which range a given number falls into (1-10, 11-20, or 21-30). It's a good exercise for practicing how to handle sequential, non-overlapping numerical ranges with `if-else if-else`.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Any Number:". Type a number and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see which range the number belongs to.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var num = +prompt("Enter Any Number:");
    ```
    This line prompts the user to enter a number. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `num` and identifies its range:
    ```javascript
    if (num <= 10) {
        console.log("Between 1 and 10");
    } else if (num <= 20) {
        console.log("Between 11 and 20");
    } else if (num <= 30) {
        console.log("Between 21 and 30");
    } else {
        console.log("Number is out of range");
    }
    ```
    -   If the number is 10 or less, it's considered "Between 1 and 10".
    -   If the number is greater than 10 but 20 or less, it's "Between 11 and 20".
    -   If the number is greater than 20 but 30 or less, it's "Between 21 and 30".
    -   Any number greater than 30 is "out of range".

## ✨ Example

If you enter `7`, the console will output:
```
Between 1 and 10
```
If you enter `25`, the console will output:
```
Between 21 and 30
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)
