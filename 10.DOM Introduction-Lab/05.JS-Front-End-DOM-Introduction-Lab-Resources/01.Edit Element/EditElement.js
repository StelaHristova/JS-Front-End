function editElement(element, match, replacer) {
    //1
    //element.textContent = element.textContent.replaceAll(match, replacer);

    //2
    //element.textContent = element.textContent.replace(new RegExp(match, 'g'),replacer);

    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
}