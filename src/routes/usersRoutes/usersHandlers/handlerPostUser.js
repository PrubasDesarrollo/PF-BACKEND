const controllerPostUser = require('../usersControllers/controllerPostUser')


const handlerPostUser = async(req,res) =>{
    const { firebaseUrl } = req.file ? req.file : "";
    const data = req.body;
    const {password} = req.query
    try{
        let info = await controllerPostUser(data,firebaseUrl,password);
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = handlerPostUser;