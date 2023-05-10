const restaurants = require("../../../db/models/Restaurants");
const tables = require("../../../db/models/Tables");

const getRestaurantIdController = async (id) => {
    const tablesData = await tables.find();
    const data = await restaurants.find({_id: id}).populate('table').exec();
    return data.shift();
}

module.exports = getRestaurantIdController;