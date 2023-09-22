// Лічильник складається зі спану і кнопок, які по кліку повинні
//збільшувати і зменшувати його значення на одиницю.
//Створи змінну counterValue, в якій буде зберігатися поточне значення
//лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або
//зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const valueId = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);


function onClickDecrementBtn(event) {
  counterValue -= 1;
  valueId.textContent = counterValue;
}

function onClickIncrementBtn(event) {
  counterValue += 1;
  valueId.textContent = counterValue;
}




