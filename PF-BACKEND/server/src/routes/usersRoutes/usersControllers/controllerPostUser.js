const users = require("../../../db/models/Users");

const  controllerPostUser = (data) =>{
    return users.create(data)
}

module.exports = controllerPostUser;