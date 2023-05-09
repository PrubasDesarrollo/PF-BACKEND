const restaurants = require("../../../db/models/Restaurants");

const putRestaurants = (id, restaurantData) => {
    return restaurants.updateOne({ _id: id }, restaurantData);
}

module.exports = putRestaurants;