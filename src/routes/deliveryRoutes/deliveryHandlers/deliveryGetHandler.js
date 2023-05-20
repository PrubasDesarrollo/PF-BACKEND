const deliveryGetController = require("../deliveryControllers/deliveryGetController");


const deliveryGetHandler = async (req, res) =>{
try {
    const deliveries = await deliveryGetController(id);
    res.status(200).json(deliveries);
} catch (error) {
    res.status(400).json({error: error.message})
}
}

module.exports = deliveryGetHandler;