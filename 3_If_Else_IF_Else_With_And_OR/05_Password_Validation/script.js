var password = prompt("Enter Your Password:");
var hasUpper;
var hasNum;

if (password.includes("A") || password.includes("B") || password.includes("C") || password.includes("D") || password.includes("E") || password.includes("F") || password.includes("G") || password.includes("H") || password.includes("I") || password.includes("J") || password.includes("K") || password.includes("L") || password.includes("M") || password.includes("N") || password.includes("O") || password.includes("P") || password.includes("Q") || password.includes("R") || password.includes("S") || password.includes("T") || password.includes("U") || password.includes("V") || password.includes("W") || password.includes("X") || password.includes("Y") || password.includes("Z")) {
    hasUpper = true;
} else {
    hasUpper = false;
}

if (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9")) {
    hasNum = true;
} else {
    hasNum = false;
}

if ((password.length >= 8) && (hasUpper == true) && (hasNum == true)) {
    console.log("Strong password");
} else if ((password.length >= 8) && (hasUpper == false) && (hasNum == false)) {
    console.log("Weak password");
} else if (password.length < 8) {
    console.log("Password too short");
}