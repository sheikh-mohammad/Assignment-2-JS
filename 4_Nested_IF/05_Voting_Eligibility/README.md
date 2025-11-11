# Project: Voting Eligibility

## 📝 Overview

This project determines a person's voting eligibility based on their age and nationality. It uses nested `if` statements to first check the age requirement and then the nationality requirement.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your age and then your nationality.
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your voting eligibility status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    var nationality = prompt("Enter Your Nationality:");
    ```
    These lines get the user's age and nationality.

-   **Conditional Logic**:
    The nested `if` statements check the eligibility:
    ```javascript
    if (age >= 18) {
        if (nationality == "Pakistan") {
            console.log("Eligible to vote");
        } else if (nationality != "Pakistan") {
            console.log("Not Eligible due to nationality");
        }
    } else if (age < 18) {
        console.log("Not eligible to vote");
    }
    ```
    -   The outer `if` checks if the `age` is 18 or greater.
    -   If the age condition is met, the inner `if` then checks if the `nationality` is "Pakistan".
    -   If the age is less than 18, the person is immediately deemed "Not eligible to vote".

## ✨ Example

If you enter age `25` and nationality `Pakistan`, the console will output:
```
Eligible to vote
```
If you enter age `20` and nationality `India`, the console will output:
```
Not Eligible due to nationality
```
