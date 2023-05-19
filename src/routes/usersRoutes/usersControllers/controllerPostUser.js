const users = require("../../../db/models/Users");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { TOKEN_KEY } = process.env

const  controllerPostUser = async(data, firebaseUrl) =>{
    let user = {
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
        image:firebaseUrl,
        type_customer: data.type_customer,
        description: data.description
    }
    let informacion = await users.create(user);
    const token = jwt.sign(
        {
            _id: informacion._id, 
            email: informacion.email,
            type_customer: informacion.type_customer
        },
        TOKEN_KEY,
        {
            expiresIn: "7d" 
        }
    )
    let infoUser = {
        name: informacion.name,
        email: informacion.email,
        image:informacion.image,
        type_customer: informacion.type_customer,
        description: informacion.description,
        token: token,
        id: informacion._id
    }
    return infoUser;
}

module.exports = controllerPostUser;