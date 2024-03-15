function solve(input) {
    const words = input.split(' ');
    const wordOccurances = {};

    for (const word of words) {
        if (!wordOccurances.hasOwnProperty(word.toLowerCase())) {
            wordOccurances[word.toLowerCase()] = 0;
        }

        wordOccurances[word.toLowerCase()]++;
    }

    const result = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

//2
function fancySolve(input) {
    const occurrences = input
        .toLowerCase()
        .split(' ')
        .reduce((acc, word) => 
            acc.hasOwnProperty(word)
                ? {...acc, [word]: acc[word] + 1}
                : {...acc, [word]: 1 }
        , {});

    const result = Object
        .entries(occurrences)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word, count]) => word)
        .join(' ');

    console.log(result)
}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');