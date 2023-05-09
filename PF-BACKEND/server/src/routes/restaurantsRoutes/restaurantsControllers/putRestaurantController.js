const restaurants = require("../../../db/models/Restaurants");
const parsId = require("../../../utils/parseId");

const putRestaurants = (id, restaurantData) => {
    const idTable = parsId(id);
    return restaurants.findByIdAndUpdate(idTable, { $push: {table: restaurantData} });
}

module.exports = putRestaurants;