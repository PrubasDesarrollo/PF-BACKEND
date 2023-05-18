const controllerPostUser = require('../usersControllers/controllerPostUser')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { TOKEN_KEY } = process.env

const handlerPostUser = async(req,res) =>{
    const { firebaseUrl } = req.file ? req.file : "";
    const data = req.body;
    const token = jwt.sign(
        {
            userPassword: data.password,
            email: data.email
        },
        TOKEN_KEY,
        {
            expiresIn: "7d" 
        }
    )
    const dataCompleta = {...data, token};
    try{
        let info = await controllerPostUser(dataCompleta,firebaseUrl);
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = handlerPostUser;