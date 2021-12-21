// todo  Массивы и строки
/*
 * Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.
 */

const values = '8 11';

const value1 = values.split(' ');
console.log(value1);
const sqrect = Number(value1[0]) * Number(value1[1]);
console.log(sqrect);
