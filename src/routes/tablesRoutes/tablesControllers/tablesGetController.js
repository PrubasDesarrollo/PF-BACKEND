const tables = require("../../../db/models/Tables");
const restaurants = require("../../../db/models/Restaurants");
const users = require("../../../db/models/Users");

const tablesGetController = async () =>{
    const usersData = users.find();
    const restaurantsData = restaurants.find();

    return await tables.find().populate('diners').populate('restaurant').exec();
}

module.exports = tablesGetController;
