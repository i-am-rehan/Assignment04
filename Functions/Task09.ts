function minMaxAverage(input: number[]): {
  min: number;
  max: number;
  average: number;
} {
  // Check if the array is empty
  if (input.length === 0) {
    throw new Error(
      "Array is empty. Cannot calculate minimum, maximum, and average."
    );
  }

  // Calculate minimum, maximum, and sum of numbers
  let min = Math.min(...input);
  let max = Math.max(...input);
  let sum = input.reduce((acc, val) => acc + val, 0);

  // Calculate average
  let average = sum / input.length;

  // Return an object with min, max, and average properties
  return { min, max, average };
}

// Test case
const testNumbers: number[] = [5, 10, 15, 20, 25];
const result = minMaxAverage(testNumbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
console.log("Average:", result.average);
