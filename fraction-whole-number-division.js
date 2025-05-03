//How to divide fraction by whole number
//To divide a fraction by a whole number, you can multiply the denominator of the fraction by the whole number.
//For example, to divide 3/4 by 2, you would multiply the denominator (4) by 2, giving you 3/(4*2) = 3/8.

//Here is a simple function to perform this operation in JavaScript:

function divideFractionByWholeNumber(numerator, denominator, wholeNumber) {
    // Check if the denominator is zero to avoid division by zero error
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.")
    }
    // Check if the whole number is zero to avoid division by zero error
    if (wholeNumber === 0) {
        throw new Error("Whole number cannot be zero.")
    }
    // Multiply the denominator by the whole number
    const newDenominator = denominator * wholeNumber;
    // Return the new fraction as an object
    return {
        numerator: numerator,
        denominator: newDenominator
    };
}

const result = divideFractionByWholeNumber(1, 4, 2);
console.log(`${result.numerator}/${result.denominator}`);