const getReservationsController = require("../restaurantsControllers/getReservationsController");

const handlerGetReservations = async (req, res) => {
  try {
    const { id } = req.params;
    const reservationsData = await getReservationsController(id);
    res.status(200).json(reservationsData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetReservations;
