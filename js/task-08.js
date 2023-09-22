//Напиши скрипт управління формою логіна.
//1.Обробка відправлення форми form.login-form 
//повинна відбуватися відповідно до події submit.
//2.Під час відправлення форми сторінка не повинна перезавантажуватися.
//3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
//що всі поля повинні бути заповнені.
//4.Якщо користувач заповнив усі поля і відправив форму, 
//збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
//а значення поля - значенням властивості. 
//Для доступу до елементів форми використовуй властивість elements.
//5.Виведи об'єкт із введеними даними в консоль і 
//очисти значення полів форми методом reset.

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handlerForm);

function handlerForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    console.log(event)

    const data = {
        email: email.value,
        password: password.value
    }
    for (const element of formLogin.elements) {
    if (element.name) {
      data[element.name] = element.value;
    }
  }
  if (data.email && data.password) {
    console.log(data);
    
  } else {
    alert('Всі поля повинні бути заповнені');
  }

    console.dir(data)
    event.currentTarget.reset();
}

