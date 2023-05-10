const getRestaurantIdController = require("../restaurantsControllers/getRestaurantIdController");


const getIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurantData = await getRestaurantIdController(id);
        res.status(200).json(restaurantData);
    } catch (error) {
        console.log(error.messaje);
        res.status(400).json({ error: error.message })
    }
}

module.exports = getIdHandler;