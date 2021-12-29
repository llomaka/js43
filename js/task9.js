// todo Коллекция курсов (includes, indexOf, push и т. д.)

/*
 * Напишите функции для работы с коллекцией обучающих курсов courses:

* addCourse(name) - добавляет курс в конец коллекции
* removeCourse(name) - удаляет курс из коллекции
* updateCourse(oldName, newName) - изменяет имя на новое
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
function addCourse(name) {
    if (!courses.includes(name)) { courses.push(name); return; }
    console.log('У вас уже есть такой курс');
}

function removeCourse(name) {
    if (courses.includes(name)) { courses.splice(courses.indexOf(name), 1); return; }
    console.log('Курс с таким именем не найден');
}

function updateCourse(oldName, newName) {
    if (courses.includes(oldName)) {
        courses.splice(courses.indexOf(oldName), 1, newName);
        return;
    }
    console.log(`Курс с именем ${oldName} не найден`);
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким именем не найден'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']