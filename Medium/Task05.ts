// Define a function to count the positive numbers in an array
function countPositiveNumbers(numbers: number[]): number {
  // Initialize a variable to store the count of positive numbers
  let count: number = 0;

  // Loop through each number in the array
  for (let number of numbers) {
    // Check if the current number is positive
    if (number > 0) {
      count++; // Increment the count if the number is positive
    }
  }

  // Return the count of positive numbers
  return count;
}

// Test case
let numbers: number[] = [3, -2, 5, 0, -7, 8];
console.log("Count of positive numbers:", countPositiveNumbers(numbers)); // Output: 3
