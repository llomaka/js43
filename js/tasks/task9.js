// todo Цикл for
/*
 * Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.
 */

const max = 100;
const min = 20;

for (let i = min; i <= max; i += 1) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
