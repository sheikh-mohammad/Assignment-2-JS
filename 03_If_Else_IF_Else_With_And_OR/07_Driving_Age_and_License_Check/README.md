# Project: Driving Age and License Check

## 📝 Overview

This project checks if a person is eligible to drive based on their age and whether they have a license. It's a clear, real-world example of using the logical AND (`&&`) operator to validate multiple requirements.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your age and then your license status ("Yes" or "No").
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your driving eligibility.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    var licenseStatus = prompt("Enter Your License Status: (Yes, No)");
    ```
    These lines get the user's age and license status.

-   **Conditional Logic**:
    The `if-else if-else` statement checks both conditions:
    ```javascript
    if ((age >= 18) && (licenseStatus == "Yes")) {
        console.log("Eligible to drive");
    } else if ((age < 18) && (licenseStatus == "Yes")) {
        console.log("Not eligible to drive by age");
    } else if (licenseStatus == "No") {
        console.log("You need a license to drive");
    }
    ```
    -   The first condition checks if the age is 18 or over AND the person has a license.
    -   The second condition checks if the person is under 18, even if they have a license.
    -   The third condition checks if the person does not have a license, regardless of age.

## ✨ Example

If you enter age `20` and license status `Yes`, the console will output:
```
Eligible to drive
```
If you enter age `17` and license status `Yes`, the console will output:
```
Not eligible to drive by age
```



