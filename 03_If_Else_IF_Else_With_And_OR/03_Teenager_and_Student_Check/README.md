# Project: Teenager and Student Check

## 📝 Overview

This project checks if a person is both a teenager and a student. It uses the logical AND (`&&`) and OR (`||`) operators to handle multiple criteria: age range and student status.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your age and then your student status ("yes" or "no").
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the result.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    var studentStatus = prompt("Enter Your Student Status: (yes, no)");
    ```
    These lines get the user's age and student status.

-   **Conditional Logic**:
    The `if-else if-else` statement checks multiple conditions:
    ```javascript
    if ((age >= 13) && (age <= 19) && (studentStatus == "yes")) {
        console.log("Teenager and Student");
    } else if ((age >= 13) && (age <= 19) && (studentStatus == "no")) {
        console.log("Teenager but not a Student");
    } else if (age < 13 || age > 19) {
        console.log("Not a Teenager");
    }
    ```
    -   The first condition checks if the age is between 13 and 19 AND the student status is "yes".
    -   The second condition checks if the age is between 13 and 19 AND the student status is "no".
    -   The third condition checks if the person is younger than 13 OR older than 19.

## ✨ Example

If you enter age `16` and status `yes`, the console will output:
```
Teenager and Student
```
If you enter age `18` and status `no`, the console will output:
```
Teenager but not a Student
```

[Go Back to 03_If_Else_IF_Else_With_And_OR README](../README.md)

## License

© 2025 sheikh-mohammad. All Rights Reserved

This project is provided for educational and review purposes only. The code is not licensed for use, modification, or distribution. Please see the [LICENSE](LICENSE) file for full details.