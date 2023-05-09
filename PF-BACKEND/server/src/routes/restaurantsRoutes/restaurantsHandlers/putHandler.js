const putRestaurantController = require("../restaurantsControllers/putRestaurantController");

const handlerPutData = async (req, res) => {
    try {
        const { id } = req.params
        const restaurantData = req.body
        const restaurant = await putRestaurantController(id, restaurantData);
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerPutData;