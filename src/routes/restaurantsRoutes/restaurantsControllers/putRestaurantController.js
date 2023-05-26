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

const putRestaurantTransactions = async (id, transaction) =>{
    const idParsed = parsId(id);
    const { user, ordered, cost, createdAt } = transaction;
    const transactionData = {
        userId: parsId(user),
        order: parsId(ordered),
        cost: cost,
        date, createdAt
    }
    return await restaurants.findByIdAndUpdate(idParsed, {$push: {transactions: transactionData}});
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
    putRestaurantsValoraciones
};