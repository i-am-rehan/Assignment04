function logArrayInReverse<T>(array: T[]): void {
  // Iterate through the array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    // Log each element to the console
    console.log(array[i]);
  }
}

// Test case
const originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", originalArray);
console.log("Array in reverse order:");
logArrayInReverse(originalArray);
