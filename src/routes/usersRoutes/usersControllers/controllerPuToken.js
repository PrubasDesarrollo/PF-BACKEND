const users = require('../../../db/models/Users');
const tables = require('../../../db/models/Tables');
const posts = require('../../../db/models/Posts');
const banned = require('../../../db/models/Banned')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { TOKEN_KEY } = process.env


const controllerPuToken = async(userEmail) =>{
    let mesas =await tables.find()
    let posteos = await posts.find()
    let validate = await banned.find({'user_banned.email':userEmail})
    if (validate.length!==0){throw new Error('ususario baneado')}
   let oneUser = await users.find({email:userEmail})
   let info = oneUser.shift()
   //comentario 
   const token = jwt.sign(
    {
        _id: info._id, 
        email: info.email,
        type_customer: info.type_customer,
        isAdmin: info.isAdmin
    },
    TOKEN_KEY,
    {
        expiresIn: "7d" 
    }
)
let infoUser = {
    name: info.name,
    email: info.email,
    image:info.image,
    type_customer: info.type_customer,
    description: info.description,
    token: token,
    id: info._id
};
console.log(infoUser)
return infoUser
}

module.exports = controllerPuToken