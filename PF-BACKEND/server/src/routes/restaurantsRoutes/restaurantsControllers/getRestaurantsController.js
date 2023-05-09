const restaurants = require("../../../db/models/Restaurants");
// const union = require("../unionRestaurantPosts");

const getRestaurants = async () => {
    const datos = await restaurants.find().populate({
        path:'tables',
        model:'tables',
        match: { users: { $exist:true } },
        options: { optoinal:true }
    })
    return datos;
}

module.exports = getRestaurants;