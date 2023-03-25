const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

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

    const visibleName = data.toString();
    const obj = JSON.parse(visibleName);
    const user = obj.filter((user) => user.id.includes(contactId));
    console.log(user);
  });
}

function removeContact(contactId) {
  fs.unlink(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }
    const visibleName = data.toString();
    const obj = JSON.parse(visibleName);
    const user = obj.filter((user) => user.id.includes(contactId));
    console.log(user);
  });
}

function addContact(name, email, phone) {
  fs.writeFile(contactsPath, [name, email, phone], (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
