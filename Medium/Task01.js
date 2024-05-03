// Define a function calculateArea that takes the radius of a circle as input and returns the area of the circle
function calculateArea(radius) {
    // Calculate the area of the circle using the formula: π * radius^2
    return Math.PI * Math.pow(radius, 2);
}
// Test case
var radius = 5;
var area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is", area);
