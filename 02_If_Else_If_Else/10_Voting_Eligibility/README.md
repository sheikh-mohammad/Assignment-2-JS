# Project: Voting Eligibility Checker

## 📝 Overview

This project determines a person's voting eligibility based on their age. It provides three different statuses: "Eligible to vote", "Soon eligible to vote", and "Not eligible to vote yet". This is a good example of handling multiple, distinct age-based categories.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Age:". Type an age and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the voting eligibility status.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    ```
    This line prompts the user to enter their age. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `age` to determine voting eligibility:
    ```javascript
    if (age >= 18) {
        console.log("Eligible to vote");
    } else if (age < 18 && age >= 16) {
        console.log("Soon eligible to vote");
    } else if (age < 16) {
        console.log("Not eligible to vote yet");
    }
    ```
    -   If the age is 18 or greater, the person is "Eligible to vote".
    -   If the age is 16 or 17, they are "Soon eligible to vote".
    -   If the age is less than 16, they are "Not eligible to vote yet".

## ✨ Example

If you enter `20`, the console will output:
```
Eligible to vote
```
If you enter `16`, the console will output:
```
Soon eligible to vote
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)




## License

� 2025 sheikh-mohammad. All Rights Reserved.
