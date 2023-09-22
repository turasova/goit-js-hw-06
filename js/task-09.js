function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
//по кліку на button.change - color і виводить значення кольору в span.color.

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const backgroundChangeBtn = document.querySelector('.change-color');

backgroundChangeBtn.addEventListener('click', handlerBtnChange);

function handlerBtnChange(event) {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector('.color').textContent = color;
  
}