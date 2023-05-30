const postRestaurantsController = require("../restaurantsControllers/postRestaurantController");

const handlerPostData = async (req, res) => {
  try {
    const { password } = req.query;
    const restaurantData = req.body;
    const firebaseUrls = req.files.map((file) => file.firebaseUrl);
    const restaurant = await postRestaurantsController(
      restaurantData,
      firebaseUrls,
      password
    );
    res.status(200).json({ restaurant });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostData;
