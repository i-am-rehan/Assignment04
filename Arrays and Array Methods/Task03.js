"use strict";
// Define a function to square each number in an array
function squareNumbers(numbers) {
    // Use the map method to create a new array with each number squared
    return numbers.map((number) => number * number);
}
// Test case
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
console.log("Array with each number squared:", squareNumbers(numbers));
