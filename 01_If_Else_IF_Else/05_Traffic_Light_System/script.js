var signalColor = prompt("Enter Signal Color (red, yellow, green):");

if (signalColor == "red") {
    console.log("Stop");
} else if (signalColor == "yellow") {
    console.log("Get ready");
} else if (signalColor == "green") {
    console.log("Go");
} else {
    console.log("Invalid signal");
}