const putRestaurantController = require("../restaurantsControllers/putRestaurantController");


const handlerPutData = async (req, res) => {
    try {
        const { id } = req.params
        const { table } = req.body

        const restaurant = await putRestaurantController(id, table);
        res.status(200).json({ restaurant });
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerPutData;