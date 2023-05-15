const {putRestaurantsData, putRestaurantsTables, putRestaurantsMenu, putRestaurantsValoraciones} = require("../restaurantsControllers/putRestaurantController");


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
            else if(virula == "menu") restaurant = await putRestaurantsMenu(id, data.menu);
            else if(virula == "valoraciones") restaurant = await putRestaurantsValoraciones(id, data.valoraciones);
            else{
                restaurant = await putRestaurantsData(id, data, firebaseUrl);
            }
        }
        
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;