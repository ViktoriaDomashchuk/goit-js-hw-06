//Напиши скрипт, який під час набору тексту в інпуті input#name-input
//(подія input), підставляє його поточне значення в span#name-output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"
/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInput);

function onInput(event) {
    refs.nameLabel.textContent = event.currentTarget.value;

    if (refs.nameLabel.textContent === '') {
        refs.nameLabel.textContent = 'Anonymous';
    }
}

