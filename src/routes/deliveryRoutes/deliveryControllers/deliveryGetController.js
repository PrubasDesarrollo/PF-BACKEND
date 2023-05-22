const restaurants = require("../../../db/models/Restaurants")
const delivery = require("../../../db/models/Delivery")
const users = require("../../../db/models/Users")


const deliveryGetController = async () =>{
    const usersData = users.find();
    const restaurantsData = restaurants.find();

    return (await delivery.find().populate('customer').populate('restaurant').exec()).pop();

}

module.exports = deliveryGetController;