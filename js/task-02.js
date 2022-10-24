const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = [];

for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${ingredient}`;

  itemEl.classList.add('item');
  ingredientsItems.push(itemEl);
}

ingredientsList.append(...ingredientsItems);

