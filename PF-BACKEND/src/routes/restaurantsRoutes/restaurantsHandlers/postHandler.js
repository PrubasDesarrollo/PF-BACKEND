const postRestaurantsController = require("../restaurantsControllers/postRestaurantController");

const handlerPostData = async (req, res) => {
    try {
        const restaurantData = req.body;
        const restaurant = await postRestaurantsController(restaurantData);
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerPostData;