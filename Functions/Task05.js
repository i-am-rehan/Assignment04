"use strict";
function countOccurrences(array, target) {
    // Initialize a variable to store the count of occurrences
    let count = 0;
    // Iterate through the array and increment the count for each occurrence of the target element
    for (let element of array) {
        if (element === target) {
            count++;
        }
    }
    return count;
}
// Test case
let array = [1, 2, 3, 4, 2, 5, 2];
let targetElement = 2;
console.log("Occurrences of", targetElement, "in array:", countOccurrences(array, targetElement));
