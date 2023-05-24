const restaurants = require("../../../db/models/Restaurants");
const tables = require("../../../db/models/Tables");
const parseId = require("../../../utils/parseId");
const averageGrades = require('../../../utils/averageGrades')

const modelateData = (data) => {
    const restaurant = {
        name: data.name,
        type_customer: data.type_customer,
        description: data.description,
        rating: averageGrades(data.valoraciones),
        city: data.city,
        address: data.address,
        country: data.country,
        image: data.image,
        phoneNumber: data.phoneNumber,
        tags: data.tags,
        menu: data.menu,
        email: data.email,
        isActive: data.isActive
    };
    return restaurant;
}

const origetRestaurantIdController = async (id) => {
    const idParsed = parseId(id)
    const tablesData = await tables.find();
    let data = await restaurants.find({_id: idParsed}).populate('table').exec();
    data = data.shift()
    return modelateData(data)
}

module.exports = getRestaurantIdController;