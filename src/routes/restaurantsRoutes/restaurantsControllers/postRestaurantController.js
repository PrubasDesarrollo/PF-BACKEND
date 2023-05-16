const restaurants = require("../../../db/models/Restaurants");

const postRestaurants = (restaurantData, firebaseUrl) => {
    const restaurant = {
        name: restaurantData.name,
        type_customer: restaurantData.type_customer,
        description: restaurantData.description,
        image: firebaseUrl,
        tags: restaurantData.tags,
        city: restaurantData.city,
        address: restaurantData.address,
        country: restaurantData.country,
        phoneNumber: restaurantData.phoneNumber,
        valoraciones: restaurantData.valoraciones,
        rating: restaurantData.rating,
        menu: restaurantData.menu,
        table: restaurantData.table
    };
    return restaurants.create(restaurant);
}

module.exports = postRestaurants;