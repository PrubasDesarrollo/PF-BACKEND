const restaurants = require("../../../db/models/Restaurants");
// const union = require("../unionRestaurantPosts");
const tables = require("../../../db/models/Tables");
const averageGrades = require("../../../utils/averageGrades");

const getRestaurants = async () => {
    const tablesData = await tables.find();
    const data = await restaurants.find().sort({name:-1}).populate('table').exec();
    const restaurantRatings = await mapDataRating(data);

    return restaurantRatings.sort((a, b) => b.rating - a.rating)
}

const getRestaurantsRating = async (order) => {
    const tablesData = await tables.find();
    const data = await restaurants.find().sort({name:-1}).populate('table').exec();
    const restaurantRatings = await mapDataRating(data);
    if(order == "alphadesc"){
        return restaurantRatings.sort((a, b) => b.name - a.name)
    }else if(order == "alphaasc"){
        return restaurantRatings.sort((a, b) => a.name - b.name)
    }else if(order == "ratingdesc"){
        return restaurantRatings.sort((a, b) => a.rating - b.rating)
    }else if(order == "ratingasc"){
        return restaurantRatings.sort((a, b) => a.rating - b.rating)
    }
}

const mapDataRating = async (data) => {
    const mapData = data.map((restaurant) => {
        return{
            name: restaurant.name,
            type_customer: restaurant.type_customer,
            valoraciones: restaurant.valoraciones ? restaurant.valoraciones : [0],
            rating: averageGrades(restaurant.valoraciones),
            menu: restaurant.menu,
            table: restaurant.table,
        }
    });
    return mapData;
}

module.exports ={
    getRestaurants,
    getRestaurantsRating
};