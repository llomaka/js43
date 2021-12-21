// todo Базовые операции с массивом
/*
 * Создайте массив genres с элементами «Jazz» и «Blues».
 * Добавьте «Рок-н-ролл» в конец.
 * Выведите в консоль первый элемент массива.
 * Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
 * Удалите первый элемент и выведите его в консоль.
 * Вставьте «Country» и «Raggy» в начало массива.
 */

const genres = ['Jazz', 'Blues'];
console.log(genres);
genres.push('Рок-н-ролл');
console.log(genres);
console.log(genres[genres.length - 1]);
console.log(genres.shift());
genres.unshift('Country', 'Raggy');
console.log(genres);
