const restaurants = require("../../../db/models/Restaurants");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const sendEmail = require('../../../utils/configEmailer')
const { TOKEN_KEY } = process.env

const postRestaurants = async(restaurantData, firebaseUrl) => {
    const restaurant = {
        name: restaurantData.name,
        type_customer: restaurantData.type_customer,
        description: restaurantData.description,
        image: firebaseUrl,
        tags: [...restaurantData.tags],
        city: restaurantData.city,
        address: restaurantData.address,
        country: restaurantData.country,
        phoneNumber: restaurantData.phoneNumber,
        menu: restaurantData.menu,
        table: restaurantData.table,
        email: restaurantData.email
    };
    let informacionRestaurant = await restaurants.create(restaurant);
    const token = jwt.sign(
        {
            _id: informacionRestaurant._id, 
            email: informacionRestaurant.email,
            type_customer: informacionRestaurant.type_customer,
        },
        TOKEN_KEY,
        {
            expiresIn: "7d" 
        }
    )
    let infoRestaurants = {
        name: informacionRestaurant.name,
        type_customer: informacionRestaurant.type_customer,
        description: informacionRestaurant.description,
        image: informacionRestaurant.image,
        tags: informacionRestaurant.tags,
        city: informacionRestaurant.city,
        address: informacionRestaurant.address,
        country: informacionRestaurant.country,
        phoneNumber: informacionRestaurant.phoneNumber,
        valoraciones: informacionRestaurant.valoraciones,
        rating: informacionRestaurant.rating,
        menu: informacionRestaurant.menu,
        table: informacionRestaurant.table,
        token: token,
        id: informacionRestaurant._id,
        email: informacionRestaurant.email
    }
    await sendEmail(restaurantData.email);
    return infoRestaurants;
}

module.exports = postRestaurants;