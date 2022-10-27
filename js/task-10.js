const refs = {
  boxNumbers: document.querySelector('input[type="number"]'),
  boxList: document.querySelector('#boxes'),
  createEl: document.querySelector('[data-create]'),
  deleteEl: document.querySelector('[data-destroy]'),
};

refs.createEl.addEventListener('click', createBoxes);
refs.deleteEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) { 
  if (refs.boxNumbers.value >= 1 && refs.boxNumbers.value <= 100) {
    amount = refs.boxNumbers.value;
    const arr = [];

    for (let i = 1; i <= amount; i += 1){
      const newBox = document.createElement('div');

      newBox.style.width = `${30 + 10 * i}px`;
      newBox.style.height = `${30 + 10 * i}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      arr.push(newBox);
    }

    refs.boxList.append(...arr);
  } else {
    alert('Не можливо створити більше 100 елементів');
  }
}

function destroyBoxes() { 
  refs.boxList.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

