"use strict";
function findDuplicates(array) {
    // Initialize an empty object to store the frequency of each element
    const frequencyMap = {};
    // Iterate through the array to populate the frequency map
    for (let element of array) {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
    // Iterate through the frequency map to find duplicates and log them
    for (let key in frequencyMap) {
        if (frequencyMap[key] > 1) {
            console.log("Duplicate:", key);
        }
    }
}
// Test case
let numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7];
console.log("Duplicates in array:");
findDuplicates(numbers);
