//Напиши скрипт, який:
//1. Порахує і виведе у консоль кількість категорій в ul#categories, тобто елементів li.item
//2. Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
//елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//В результаті, в консолі будуть виведені наступні повідомлення.

//Number of categories: 3;
//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
//1
// const categories = document.querySelectorAll('.item');
// console.log('Number of categories:', categories.length);

// //2

// const arr = [];
// const names = document.querySelectorAll('h2');
// for (const name of names) {
//     arr.push(name.textContent);
// }
// console.log(arr);
// console.log('Category:');
