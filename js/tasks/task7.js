// todo Дедлайн сдачи проекта (if...else)
/*
 * Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

* Eсли до дедлайна 0 дней - выведи строку "Сегодня"
* Eсли до дедлайна 1 день - выведи строку "Завтра"
* Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
* Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
 */

const daysUntilDeadline = 5;
// Пиши код ниже этой строки
switch (daysUntilDeadline) {
    case 0:
        console.log('Сегодня');
        break;
    case 1:
        console.log('Завтра');
        break;
    case 2:
        console.log('Послезавтра');
        break;
    default:
        console.log('Дата в будущем');
}