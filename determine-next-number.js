// Determine the next number in the pattern: 0,1,8,27,64,__
// The pattern is the cubes of the natural numbers: 0^3, 1^3, 2^3, 3^3, 4^3, ...
// The next number in the pattern is 5^3 = 125.
// So the next number is 125.

function determineNextNumberInPattern() {
    const pattern = [0, 1, 8, 27, 64];
    const nextNumber = Math.pow(pattern.length, 3);
    return nextNumber;
}

console.log(determineNextNumberInPattern());

// Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?
// The pattern alternates between subtracting 1 and adding 2.
// So the next number should be 24 - 1 = 23.
// However, the next number in the series should be 25, as it follows the pattern of adding 2 after subtracting 1.
function determineNextNumberInSeries() {
    const series = [22, 21, 23, 22, 24, 23];
    const nextNumber = series[series.length - 1] + 2;
    return nextNumber;
}

// 10. SCD, TEF, UGH, ____, WKL

// The pattern is that each letter in the sequence is increasing by 2 in the alphabet.
// S + 2 = U, C + 2 = E, D + 2 = F, T + 2 = V, E + 2 = G, F + 2 = H
// So the next letters in the sequence would be UGH + 2 = WKL.
function determineNextLettersInPattern() {
    const pattern = ['S', 'C', 'D', 'T', 'E', 'F'];
    const nextLetters = pattern.map(letter => String.fromCharCode(letter.charCodeAt(0) + 2));
    return nextLetters.join('');
}