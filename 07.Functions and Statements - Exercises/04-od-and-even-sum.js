function calculateDigitSum(number, filter) {
    // get digit array
    const filteredDigits = number
        .toString()
        .split('')
        .map(Number)
        .filter(filter);

    //calculate sum
    const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0);

    return sum;
}

function printResult(oddSum, evenSum) {
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

function solve(number) {
    // Extract odd and even digits
    const evenSum = calculateDigitSum(number, x => x % 2 === 0);
    const oddSum = calculateDigitSum(number, x => x % 2 !== 0);

    //print formated result
    printResult(oddSum, evenSum);

}

solve(1000435);