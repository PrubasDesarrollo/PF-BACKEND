const {getRestaurants, getRestaurantsRating, filterByTag, filterByCountry,filterByName, filterByEmail, filterByCity} = require("../restaurantsControllers/getRestaurantsController");
const modelateData = require("../../../utils/modelateData")

const handlerGetData = async (req, res) => {
    try {
        const {page, order, tag, country, name, email} = req.query;
        if(email){
            let restaurant = await filterByEmail(email);
            res.status(200).json(restaurant);
        }else{
        let restaurants;
        if(!order){
            restaurants = await getRestaurants();
        }else{
            restaurants = await getRestaurantsRating(order);
        }
        if(name){
            let filterName = filterByName(name, restaurants);
            restaurants = filterName
        }
        if(country){
            restaurants = filterByCountry(country, restaurants);
        }
        if(city){
            restaurants = filterByCity(city, restaurants);
        }
        if(tag){
            let filterByTags = filterByTag(tag, restaurants);
            restaurants = filterByTags;
        }

        let info = modelateData(page || 1,restaurants)
        res.status(200).json(info);}
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = handlerGetData;
