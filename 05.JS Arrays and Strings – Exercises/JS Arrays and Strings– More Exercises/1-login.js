function solve(arrayOfStrings) {
    const username = arrayOfStrings[0];
    let password = username.split('').reverse().join('');

    for (let i = 1; i < arrayOfStrings.length; i++) {
        
        if (arrayOfStrings[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i % 4 === 0) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
            console.log("Incorrect password. Try again.");
            }
        }
    }
}
solve(['Acer','login','go','let me in','recA']);