function solve(array, step) {
    let result = [];
    for (let i = 0; i <array.length; i+=step) {
        result.push (array[i]);
    }
    return result;
}
///2
function quicksolve(array, step) {
    const result = array.filter((element, index) => index % step === 0);

    return result;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2));

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2));