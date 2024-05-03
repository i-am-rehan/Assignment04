// Define an array of temperatures
let temperatures: number[] = [25, 28, 20, 32, 23];

// Initialize a variable to store the highest temperature
let highestTemperature: number = temperatures[0];

// Loop through the array of temperatures
for (let temperature of temperatures) {
  // Check if the current temperature is higher than the highest temperature found so far
  if (temperature > highestTemperature) {
    highestTemperature = temperature; // Update the highest temperature if the current temperature is higher
  }
}

// Log the highest temperature to the console
console.log("The highest temperature is:", highestTemperature);
