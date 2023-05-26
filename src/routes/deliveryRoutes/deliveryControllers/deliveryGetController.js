const restaurants = require("../../../db/models/Restaurants")
const delivery = require("../../../db/models/Delivery")
const users = require("../../../db/models/Users")
const posts = require("../../../db/models/Posts");

const deliveryGetController = async () =>{
    const usersData = users.find();
    const restaurantsData = restaurants.find();
    const postData = posts.find();

    return (await delivery.find().populate('customer').populate('c_order').populate('restaurant').exec());

}

module.exports = deliveryGetController;