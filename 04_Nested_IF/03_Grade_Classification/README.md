# Project: Grade Classification

## 📝 Overview

This project assigns a letter grade (A, B, C, or Fail) based on a student's marks, using nested `if` statements for finer distinctions within certain mark ranges. This demonstrates how nested conditions can create more granular classification systems.

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
    This line prompts the user to enter their marks. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The nested `if` statements classify the marks:
    ```javascript
    if (marks >= 90) {
        console.log("A Grade");
    } else if (marks >= 75 && marks < 90) {
        if (marks >= 80) {
            console.log("B Grade");
        } else if (marks < 80) {
            console.log("C Grade");
        }
    } else if (marks < 75) {
        console.log("Fail");
    }
    ```
    -   If marks are 90 or above, it's an "A Grade".
    -   If marks are between 75 and 89, it enters a nested `if` to further classify:
        -   If marks are 80-89, it's a "B Grade".
        -   If marks are 75-79, it's a "C Grade".
    -   If marks are below 75, it's a "Fail".

## ✨ Example

If you enter `95`, the console will output:
```
A Grade
```
If you enter `82`, the console will output:
```
B Grade
```
If you enter `78`, the console will output:
```
C Grade
```


