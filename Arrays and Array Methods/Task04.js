"use strict";
// Define a function to reverse an array without using the reverse() method
function reverseArray(array) {
    // Initialize an empty array to store the reversed elements
    let reversedArray = [];
    // Loop through the input array in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
        // Add each element of the input array to the reversed array
        reversedArray.push(array[i]);
    }
    // Return the reversed array
    return reversedArray;
}
// Test case
let originalArray = [1, 2, 3, 4, 5];
console.log("Original array:", originalArray);
let reversedArray = reverseArray(originalArray);
console.log("Reversed array:", reversedArray);
