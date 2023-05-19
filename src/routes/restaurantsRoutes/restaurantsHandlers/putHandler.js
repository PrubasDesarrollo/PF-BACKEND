const {putRestaurantsData, putRestaurantsTables, putRestaurantsMenu, putRestaurantsValoraciones} = require("../restaurantsControllers/putRestaurantController");


const handlerPutData = async (req, res) => {
    try {
        const { id } = req.params
        const {_id, isAdmin} = req.user;
        if(id==_id || isAdmin){
        const { firebaseUrl } = req.file ? req.file : "";
        let data = req.body;
        let validator;
        for(bandera in data){
            validator = bandera;
        }
        let restaurant;

        for(virula in data){
            if(virula == "table"){
                const { table } = req.body;
                restaurant = await putRestaurantsTables(id, table);
            }
            else if(virula == "menu") {
                const { menu } = req.body;
                restaurant = await putRestaurantsMenu(id, menu);
            }
            else if(virula == "valoraciones"){
                const { valoraciones } = req.body;
                restaurant = await putRestaurantsValoraciones(id, valoraciones);
            }
            else{
                restaurant = await putRestaurantsData(id, data, firebaseUrl);
            }
        }
        
        res.status(200).json({ restaurant });
    }
    else{throw new Error("You can't modify this restaurant")}
    } catch (error) {
        res.status(400).json({error: err.message})
    }
}

module.exports = handlerPutData;