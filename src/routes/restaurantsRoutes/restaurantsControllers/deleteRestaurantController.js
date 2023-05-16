const restaurants = require("../../../db/models/Restaurants");

const deleteRestaurants = (id) => {
    return restaurants.deleteOne({ _id: id });
}

module.exports = deleteRestaurants;