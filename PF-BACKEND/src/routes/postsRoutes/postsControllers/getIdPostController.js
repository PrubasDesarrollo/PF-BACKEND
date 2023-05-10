const tables = require("../../../db/models/Tables");
const users = require("../../../db/models/Users");
const restaurants = require("../../../db/models/Restaurants");
const parseId = require("../../../utils/parseId")

const getIdPostController = async (id) => {
    const user = users.find();
    const restaurant = restaurants.find();
    const idParse = parseId(id)
    const data = await tables.find({_id: id}).populate('authorUser').populate('authorRest').exec();
    return data.shift();
}

module.exports = getIdPostController;
