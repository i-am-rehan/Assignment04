// Prompt the user to enter their age
let ageString: string | null = prompt("Please enter your age:");

// Convert the user input (string) to a number
let age: number = parseInt(ageString || "0");

// Check if the age is less than 18
if (age < 18) {
  console.log("You are a minor."); // If so, log "You are a minor."
} else {
  console.log("You are an adult."); // If not, log "You are an adult."
}
