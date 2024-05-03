function incrementAll(input: number[]): number[] {
  // Create a new array to store the incremented elements
  let result: number[] = [];

  // Iterate through the input array and increment each element by one
  for (let number of input) {
    result.push(number + 1);
  }

  return result;
}

// Test case
let originalNumbers: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", originalNumbers);
console.log(
  "Array after incrementing all elements:",
  incrementAll(originalNumbers)
);
