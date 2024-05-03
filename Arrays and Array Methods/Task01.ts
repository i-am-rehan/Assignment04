// Define a function to filter words starting with the letter 'a' from an array
function wordsStartingWithA(words: string[]): string[] {
  // Use the filter method to create a new array containing only words starting with 'a'
  return words.filter((word) => word.toLowerCase().startsWith("a"));
}

// Test case
let words: string[] = ["Apple", "Banana", "Apricot", "Orange", "Avocado"];
console.log("Words starting with 'a':", wordsStartingWithA(words)); // Output: ["Apple", "Apricot", "Avocado"]
