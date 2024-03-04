function solve(numbers) {
    const bitcoinPrice = 11949.16;
    const oneGramOfGold = 67.51;
    let bitcoins = 0;
    let firstBitcoinDay = 0;
    let totalAmount = 0;

    for (let day = 1; day <= numbers.length; day++) {
        let gold = numbers[day - 1];

        if (day % 3 === 0) {
            gold *= 0.7;
        }

        totalAmount += gold * oneGramOfGold

        while (totalAmount >= bitcoinPrice) {
            if (bitcoins === 0) {
                firstBitcoinDay = day;
            }
            bitcoins ++;
            totalAmount -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    } 
    console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}

solve([100, 200, 300]);

solve([50, 100]);

solve([3124.15, 504.212, 2511.124]);