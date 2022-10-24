//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати значення на одиницю
//*створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0
//*Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника
//*Оновлюй інтерфейс новим значенням змінної counterValue

const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};

refs.increment.addEventListener('click', onIncrementClick);
refs.decrement.addEventListener('click', onDecrementClick);

let counterValue = 0;

function onIncrementClick(){
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
}

function onDecrementClick(){
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
}

