const dashController = require('../restaurantsControllers/dashController');

const dashHandler = async (req, res) => {
    try {
        const { id } = req.params;
        
        const data = await dashController(id);
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = dashHandler;