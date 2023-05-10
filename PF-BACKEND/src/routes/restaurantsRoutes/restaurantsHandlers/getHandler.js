const getRestaurantsController = require("../restaurantsControllers/getRestaurantsController");

const handlerGetData = async (req, res) => {
    try {
        const restaurants = await getRestaurantsController();
        res.status(200).json({ restaurants });
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerGetData;
