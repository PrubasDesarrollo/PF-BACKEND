const deliveryDeleteController = require("../deliveryControllers/deliveryDeleteController");


const deliveryDeleteHandler = async (req, res) =>{
    try {
        const {id} = req.params;
        const borrar = await deliveryDeleteController(id);
        res.status(200).json(borrar);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deliveryDeleteHandler;