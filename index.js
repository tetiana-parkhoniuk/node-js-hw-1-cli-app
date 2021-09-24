const argv = require('yargs').argv;
const contactsOperations = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
    try {
        switch (action) {
            case 'list':
                contacts = await contactsOperations.listContacts();
                console.table(contacts);
                break;
        
            case 'get':
                contact = await contactsOperations.getContactById(id);
                console.log(contact);
                break;
            
            case 'add':
                newContact = await contactsOperations.addContact(name, email, phone);
                console.log(newContact);
                break;
            
            case 'remove':
                await contactsOperations.removeContact(id);
                console.log(`Contact ${id} was successfully removed.`)
                break;
            
            default:
                console.warn('\x1B[31m Unknown action type!');
        }
    } catch (error) {
        console.log(error.message);
    };
    
};

invokeAction(argv);