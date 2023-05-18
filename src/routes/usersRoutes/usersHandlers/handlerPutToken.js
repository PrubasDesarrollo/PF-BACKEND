const controllerPuToken = require('../usersControllers/controllerPuToken')

const handlerPutToken= async(req,res) =>{
    try{
        const {email} = req.params;
        const user = await controllerPuToken(email)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({error:err.message})
    }

}

module.exports = handlerPutToken