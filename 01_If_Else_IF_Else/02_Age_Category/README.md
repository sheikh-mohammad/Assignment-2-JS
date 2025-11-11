# Project: Age Category

## 📝 Overview

This project categorizes a person into "Child", "Teenager", "Adult", or "Senior citizen" based on their age. It's a practical example of using `if-else if-else` statements to handle multiple conditions.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Age:". Type an age and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the output.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Age:");
    ```
    This line prompts the user to enter their age. The `+` sign converts the input string to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `age` and prints the corresponding category:
    ```javascript
    if (age <= 12) {
        console.log("Child");
    } else if (age <= 19) {
        console.log("Teenager");
    } else if (age <= 59) {
        console.log("Adult");
    } else if (age >= 60) {
        console.log("Senior citizen");
    }
    ```
    -   If the age is 12 or less, it logs "Child".
    -   If the age is between 13 and 19, it logs "Teenager".
    -   If the age is between 20 and 59, it logs "Adult".
    -   If the age is 60 or more, it logs "Senior citizen".

## ✨ Example

If you enter `10`, the console will output:
```
Child
```
If you enter `18`, the console will output:
```
Teenager
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 01_If_Else_IF_Else README](../README.md)
