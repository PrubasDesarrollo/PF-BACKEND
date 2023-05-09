const deleteRestaurantController = require("../restaurantsControllers/deleteRestaurantController");

const handlerDeleteData = async (req, res) => {
    try {
        const { id } = req.params
        const restaurant = await deleteRestaurantController(id);
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerDeleteData;