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
