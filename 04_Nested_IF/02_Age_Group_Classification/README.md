# Project: Age Group Classification

## 📝 Overview

This project categorizes a person into "Child", "Teenager", "Adult", or "Senior Citizen" using nested `if` statements. It demonstrates how to refine age-based classifications by adding sub-conditions.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Age:". Type an age and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the age group classification.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    ```
    This line prompts the user to enter their age. The `+` sign converts the input string into a number.

-   **Conditional Logic**:
    The nested `if` statements classify the age:
    ```javascript
    if (age >= 18) {
        if (age >= 60) {
            console.log("Senior Citizen");
        } else if (age < 60) {
            console.log("Adult");
        }
    } else if (age < 18) {
        if (age >= 13) {
            console.log("Teenager");
        } else if (age < 13) {
            console.log("Child");
        }
    }
    ```
    -   The outer `if` checks if the person is 18 or older (Adult/Senior) or younger than 18 (Teenager/Child).
    -   The inner `if` statements then further refine the category within those broad groups.

## ✨ Example

If you enter `70`, the console will output:
```
Senior Citizen
```
If you enter `25`, the console will output:
```
Adult
```
If you enter `15`, the console will output:
```
Teenager
```





## License

� 2025 sheikh-mohammad. All Rights Reserved.
