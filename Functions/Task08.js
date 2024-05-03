"use strict";
function convertFahrenheitToCelsius(fahrenheitTemperatures) {
    // Convert each Fahrenheit temperature to Celsius
    const celsiusTemperatures = fahrenheitTemperatures.map((fahrenheit) => ((fahrenheit - 32) * 5) / 9);
    // Log the converted temperatures
    console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
    console.log("Celsius Temperatures:", celsiusTemperatures);
}
// Test case
const fahrenheitTemperatures = [32, 68, 86, 104, 122];
convertFahrenheitToCelsius(fahrenheitTemperatures);
