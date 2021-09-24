const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if (idx === -1) {
        return null;
    }
    const newContacts = contacts.filter(item => item.id !== contactId);
    await updateContacts(newContacts);
    return "Successfully removed!"
}

module.exports = removeContact;

