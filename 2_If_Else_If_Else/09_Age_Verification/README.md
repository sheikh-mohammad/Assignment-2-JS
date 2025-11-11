# Project: Age Verification

## 📝 Overview

This project classifies a person as an "Adult", "Teenager", or "Child" based on their age. It's a simple age-based categorization task that highlights a potential logic flaw in the `if-else if-else` sequence.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will display a prompt asking you to "Enter Your Age:". Type an age and click "OK".
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see the age category.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var age = +prompt("Enter Your Age:");
    ```
    This line prompts the user to enter their age. The `+` sign converts the input to a number.

-   **Conditional Logic**:
    The `if-else if-else` statement checks the `age`:
    ```javascript
    if (age >= 18) {
        console.log("Adult");
    } else if (age < 17) {
        console.log("Teenager");
    } else if (age < 13) {
        console.log("ChildF");
    }
    ```
    -   If the age is 18 or greater, it logs "Adult".
    -   If the age is less than 17, it logs "Teenager".
    -   **Note**: The third condition `age < 13` is currently unreachable. Any age less than 13 is also less than 17, so the second condition will always execute first. To fix this, the order of checks should be from smallest to largest (e.g., check for `< 13` first). The "ChildF" seems to be a typo and should be "Child".

## ✨ Example

If you enter `25`, the console will output:
```
Adult
```
If you enter `16`, the console will output:
```
Teenager
```

