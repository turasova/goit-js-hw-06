//Напиши скрипт, який реагує на зміну значення
//input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRange = document.querySelector('#font-size-control');
const textChahge = document.querySelector('#text');

textChahge.style.fontSize = inputRange.value + 'px';

inputRange.addEventListener('input', handlerRange);

function handlerRange(event) {
    textChahge.style.fontSize = `${inputRange.value}px`;
}