# Project: Age Verification

## 📝 Overview

This project classifies a person as an "Adult", "Teenager", or "Child" based on their age. It's a simple age-based categorization task that highlights the importance of correct `if-else if-else` sequence.

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
    The `if-else if-else` statement checks the `age`. To ensure correct categorization, the checks should be ordered from the smallest age group to the largest, or vice-versa, to avoid conditions being prematurely met.

    A corrected logical flow would be:
    ```javascript
    if (age < 13) {
        console.log("Child");
    } else if (age < 18) { // This covers ages 13-17
        console.log("Teenager");
    } else { // This covers ages 18 and above
        console.log("Adult");
    }
    ```
    -   If the age is less than 13, it logs "Child".
    -   If the age is between 13 and 17 (inclusive), it logs "Teenager".
    -   If the age is 18 or greater, it logs "Adult".

## ✨ Example

If you enter `25`, the console will output:
```
Adult
```
If you enter `16`, the console will output:
```
Teenager
```
If you enter `8`, the console will output:
```
Child
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../../LICENSE) file for details.

[Go Back to 02_If_Else_If_Else README](../README.md)


