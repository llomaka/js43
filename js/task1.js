//todo Коллбек функции
/*
 * createProduct(obj, callback) - принимает объект товара без id, а также коллбек. Функция создаёт объект товара, добавляя ему уникальный идентификатор в свойство id и вызывает коллбек передавая ему созданный объект.
 * logProduct(product) - коллбек принимающий объект продукта и логирующий его в консоль
 * logTotalPrice(product) - коллбек принимающий объект продукта и логирующий общую стоимость товара в консоль
 */

// function createProduct(obj, callback) {
//     const product = {
//         id: '_' + Math.random().toString(36).substr(2, 9),
//         ...obj
//     };
//     callback(product);
// };

// function logProduct(product) { 
//     console.log(product);
// };

// function logTotalPrice(product) { 
//     let totalPrice = 0;
//     totalPrice = product.price * product.quantity;
//     console.log(totalPrice);
//     return totalPrice;
// };

const createProduct = (obj, callback) => { callback(product = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        ...obj
    };)};


createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
