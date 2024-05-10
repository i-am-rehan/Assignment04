"use strict";
function countCharacterOccurrences(inputString, character) {
    // Initialize a variable to store the count of occurrences
    let count = 0;
    // Loop through each character in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Check if the current character matches the specified character
        if (inputString.charAt(i) === character) {
            // Increment the count if there is a match
            count++;
        }
    }
    // Return the count of occurrences
    return count;
}
// Test cases
console.log(countCharacterOccurrences("hello world", "o")); // Output: 2
console.log(countCharacterOccurrences("programming is fun", "m")); // Output: 2
console.log(countCharacterOccurrences("typescript", "t")); // Output: 2
