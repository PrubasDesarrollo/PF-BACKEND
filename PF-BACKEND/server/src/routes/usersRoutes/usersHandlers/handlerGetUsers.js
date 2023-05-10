const getUserController = require('../usersControllers/getUsersControllers')

const handlerGetUsers = async(req,res) =>{
    try{
        const info = await getUserController();
        res.status(200).json(info)
    }catch(err){
        res.staus(400).json({error:err.message});
    }
}

module.exports = handlerGetUsers; 