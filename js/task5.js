// todo Массивы и строки
/*
 * Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.
 */

const string = 'Welcome to the future';
const array = string.split(' ');
console.log(array);
const firstElement = array.shift();
const lastElement = array.pop();
console.log(array.join(' '));

