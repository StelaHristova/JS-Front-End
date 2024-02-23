//1
function solve(number) {
    let sum = 0;

    while (number > 0){
        sum += number % 10;
        number = Math.trunc(number / 10)
    }
    console.log(sum);
}
//2
function solveWithSTrings(number) {
    let textNumber = number.toSring();
    let sum = 0;
    for (let i = 0; i < textNumber.length; i++) {
        sum += Number(textNumber[i]);
    }
    console.log(sum);
}

solveWithSTrings(245678);