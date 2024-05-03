"use strict";
// Function to count the number of times a score exceeds the maximum score and falls below the minimum score
function countExceedsAndFalls(scores) {
    // Initialize variables to store maximum and minimum scores and their respective counts
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedsCount = 0;
    let fallsCount = 0;
    // Iterate through the scores array to find the maximum and minimum scores
    for (let score of scores) {
        // Update maximum score if current score is greater
        if (score > maxScore) {
            maxScore = score;
        }
        // Update minimum score if current score is smaller
        if (score < minScore) {
            minScore = score;
        }
    }
    // Iterate through the scores array again to count exceeds and falls
    for (let score of scores) {
        // Count number of times the score exceeds the maximum score
        if (score > maxScore) {
            exceedsCount++;
        }
        // Count number of times the score falls below the minimum score
        if (score < minScore) {
            fallsCount++;
        }
    }
    // Log the results
    console.log("Number of times the score exceeded the maximum score:", exceedsCount);
    console.log("Number of times the score fell below the minimum score:", fallsCount);
}
// Test case for countExceedsAndFalls function
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedsAndFalls(scores);
// Function to remove falsey values from an array
function removeFalseyValues(array) {
    // Use the filter method to create a new array with only truthy values
    return array.filter((value) => !!value);
}
// Test case for removeFalseyValues function
let array = [0, false, null, "", undefined, NaN, 1, "hello", true];
let filteredArray = removeFalseyValues(array);
console.log("Original array:", array);
console.log("Array after removing falsey values:", filteredArray);
