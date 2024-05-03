// Define a function calculateArea that takes the radius of a circle as input and returns the area of the circle
function calculateArea(radius: number): number {
  // Calculate the area of the circle using the formula: π * radius^2
  return Math.PI * radius ** 2;
}

// Test case
let radius = 5;
let area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is", area);
