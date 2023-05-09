const restaurants = require("../../../db/models/Restaurants");
// const union = require("../unionRestaurantPosts");
const tables = require("../../../db/models/Tables");

const getRestaurants = () => {
    const tablesData = tables.find();
    return restaurants.find().populate('table').exec();
}

module.exports = getRestaurants;