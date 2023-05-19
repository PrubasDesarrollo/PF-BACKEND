const postRestaurantsController = require("../restaurantsControllers/postRestaurantController");

const handlerPostData = async (req, res) => {
    try {
        const {password} = req.query
        const restaurantData = req.body;
        const { firebaseUrl } = req.file ? req.file : "";
        const restaurant = await postRestaurantsController(restaurantData, firebaseUrl, password);
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerPostData;