# Project: Marks Grade System

## 📝 Overview

This project assigns a letter grade (A, B, C, or Fail) based on a student's marks. It's a classic example of using `if-else if-else` to map a numerical value to a specific category.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Marks:". Type the marks and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the assigned grade.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var marks = +prompt("Enter Your Marks:");
    ```
    This line prompts the user to enter their marks. The `+` sign converts the input string to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `marks` and logs the corresponding grade:
    ```javascript
    if (marks >= 90) {
        console.log("A");
    } else if (marks >= 80) {
        console.log("B");
    } else if (marks >= 70) {
        console.log("C");
    } else if (marks < 60) {
        console.log("Fail");
    }
    ```
    -   If marks are 90 or above, the grade is "A".
    -   If marks are between 80 and 89, the grade is "B".
    -   If marks are between 70 and 79, the grade is "C".
    -   If marks are below 60, the result is "Fail".

## ✨ Example

If you enter `95`, the console will output:
```
A
```
If you enter `72`, the console will output:
```
C
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 01_If_Else_IF_Else README](../README.md)


