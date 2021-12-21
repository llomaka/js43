// todo Массивы и строки
/*
 * Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.
 */

const string = 'Welcome to the future';
let newString = '';

for (let i = string.length; i > 0; i-=1) {
    newString += string[i-1];
}

console.log(newString);