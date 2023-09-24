//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories,
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль 
//текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії
//(усіх < li >, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості 
//навігації по DOM.



// const categoriesUl = document.querySelectorAll("h2").length;
// console.log(`Number of categories: ${categoriesUl}`);
  
// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} Elements: ${itemsLength}`);
// });

const categoriesUl = document.querySelector('#categories');
const items = categoriesUl.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector('h2').innerHTML;
  const elementsLi = item.querySelectorAll('li').length;

  console.log(`Category: ${title}
  Elements: ${elementsLi}`);
});