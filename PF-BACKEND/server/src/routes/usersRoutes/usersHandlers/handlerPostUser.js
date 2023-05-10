const controllerPostUser = require('../usersControllers/controllerPostUser')

const handlerPostUser = async(req,res) =>{
    try{
        const data = req.body
        let info = await controllerPostUser(data);
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = handlerPostUser;