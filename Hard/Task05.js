"use strict";
function calculate(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            if (operand2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return operand1 / operand2;
        default:
            throw new Error("Invalid operator. Please use '+', '-', '*', or '/'.");
    }
}
function getUserInput(promptMessage) {
    const input = prompt(promptMessage);
    if (input === null) {
        throw new Error("User canceled the input.");
    }
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error("Invalid input. Please enter a valid number.");
    }
    return number;
}
try {
    // Get operands and operator from the user
    const operand1 = getUserInput("Enter the first operand:");
    const operand2 = getUserInput("Enter the second operand:");
    // Get operator from the user, handling null case
    let operator = prompt("Enter the operator (+, -, *, /)");
    if (operator === null) {
        throw new Error("User canceled the input.");
    }
    // Validate operator
    operator = operator.trim();
    if (!["+", "-", "*", "/"].includes(operator)) {
        throw new Error("Invalid operator. Please use '+', '-', '*', or '/'.");
    }
    // Calculate the result
    const result = calculate(operand1, operand2, operator);
    // Log the result
    console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
}
catch (error) {
    console.error("Error:", error.message);
}
