const dashController = require('../restaurantsControllers/dashController');

const dashHandler = async (req, res) => {
    try {
        
        const { id } = req.params;
        const {_id, isAdmin} = req.user;

        if(_id == id || isAdmin){
            const data = await dashController(id);
            res.status(200).json(data);
        }else{
            throw new Error('Invalid Token') 
        } 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = dashHandler;