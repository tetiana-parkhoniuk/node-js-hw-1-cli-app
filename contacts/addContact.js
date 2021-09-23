const { v4 } = require("uuid");
// const fs = require("fs/promises");
// const path = require("path");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

// const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(__dirname);
// console.log(contactsPath);

const addContact = async (data) => {
    const contacts = await listContacts();
    const newContact = { id: v4(), ...data };
    contacts.push(newContact);

    await updateContacts(contacts);
    
    // await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return newContact;
}

module.exports = addContact;