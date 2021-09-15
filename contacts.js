// Сделай импорт модулей fs и path для работы с файловой системой
// const fs = require("fs/promises");
const contacts = require("./db/contacts.json");

// Создай переменную contactsPath и запиши в нее путь к файле contacts.json. Для составления пути ипользуй методы модуля path.
// Добавь функции для работы с коллекцией контактов. В функциях используй модуль fs и его методы readFile() и writeFile()
// Сделай экспорт созданных функций через module.exports
// // contacts.js

// /*
//  * Раскомментируй и запиши значение
//  * const contactsPath = ;
//  */

// // TODO: задокументировать каждую функцию
// function listContacts() {
//   // ...твой код
// }

const listContacts = async () => contacts;

// {
//     const data = await fs.readFile("./db/contacts.json", "utf-8");
//     const contacts = JSON.parse(data);
//     return contacts;
// }

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
    listContacts
};