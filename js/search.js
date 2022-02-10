const contacts = [
    'Malcolm Wilkinson',
    'Sawyer Wolf',
    'Ori Lott',
    'Alec Roach',
    'Reece Chase',
    'Laurel Chavez',
    'Matthew Mercer',
    'Ina Roth',
    'Brett Garrison',
    'Thane Saunders',
    'Hope Alford',
    'Vernon Brown',
    'Amanda Phillips',
    'Pamela Green',
    'Raymond Collier',
    'Cody Knight',
    'Jacqueline Hudson', 
    'Michael Evans',
    'Steven Clements',
    'Keith Duke',
    'Robin Jones',
    'Misty Miller',
    'Meredith White',
    'Brenda Munoz',
    'Jamie Flores',
    'Carlos Carroll',
    'Paula Herman',
    'Frederick Parks',
    'Alyssa Gregory',
    'Brooke Mills',
    'Jessica Hernandez',
    'Katelyn Martin',
    'Michelle Burns',
    'Stephanie Wilson',
    'Lori Chandler',
    'Donald Little',
    'Steven Proctor',
    'Jonathon Morales',
    'Angelica Hansen',
    'Leslie Daniels',
];

const input = document.querySelector('.input');
const contactsList = document.querySelector('.contacts-list');

input.addEventListener('input', _.throttle(onInput, 800));

function onInput(event) {
    const request = event.target.value.trim();

    const filteredContacts = contacts.filter(contact =>
        contact.toLowerCase().includes(request.toLowerCase()),
    );

    renderContacts(filteredContacts);
}

renderContacts(contacts);

function renderContacts(contacts) {
    contactsList.innerHTML = '';
    const markup = contacts.map(contact => `<li>${contact}</li>`).join('');

    contactsList.insertAdjacentHTML('beforeend', markup);
}
