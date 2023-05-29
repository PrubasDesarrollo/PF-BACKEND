const users = require('../../../db/models/Users');
const restaurants = require('../../../db/models/Restaurants')

const putControllerAdmin = async(id, type_customer, isActive) =>{
    if (type_customer === "User"){
        const user = users.findByIdAndUpdate(id, {isActive:isActive})
        return user
    }
    if (type_customer === "Restaurante"){
        const restaurant = restaurants.findByIdAndUpdate(id, {isActive:isActive})
        return restaurant
    }
}

module.exports = putControllerAdmin;