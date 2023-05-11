const getUserController = require('../usersControllers/getUsersControllers');
const modelateData = require('../../../utils/modelateData')

const handlerGetUsers = async(req,res) =>{
    try{
        let params = req.query
        const data = await getUserController(params);
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

module.exports = handlerGetUsers; 