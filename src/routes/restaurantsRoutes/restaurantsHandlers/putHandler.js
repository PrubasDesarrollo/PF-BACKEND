const {
  putRestaurantsData,
  putRestaurantsReservations,
  putRestaurantsMenu,
  putRestaurantsValoraciones,
  putRestaurantTransactions,
  controllerPutDataImages,
} = require("../restaurantsControllers/putRestaurantController");

const handlerPutData = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id, isAdmin } = req.user;
    if (id == _id || isAdmin) {
      let firebaseUrls;
      if (req.files) {
        firebaseUrls = req.files.map((file) => file.firebaseUrl);
      }

      let data = req.body;
      data.image = "image";
      data.galleta = "galleta";
      let validator;
      for (bandera in data) {
        validator = bandera;
      }
      let restaurant;
      for (virula in data) {
        if (virula == "reservation") {
          const { reservation } = req.body;
          restaurant = await putRestaurantsReservations(id, reservation);
        }
        if (virula == "menu") {
          const { menu } = req.body;
          restaurant = await putRestaurantsMenu(id, menu);
        }
        if (virula == "transaction") {
          const { transaction } = req.body;
          restaurant = await putRestaurantTransactions(id, transaction);
        }
        if (virula == "valoraciones") {
          const { valoraciones } = req.body;
          restaurant = await putRestaurantsValoraciones(id, valoraciones);
        }
        if (virula === "image") {
          user = await controllerPutDataImages(id, firebaseUrls);
        } else {
          restaurant = await putRestaurantsData(id, data);
        }
      }

      res.status(200).json({ restaurant });
    } else {
      throw new Error("You can't modify this restaurant");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutData;
// module.exports = handlerPutData;
