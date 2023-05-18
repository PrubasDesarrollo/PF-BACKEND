const {getRestaurants, getRestaurantsRating, filterByTag, filterByCountry,filterByName, filterByEmail} = require("../restaurantsControllers/getRestaurantsController");
const modelateData = require("../../../utils/modelateData")

const handlerGetData = async (req, res) => {
    try {
        const {page, order, tag, country, name, email} = req.query;
        let restaurants;
        if(!order){
            restaurants = await getRestaurants();
        }else{
            restaurants = await getRestaurantsRating(order);
        }
        if(email){
            let filterEmail = filterByEmail(email);
            restaurants = filterEmail
        }
        if(name){
            let filterName = filterByName(name, restaurants);
            restaurants = filterName
        }
        if(country){
            restaurants = filterByCountry(country, restaurants);
        }
        if(tag){
            let filterByTags = filterByTag(tag, restaurants);
            restaurants = filterByTags;
        }
        
        let info = modelateData(page || 1,restaurants)
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = handlerGetData;
