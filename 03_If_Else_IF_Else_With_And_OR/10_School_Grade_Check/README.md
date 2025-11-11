# Project: School Grade Check

## 📝 Overview

This project evaluates a student's overall performance by checking both their marks and attendance percentage. It provides feedback based on four possible outcomes, making it a great example of a 2x2 matrix of conditions using logical AND (`&&`).

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your marks and then your attendance percentage.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the performance feedback.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var marks = +prompt("Enter Your Marks:");
    var attendance = +prompt("Enter Your Attendance Percentage:)");
    ```
    These lines get the student's marks and attendance.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the combination of marks and attendance:
    ```javascript
    if ((marks >= 75) && (attendance >= 80)) {
        console.log("Good student");
    } else if ((marks >= 75) && (attendance < 80)) {
        console.log("Needs to improve attendance");
    } else if ((marks < 75) && (attendance >= 80)) {
        console.log("Needs to improve marks");
    } else if ((marks < 75) && (attendance < 80)) {
        console.log("Needs improvement in both");
    }
    ```
    -   If marks are high AND attendance is high, the feedback is "Good student".
    -   If marks are high but attendance is low, it recommends improving attendance.
    -   If marks are low but attendance is high, it recommends improving marks.
    -   If both are low, it recommends improvement in both.

## ✨ Example

If you enter marks `80` and attendance `90`, the console will output:
```
Good student
```
If you enter marks `85` and attendance `70`, the console will output:
```
Needs to improve attendance
```



