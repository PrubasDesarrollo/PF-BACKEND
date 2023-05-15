const restaurants = require("../../../db/models/Restaurants");
const tables = require("../../../db/models/Tables");
const parseId = require("../../../utils/parseId");
const averageGrades = require('../../../utils/averageGrades')

const modelateData = (data) => {
    const restaurant = {
        name: data.name,
        type_customer: data.type_customer,
        rating: averageGrades(data.valoraciones),
        city: data.city,
        address: data.address,
        country: data.country,
        image: data.image,
        phoneNumber: data.phoneNumber,
        tags: data.tags
    };
    return restaurant;
}

const getRestaurantIdController = async (id) => {
    const idParsed = parseId(id)
    const tablesData = await tables.find();
    const data = await restaurants.find({_id: idParsed}).populate('table').exec();
    data = data.shift()
    return modelateData(data)
}

module.exports = getRestaurantIdController;