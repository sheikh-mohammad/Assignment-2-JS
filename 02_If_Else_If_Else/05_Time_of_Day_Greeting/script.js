var hour = +prompt("Enter Hour: (0 to 23)");

if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 18) {
    console.log("Good Afternoon");
} else if (hour >= 18) {
    console.log("Good Evening");
}