//todo Телефонная книга

/*
 * Выполните рефакторинг методов объекта phonebook чтобы код заработал.
 */

const phonebook = {
    contacts: [],
    add(contact) {
        const newContact = {
            list: 'default',
            ...contact,
            id: this.generateId(),
            createdAt: this.getDate(),
        };
        return this.contacts.push(newContact);
    },
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },
    getDate() {
        return Date.now();
    },
};

console.log(
    phonebook.add({
        name: 'Mango',
        email: 'mango@mail.com',
        list: 'friends',
    }),
);
console.log(
    phonebook.add({
        name: 'Poly',
        email: 'poly@hotmail.com',
    }),
);
