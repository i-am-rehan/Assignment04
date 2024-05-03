function swapElements(array: any[], index1: number, index2: number): void {
  // Check if indices are within the bounds of the array
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    throw new Error("Indices are out of bounds.");
  }

  // Swap elements at the specified indices
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Test case
let testArray: number[] = [1, 2, 3, 4, 5];
console.log("Array before swapping:", testArray);
swapElements(testArray, 1, 3);
console.log("Array after swapping:", testArray);
