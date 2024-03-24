function solve() {
  const outputElement = document.getElementById('output');
  const textareaELement = document.getElementById('input');

  const text = textareaELement.value;

  //Convert to paragraphs
  const result = text
    .split('.')
    .filter(sentence => !!sentence)
    .reduce((result, sentence, i) => {
      const resultIndex = Math.floor(i / 3);
      if (!result[resultIndex]) {
        result[resultIndex] = []
      }

      result[resultIndex].push(sentence.trim());

      return result;
    }, [])
    .map(sentences => `<p>${sentences.join('. ')}.</p>`)
    .join('\n');

  //Append to output element
    outputElement.innerHTML = result;
} 

