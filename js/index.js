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
renderCourses(courses);


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
    if (currentEl === activeEl) {
        activeEl.classList.remove('is-active');
        return renderCourses(courses);
    }
    const filteredCourses = courses.filter(course => course.tags.includes(currentValue));
    renderCourses(filteredCourses);
}

function renderCourses(array) {
    refs.courses.innerHTML = '';
    const markup = array.map(item => `<li>${item.name} - ${item.prices}</li>`).join('');
    return refs.courses.insertAdjacentHTML('beforeend', "<ol>" + markup + "</ol>");
}

refs.container.addEventListener('click', onButtonsClick);
