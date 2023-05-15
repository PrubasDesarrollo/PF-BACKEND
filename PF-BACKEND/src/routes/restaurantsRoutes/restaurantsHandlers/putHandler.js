const {putRestaurantsData, putRestaurantsTables, putRestaurantsMenu} = require("../restaurantsControllers/putRestaurantController");


const handlerPutData = async (req, res) => {
    try {
        const { id } = req.params
        const { firebaseUrl } = req.file ? req.file : "";
        let data = req.body;
        let validator;
        for(bandera in data){
            validator = bandera;
        }
        let restaurant;

        for(virula in data){
            if(virula == "table") restaurant = await putRestaurantsTables(id, data.table);
            if(virula == "menu") restaurant = await putRestaurantsMenu(id, data.menu);
            if(virula != "table" && virula != "menu"){
                restaurant = await putRestaurantsData(id, data, firebaseUrl);
            }
        }
        
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;