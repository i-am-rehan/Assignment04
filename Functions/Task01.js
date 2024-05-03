"use strict";
function calculateProduct(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        throw new Error("Array is empty. Cannot calculate product.");
    }
    // Initialize the product to 1
    let product = 1;
    // Multiply each element with the product
    for (let number of numbers) {
        product *= number;
    }
    return product;
}
// Test cases
let numbers1 = [2, 3, 4];
console.log("Product of elements in array:", calculateProduct(numbers1)); // Output: 24 (2 * 3 * 4)
let numbers2 = [5, 6, 7, 8];
console.log("Product of elements in array:", calculateProduct(numbers2)); // Output: 1680 (5 * 6 * 7 * 8)
let emptyArray = [];
console.log("Product of elements in empty array:", calculateProduct(emptyArray)); // Throws an error
