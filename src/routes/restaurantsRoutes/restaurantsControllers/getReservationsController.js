const parseId = require("../../../utils/parseId");
const restaurants = require("../../../db/models/Restaurants");
const users = require("../../../db/models/Users");

const getReservationsController = async (id) => {
  const idParsed = parseId(id);
  const usersData = await users.find();

  const reservations = await restaurants
    .find({ _id: idParsed }, { reservations: 1 })
    .populate({ path: "reservations", select: "nombre" })
    .exec();

  return reservations.shift();
};

module.exports = getReservationsController;
