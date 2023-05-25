const restaurants = require('../../../db/models/Restaurants');
const tables = require('../../../db/models/Tables');
const posts = require('../../../db/models/Posts');
const banned = require('../../../db/models/Banned')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { TOKEN_KEY } = process.env


const controllerPuToken = async(email) =>{
    let mesas =await tables.find()
    let posteos = await posts.find()
    let validate = await banned.find({'user_banned.email':userEmail})
    if (validate.length!==0){throw new Error('ususario baneado')}
   let oneUser = await restaurants.find({email:email})
   let info = oneUser.shift()
   
   const token = jwt.sign(
    {
        _id: info._id, 
        email: info.email,
        type_customer: info.type_customer
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
    tags: info.tags,
    city: info.city,
    address: info.address,
    country: info.country,
    phoneNumber: info.phoneNumber,
    valoraciones: info.valoraciones,
    menu: info.menu,
    table: info.table,
    token: token,
    id: info._id
};
console.log(infoUser)
return infoUser
}

module.exports = controllerPuToken