// todo Логирование контактов
/*
 * Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое
 */
function printContactsInfo(names, phones) {
    const namesArr = names.split(',');
    const phonesArr = phones.split(',');
    for (let i = 0; i < namesArr.length; i += 1) {
        console.log(namesArr[i], '-', phonesArr[i]);
    }
}

printContactsInfo(
    'Jacob,William,Solomon,Artemis',
    '89001234567,89001112233,890055566377,890055566300',
);