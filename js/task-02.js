const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');

// const markup = ingredients.map((ingredients) => `
// <li class="item">
// <h2>${ingredients}</h2>
// </li>
// `).join('');

// list.insertAdjacentHTML("beforeend", markup);
// console.log(markup)

const markup = ingredients.map((ingredients) => {
  const li = document.createElement('li');
  const h2 = document.createElement('h2');
  h2.textContent = ingredients;
  li.classList.add("item");
  li.append(h2);
  return li
});

 list.append(...markup)
console.log(markup)
 //Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.//