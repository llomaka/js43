//todo Хранилище

/*
 * Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

* Добавь методы класса:

* getItems() - возвращает массив товаров.
* addItem(item) - получает новый товар и добавляет его к текущим.
* removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
 */

class Storage {
    constructor(goods = []) {
        this.items = goods;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemName) {
        if (this.items.indexOf(itemName) === -1) {
            return `Элемент ${itemName} отсутствует в массиве товаров.`;
        } else {
            // this.items.splice(this.items.indexOf(item), 1);
            this.items = this.items.filter(element => element !== itemName);
        }
    }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
