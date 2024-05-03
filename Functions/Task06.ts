function isSorted(array: number[]): boolean {
  // Iterate through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    // If the current element is smaller than the previous element, the array is not sorted
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  // If the loop completes without finding any unsorted elements, the array is sorted
  return true;
}

// Test cases
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false
console.log(isSorted([5, 4, 3, 2, 1])); // false
console.log(isSorted([1])); // true
console.log(isSorted([])); // true
