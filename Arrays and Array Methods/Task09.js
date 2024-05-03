"use strict";
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty. Cannot find the smallest number.");
    }
    let smallestNumber = numbers[0];
    for (let number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}
// Test cases
let numbersA = [3, 5, 1, 7, 2];
console.log("Smallest number in array A:", findSmallestNumber(numbersA)); // Output: 1
let numbersB = [10, 8, 6, 4, 2];
console.log("Smallest number in array B:", findSmallestNumber(numbersB)); // Output: 2
let emptyArray = [];
console.log("Smallest number in empty array:", findSmallestNumber(emptyArray)); // Throws an error
