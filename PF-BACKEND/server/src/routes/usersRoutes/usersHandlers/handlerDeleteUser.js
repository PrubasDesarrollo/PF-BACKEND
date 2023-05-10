const deleteUserController = require('../usersControllers/deleteUserController')

const handlerDeleteUser = async(req,res) =>{
    try{
        const {id} = req.params;
        const userDelete = await deleteUserController(id)
        res.status(200).json(userDelete)
    }catch(err){
        res.status(400).json({error: err.messge})
    }
}

module.exports = handlerDeleteUser;