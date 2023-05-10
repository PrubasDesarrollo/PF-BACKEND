const {putRestaurantsData, putRestaurantsTables} = require("../restaurantsControllers/putRestaurantController");


const handlerPutData = async (req, res) => {
    try {
        const { id } = req.params
        let data = req.body;
        let validator;
        for(bandera in data){
            validator = bandera;
        }
        let restaurant;
        if(validator == "table") restaurant = await putRestaurantsTables(id, data.table);
        else restaurant = await putRestaurantsData(id, data);
        
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;