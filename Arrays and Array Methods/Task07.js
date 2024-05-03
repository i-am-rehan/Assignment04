"use strict";
function sumOfElements(numbers, isEven) {
    let sum = 0;
    for (let number of numbers) {
        if ((isEven && number % 2 === 0) || (!isEven && number % 2 !== 0)) {
            sum += number;
        }
    }
    return sum;
}
// Test case for sum of even elements
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even elements:", sumOfElements(numbers1, true)); // Output: 30 (2 + 4 + 6 + 8 + 10)
// Test case for sum of odd elements
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of odd elements:", sumOfElements(numbers2, false)); // Output: 25 (1 + 3 + 5 + 7 + 9)
