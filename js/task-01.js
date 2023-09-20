
const categoriesUl =document.querySelectorAll("h2").length;
console.log(`Number of categories: ${categoriesUl}`);
  
const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} Elements: ${itemsLength}`);
});