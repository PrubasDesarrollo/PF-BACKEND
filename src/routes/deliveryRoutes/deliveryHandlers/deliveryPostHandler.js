const deliveryPostController = require("../deliveryControllers/deliveryPostController");

const deliveryPostHandler = async (req, res) => {
    try {
        const data = req.body;
        const info = await deliveryPostController(data);
        res.status(200).json(info);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deliveryPostHandler;