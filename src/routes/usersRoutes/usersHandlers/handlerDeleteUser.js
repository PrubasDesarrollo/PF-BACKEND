const deleteUserController = require('../usersControllers/deleteUserController')

const handlerDeleteUser = async(req,res) =>{
    try{
        const {_id, isAdmin} = req.user;
        const {id} = req.params;
        if(id==_id || isAdmin){
            const userDelete = await deleteUserController(id)
            res.status(200).json(userDelete)
        } else{throw new Error("You can't modify this restaurant")}
    }catch(err){
        res.status(400).json({error: err.messge})
    }
}

module.exports = handlerDeleteUser;