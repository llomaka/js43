// todo Сортировка массива с циклом
/*
 * Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.
 */

const langs = ['python', 'javascript', 'c++', 'haskell', 'php', 'ruby'];

console.log(langs);

langs.sort();
console.log(langs);

const simpleSort = Array.from(langs).sort((a, b) => a - b);

const localeSort = Array.from(langs).sort((a, b) => {
  return a.localeCompare(b, 'en', { sensitivity: 'base' });
});

console.log(simpleSort);
console.log(localeSort);