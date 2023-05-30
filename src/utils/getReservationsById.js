const parseId = require("./parseId");
const restaurants = require("../db/models/Restaurants");
const users = require("../db/models/Users");

const getReservationsById = async (id) =>{
    const idParsed = parseId(id);
    const usersData = await users.find();

    const reservation = await restaurants.find({_id: idParsed}, {"reservations":1})
                                         .populate({path: "reservations", populate: {path: "userId"}})
                                         .exec();

    return reservation;
}

module.exports = getReservationsById;