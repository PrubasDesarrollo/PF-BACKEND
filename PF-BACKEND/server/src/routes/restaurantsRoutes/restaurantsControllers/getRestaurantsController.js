const restaurants = require("../../../db/models/Restaurants");
// const union = require("../unionRestaurantPosts");
const tables = require("../../../db/models/Tables");

const getRestaurants = async () => {
    const tablesData = await tables.find();
    const data = await restaurants.find().populate('table').exec();
    return data;
}

module.exports = getRestaurants;