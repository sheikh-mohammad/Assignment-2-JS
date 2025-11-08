var temperature = +prompt("Enter Temperature:");

if (temperature < 0) {
    console.log("Freezing cold");
} else if (temperature <= 15) {
    console.log("Cold weather");
} else if (temperature <= 30) {
    console.log("Pleasant day");
} else if (temperature > 30){
    console.log("Hot day");
}