const getUserController = require('../usersControllers/getUsersControllers');
const modelateData = require('../../../utils/modelateData')

const handlerGetUsers = async(req,res) =>{
    try{
        let {page} = req.query
        const data = await getUserController();
        const info = modelateData(page,data)
        res.status(200).json(info)
    }catch(err){
        res.staus(400).json({error:err.message});
    }
}

module.exports = handlerGetUsers; 