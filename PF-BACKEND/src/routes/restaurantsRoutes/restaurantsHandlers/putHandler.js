const {putRestaurantsData, putRestaurantsTables, putRestaurantsMenu} = require("../restaurantsControllers/putRestaurantController");


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
        else if (validator == "menu") restaurant = await putRestaurantsMenu(id, data.menu);
        else{
            restaurant = await putRestaurantsData(id, data);
        }
        console.log(restaurant);
        
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;