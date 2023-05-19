const deleteRestaurantController = require("../restaurantsControllers/deleteRestaurantController");

const handlerDeleteData = async (req, res) => {
    try {
        const { id } = req.params
        const {_id, isAdmin} = req.user;
        if(id==_id || isAdmin){
            const restaurant = await deleteRestaurantController(id);
            res.status(200).json({ restaurant });
        }
        else{throw new Error("You can't modify this restaurant")}
    } catch (error) {
        console.log(error);
    }
}

module.exports = handlerDeleteData;