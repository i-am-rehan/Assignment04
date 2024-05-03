"use strict";
// Define an array named fruits
let fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"];
// Check if the array has at least two elements
if (fruits.length >= 2) {
    // Access the second to last element using the index fruits.length - 2
    let secondToLastElement = fruits[fruits.length - 2];
    console.log("The second to last element of the fruits array is:", secondToLastElement);
}
else {
    console.log("The fruits array does not have a second to last element.");
}
