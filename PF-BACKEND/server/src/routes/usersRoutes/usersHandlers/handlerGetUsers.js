const getUserController = require('../usersControllers/getUsersControllers');
const modelateData = require('../../../utils/modelateData')

const handlerGetUsers = async(req,res) =>{
    try{
        const info = await getUserController();
        const dataModelate = modelateData(info)
        res.status(200).json(dataModelate)
    }catch(err){
        res.staus(400).json({error:err.message});
    }
}

module.exports = handlerGetUsers; 