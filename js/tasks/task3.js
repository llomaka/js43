//todo Массив объектов
/*
 * Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив объектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из объекта
 */

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
    for (const item of stones) {
        if (item.name === stoneName) {
            return item.price * item.quantity;
        }
    }
}

console.log(calcTotalPrice(stones, 'Бриллиант'));