const getControllerAdmin = require('../controllers/getControllerAdmin')

const getHandlerAdmin = async(req, res) =>{
    try { 
        const {isAdmin} = req.user;
        if(isAdmin){
            const data = await getControllerAdmin()
            res.status(200).json(data)
        }else{
            throw new Error('Invalid Token')
        }
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = getHandlerAdmin; 