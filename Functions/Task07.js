"use strict";
function formatNames(names) {
    if (names.length === 0) {
        return ""; // Return an empty string if the array is empty
    }
    else if (names.length === 1) {
        return names[0]; // Return the single name if there's only one element in the array
    }
    else {
        // Join all names except the last two with commas
        let formattedString = names.slice(0, -2).join(", ");
        // Add the last two names separated by "and"
        formattedString +=
            (formattedString.length > 0 ? ", " : "") + names.slice(-2).join(" and ");
        return formattedString;
    }
}
// Test cases
console.log(formatNames(["John", "Jane", "Doe"])); // "John, Jane and Doe"
console.log(formatNames(["Alice", "Bob"])); // "Alice and Bob"
console.log(formatNames(["Tom"])); // "Tom"
console.log(formatNames([])); // ""
