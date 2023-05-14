const restaurants = require("../../../db/models/Restaurants");
const parsId = require("../../../utils/parseId");

const putRestaurantsTables = (id, restaurantData) => {
    const idTable = parsId(id);
    return restaurants.findByIdAndUpdate(idTable, { $addToSet: {table: restaurantData} });
}

const putRestaurantsData = (id, restaurantData) => {
    const idTable = parsId(id);
    return restaurants.findByIdAndUpdate(idTable, restaurantData);
}


module.exports = {
    putRestaurantsData,
    putRestaurantsTables
};