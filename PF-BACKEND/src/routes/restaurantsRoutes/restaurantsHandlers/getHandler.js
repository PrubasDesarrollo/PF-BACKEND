const {getRestaurants, getRestaurantsRating} = require("../restaurantsControllers/getRestaurantsController");
const modelateData = require("../../../utils/modelateData")

const handlerGetData = async (req, res) => {
    try {
        const {page, order} = req.query
        let restaurants;
        if(!order){
            restaurants = await getRestaurants();
        }else{
            restaurants = await getRestaurantsRating(order);
        }
        let info = modelateData(page,restaurants)
        res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerGetData;
