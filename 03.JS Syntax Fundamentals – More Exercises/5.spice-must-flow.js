function solve(startingYield) {
    let totalSpice = 0;
    let countDays = 0;
    const dailyConsumption = 26;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= dailyConsumption;
        startingYield -= 10;
        countDays += 1;
    }

    if (totalSpice >= dailyConsumption) {
        totalSpice -= dailyConsumption;
    } else {
        totalSpice = Math.max(0, totalSpice)
    }

    console.log(countDays);
    console.log(totalSpice);
}

solve(111);
solve(450);