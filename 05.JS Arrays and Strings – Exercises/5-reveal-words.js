 //1
 function solve(wordsInput, template) {
    const words = wordsInput.split(', ');
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '*') {
            if (startIndex < 0) {
                startIndex = i;
                endIndex = i + 1;
            } else {
                endIndex = i + 1;
            }
        } else {
            if (startIndex >= 0) {
                let length = endIndex - startIndex;
                let word = words.find(w => w.length === length);
                
                
                template = template.replace('*'.repeat(length), word);
                startIndex = -1;
                endIndex = -1;
            }

        }
    }

    if (startIndex >= 0) {
        let length = endIndex - startIndex;
        let word = words.find(w => w.length === length);
        
        
        template = template.replace('*'.repeat(length), word);
    }    
    console.log(template);
 }

 //2 - with RegEx

 function fancySolve(wordsInput, template = ''){
    const words = wordsInput.split(', ');

    const matches = template.matchAll(/\*+/g);
    for (const match of matches) {
        const word = words.find(w => w.length === match[0].length);
        template = template.replace(match[0], word);
    }
    console.log(template)
 }

 //3 
 function arraySolve(wordsInput, template = '') {
    const words = wordsInput.split(', ');
    const templateWords = template.split(' ');

    const result = templateWords
        .map(tWord => tWord.includes('*')
            ? words.find(w => w.length === tWord.length) 
            : tWord)
        .join(' ')

    console.log(result);
 }


 solve('great',
 'softuni is ***** place for learning new programming languages');
