// Define a function to count the positive numbers in an array
function countPositiveNumbers(numbers) {
    // Initialize a variable to store the count of positive numbers
    var count = 0;
    // Loop through each number in the array
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        // Check if the current number is positive
        if (number > 0) {
            count++; // Increment the count if the number is positive
        }
    }
    // Return the count of positive numbers
    return count;
}
// Test case
var numbers = [3, -2, 5, 0, -7, 8];
console.log("Count of positive numbers:", countPositiveNumbers(numbers)); // Output: 3
