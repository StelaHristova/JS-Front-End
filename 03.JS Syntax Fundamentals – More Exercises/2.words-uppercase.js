function solve(input) {
    const word = (/\b\w+\b/g);
    const words = input.match(word).map(word => word.toUpperCase());

    console.log(words.join(', '));
}

solve('Hi, how are you?');
solve('hello');