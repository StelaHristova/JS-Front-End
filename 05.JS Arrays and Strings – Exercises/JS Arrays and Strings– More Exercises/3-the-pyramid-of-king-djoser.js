function solve(base, increment) {
    let stoneArea = 0;
    let marbleArea = 0;
    let lapisLazuliArea = 0;
    let goldArea = 0;
    let rowCounter = 0;

    for (let i = base; i > 0; i -= 2) {
        rowCounter++;
        if (i - 2 > 0) {
            stoneArea += (i - 2) * (i - 2) * increment;
        }

        if (rowCounter % 5 === 0 && i > 2) {
            lapisLazuliArea += ((i * 4) - 4) * increment;
        } else if (i > 2) {
            marbleArea += ((i * 4) - 4) * increment;
        }

        
        }
    goldArea = (base - (rowCounter - 1) * 2) * (base - (rowCounter - 1) * 2) * increment;
    let pyramidHeight = rowCounter * increment;
    
    console.log(`Stone required: ${Math.ceil(stoneArea)}`);
    console.log(`Marble required: ${Math.ceil(marbleArea)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliArea)}`);
    console.log(`Gold required: ${Math.ceil(goldArea)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);

    }


solve(11, 1);

solve(11, 0.75);

solve(12, 1);

solve(23, 0.5);