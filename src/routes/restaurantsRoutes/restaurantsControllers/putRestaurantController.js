const restaurants = require("../../../db/models/Restaurants");
const parsId = require("../../../utils/parseId");

const putRestaurantsTables = async (id, restaurantData) => {
    const idTable = parsId(id);
    return await restaurants.findByIdAndUpdate(idTable, { $addToSet: {table: restaurantData} });
}

const putRestaurantsMenu = async (id, restaurantData) => {
    const idMenu = parsId(id);
    return await restaurants.findByIdAndUpdate(idMenu, { $addToSet: {menu: restaurantData} });
}

const putRestaurantsValoraciones = async (id,valoraciones) =>{
    const idUser = parsId(id);

    return await restaurants.findByIdAndUpdate(idUser, {$push: {valoraciones: valoraciones}})
}

const putRestaurantsTransaction = async (id, transaction) =>{
    const idResto = parsId(id);
    return await restaurants.findByIdAndUpdate(idResto, {$push: {transactions: transaction} })
}

const putRestaurantsData = async (id, restaurantData, firebaseUrl) => {
    const idTable = parsId(id);
    return await restaurants.findByIdAndUpdate(idTable, {
        name: restaurantData.name,
        type_customer: restaurantData.type_customer,
        rating: restaurantData.rating,
        city: restaurantData.city,
        address: restaurantData.address,
        email: restaurantData.email,
        country: restaurantData.country,
        description: restaurantData.description,
        image: firebaseUrl,
        phoneNumber: restaurantData.phoneNumber,
        isActive: restaurantData.isActive,
        $addToSet:{tags: restaurantData.tags},
        $push:{image: restaurantData.image}
    });
}


module.exports = {
    putRestaurantsData,
    putRestaurantsTables,
    putRestaurantsMenu,
    putRestaurantsValoraciones,
    putRestaurantsTransaction
};