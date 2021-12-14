// todo Example 9 - Значение по умолчанию и оператор нулевого слияния
/*
 * Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для следующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).
 */

const incomingValue = null;
const defaultValue = 10;
// const value = (incomingValue !== undefined) && (incomingValue !== null) ? incomingValue : defaultValue;
const value = incomingValue ?? defaultValue;
console.log(value);
