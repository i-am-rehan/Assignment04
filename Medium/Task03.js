// Define an array of temperatures
var temperatures = [25, 28, 20, 32, 23];
// Initialize a variable to store the highest temperature
var highestTemperature = temperatures[0];
// Loop through the array of temperatures
for (var _i = 0, temperatures_1 = temperatures; _i < temperatures_1.length; _i++) {
    var temperature = temperatures_1[_i];
    // Check if the current temperature is higher than the highest temperature found so far
    if (temperature > highestTemperature) {
        highestTemperature = temperature; // Update the highest temperature if the current temperature is higher
    }
}
// Log the highest temperature to the console
console.log("The highest temperature is:", highestTemperature);
