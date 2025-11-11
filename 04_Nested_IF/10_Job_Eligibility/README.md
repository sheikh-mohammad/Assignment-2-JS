# Project: Job Eligibility

## 📝 Overview

This project determines a candidate's eligibility for different job positions (senior, mid-level, entry-level) based on their years of experience and skill level. It's a practical application of nested `if` statements to match candidates to roles.

## 🚀 How to Use

1.  **Open the Application**: Open the `index.html` file in any modern web browser.
2.  **Provide Input**: The browser will prompt for your years of experience and then your skill level ("beginner", "intermediate", or "advanced").
3.  **See the Result**: Open the browser's developer console (`Ctrl+Shift+I` or `Cmd+Option+I` and click the "Console" tab) to see your job eligibility.

## 💻 Code Explanation

The core logic is in the `script.js` file.

-   **Getting User Input**:
    ```javascript
    var experience = prompt("Enter Your Experience:");
    var skills = prompt("Enter Your Skills: (beginner, intermediate, advanced)");
    ```
    These lines get the user's experience and skills.

-   **Conditional Logic**:
    The nested `if` statements determine job eligibility:
    ```javascript
    if (experience >= 5) {
        if (skills == "advanced") {
            console.log("Eligible for senior position");
        } else if (skills == "intermediate") {
            console.log("Eligible for mid-level position");
        }
    } else if (experience < 5) {
        if (skills == "beginner") {
            console.log("Eligible for entry-level position");
        } else if (skills == "intermediate") {
            console.log("Eligible for mid-level position");
        }
    }
    ```
    -   The outer `if` checks if `experience` is 5 years or more.
    -   If so, the inner `if` checks for "advanced" or "intermediate" skills for senior/mid-level positions.
    -   If experience is less than 5 years, a different set of inner `if` statements checks for "beginner" or "intermediate" skills for entry-level/mid-level positions.

## ✨ Example

If you enter experience `7` and skills `advanced`, the console will output:
```
Eligible for senior position
```
If you enter experience `3` and skills `intermediate`, the console will output:
```
Eligible for mid-level position
```

