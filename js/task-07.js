const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInput);

function onInput() {
    refs.span.style.fontSize = `${refs.input.value}px`;
}
