function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
};

refs.btn.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
  refs.colorName.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.colorName.textContent;
}
