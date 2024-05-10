"use strict";
function sortNumbers(numbers) {
    // Use the sort() method to sort the numbers array
    // The compare function compares two elements and returns:
    // -1 if the first element should come before the second,
    // 0 if both elements are equal,
    // 1 if the second element should come before the first.
    return numbers.sort((a, b) => a - b);
}
// Test case
const numbers = [5, 2, 8, 1, 9, 3];
const sortedNumbers = sortNumbers(numbers);
console.log("Sorted numbers:", sortedNumbers);
