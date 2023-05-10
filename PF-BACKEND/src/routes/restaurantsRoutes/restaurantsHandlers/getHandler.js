const getRestaurantsController = require("../restaurantsControllers/getRestaurantsController");
const modelateData = require("../../../utils/modelateData")

const handlerGetData = async (req, res) => {
    try {
        const {page} = req.query
        const restaurants = await getRestaurantsController();
        let info = modelateData(page,restaurants) 
        res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerGetData;
