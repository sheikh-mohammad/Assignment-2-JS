# Project: Eligibility to Vote

## 📝 Overview

This project determines if a person is eligible to vote based on two criteria: age and citizenship. It's a practical example of using the logical AND (`&&`) operator to ensure multiple conditions are met.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt you for your age and then your citizenship.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your eligibility status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    var citizen = prompt("Enter Your Citizenship:");
    ```
    These lines prompt the user for their age and citizenship.

-   **Conditional Logic**:
    The `if-else if-else` statement uses the `&&` operator to check both age and citizenship:
    ```javascript
    if ((age >= 18) && (citizen == "Pakistan")) {
        console.log("Eligible to vote");
    } else if ((age < 18) && (citizen == "Pakistan")) {
        console.log("Not eligible to vote");
    } else if (citizen != "Pakistan") {
        console.log("Not eligible due to citizenship");
    }
    ```
    -   The first condition checks if the age is 18 or over AND citizenship is "Pakistan".
    -   The second condition checks if the age is less than 18 AND citizenship is "Pakistan".
    -   The third condition catches any case where citizenship is not "Pakistan".

## ✨ Example

If you enter age `25` and citizenship `Pakistan`, the console will output:
```
Eligible to vote
```
If you enter age `17` and citizenship `Pakistan`, the console will output:
```
Not eligible to vote
```





## License

� 2025 sheikh-mohammad. All Rights Reserved.
