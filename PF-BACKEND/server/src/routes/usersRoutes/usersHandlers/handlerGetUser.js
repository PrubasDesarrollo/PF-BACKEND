const controllerGetUser = require('../usersControllers/controllerGetUser')

const handlerGetUser = async(req,res) =>{
    try{
        const {id} = req.params;
        const user = await controllerGetUser(id)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({error: err.messge})
    }
}

module.exports = handlerGetUser;