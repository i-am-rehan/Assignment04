function findElementIndex(array: any[], element: any): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i; // Return the index if the element is found
    }
  }
  return -1; // Return -1 if the element is not found
}

// Test case
let testArray: number[] = [1, 2, 3, 4, 5]; // Renamed the variable to 'testArray'
let elementToFind: number = 3;
console.log(
  "Index of element",
  elementToFind,
  "in array:",
  findElementIndex(testArray, elementToFind)
);
