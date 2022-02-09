import { courses } from './courses.js';

// console.log(courses);

const refs = {
    container: document.querySelector('.container'),
    buttons: document.querySelector('.buttons-container'),
    courses: document.querySelector('.courses-container'),
}

// const allCourses = courses.flatMap(course => course.tags).filter((item, index, array)=> array.indexOf(item) === index);
// console.log(allCourses);

const uniqueCourses = [...new Set(courses.flatMap(course => course.tags))];
console.log(uniqueCourses);
renderHTML(uniqueCourses);

function renderHTML(array) {
    const markup = array.map(item => `<button type="button" class="button" data-value="${item}">${item}</button>`).join('');
    return refs.buttons.insertAdjacentHTML('beforeend', markup);
}

function onButtonsClick(event) {
    if (event.target.nodeName !== 'BUTTON') return;
    const currentEl = event.target;
    const currentValue = event.target.dataset.value;
    const activeEl = document.querySelector('.button.is-active');
    // if (!currentValue) return;
    if (activeEl) {
        activeEl.classList.remove('is-active');
    }
    currentEl.classList.add('is-active');
}

refs.container.addEventListener('click', onButtonsClick);
