function solve(firstCharacter, secondCharacter) {
    //Find the lower character
    const [start, end] = getSortedCharacters(firstCharacter, secondCharacter);

        //Itearate from start to end
    const result = getCharactersBetween(start, end);

    function getCharactersBetween(start, end) {
        let characters = [];
    
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i));
        }
    
        return characters;
    }
    
    function getSortedCharacters(a, b) {
        const characters = [a, b];
    
        characters.sort();
    
        return characters;
    }

    console.log(result.join(' '));
}

solve('C',
'#');