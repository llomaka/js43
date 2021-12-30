//todo Операция rest
/*
 * Напиши функцию transformUsername(user) так, чтобы она возвращала новый объект со свойством fullName, вместо firstName и lastName.
 */

function transformUsername(user) {
    const { id, firstName, lastName, email, friendCount } = user;
    const fullName = firstName + ' ' + lastName;
    return {id, fullName, email, friendCount};
}

console.log(
    transformUsername({
        id: 1,
        firstName: 'Jacob',
        lastName: 'Mercer',
        email: 'j.mercer@mail.com',
        friendCount: 40,
    }),
);

console.log(
    transformUsername({
        id: 2,
        firstName: 'Adrian',
        lastName: 'Cross',
        email: 'a.cross@hotmail.com',
        friendCount: 20,
    }),
);
