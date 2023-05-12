const restaurants = require("../../../db/models/Restaurants");
const tables = require("../../../db/models/Tables");
const parseId = require("../../../utils/parseId");

const getRestaurantIdController = async (id) => {
    const idParsed = parseId(id)
    const tablesData = await tables.find();
    const data = await restaurants.find({_id: idParsed}).populate('table').exec();
    return data.shift();
}

module.exports = getRestaurantIdController;