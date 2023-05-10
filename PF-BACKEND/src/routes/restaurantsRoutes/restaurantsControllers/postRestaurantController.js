const restaurants = require("../../../db/models/Restaurants");

const postRestaurants = (restaurantData) => {
    return restaurants.create(restaurantData);
}

module.exports = postRestaurants;