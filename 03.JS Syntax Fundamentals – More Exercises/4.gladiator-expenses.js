function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreaks = 0;
    let helmetBreaks = 0;
    let swordBreaks = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
               
        if (i % 2 === 0) {
            expenses += helmetPrice;
            helmetBreaks += 1;
        }

        if (i % 3 === 0) {
            expenses += swordPrice;
            swordBreaks += 1;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            shieldBreaks += 1;

        if (shieldBreaks % 2 === 0) {
            expenses += armorPrice;
        }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7,
    2,
    3,
    4,
    5);

solve(23,
    12.50,
    21.50,
    40,
    200);