var speed = +prompt("Enter Your Speed:");

if (speed < 60) {
    console.log("Safe driving");
} else if (speed < 80) {
    console.log("Warning: Speed limit approaching");
} else if (speed >= 80) {
    console.log("Speeding violation! Fine imposed");
}