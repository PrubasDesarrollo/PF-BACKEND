const restaurants = require("../../../db/models/Restaurants");
const banned = require('../../../db/models/Banned')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const sendEmail = require('../../../utils/configEmailer')
const { TOKEN_KEY } = process.env

const postRestaurants = async(restaurantData, firebaseUrls) => {
    let validate = await banned.find({'user_banned.email':restaurantData.email})
    if (validate.length!==0){throw new Error('ususario baneado')}
    const restaurant = {
        name: restaurantData.name,
        type_customer: restaurantData.type_customer,
        description: restaurantData.description,
        images: firebaseUrls,
        tags: [...restaurantData.tags],
        city: restaurantData.city,
        address: restaurantData.address,
        country: restaurantData.country,
        phoneNumber: restaurantData.phoneNumber,
        capacity: restaurantData.capacity,
        valoraciones: restaurantData.valoraciones,
        rating: restaurantData.rating,
        menu: restaurantData.menu,
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
        images: informacionRestaurant.images,
        tags: informacionRestaurant.tags,
        city: informacionRestaurant.city,
        address: informacionRestaurant.address,
        country: informacionRestaurant.country,
        phoneNumber: informacionRestaurant.phoneNumber,
        capacity: informacionRestaurant.capacity,
        valoraciones: informacionRestaurant.valoraciones,
        rating: informacionRestaurant.rating,
        menu: informacionRestaurant.menu,
        token: token,
        id: informacionRestaurant._id,
        email: informacionRestaurant.email
    }
    await sendEmail(restaurantData.email);
    return infoRestaurants;
}

module.exports = postRestaurants;
