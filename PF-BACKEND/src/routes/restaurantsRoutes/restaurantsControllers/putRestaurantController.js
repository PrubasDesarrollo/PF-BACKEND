const restaurants = require("../../../db/models/Restaurants");
const parsId = require("../../../utils/parseId");

const putRestaurantsTables = (id, restaurantData) => {
    const idTable = parsId(id);
    return restaurants.findByIdAndUpdate(idTable, { $addToSet: {table: restaurantData} });
}

const putRestaurantsMenu = (id, restaurantData) => {
    const idMenu = parsId(id);
    return restaurants.findByIdAndUpdate(idMenu, { $addToSet: {menu: restaurantData} });
}

const putRestaurantsValoraciones = (_id,valoraciones) =>{
    const idUser = parseId(_id);

    return restaurants.findOneAndUpdate(idUser, {$push: {valoraciones: valoraciones}})
}

const putRestaurantsData = (id, restaurantData, firebaseUrl) => {
    const idTable = parsId(id);
    return restaurants.findByIdAndUpdate(idTable, {
        name: restaurantData.name,
        type_customer: restaurantData.type_customer,
        rating: restaurantData.rating,
        city: restaurantData.city,
        address: restaurantData.address,
        country: restaurantData.country,
        image: firebaseUrl,
        phoneNumber: restaurantData.phoneNumber,
        $push:{valoraciones: restaurantData.valoraciones},
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