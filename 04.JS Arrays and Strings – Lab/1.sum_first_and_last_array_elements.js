//1
function solve(numbers) {
    let firstNumber = numbers.shift();
    let lastNumber = numbers.pop();

    console.log(firstNumber + lastNumber);
}

solve([20, 30, 40]);

//2
function solve(numbers) {
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length-1];

    console.log(firstNumber + lastNumber);
}

solve([20, 30, 40]);