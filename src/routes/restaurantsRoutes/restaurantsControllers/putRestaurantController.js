const restaurants = require("../../../db/models/Restaurants");
const parsId = require("../../../utils/parseId");
const calculateCapacity = require("../../../utils/calculateCapacity");

const putRestaurantsReservations = async (id, reservation) => {
  const idParsed = parsId(id);

  const miResto = await restaurants.findOne({ _id: idParsed });

  const reservasPrevias = miResto.reservations ? miResto.reservations : [];

  const capacity = miResto.capacity;

  const guardar = await calculateCapacity(capacity, reservasPrevias, reservation, idParsed);

  return await restaurants.findByIdAndUpdate(idParsed, {
    $addToSet: { reservations: guardar },
  });
};

const putRestaurantsMenu = async (id, restaurantData) => {
  const idMenu = parsId(id);
  return await restaurants.findByIdAndUpdate(idMenu, {
    $addToSet: { menu: restaurantData },
  });
};

const putRestaurantsValoraciones = async (id, valoraciones) => {
  const idUser = parsId(id);

  return await restaurants.findByIdAndUpdate(idUser, {
    $push: { valoraciones: valoraciones },
  });
};

const controllerPutDataImages = async (id, firebaseUrls) => {
  const idRestaurant = parsId(id);
  return await restaurants.findOneAndUpdate(idRestaurant, {
    $push: { images: firebaseUrls },
  });
};

const putRestaurantTransactions = async (id, transaction) => {
  const idParsed = parsId(id);
  const { userId, ordered, cost, createdAt } = transaction;
  const transactionData = {
    user: parsId(userId),
    order: ordered.map((order) => parsId(order)),
    cost: cost,
    date: createdAt,
  };
  return await restaurants.findByIdAndUpdate(idParsed, {
    $push: { transactions: transactionData },
  });
};

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
    capacity: restaurantData.capacity,
    isActive: restaurantData.isActive,
    $addToSet: { tags: restaurantData.tags },
    $push: { image: restaurantData.image },
  });
};

module.exports = {
  putRestaurantsData,
  putRestaurantsReservations,
  putRestaurantsMenu,
  putRestaurantsValoraciones,
  putRestaurantTransactions,
  controllerPutDataImages,
};
