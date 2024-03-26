function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemListELement = document.getElementById('items');

    //Create new item
    const newItemELement = document.createElement('li');

    //Add text content
    newItemELement.textContent = inputElement.value;

    //Append new element to dom
    itemListELement.appendChild(newItemELement);

    //Clear input element
    inputElement.value = '';
}