const putControllerAdmin = require('../controllers/putControllerAdmin')

const putHandlerAdmin = async(req, res) =>{
    try{
        const {isAdmin} = req.user;
        const {type_customer} = req.body;
        const {id} = req.params;
        const {isActive} = req.query; 
        if(isAdmin){
            let info = await putControllerAdmin(id, type_customer, isActive);
            res.status(200).json(info);
        }else{
            throw new Error('Invalid Token')
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = putHandlerAdmin;