function create(words) {

   const contentElement = document.getElementById('content');
   //Create div with paragraph

   const divELements = words
      .map(word => {
         //Create paragraph
         const pElement = document.createElement('p');

         //Add text content
         pElement.textContent = word;

         // Hide paragraphs
         pElement.style.display = 'none';

         //Create div
         const divElement = document.createElement('div');

         //Append paragraph to div
         divElement.appendChild(pElement);

         //divElement.addEventListener('click', () => {
            //pElement.style.display = 'block';
         //});
         //Return div
         return divElement;

      });

      //Show paragraph on div click
      divELements
         .forEach(divElement => {
            divElement.addEventListener('click', () => {
               const pElement = divElement.querySelector('p');
               pElement.style.display = 'block';
            });
         })
      //Append all to Dom
         //contentElement.append(...divELements); //Doesn`t work in judge
      //divELements.forEach(divElement => contentElement.appendChild(divElement)); //Not efficient
      const divELementsFragment = document.createDocumentFragment();
      divELements.forEach(divElement => divELementsFragment.appendChild(divElement));
      contentElement.appendChild(divELementsFragment);

}