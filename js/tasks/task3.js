// todo Вложенные ветвления
/*
 * Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.
 */

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
    console.log(a > b ? a : b);
} else {
    console.log(b + 512);
}