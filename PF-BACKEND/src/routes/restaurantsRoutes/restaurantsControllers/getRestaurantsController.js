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
    }
    if(order == "alphaasc"){
        return restaurantRatings.sort((a, b) => a.name - b.name)
    }
    if(order == "ratingdesc"){
        return restaurantRatings.sort((a, b) => Number(b.rating) - Number(a.rating))
    }
    if(order == "ratingasc"){
        return restaurantRatings.sort((a, b) => Number(a.rating) - Number(b.rating))
    }
}

const mapDataRating = (data) => {
    const mapData = data.map((restaurant) => {
        return{
            _id: restaurant._id,
            name: restaurant.name,
            type_customer: restaurant.type_customer,
            valoraciones: restaurant.valoraciones ? restaurant.valoraciones : [0],
            rating: averageGrades(restaurant.valoraciones),
            city: restaurant.city,
            address: restaurant.address,
            country: restaurant.country,
            phoneNumber: restaurant.phoneNumber,
            tags: restaurant.tags,
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