const restaurants = require("../../../db/models/Restaurants");
// const union = require("../unionRestaurantPosts");
const tables = require("../../../db/models/Tables");
const averageGrades = require("../../../utils/averageGrades");

const getRestaurants = async () => {
    const tablesData = await tables.find();
    const data = await restaurants.find().populate('table').exec();
    return data;
}

const getRestaurantsRating = async (rating) => {
    const tablesData = await tables.find();
    const data = await restaurants.find().populate('table').exec();
    const restaurantRatings = await mapDataRating(data);
    if(rating == "desc"){
        return restaurantRatings.sort((a, b) => b.rating - a.rating)
    }else if(rating == "asc"){
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