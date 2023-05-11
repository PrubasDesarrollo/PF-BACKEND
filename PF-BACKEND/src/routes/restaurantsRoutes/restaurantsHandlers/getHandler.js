const {getRestaurants, getRestaurantsRating} = require("../restaurantsControllers/getRestaurantsController");
const modelateData = require("../../../utils/modelateData")

const handlerGetData = async (req, res) => {
    try {
        const {page, rating} = req.query
        let restaurants;
        if(!rating){
            restaurants = await getRestaurants();
        }else{
            restaurants = await getRestaurantsRating(rating);
        }
        let info = modelateData(page,restaurants)
        res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerGetData;
