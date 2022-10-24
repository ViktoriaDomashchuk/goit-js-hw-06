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

