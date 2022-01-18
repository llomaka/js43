/*
*
Создайте объект calculator с тремя методами:

* read(a, b)- принимает два значения и сохраняет их как свойства объекта.
* add() - возвращает сумму сохранённых значений.
* mult() - перемножает сохранённые значения и возвращает результат.
*/

const calculator = {
    x: 0,
    y: 0,
    read(a, b) { 
        this.x = a;
        this.y = b;
    },
    add() { 
        return this.x + this.y;
    },
    mult() { 
        return this.x * this.y;
    },
};


calculator.read(20, 30);
calculator.add();
calculator.mult();