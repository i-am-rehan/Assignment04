function filterByLength(strings: string[], n: number): string[] {
  // Initialize an empty array to store filtered strings
  let filteredStrings: string[] = [];

  // Iterate through each string in the input array
  for (let str of strings) {
    // Check if the length of the string is greater than n
    if (str.length > n) {
      // If so, add the string to the filtered array
      filteredStrings.push(str);
    }
  }

  return filteredStrings;
}

// Test case
let words: string[] = ["apple", "banana", "orange", "pear", "grape"];
let n: number = 5;
console.log("Strings longer than", n, "characters:", filterByLength(words, n));
