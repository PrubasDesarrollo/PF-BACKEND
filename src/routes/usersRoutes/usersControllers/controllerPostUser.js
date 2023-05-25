const users = require("../../../db/models/Users");
const banned = require('../../../db/models/Banned')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { TOKEN_KEY, PASSWORD_ADMIN } = process.env
const sendEmail = require('../../../utils/configEmailer')


const  controllerPostUser = async(data, firebaseUrl,password) =>{
    let validate = await banned.find({'user_banned.email':data.email})
    if (validate.length!==0){throw new Error('ususario baneado')}
    let user = {
        name: data.name,
        email: data.email,
        isAdmin:password?(password===PASSWORD_ADMIN):false,
        image:firebaseUrl,
        type_customer: data.type_customer,
        description: data.description
    }
    let informacion = await users.create(user);
    const token = jwt.sign(
        {
            _id: informacion._id, 
            email: informacion.email,
            type_customer: informacion.type_customer,
            isAdmin: informacion.isAdmin
        },
        TOKEN_KEY,
        {
            expiresIn: "7d" 
        }
    )
    let infoUser = {
        isAdmin: informacion.isAdmin,
        name: informacion.name,
        email: informacion.email,
        image:informacion.image,
        type_customer: informacion.type_customer,
        description: informacion.description,
        token: token,
        id: informacion._id
    }
    await sendEmail(data.email);
    return infoUser;
}

module.exports = controllerPostUser;