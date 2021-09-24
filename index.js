const contactsOperations = require("./contacts");

const workWithContacts = async (type = "listContacts", id, name, email, phone) => {
    try {
        switch (type) {
            case "list":
                return await contactsOperations.listContacts();
            case "get":
                return await contactsOperations.getContactById(id);
            case "add":
                return await contactsOperations.addContact(name, email, phone);
            case "remove":
                return await contactsOperations.removeContact(id);
        }
    } catch (error) {
        throw error;
    }
};

// workWithContacts("list")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// workWithContacts("get", 10)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// const newContact = {
//     name: "Mango",
//     email: "mango@gmail.com",
//     phone: "322-22-22"
// }

workWithContacts("add", "", "mango", "m@email.com", "1111111")
    .then(data => console.log(data))
    .catch(error => console.log(error))

// workWithContacts("remove", 2)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

