var salary = +prompt("Enter Your Salary");
var creditScore = +prompt("Enter Your Credit Score:");

if ((salary >= 50000) && (creditScore >= 700)) {
    console.log("Loan Approved");
} else if ((salary >= 50000) || (creditScore >= 700)) {
    console.log("Loan Pending");
} else {
    console.log("Loan Denied");
}