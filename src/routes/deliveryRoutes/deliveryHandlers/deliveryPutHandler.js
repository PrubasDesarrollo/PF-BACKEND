const {deliveryPutController, deliveryPutOrder, deliveryRemoveOrder} = require("../deliveryControllers/deliveryPutController")


const deliveryPutHandler = async (req, res) =>{
    try {
        const {id} = req.params;
        const {data} = req.body;
        const {action} = req.query;

        let actualizar;
        for(virula in data){
            if(virula == "c_order"){
                const { c_order } = req.body;
                if(action === "add"){
                actualizar = await deliveryPutOrder(id, c_order);
                }else if(action === "remove"){
                actualizar = await deliveryRemoveOrder(id, c_order);
            }else return "Acción inválida"
        
        
        
            }else{
                actualizar = await deliveryPutController(id, data);
            }
        }
        res.status(200).json(actualizar);

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = deliveryPutHandler;