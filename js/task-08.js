//Напиши скрипт управління формою логіна
/*<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>*/

//1.Обробка відрпвлення форми form.login-form повинна відбуватися відповідно до подіїї submit
//2.Під час відправлення форми сторінка не повинна перезавантажуватися
//3.Якщо у формі є незаповнені поля, то виводь alert з попередженням про те, що всі поля повинні бути заповнені
//4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я 
//поля буде ім'ям властивості,а значення поля - значенням властивості. 
//для доступу до елементів форми використовуй властивість elements
//5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    email,
    password
  } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert('Bсі поля повинні бути заповнені');
  } else {
    const userInfo = {
      email: email.value,
      password: password.value,
    };

    console.log(userInfo);

    form.reset();
  }
}
