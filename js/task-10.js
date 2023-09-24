function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
//після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
//Створи функцію createBoxes(amount), яка приймає один параметр - число. 
//Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
//1.Розміри найпершого <div> - 30px на 30px.
//2.Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//3.Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//Використовуй готову функцію getRandomHexColor для отримання кольору.
//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
//у такий спосіб видаляючи всі створені елементи.


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    document.querySelector('#boxes').appendChild(div);
  }
}
const containerControls = document.querySelector('#controls');
const createBtn = containerControls.querySelector('[data-create]');
const destroyBtn = containerControls.querySelector('[data-destroy]');
const input = containerControls.querySelector('input');  

function deleteBoxes() {
  let boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}


createBtn.addEventListener('click', handlerCreatBoxes)

function handlerCreatBoxes(event) {
   createBoxes(input.value);
}

destroyBtn.addEventListener('click', handlerDestroyBoxes)

function handlerDestroyBoxes(event) {
  deleteBoxes();
}