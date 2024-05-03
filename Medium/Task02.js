// Loop from 1 to 50
for (var i = 1; i <= 50; i++) {
    // Check if the number is a multiple of both 3 and 5 (i.e., divisible by 15)
    if (i % 15 === 0) {
        console.log("FizzBuzz"); // If so, log "FizzBuzz"
    }
    // Check if the number is a multiple of 3 (but not 5)
    else if (i % 3 === 0) {
        console.log("Fizz"); // If so, log "Fizz"
    }
    // Check if the number is a multiple of 5 (but not 3)
    else if (i % 5 === 0) {
        console.log("Buzz"); // If so, log "Buzz"
    }
    // If the number is neither a multiple of 3 nor 5, simply log the number
    else {
        console.log(i);
    }
}
