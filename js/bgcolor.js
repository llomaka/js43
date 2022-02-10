
const button = document.querySelector('.button');
const body = document.body;

button.addEventListener('click', _.throttle(onClick, 3000));

function onClick() {
    console.log('clicks');
    body.setAttribute('style', `background:${getRandomHexColor()}`);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
