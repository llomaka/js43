// todo Поиск элемента
/*
 * Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.
 */

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];
console.log(min); // 1
for (const number of numbers) {
    if (min > number) {
        min = number;
    }
}
console.log(min);