function countOccurrences(array: any[], target: any): number {
  // Initialize a variable to store the count of occurrences
  let count: number = 0;

  // Iterate through the array and increment the count for each occurrence of the target element
  for (let element of array) {
    if (element === target) {
      count++;
    }
  }

  return count;
}

// Test case
let array: any[] = [1, 2, 3, 4, 2, 5, 2];
let targetElement: number = 2;
console.log(
  "Occurrences of",
  targetElement,
  "in array:",
  countOccurrences(array, targetElement)
);
