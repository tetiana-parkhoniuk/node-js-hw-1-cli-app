// const fs = require("fs/promises");
const contacts = require("./db/contacts.json");

const listContacts = async () => contacts;

// const listContacts = async() => {
//     const data = await fs.readFile("../db/contacts.json", "utf-8");
//     const contacts = JSON.parse(data);
//     return contacts;
// }

module.exports = listContacts;