const contactsOperations = require("./contacts");

const workWithContacts = async (type = "listContacts", id, data) => {
    try {
        switch (type) {
            case "listContacts":
                return await contactsOperations.listContacts();
        }
    } catch (error) {
             throw new error;
    }
};

workWithContacts("getAll")
    .then(data => console.log(data))
    .catch(error => console.log(error))
