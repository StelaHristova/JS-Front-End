function sumTable() {
    const tdCOstElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const tdSumELement = document.getElementById('sum');

    tdSumELement.textContent = Array
        .from(tdCOstElements)
        .reduce((sum, element) => sum + Number(element.textContent), 0);
}