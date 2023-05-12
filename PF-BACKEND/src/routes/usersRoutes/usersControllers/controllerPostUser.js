const users = require("../../../db/models/Users");

const  controllerPostUser = (data, firebaseUrl) =>{
    let user = {
        name: data.name,
        email: data.email,
        image:firebaseUrl,
        type_customer: data.type_customer,
        description: data.description
    }
    return users.create(user)
}

module.exports = controllerPostUser;