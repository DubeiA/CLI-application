const fs = require('fs');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data.toString());
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }

    const contacts = data.toString();
    const parseContacts = JSON.parse(contacts);
    const findUser = parseContacts.filter(user => user.id.includes(contactId));
    console.log(findUser);
    return findUser;
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }

    const contacts = data.toString();
    const parseContacts = JSON.parse(contacts);
    const findUser = parseContacts.filter(user => user.id !== contactId);
    const stringifyUser = JSON.stringify(findUser);
    fs.writeFile(contactsPath, stringifyUser, (error, data) => {
      console.log(stringifyUser);
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, [name, email, phone], (error, data) => {
    if (error) {
      console.log(error);
    }

    const contacts = data.toString();
    const parseContacts = JSON.parse(contacts);

    const newContact = {
      id: String(parseContacts.length + 1),
      name,
      email,
      phone,
    };
    parseContacts.push(newContact);
    const stringifyNewContact = JSON.stringify(parseContacts);
    fs.writeFile(contactsPath, stringifyNewContact, (error, data) => {
      console.log(stringifyNewContact);
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
