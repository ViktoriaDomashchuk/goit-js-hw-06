//HTML містить порожній список 
// <ul id ="ingredients"></ul>
//JavaScript містить масив рядків
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//Напиши скрипт, який для кожного елемента масиву ingredients:
//1.Створить окремий елемент<li>. Обов'язково використовуй метод document.createElement()
//2. Додасть назву інгредієнта як його текстовий вміст
//3. додасть елементу клас item
//4. після чого, вставить усі <li> за одну операцію у список ul#ingredients

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = [];

for (const ingredient of ingredients) {
  //1
  const itemEl = document.createElement('li');
  //2
  itemEl.textContent = `${ingredient}`;
  //3
  itemEl.classList.add('item');
  ingredientsItems.push(itemEl);
}
//4
ingredientsList.append(...ingredientsItems);

