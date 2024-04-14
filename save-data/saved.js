function saveContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function getContacts() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
}

function displayContacts() {
    const contacts = getContacts();
    const contactDisplay = document.getElementById('contactDisplay');

    contactDisplay.innerHTML = '';

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${contact.firstName} ${contact.lastName} 
            <br>Телефон: ${contact.phone} 
            <br>Email: ${contact.email}
            <button onclick="editContact(${index})">Редагувати</button>
            <button onclick="deleteContact(${index})">Видалити</button>
        `;
        contactDisplay.appendChild(li);
    });
}

function deleteContact(index) {
    const contacts = getContacts();
    contacts.splice(index, 1);
    saveContacts(contacts);
    displayContacts();
}

function editContact(index) {
    const contacts = getContacts();
    const contact = contacts[index];

    document.getElementById('inputFirstName').value = contact.firstName;
    document.getElementById('inputLastName').value = contact.lastName;
    document.getElementById('inputPhone').value = contact.phone;
    document.getElementById('inputEmail').value = contact.email;

    contacts.splice(index, 1);
    saveContacts(contacts);

    displayContacts();
}

document.getElementById('addContactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('inputFirstName').value;
    const lastName = document.getElementById('inputLastName').value;
    const phone = document.getElementById('inputPhone').value;
    const email = document.getElementById('inputEmail').value;

    const newContact = {
        firstName,
        lastName,
        phone,
        email
    };

    const contacts = getContacts();
    contacts.push(newContact);
    saveContacts(contacts);

    event.target.reset();

    displayContacts();
});

displayContacts();
