//todo Метод forEach
/*
 * Выполните рефакторинг кода используя метод forEach и стрелочные функции.
 */

const logItems = items => {
    console.log(items);
    items.forEach((element, index) => {
        console.log(`${index + 1} - ${element}`);
    });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
