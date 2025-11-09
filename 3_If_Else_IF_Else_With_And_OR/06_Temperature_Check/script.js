var temperature = +prompt("Enter Temperature:");

if ((temperature < 0) || (temperature > -35)) {
    console.log("Wear heavy clothes");
} else if ((temperature >= 0) && (temperature <= 20)) {
    console.log("Wear a jacket");
} else if ((temperature > 20) && (temperature <= 35)) {
    console.log("Wear light clothes");
}